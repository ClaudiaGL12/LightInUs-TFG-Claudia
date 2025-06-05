<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plan;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Exception;

class PlanController extends Controller
{
    public function store(Request $request, $userid){
        try {
            if ((int)$request->user()->id !== (int)$userid) {
                return response()->json(['error' => 'No autorizado.'], Response::HTTP_FORBIDDEN);
            }

            $request->validate([
                'form_result' => 'required|string',
                'name' => 'nullable|string|max:255',
            ]);

            $user = User::findOrFail($userid);

            // Limitar a 3 planes por usuario
            if ($user->plans()->count() >= 3) {
                return response()->json([
                    'errors' => 'Solo puedes tener un máximo de 3 planes personalizados.'
                ], Response::HTTP_FORBIDDEN);
            }

            // Prompt dirigido a Gemini actuando como psicólogo empático
            $prompt = <<<EOT
                Actúas como un psicólogo profesional que ayuda con orientación en salud mental y emocional.

                Recibes los siguientes resultados de un formulario rellenado por un usuario:
                "{$request->form_result}"

                Tu tarea es:
                1. Explicar brevemente qué podría estar experimentando el usuario basándote en los resultados.
                2. Mencionar posibles situaciones cotidianas relacionadas con esos síntomas o estados.
                3. Sugerir herramientas, técnicas o hábitos útiles para mejorar el bienestar emocional.
                4. Solo puedes recomendar asistir a terapia con un profesional de la salud mental si lo consideras necesario.
                5. No puedes recetar medicación ni dar diagnósticos clínicos.
                6. Tu respuesta debe ser empática, clara y en tono humano, sin usar lenguaje médico técnico.

                Redacta todo como si hablaras directamente con el usuario, en un párrafo de 5-8 líneas máximo.
                EOT;

            $response = Http::post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" . env('GEMINI_API_KEY'), [
                'contents' => [[
                    'parts' => [[ 'text' => $prompt ]]
                ]]
            ]);

            if ($response->failed()) {
                return response()->json([
                    'errors' => 'Error al contactar con Gemini AI',
                    'body' => $response->json(),
                    'status' => $response->status()
                ], Response::HTTP_BAD_GATEWAY);
            }

            $descripcion = $response->json()['candidates'][0]['content']['parts'][0]['text'] ?? 'No se pudo generar el plan.';

            $plan = Plan::create([
                'name' => $request->input('name', 'Plan personalizado'),
                'description' => $descripcion,
                'user_id' => $user->id,
            ]);

            return response()->json([
                'message' => 'Plan creado correctamente.',
                'plan' => $plan
            ], Response::HTTP_CREATED);

        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al crear el plan.',
                'exception' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function index(Request $request, $userid)
    {
        if ((int)$request->user()->id !== (int)$userid) {
            return response()->json(['error' => 'No autorizado.'], Response::HTTP_FORBIDDEN);
        }

        $user = User::findOrFail($userid);
        $planes = $user->plans()->latest()->get();

        return response()->json([
            'planes' => $planes
        ], Response::HTTP_OK);
    }

    public function show($userid, $id)
    {
        $user = User::findOrFail($userid);
        $plan = $user->plans()->where('id', $id)->first();

        if (! $plan) {
            return response()->json(['error' => 'Plan no encontrado o no autorizado.'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($plan, Response::HTTP_OK);
    }

    public function destroy($userid, $id)
    {
        $user = User::findOrFail($userid);
        $plan = $user->plans()->where('id', $id)->first();

        if (! $plan) {
            return response()->json(['error' => 'Plan no encontrado o no autorizado.'], Response::HTTP_NOT_FOUND);
        }

        $plan->delete();

        return response()->json(['message' => 'Plan eliminado'], Response::HTTP_OK);
    }
}
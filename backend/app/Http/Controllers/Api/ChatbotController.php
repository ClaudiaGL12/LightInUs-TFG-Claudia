<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tema;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Exception;

class ChatbotController extends Controller
{
    //no funciona pq hay q pagar: openia
    // public function recomendarTemas(Request $request)
    // {
    //      try {
    //         $request->validate([
    //             'pregunta' => 'required|string',
    //         ]);

    //         $temas = Tema::select('name', 'description')->get();

    //         if ($temas->isEmpty()) {
    //             return response()->json([
    //                 'errors' => 'No hay temas disponibles para recomendar.'
    //             ], Response::HTTP_NOT_FOUND);
    //         }

    //         $prompt = "Disponemos de los siguientes temas:\n";
    //         foreach ($temas as $tema) {
    //             $prompt .= "- {$tema->name}: {$tema->description}\n";
    //         }

    //         $prompt .= "\nCon base en esta lista, responde a esta pregunta del usuario y sugiere los temas más útiles:\n\"{$request->pregunta}\"";

    //         $openaiResponse = Http::withToken(env('OPENAI_API_KEY'))
    //             ->post('https://api.openai.com/v1/chat/completions', [
    //                 'model' => 'gpt-3.5-turbo',
    //                 'messages' => [
    //                     ['role' => 'system', 'content' => 'Eres un asistente que ayuda a encontrar temas de salud y bienestar.'],
    //                     ['role' => 'user', 'content' => $prompt],
    //                 ],
    //                 'temperature' => 0.5,
    //             ]);

    //         if ($openaiResponse->failed()) {
    //             return response()->json([
    //                 'errors' => 'Error al contactar con el servicio de IA.',
    //                 'detalles' => $openaiResponse->body(),
    //                 'status' => $openaiResponse->status(),
    //                 'body' => $openaiResponse->json(),  
    //             ], Response::HTTP_BAD_GATEWAY);
    //         }

    //         $respuesta = $openaiResponse->json('choices.0.message.content');

    //         return response()->json([
    //             'respuesta' => $respuesta
    //         ], Response::HTTP_OK);

    //     } catch (Exception $e) {
    //         return response()->json([
    //             'errors' => 'Ha ocurrido un error interno.',
    //             'exception' => $e->getMessage()
    //         ], Response::HTTP_INTERNAL_SERVER_ERROR);
    //     }
    // }

    //usando hugging face: tampoco funciona
    // public function recomendarTemas(Request $request)
    // {
    //     try {
    //         $request->validate([
    //             'pregunta' => 'required|string',
    //         ]);

    //         $temas = Tema::select('name', 'description')->get();

    //         if ($temas->isEmpty()) {
    //             return response()->json([
    //                 'errors' => 'No hay temas disponibles para recomendar.'
    //             ], Response::HTTP_NOT_FOUND);
    //         }

    //         $listado = "";
    //         foreach ($temas as $tema) {
    //             $listado .= "- {$tema->name}: {$tema->description}\n";
    //         }

    //         $prompt = <<<EOT
    //             Tengo la siguiente lista de temas:

    //             $listado

    //             La pregunta del usuario es:
    //             "{$request->pregunta}"

    //             Basándote en la lista, recomienda los temas más relevantes y explica brevemente por qué.
    //             EOT;

    //         $response = Http::withToken(env('HUGGINGFACE_API_KEY'))
    //             ->timeout(30)
    //             ->post("https://api-inference.huggingface.co/models/google/flan-t5-base", [
    //                 "inputs" => $prompt
    //             ]);

    //         if ($response->failed()) {
    //             return response()->json([
    //                 'errors' => 'Error al contactar con Hugging Face',
    //                 'body' => $response->json(),
    //                 'detalles' => $response->body(),
    //                 'status' => $response->status(),
    //             ], Response::HTTP_BAD_GATEWAY);
    //         }

    //         $respuesta = $response->json()[0]['generated_text'] ?? 'No se pudo generar respuesta.';

    //         return response()->json([
    //             'respuesta' => $respuesta
    //         ], Response::HTTP_OK);

    //     } catch (\Exception $e) {
    //         return response()->json([
    //             'errors' => 'Error interno.',
    //             'exception' => $e->getMessage()
    //         ], Response::HTTP_INTERNAL_SERVER_ERROR);
    //     }
    // }

    //gemini ia
    public function recomendarTemas(Request $request)
    {
        try {
            $request->validate([
                'pregunta' => 'required|string',
            ]);

            $temas = Tema::select('name', 'description')->get();

            if ($temas->isEmpty()) {
                return response()->json([
                    'errors' => 'No hay temas disponibles para recomendar.'
                ], Response::HTTP_NOT_FOUND);
            }

            $listado = "";
            foreach ($temas as $tema) {
                $listado .= "- {$tema->name}: {$tema->description}\n";
            }

            $prompt = <<<EOT
                Actúas como un asistente empático que ayuda a las personas a encontrar temas útiles sobre salud emocional, mental y bienestar.

                Dispones de esta lista de temas:

                $listado

                Reglas de comportamiento:
                1. Si el mensaje del usuario es un saludo (como "hola", "holi", "buenas"), responde con un saludo cálido y sugiere un tema suave y universal para empezar (como "Meditación Guiada").
                2. Si el usuario agradece o dice algo como "gracias", responde brevemente con un tono amable (ej: "¡De nada! Estoy aquí para ayudarte").
                3. Si el mensaje no tiene sentido o no puedes entenderlo, responde con algo como: "No estoy seguro de entenderte, ¿puedes repetirlo? Estoy aquí para ayudarte a encontrar el mejor tema para ti."
                4. Si el mensaje del usuario contiene una preocupación o búsqueda (ej: "ansiedad", "no puedo dormir", "me siento mal"), recomienda los temas más relevantes y explica brevemente por qué.
                5. Mantén las respuestas breves, cálidas y humanas (1 párrafo como máximo, sin listas detalladas ni análisis largos).

                Pregunta del usuario:
                "{$request->pregunta}"
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

            $respuesta = $response->json()['candidates'][0]['content']['parts'][0]['text'] ?? 'No se pudo generar respuesta.';

            return response()->json([
                'respuesta' => $respuesta
            ], Response::HTTP_OK);

        } catch (\Exception $e) {
            return response()->json([
                'errors' => 'Error interno.',
                'exception' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profesional;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Exception;

class ProfesionalController extends Controller
{
    // Listar todos los profesionales
    public function index()
    {
        try {
            $profs = Profesional::all();

            if ($profs->isEmpty()) {
                return response()->json([
                    'errors' => 'No hay profesionales disponibles'
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'profesionales' => $profs
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al obtener los profesionales'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Crear un profesional (esto solo puede hacerlo los admins, ya que antes de ser agregado como prof, se le realizará una entrevista)
    public function store(Request $request) {
        try {
            $validated = $request->validate([
                'name' => 'required|string',
                'image' => 'nullable|string',
                'description' => 'required|string',
                'specialty' => 'required|string',
                'id_user' => 'required|exists:users,id|unique:profesionales,id_user',
            ]);
   
            $prof = Profesional::create($validated);

            $user = User::find($validated['id_user']);
            if ($user->role === 'user') {
                $user->role = 'prof';
                $user->save();
            }

            return response()->json($prof, Response::HTTP_CREATED);
        } catch (ValidationException $e) {
            return response()->json([
                'errors' => $e->validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al crear el profesional'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Ver un profesional específico
    public function show($id) {
        try {
            $prof = Profesional::findOrFail($id);
            return response()->json([
                'profesional' => $prof
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Profesional no encontrado'
            ], Response::HTTP_NOT_FOUND);
        }
    }

    // Actualizar profesional (los admins son los únicos que pueden actualizar su info, pero antes el profesional deberá hacer una petición, mandando los cambios, ver como hacer)
    public function update(Request $request, $id) {
        try {
            $prof = Profesional::findOrFail($id);

            $validated = $request->validate([
                'name' => 'string',
                'image' => 'nullable|string',
                'description' => 'string',
                'specialty' => 'string',
                'image_pending' => 'nullable|string|max:255',
                'description_pending' => 'nullable|string|max:1000',
                'specialty_pending' => 'nullable|string|max:255',
                'pending_review' => 'boolean',
                // 'id_user' no debería cambiarse nunca
            ]);

            $prof->update($validated);
            return response()->json([
                'message' => 'Profesional actualizado correctamente.',
                'profesional' => $prof
            ], Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'errors' => $e->validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al actualizar el profesional'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    } 

    // Eliminar un profesional
    public function destroy($id) {
        try {
            $prof = Profesional::findOrFail($id);
            $user = $prof->user;

            $prof->delete();

            if ($user->role === 'prof') {
                $user->role = 'user';
                $user->save();
            }
            
            return response()->json(['message' => 'Profesional eliminado.'], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al eliminar el profesional'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

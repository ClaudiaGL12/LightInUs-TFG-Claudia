<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Tema;
use Illuminate\Validation\ValidationException;
use Exception;

class TemaController extends Controller
{
    // Listar todos los temas
    public function index()
    {
        try {
            $temas = Tema::all();

            if ($temas->isEmpty()) {
                return response()->json([
                    'errors' => 'No hay temas disponibles'
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Temas obtenidos correctamente',
                'temas' => $temas
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al obtener los temas'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Crear un tema
    public function store(Request $request) {
        try {
            $validated = $request->validate([
                'name' => 'required|string|unique:temas',
                'description' => 'required|string',
                'content' => 'required|string',
                'tipo_id' => 'required|exists:tipo_temas,code',
            ]);

            $tema = Tema::create($validated);
            return response()->json([
                'message' => 'Tema creado correctamente',
                'tema' => $tema
            ], Response::HTTP_CREATED);
        } catch (ValidationException $e) {
            return response()->json([
                'errors' => $e->validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al crear el tema'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Ver un tema específico
    public function show($id) {
        try {
            $tema = Tema::findOrFail($id);
            return response()->json([
                'message' => 'Tema encontrado correctamente',
                'tema' => $tema
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Tema no encontrado'
            ], Response::HTTP_NOT_FOUND);
        }
    }

    // Actualizar tema
    public function update(Request $request, $id) {
        try {
            $tema = Tema::findOrFail($id);

            $validated = $request->validate([
                'name' => "string|unique:temas,name,{$id}",
                'description' => 'string',
                'content' => 'string',
                'tipo_id' => 'exists:tipo_temas,code',
            ]);

            $tema->update($validated);
            return response()->json([
                'message' => 'Tema actualizado correctamente',
                'tema' => $tema
            ], Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'errors' => $e->validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al actualizar el tema'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    } 

    // Eliminar un tema
    public function destroy($id) {
        try {
            Tema::findOrFail($id)->delete();
            return response()->json(['message' => 'Tema eliminado.'], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al eliminar el tema'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

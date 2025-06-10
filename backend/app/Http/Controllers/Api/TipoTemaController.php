<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TipoTema;
use App\Models\Tema;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Exception;

class TipoTemaController extends Controller
{
    // Listar todos los tipos de tema
    public function index()
    {
        try {
            $tipos = TipoTema::all();

            if ($tipos->isEmpty()) {
                return response()->json([
                    'errors' => 'No hay tipos de tema disponibles'
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'tipo_temas' => $tipos
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al obtener los tipos de tema'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Crear un tipo de tema
    public function store(Request $request) {
        try {
            $validated = $request->validate([
                'code' => 'required|string|unique:tipo_temas',
                'name' => 'required|string|unique:tipo_temas',
                'description' => 'nullable|string',
            ]);

            $tipo = TipoTema::create($validated);
            return response()->json($tipo, Response::HTTP_CREATED);
        } catch (ValidationException $e) {
            return response()->json([
                'errors' => $e->validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al crear el tipo de tema'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Ver un tipo de tema específico
    public function show($id) {
        try {
            $tipoTema = TipoTema::findOrFail($id);
            return response()->json([
                'tipo_tema' => $tipoTema
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Tipo de tema no encontrado'
            ], Response::HTTP_NOT_FOUND);
        }
    }

    // Actualizar tipo de tema
    public function update(Request $request, $id) {
        try {
            $tipo = TipoTema::findOrFail($id);

            $validated = $request->validate([
                'code' => "string|unique:tipo_temas,code,{$id}",
                'name' => "string|unique:tipo_temas,name,{$id}",
                'description' => 'nullable|string',
            ]);

            $tipo->update($validated);
            return response()->json($tipo, Response::HTTP_OK);
        } catch (ValidationException $e) {
            return response()->json([
                'errors' => $e->validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al actualizar el tipo de tema'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    } 

    public function destroy($id){
        try {
            $tipo = TipoTema::findOrFail($id);

            // Buscar temas relacionados
            $temasRelacionados = $tipo->temas;

            if ($temasRelacionados->isNotEmpty()) {
                return response()->json([
                    'errors' => 'No se puede eliminar este tipo de tema porque está relacionado con temas existentes.',
                    'temas_relacionados' => $temasRelacionados
                ], Response::HTTP_CONFLICT); // Código 409: conflicto
            }

            $tipo->delete();

            return response()->json([
                'message' => 'Tipo de tema eliminado correctamente.'
            ], Response::HTTP_OK);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'errors' => 'Tipo de tema no encontrado.'
            ], Response::HTTP_NOT_FOUND);

        } catch (\Exception $e) {
            return response()->json([
                'errors' => 'Error al eliminar el tipo de tema.',
                'exception' => $e->getMessage() // Útil para debug (puedes quitar en producción)
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

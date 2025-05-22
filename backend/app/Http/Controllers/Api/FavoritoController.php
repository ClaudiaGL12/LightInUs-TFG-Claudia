<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favorito;
use App\Models\User;
use App\Models\Tema;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Database\QueryException;

class FavoritoController extends Controller
{
    // Listar los temas favoritos del usuario autenticado o de uno específico
    public function index(Request $request, $userId = null)
    {
        try {
            $user = $userId ? User::findOrFail($userId) : $request->user();
            $favoritos = $user->favoritos;

            if ($favoritos->isEmpty()) {
                return response()->json([
                    'errors' => 'No hay temas favoritos para este usuario.'
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'favoritos' => $favoritos
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al obtener los favoritos'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Agregar un tema a favoritos de un usuario
    public function store(Request $request, $userId, $temaId)
    {
        try {
            $user = User::findOrFail($userId);
            $tema = Tema::findOrFail($temaId);

            if ($user->favoritos()->where('temas.id', $temaId)->exists()) {
                return response()->json([
                    'message' => 'El tema ya está en favoritos.'
                ], Response::HTTP_CONFLICT);
            }

            $user->favoritos()->attach($temaId);

            return response()->json([
                'message' => 'Tema agregado a favoritos.'
            ], Response::HTTP_CREATED);
        } catch (QueryException $e) {
            return response()->json([
                'errors' => 'Error al insertar en favoritos'
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al agregar favorito'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Eliminar un tema de favoritos
    public function destroy($userId, $temaId)
    {
        try {
            $user = User::findOrFail($userId);
            $tema = Tema::findOrFail($temaId);

            if (! $user->favoritos()->where('temas.id', $temaId)->exists()) {
                return response()->json([
                    'errors' => 'El tema no está en favoritos.'
                ], Response::HTTP_NOT_FOUND);
            }

            $user->favoritos()->detach($temaId);

            return response()->json([
                'message' => 'Tema eliminado de favoritos.'
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al eliminar favorito'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

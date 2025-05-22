<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Favorito;
use App\Models\Profesional;
use App\Models\Tema;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Exception;

class UserController extends Controller
{
    // Listar todos los usuarios
    public function index()
    {
        try {
            $users = User::all();

            if ($users->isEmpty()) {
                return response()->json([
                    'errors' => 'No hay usuarios disponibles'
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'users' => $users
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al obtener los usuarios'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Crear un usuario(realmente no es necesaria esta función ya q se crean con el authController)
    public function store(Request $request) {
        try {
            $validator = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8|confirmed',
            ]);

            $user = User::create([
                'name' => $validator['name'],
                'email' => $validator['email'],
                'password' => bcrypt($validator['password']),
            ]);

            return response()->json($user, Response::HTTP_CREATED);
        } catch (ValidationException $e) {
            return response()->json([
                'errors' => $e->validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al crear el usuario'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Ver un usuario específico
    public function show($id) {
        try {
            $user = User::findOrFail($id);

            return response()->json([
                'user' => $user
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Usuario no encontrado'
            ], Response::HTTP_NOT_FOUND);
        }
    }

    // Actualizar usuario
    public function update(Request $request, $id) {
        try {
            $user = User::findOrFail($id);

            $validated = $request->validate([
                'name' => 'string|max:255',
                'email' => "email|max:255|unique:users,email,{$id}",
                'password' => 'nullable|string|min:8|confirmed',
                'role' => 'in:user,admin,prof'
            ]);

            if (isset($validated['password'])) {
                $validated['password'] = Hash::make($validated['password']);
            }

            $user->update($validated);
            return response()->json($user, Response::HTTP_OK);

        } catch (ValidationException $e) {
            return response()->json([
                'errors' => $e->validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);

        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al actualizar el usuario'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    } 

    // Eliminar un usuario
    public function destroy($id) {
        try {
            $user = User::findOrFail($id);
            $user->delete();

            return response()->json(['message' => 'Usuario eliminado.'], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'errors' => 'Error al eliminar el usuario'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

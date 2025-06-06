<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
// use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function login(LoginRequest $request): JsonResponse
    {
        if (!Auth::attempt($request->validated())){
            return response()->json([
                'errors' => 'Credenciales incorrectas'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = $request->user();
        $userToken = $user->createToken('AppToken')->plainTextToken;

        return response()->json([
            'message' => 'Login realizado correctamente.',
            'token' => $userToken,
            'user' => $user
        ], Response::HTTP_OK);
    }

    public function signup(SignupRequest $request): JsonResponse
    {
        $user = User::create($request->validated());
        return response()->json([
            'message' => 'Usuario creado correctamente.',
        ], Response::HTTP_CREATED);
    }

    public function logout(Request $request): JsonResponse
    {
        // $request->user()->currentAccessToken()->delete(); // 100% funciona
        $user = $request->user();
        $user->tokens()->delete();

        return response()->json([
            'message' => 'Logout realizado correctamente.'
        ], Response::HTTP_OK);
    }
}

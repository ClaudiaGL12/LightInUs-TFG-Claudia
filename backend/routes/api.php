<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProfesionalController;
use App\Http\Controllers\Api\TemaController;
use App\Http\Controllers\Api\TipoTemaController;
use App\Http\Controllers\Api\FavoritoController;
use App\Http\Controllers\Api\ChatbotController;
use App\Http\Controllers\Api\PlanController;


Route::post('/login', [AuthController::class, 'login']);
Route::post('/signup', [AuthController::class, 'signup']);
Route::delete('/logout', [AuthController::class, 'logout']);


Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('users', UserController::class);
    Route::apiResource('profesionales', ProfesionalController::class);
    Route::apiResource('temas', TemaController::class);
    Route::apiResource('tipo-temas', TipoTemaController::class);
    
    //favoritos
    Route::get('/users/{user}/favoritos', [FavoritoController::class, 'index']);
    Route::post('/users/{user}/favoritos/{tema}', [FavoritoController::class, 'store']);
    Route::delete('/users/{user}/favoritos/{tema}', [FavoritoController::class, 'destroy']);
    
    //chatbot
    Route::post('/chatbot', [ChatBotController::class, 'recomendarTemas']);

    //planes
    Route::post('/users/{user}/plans', [PlanController::class, 'store']);
    Route::get('/users/{user}/plans', [PlanController::class, 'index']);
    Route::get('/users/{user}/plans/{id}', [PlanController::class, 'show']);
    Route::delete('/users/{user}/plans/{id}', [PlanController::class, 'destroy']);
});
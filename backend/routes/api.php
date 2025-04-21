<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;


// Route::post('/login', [AuthController::class, 'login']);
// Route::post('/signup', [AuthController::class, 'signup']);
// Route::delete('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::post('/login', function() {return 'login user';});
Route::post('/signup', function() {return 'signup user';});

// Route::post('/user{id}', function() {return 'ver user';});
// Route::put('/user{id}', function() {return 'actualizar user';});
// Route::delete('/user{id}', function() {return 'eliminar user';});


//rutas de administrador
//Route::get('/data', function() {return 'ver todos los profesionales y temas';});
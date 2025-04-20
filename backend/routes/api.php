<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;


// Route::post('/login', [AuthController::class, 'login']);
// Route::post('/signup', [AuthController::class, 'signup']);
// Route::delete('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/login', function() {return 'login';});
Route::get('/signup', function() {return 'signup';});
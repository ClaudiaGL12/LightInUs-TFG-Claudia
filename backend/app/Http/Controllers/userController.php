<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class userController extends Controller
{
    public function index()
    {
        // Aquí puedes implementar la lógica para obtener los usuarios
        // y devolverlos a la vista o como respuesta JSON.
        return response()->json(['message' => 'Lista de usuarios']);
    }
    public function show($id)
    {
        // Aquí puedes implementar la lógica para obtener un usuario específico
        // y devolverlo a la vista o como respuesta JSON.
        return response()->json(['message' => 'Detalles del usuario', 'id' => $id]);
    }
}

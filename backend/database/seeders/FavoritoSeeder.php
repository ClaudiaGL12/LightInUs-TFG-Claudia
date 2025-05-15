<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Tema;

class FavoritoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuarios = User::all();
        $temas = Tema::all();

        foreach ($usuarios as $usuario) {
            $usuario->favoritos()->syncWithoutDetaching($temas->random(min(2, $temas->count()))->pluck('id')->toArray());
        }
    }
}

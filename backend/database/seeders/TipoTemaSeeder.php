<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TipoTema;

class TipoTemaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TipoTema::insert([
            ['code' => 'a', 'name' => 'Tipo A', 'description' => 'Descripción de tipo A'],
            ['code' => 'b', 'name' => 'Tipo B', 'description' => 'Descripción de tipo B'],
            ['code' => 'c', 'name' => 'Tipo C', 'description' => 'Descripción de tipo C'],
            ['code' => 'd', 'name' => 'Tipo D', 'description' => 'Descripción de tipo D'],
        ]);
    }
}

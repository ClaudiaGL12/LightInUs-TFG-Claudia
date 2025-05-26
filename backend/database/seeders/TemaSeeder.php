<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tema;
use App\Models\TipoTema;

class TemaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Validar que existan todos los tipos, incluso si no los usás aún
        $tipos = TipoTema::pluck('code', 'code'); // ['a' => 'a', 'b' => 'b']

        // Verificación obligatoria de los tipos esperados
        foreach (['a', 'b', 'c', 'd'] as $code) {
            if (!isset($tipos[$code])) {
                throw new \Exception("Falta el tipo de tema con código '{$code}' en tipo_temas");
            }
        }

        Tema::create([
            'name' => 'Ansiedad en Jóvenes',
            'description' => 'Cómo afrontar la ansiedad en la adolescencia.',
            'content' => 'Contenido del tema sobre ansiedad...',
            'tipo_id' => $tipos['a'],
        ]);

        Tema::create([
            'name' => 'Meditación Guiada',
            'description' => 'Técnicas básicas de meditación guiada.',
            'content' => 'Contenido sobre meditación...',
            'tipo_id' => $tipos['b'],
        ]);

        Tema::create([
            'name' => 'Ansiedad social',
            'description' => 'Cómo afrontar la ansiedad en la adolescencia.',
            'content' => 'Contenido del tema sobre ansiedad...',
            'tipo_id' => $tipos['c'],
        ]);

        Tema::create([
            'name' => 'Meditación',
            'description' => 'Técnicas básicas de meditación guiada.',
            'content' => 'Contenido sobre meditación...',
            'tipo_id' => $tipos['b'],
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Profesional;
use app\Models\User;

class ProfesionalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $usersProf = User::where('role', User::ROLE_PROF)->get();

        foreach ($usersProf as $user) {
            Profesional::create([
                'name' => $user->name,
                'description' => 'Profesional con experiencia.',
                'specialty' => 'Especialidad general',
                'id_user' => $user->id,
            ]);
        }
    }
}

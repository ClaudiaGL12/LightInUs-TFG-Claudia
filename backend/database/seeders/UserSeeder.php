<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash; // Importar la clase Hash para encriptar contraseñas

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert([
            [
                'name' => 'Admin',
                'email' => 'admin@example.com',
                'password' => Hash::make('password'),
                'role' => User::ROLE_ADMIN,
            ],
        ]);

        User::factory()->count(5)->create(['role' => User::ROLE_PROF]);
        User::factory()->count(10)->create(['role' => User::ROLE_USER]);
    }
}

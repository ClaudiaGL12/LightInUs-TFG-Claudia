<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    /*
    * constantes
    */
    const ROLE_USER = 'user';
    const ROLE_ADMIN = 'admin';
    const ROLE_PROF = 'prof';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


    /**
     * Relación: Un usuario puede ser un profesional.
     */
    public function profesional(){
        return $this->hasOne(Profesional::class, 'id_user');
    }

    /**
     * Relación: Un usuario puede tener temas favoritos.
     */
    public function favoritos(){
        return $this->belongsToMany(Tema::class, 'favoritos', 'id_user', 'id_tema')
                    ->withTimestamps()
                    ->using(Favorito::class); 
    }

    /**
     * Relación: Un usuario puede tener planes.
     */
    public function plans(){
        return $this->hasMany(Plan::class);
    }
}

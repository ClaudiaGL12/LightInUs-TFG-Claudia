<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profesional extends Model
{
    use HasFactory;
    
    protected $table = 'profesionales';
    protected $fillable = ['name','image','description','specialty','id_user',];

    /**
     * Relación: Un profesional pertenece a un usuario.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}

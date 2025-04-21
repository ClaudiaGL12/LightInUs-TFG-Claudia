<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Model;

class Favorito extends Pivot
{
    public $incrementing = false; // No tiene columna id autoincremental
    protected $primaryKey = null; // Clave primaria compuesta
    protected $keyType = 'string'; // Laravel requiere esto aunque no lo uses

    protected $table = 'favoritos';
    protected $fillable = [
        'id_user',
        'id_tema',
    ];

    public $timestamps = true;
}

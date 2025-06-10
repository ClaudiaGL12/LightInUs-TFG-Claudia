<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TipoTema extends Model
{
    protected $table = 'tipo_temas';

    protected $fillable = ['code', 'name', 'description'];

    /**
     * Relación uno a muchos con Tema
     */
    public function temas(): HasMany {
        return $this->hasMany(Tema::class, 'tipo_id','code');
    }
}

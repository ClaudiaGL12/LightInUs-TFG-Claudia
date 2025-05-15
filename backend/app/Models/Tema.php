<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tema extends Model
{

    protected $table = 'temas';
    protected $fillable = ["name", "description", "content", 'tipo_id'];
    
    public function favoritosPorUsuarios(){
        return $this->belongsToMany(User::class, 'favoritos', 'id_tema', 'id_user')
                    ->withTimestamps()
                    ->using(Favorito::class);
    }

    /**
     * Relación tema pertenece a un tipo de tema.
     */
    public function tipo(): BelongsTo {
        return $this->belongsTo(TipoTema::class, 'tipo_id');
    }
}

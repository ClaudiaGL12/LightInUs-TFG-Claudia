<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tema extends Model
{
    /*
    * constantes
    */
    const TYPE_A = 'a';
    const TYPE_B = 'b';
    const TYPE_C = 'c';
    const TYPE_D = 'd';

    protected $table = 'temas';
    protected $fillable = ["name", "description", "content"];
    
    public function favoritosPorUsuarios(){
        return $this->belongsToMany(User::class, 'favoritos', 'id_tema', 'id_user')
                    ->withTimestamps()
                    ->using(Favorito::class);
    }
}

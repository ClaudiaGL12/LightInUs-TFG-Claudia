<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Plan extends Model
{
    use HasFactory;
    protected $table = 'plans';
    protected $fillable = ["name", "description", "user_id"];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

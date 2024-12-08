<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserMeta extends Model
{
    public $timestamps = false;

    protected $fillable = ['user_id', 'key', 'value'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

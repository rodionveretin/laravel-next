<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    public $timestamps = false;

    protected $fillable = ['value'];

    function setting($key, $default = null) {
        $setting = \App\Models\Setting::where('slug', $key)->first();
        return $setting ? $setting->value : $default;
    }
}

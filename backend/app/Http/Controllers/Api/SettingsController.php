<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Setting;

class SettingsController extends Controller
{
    public function index()
    {
        $settings = Setting::all();
        return response()->json($settings);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'settings' => 'required|array',
            'settings.*.slug' => 'required|string',
            'settings.*.slug' => 'required|string',
            'settings.*.value' => 'required',
        ]);

        foreach ($data['settings'] as $setting) {
            Setting::updateOrCreate(
                ['slug' => $setting['slug']],
                ['value' => $setting['value']]
            );
        }
        return response()->noContent();
    }

}

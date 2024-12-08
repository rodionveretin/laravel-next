<?php

use App\Http\Controllers\Api\SettingsController;
use App\Http\Controllers\Api\TestController;

use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

// Route::get('/auth', function () {
//   return Socialite::driver('wordpress')->redirect();
// })->name('login');

// Route::get('/auth/callback', [OAuthController::class, 'authCallback'])->name('oauth.callback');


Route::get('/settings', [SettingsController::class, 'index']);
Route::post('/settings', [SettingsController::class, 'update']);

Route::get('/test', [TestController::class, 'index']);

Route::get('/health', function () {
  return response()->json(['status' => 'OK']);
});

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OAuthController extends Controller
{
    public function authCallback()
    {
        try {
            $socialUser = Socialite::driver('wordpress')->user();
        } catch (\Exception $e) {
            return redirect('/')->withErrors(['msg' => 'Ошибка авторизации через wordpress']);
        }

        $user = User::where('email', $socialUser->getEmail())->first();

        if ($user) {
            $user->update([
                'email' => $socialUser->getEmail(),
                'firstname' => $socialUser->user['first_name'],
                'lastname' => $socialUser->user['last_name'],
                'oauth_id' => $socialUser->user['ID'],
                'oauth_provider' => 'wordpress',
            ]);
        } else {
            $user = User::create([
                'email' => $socialUser->getEmail(),
                'firstname' => $socialUser->user['first_name'],
                'lastname' => $socialUser->user['last_name'],
                'role' => 'user',
                'oauth_id' => $socialUser->user['ID'],
                'oauth_provider' => 'wordpress'
            ]);
        }

        Auth::login($user, true);

        return redirect('/');
    }
}

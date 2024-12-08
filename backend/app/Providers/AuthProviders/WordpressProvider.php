<?php

namespace App\Providers\AuthProviders;

use Laravel\Socialite\Two\AbstractProvider;
use Laravel\Socialite\Two\ProviderInterface;
use Laravel\Socialite\Two\User;
use Illuminate\Http\Request;

class WordpressProvider extends AbstractProvider implements ProviderInterface
{
    protected $url;

    protected $scopes = ['openid profile email'];

    protected $config;

    public function __construct(Request $request, $clientId, $clientSecret, $redirectUrl, array $config)
    {
        $this->url = config('services.wordpress.url');
        parent::__construct($request, $clientId, $clientSecret, $redirectUrl);
        $this->config = $config;
    }

    protected function getAuthUrl($state)
    {
        return $this->buildAuthUrlFromBase($this->url . 'oauth/authorize', $state);
    }

    protected function getTokenUrl()
    {
        return $this->url . 'oauth/token';
    }

    protected function getUserByToken($token)
    {
        $response = $this->getHttpClient()->get($this->url . 'oauth/me', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
            ],
        ]);
        return json_decode($response->getBody(), true);
    }

    protected function mapUserToObject(array $user)
    {
        return (new User)->setRaw($user)->map([
            'username'     => $user['user_login'],
            'email'        => $user['user_email'],
            'first_name'   => $user['first_name'],
            'last_name'    => $user['last_name'],
            'display_name' => $user['display_name'],
            'nickname'     => $user['user_nicename'],
        ]);
    }
}

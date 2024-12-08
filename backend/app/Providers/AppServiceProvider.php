<?php

namespace App\Providers;

use App\Providers\AuthProviders\WordpressProvider;
use Illuminate\Support\ServiceProvider;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\Request;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }
        Socialite::extend('wordpress', function ($app) {
            $config = $this->app['config']['services.wordpress'];
            return Socialite::buildProvider(WordpressProvider::class, $config);
        });
    }
}

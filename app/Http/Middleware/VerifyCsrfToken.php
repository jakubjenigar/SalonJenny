<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'https://salonjenny.herokuapp.com/api/requests',
        'https://salonjenny.herokuapp.com/api/requests/*',
        'https://salonjenny.herokuapp.com/api/services',
        'https://salonjenny.herokuapp.com/api/services/*',
        'https://salonjenny.herokuapp.com/api/appointments',
        'https://salonjenny.herokuapp.com/api/appointments/*',
    ];
}

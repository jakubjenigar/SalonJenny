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
        'http://salonjenny.herokuapp.com/api/requests',
        'http://salonjenny.herokuapp.com/api/requests/*',
        'http://salonjenny.herokuapp.com/api/services',
        'http://salonjenny.herokuapp.com/api/services/*',
        'http://salonjenny.herokuapp.com/api/appointments',
        'http://salonjenny.herokuapp.com/api/appointments/*',
    ];
}

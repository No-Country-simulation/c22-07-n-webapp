<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Roles;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role): Response
    {
        // Verificar si el usuario está autenticado
        if (!auth()->check()) {
            return response()->json(['error' => 'No autorizado'], 401);
        }

        // Verificar si el usuario tiene el rol requerido
        if (auth()->user()->role !== $role) {
            return response()->json(['error' => 'Tu rol de usuario no esta permitido'], 403); // 403 Forbidden
        }

        // Continuar con la solicitud si el rol coincide
        return $next($request);
    }
}

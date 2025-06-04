import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Routes qui ne nécessitent pas d'authentification
const publicRoutes = ['/login']
const COOKIE_NAME = "foutaUser"

export function middleware(request: NextRequest) {
  // Récupérer l'utilisateur depuis les cookies
  const userCookie = request.cookies.get(COOKIE_NAME)
  const isAuthenticated = !!userCookie
  
  // Vérifier si la route demandée est une route publique
  const isPublicRoute = publicRoutes.some(route => 
    request.nextUrl.pathname === route || 
    request.nextUrl.pathname === '/'
  )

  // Si la route est publique et l'utilisateur est authentifié, rediriger vers /parcelles
  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/parcelles', request.url))
  }

  // Si la route n'est pas publique et l'utilisateur n'est pas authentifié, rediriger vers /login
  if (!isPublicRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// Spécifier les routes à matcher (toutes les routes sauf les assets statiques)
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|_static|.*\\..*|_vercel).*)',
  ],
}
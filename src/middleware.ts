import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/app/auth/stateless-session'
import { cookies } from 'next/headers'

// 1. Especifica rotas protegidas e públicas
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/signup', '/']

export default async function middleware(req: NextRequest) {
  // 2. Verifica se a rota atual é protegida ou pública
  const { pathname } = req.nextUrl
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  )
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route))

  // 3. Descriptografa a sessão do cookie
  const cookie = cookies().get('session')?.value
  const session = await decrypt(cookie)

  // 4. Redireciona para a página de login (página inicial) se a rota for protegida e o usuário não estiver autenticado
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // 5. Redireciona para o dashboard se o usuário estiver autenticado e tentar acessar uma rota pública
  if (isPublicRoute && session?.userId && !pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  // 6. Redireciona para o dashboard se o usuário tentar acessar "/" enquanto estiver autenticado
  if (pathname === '/' && session?.userId) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  // 7. Redireciona para a página de login se o usuário tentar acessar "/" enquanto não estiver autenticado
  if (pathname === '/' && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

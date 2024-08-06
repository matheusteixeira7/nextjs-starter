import { NextRequest } from 'next/server'
import { updateSession } from './app/login/actions'

export async function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('session')?.value

  if (currentUser && request.nextUrl.pathname.endsWith('/')) {
    return Response.redirect(new URL('/bi-dashboard', request.url))
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }

  if (currentUser && request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/bi-dashboard', request.url))
  }

  return await updateSession(request)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}

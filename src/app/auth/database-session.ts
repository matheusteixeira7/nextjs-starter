import 'server-only'

import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import type { SessionPayload } from '@/app/auth/definitions'
import { sessions } from '@/drizzle/schema'
import { db } from '@/drizzle/db'

const secretKey = process.env.JWT_SECRET
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1hr')
    .sign(key)
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Falha ao decodificar sessão:', error)
    return null
  }
}

export async function createSession(id: number) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  // 1. Crie uma sessão no banco de dados
  await db
    .insert(sessions)
    .values({
      userId: id,
      expiresAt,
    })
    // Retorna o ID da sessão
    .returning({ id: sessions.id })

  // const sessionId = data[0].id

  // 2. Criptografa o ID da sessão
  const session = await encrypt({ userId: id, expiresAt })

  // 3. Armazena a sessão nos cookies para verificações de autenticação otimistas
  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

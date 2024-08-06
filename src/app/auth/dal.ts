import 'server-only'
import { db } from '@/drizzle/db'
import { eq } from 'drizzle-orm'
import { cache } from 'react'
import { users } from '@/drizzle/schema'
import { verifySession } from '@/app/auth/stateless-session'

export const getUser = cache(async () => {
  const session = await verifySession()
  if (!session) return null

  try {
    const data = await db.query.users.findMany({
      where: eq(users.id, session.userId),

      // Retorne explicitamente as colunas que você precisa em vez de retornar o objeto de usuário inteiro
      columns: {
        id: true,
        name: true,
        email: true,
      },
    })

    const user = data[0]

    return user
  } catch (error) {
    console.log('Falha ao buscar usuário:', error)
    return null
  }
})

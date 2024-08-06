'use server'

import { db } from '@/drizzle/db'
import { users } from '@/drizzle/schema'
import {
  FormState,
  LoginFormSchema,
  SignupFormSchema,
} from '@/app/auth/definitions'
import { createSession, deleteSession } from '@/app/auth/stateless-session'
import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'

export async function signup(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  // 1. Valida os campos do formulário
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // Se algum campo do formulário for inválido, retorne erro
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // 2. Prepara os dados para inserção no banco de dados
  const { name, email, password } = validatedFields.data

  // 3. Verifica se o email do usuário já existe
  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  })

  if (existingUser) {
    return {
      message:
        'Este email já existe. Por favor, utilize um email diferente ou faça login.',
    }
  }

  // Faz o hash da senha do usuário
  const hashedPassword = await bcrypt.hash(password, 10)

  // 3. Insere o usuário no banco de dados ou chama a API de um provedor de autenticação
  const data = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({ id: users.id })

  const user = data[0]

  if (!user) {
    return {
      message: 'Um erro ocorreu ao tentar criar sua conta.',
    }
  }

  // 4. Cria uma sessão para o usuário
  const userId = user.id.toString()
  await createSession(userId)
}

export async function login(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  // 1. Valida os campos do formulário
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  const errorMessage = { message: 'Credenciais inválidas.' }

  // Se algum campo do formulário for inválido, retorne erro
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // 2. Consulta o banco de dados para o usuário com o email fornecido
  const user = await db.query.users.findFirst({
    where: eq(users.email, validatedFields.data.email),
  })

  // Se o usuário não for encontrado, retorne erro
  if (!user) {
    return errorMessage
  }
  // 3. Compara a senha do usuário com a senha criptografada no banco de dados
  const passwordMatch = await bcrypt.compare(
    validatedFields.data.password,
    user.password,
  )

  // Se a senha não corresponder, retorne erro
  if (!passwordMatch) {
    return errorMessage
  }

  // 4. Se o login for bem-sucedido, cria uma sessão para o usuário e redireciona
  const userId = user.id.toString()
  await createSession(userId)
}

export async function logout() {
  deleteSession()
}

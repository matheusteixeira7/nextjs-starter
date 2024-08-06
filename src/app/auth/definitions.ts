import { z } from 'zod'

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome deve conter ao menos 2 caracteres.' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Por favor, insira um email válido.' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter ao menos 8 caracteres' })
    .regex(/[a-zA-Z]/, { message: 'Deve conter ao menos uma letra.' })
    .regex(/[0-9]/, { message: 'Deve conter ao menos um número.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Deve conter ao menos um caracter especial.',
    })
    .trim(),
})

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  password: z
    .string()
    .min(1, { message: 'O campo da senha não pode estar vazio.' }),
})

export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export type SessionPayload = {
  userId: string | number
  expiresAt: Date
}

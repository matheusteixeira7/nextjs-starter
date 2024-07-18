import { z } from 'zod'

export const schema = z.object({
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Por favor, preencha um email válido'),
  password: z.string().min(8, 'A senha precisa ter ao menos 8 caracteres'),
})

export type FormSchema = z.infer<typeof schema>

import * as z from 'zod'

export const userSchema = z.object({
  name: z.string().min(3, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  phone: z
    .string()
    .regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/, {
      message: 'Telefone inválido'
    }),
  type: z.enum(['personal', 'business'] as const)
})

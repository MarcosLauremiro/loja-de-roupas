import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().min(1, { message: 'Por Favor dígite seu email'}),
    password: z.string().min(1, { message: 'Senha é obrigatória'}),
})

export type TLoginData =  z.infer<typeof loginSchema>

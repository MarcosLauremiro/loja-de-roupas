
import { z } from 'zod'

export const registerSchema = z.object({
    name: z
    .string()
    .nonempty()
    .min(2, 'O nome deve contar no minimo 2 caracteres'),

    email: z
    .string()
    .nonempty()
    .min(1,'O email é obrigatorio')
    .email('Forneça um email valido'),

    password: z
    .string()
    .nonempty()
    .min(8,'A senha deve conter ao menos 8 caracteres' )
    .regex(/(?=.*?[A-Z])/, 'A senha deve conter ao menos uma letra maiuscula')
    .regex(/(?=.*?[a-z])/, 'A senha deve conter ao menos uma letra minuscula')
    .regex(/(?=.*?[0-9])/, 'A senha deve conter ao menos um numero')
    .regex(/(?=.*[@!#$%^&*()/\\])/, 'A senha deve conter ao menos um caracter especial'),

    confirmPassword: z
    .string()
    .nonempty()
    .min(1,'A senha deve conter ao menos 8 caracteres'),
    

}).partial().refine(({password, confirmPassword}) => password === confirmPassword,{
    message:'As senhas precisam ser iguais',
    path:['confirmPassword']
})

export type TRegisterData = z.infer<typeof registerSchema>
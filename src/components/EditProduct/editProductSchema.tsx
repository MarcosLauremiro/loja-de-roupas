import { z } from 'zod';

export const editProductSchema = z.object({
    name: z.string().min(1, {message: 'Por favor digite o nome do produto conpleto'}),
    price: z.string(),
    image: z.string().min(4, {message: 'Por favor coloque um link valido'}),
    description: z.string().min(3, {message: 'Por favor descreva o produto corretamente'})
})

export type TEditProduct = z.infer<typeof editProductSchema>
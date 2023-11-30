import { AiOutlineClose, AiOutlinePlusCircle } from 'react-icons/ai'
import { TitleStyled } from '../../styles/typography'
import { AddProductStyled } from './styled'
import { ButtonStyled } from '../../styles/ButtonStyled'
import { useContext } from 'react'
import { AdmContext } from '../../providers/AdmContext/AdmContext'
import { InputComponent } from '../Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { INewProduct } from '../../providers/AdmContext/@types'
import { zodResolver } from '@hookform/resolvers/zod'
import { addProductSchema } from './AddSchema'

export const AddProduct = () => {

    const {setIsNewProductModalOpen, addNewProduct} = useContext(AdmContext)

    const handleClose = () =>{
        setIsNewProductModalOpen(false)
    }

    const {register, handleSubmit, formState:{errors} } = useForm<INewProduct>({
        resolver: zodResolver(addProductSchema)
    }

    )

    const submit:SubmitHandler<INewProduct> = (formData) =>{
        const priceNumber:number = Number(formData.price)
        const newFormData:INewProduct = {
            name: formData.name,
            price: priceNumber,
            image: formData.image,
            description: formData.description,
        }
        console.log(newFormData)
        addNewProduct(newFormData)
        setIsNewProductModalOpen(false)
    }

    return(
        <AddProductStyled>
            <form onSubmit={handleSubmit(submit)} className='modal__container'>
                <div className='header__modal'>
                    <TitleStyled fontSize='bg' fontWidt='500'>NOVO PRODUTO</TitleStyled>
                    <span onClick={handleClose}>
                        <AiOutlineClose />
                    </span>
                </div>
                    <div className='inputs'>
                        <InputComponent placeholder='NOME' type='text' {...register('name')}/>
                        {errors.name?.message} 
                        <InputComponent placeholder='PREÇO (R$)' type='number' {...register('price')}/>
                        {errors.price?.message}
                        <InputComponent placeholder='IMAGEM(URL)' type='text' {...register('image')}/>
                        {errors.image?.message}
                        <InputComponent placeholder='DESCRIÇÃO RESUMIDA' type='text' {...register('description')}/>
                        {errors.description?.message}
                    </div>
                <div className='buttonAdd'>
                    <ButtonStyled buttonStyle='black'>
                       <AiOutlinePlusCircle size='15'/> NOVO PRODUTO
                    </ButtonStyled>
                </div>
            </form>
        </AddProductStyled>
    )
}
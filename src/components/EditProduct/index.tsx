import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import { ButtonStyled } from '../../styles/ButtonStyled'
import { TitleStyled } from '../../styles/typography'
import { EditProductStyled } from './styled'
import { InputComponent } from '../Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AdmContext } from '../../providers/AdmContext/AdmContext'
import { INewProduct } from '../../providers/AdmContext/@types'
import { IProduct } from '../../providers/GlobalContext/@types'
import { zodResolver } from '@hookform/resolvers/zod'
import { editProductSchema } from './editProductSchema'

interface IEditProductProps {
    product: IProduct | null

}

export const EditProduct = ({product} : IEditProductProps) => {

    if(product){

    const {editProduct, setIsEditModalOpen} = useContext(AdmContext)

    const {register,handleSubmit, formState:{errors}} = useForm<INewProduct>({
        resolver:zodResolver(editProductSchema)
    })

    const submit:SubmitHandler<INewProduct> = (formData) => {
        const priceNumber:number = Number(formData.price)
        const newFormData:INewProduct = {
            name: formData.name,
            price: priceNumber,
            image: formData.image,
            description: formData.description,
        }
        editProduct(newFormData, product.id)
        setIsEditModalOpen(false)
    }

    const handleClose = () => {
        setIsEditModalOpen(false)
    }

    return(
        <EditProductStyled>
            <form onSubmit={handleSubmit(submit)} className='modal__container'>
                <div className='header__modal'>
                    <TitleStyled fontSize='bg' fontWidt='500'>EDITAR PRODUTO</TitleStyled>
                    <span onClick={handleClose}>
                        <AiOutlineClose />
                    </span>
                </div>
                <InputComponent placeholder={product.name} type='text' {...register('name')}/>
                {errors.name?.message}
                <InputComponent placeholder={`R$${product.price}`} type='number' {...register('price')}/>
                {errors.price?.message}
                <InputComponent placeholder={product.image} type='text' {...register('image')}/>
                {errors.image?.message}
                <InputComponent placeholder={product.description} type='text' {...register('description')}/>
                {errors.description?.message}
                <div className='buttonAdd'>
                    <ButtonStyled buttonStyle='black'>
                       <AiFillEdit/> EDITAR PRODUTO
                    </ButtonStyled>
                </div>
            </form>
        </EditProductStyled>
    )}
}
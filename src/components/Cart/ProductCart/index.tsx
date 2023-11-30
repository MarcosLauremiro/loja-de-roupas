import { useContext } from 'react'
import { ICartProduct } from '../../../providers/GlobalContext/@types'
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContext'
import { ListCartStyled } from './styled'
import {MdRemove} from 'react-icons/md'
import { ParagraphStyled, TitleStyled } from '../../../styles/typography'

interface IProductProps {
    product:ICartProduct
}

export const ProductCart = ({product}:IProductProps) => {

    const {updateCartFromInputs, removeProductFromCart} = useContext(GlobalContext)

    return(
        <ListCartStyled>
            <figure>
                <img src={product.image} alt='Imagem produto' />
            </figure>
            <div className='description'>
                <TitleStyled fontSize='normal' fontWidt='400'>{product.name}</TitleStyled>
                <ParagraphStyled fontSize='normal' fontWidt='500'>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ParagraphStyled>
            </div>
            <div className="control">
                <input type='number' value={product.quantity} step={1} min={1} onKeyDown={(event)=>{event.preventDefault()}} onChange={(event)=>{
                    event.preventDefault()
                    updateCartFromInputs(event.target.value, product.id)
                }}/>
                <button onClick={(event)=>{
                    event.preventDefault()
                    removeProductFromCart(product)
                }}><MdRemove/></button>
            </div>
        </ListCartStyled>
    )
}
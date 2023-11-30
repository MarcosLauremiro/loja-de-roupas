import { useContext } from 'react'
import { ParagraphStyled, TitleStyled } from '../../styles/typography'
import { ProductCart } from './ProductCart'
import { CartStyled } from './styled'
import {AiOutlineClose} from 'react-icons/ai'
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext'

export const Cart = () => {

    const {setIsCartOpen, CartList, CartValue } = useContext(GlobalContext)

    const handleCart = () => {
        setIsCartOpen(false)
    }

    return (
        <CartStyled>
            <div className='modal'>
                <div className='header_cart'>
                    <TitleStyled fontSize='sm' fontWidt='500'>CARRINHO</TitleStyled>
                    <span onClick={handleCart}>
                        <AiOutlineClose />
                    </span>
                </div>
                <ul>
                    {CartList.map((product) => <ProductCart key={product.id} product={product}/>)}
                </ul>
                    <ParagraphStyled  className='valueAll' fontSize='mn' fontWidt='500'>{CartValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <ParagraphStyled fontSize='mn' fontWidt='700'>total</ParagraphStyled></ParagraphStyled>
            </div>
        </CartStyled>
    )
}
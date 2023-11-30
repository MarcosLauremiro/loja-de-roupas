import { useContext } from 'react';
import { IProduct } from '../../providers/GlobalContext/@types';
import {StyledAddProductCart} from './StyledAddProductCart';
import { FaCartPlus  } from 'react-icons/fa'
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext';
import { Link } from 'react-router-dom';

export const AddProductCart = ({product} : {product : IProduct}) => {
  const { renderProduct, addProductToCart } = useContext(GlobalContext)


  return (
    <StyledAddProductCart>
        <button onClick={()=>{addProductToCart(product.id)}}>
        <FaCartPlus size={36} color='white' />
       </button>
      <Link to={`/product/${product.id}`} onClick={()=>renderProduct(product.id)}>Saiba Mais</Link>
    </StyledAddProductCart>
  );
}
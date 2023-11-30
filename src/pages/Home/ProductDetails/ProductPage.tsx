import { useContext } from 'react';
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContext';
import { FaCartPlus } from 'react-icons/fa';
import {ListProducts} from '../ProductList';
import {Header} from '../../../components/Header/Header';
import {Footer} from '../../../components/Footer/Footer';
import {StyledDivTitleProduct} from './StyledDivTitleProduct';
import { StyledButtonAdd, StyledDivProductDetails } from './StyledDivProductDetails';
import { Cart } from '../../../components/Cart';

export const ProductPage = () => {
  const { CurrentProduct, isCartOpen, addProductToCart } = useContext(GlobalContext);
  


  if(CurrentProduct){
    return (
      <>
        {isCartOpen ? <Cart></Cart> : null}
        <Header />
        <StyledDivTitleProduct>
          <span>Home {CurrentProduct.name}</span>
        </StyledDivTitleProduct>
        <StyledDivProductDetails>
          <div>
              <img src={CurrentProduct.image} alt={CurrentProduct.name} />
          </div>
          <div>
            <h2>{CurrentProduct.name}</h2>
            <p>R$ {CurrentProduct.price.toFixed(2).replace('.', ',')}</p>
            <p>{CurrentProduct.description}</p>
         <StyledButtonAdd>
          <FaCartPlus size={36} color='white' />
          <span onClick={()=>{addProductToCart(CurrentProduct.id)}}>Adicionar ao carrinho</span>
        </StyledButtonAdd>
          </div>
        </StyledDivProductDetails>
        <ListProducts />
        <Footer />
      </>
    );
  }
}

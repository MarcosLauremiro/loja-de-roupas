import { useContext } from 'react';
import {AddProductCart} from './AddProductCart';
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext';
import {StyledListSuggested} from './StyledListSuggested';

export const ListProducts = () => {
  const { ProductsList, SuggestedProducts} = useContext(GlobalContext);

  return (
    <>
      <StyledListSuggested>
      {SuggestedProducts.length > 0 ? <h2>Veja Também</h2> : <h2>Produtos em Destaque</h2>}
      <div>
        {SuggestedProducts.length > 0 ? (
          SuggestedProducts.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>R$ {product.price}</p>
              <AddProductCart product={product} />
            </li>
          ))
        ) : (
          ProductsList.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>R$ {product.price} </p>
              <AddProductCart product={product} />
            </li>
          ))
        )}
      </div>
      </StyledListSuggested>
    </>
  );
};

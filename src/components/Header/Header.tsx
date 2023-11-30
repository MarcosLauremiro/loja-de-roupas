import { AiOutlineShoppingCart } from 'react-icons/ai';
import{ StyledHeader} from './StyledHeader'
import { useContext } from 'react';
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext';
import { TitleStyled } from '../../styles/typography';
import { useNavigate } from 'react-router-dom';

export const Header = ()=> {

  const {setIsCartOpen, setCurrentProduct, setSuggestedProducts} = useContext(GlobalContext)
  const navigate = useNavigate()

  const handleCar = () => {
    setIsCartOpen(true)
  }

  return (
    <StyledHeader>
        <TitleStyled fontSize='bg' fontWidt='400' onClick={()=>{
          setCurrentProduct(null)
          setSuggestedProducts([])
          navigate('/')
          }}>FASHIONSTORE</TitleStyled>
        <button onClick={handleCar}>
          <AiOutlineShoppingCart size={32}/>
        </button>
    </StyledHeader>
  )
}

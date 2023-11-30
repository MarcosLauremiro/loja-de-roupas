import { HeaderAdmin, FooterAdmin,ButtonDashboard, StyledMain,IndiceMessage, BoxButton } from './style';
import logo from '../../assets/logo.png'
import { useContext, useState } from 'react';
import {ListProduct} from '../../components/ListProducts';
import { ButtonStyled } from '../../styles/ButtonStyled';
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext';

export const DashboardPage = () => {

        const {logoutAdm} = useContext(GlobalContext)
        const [flap, setFlap] = useState(true)

    return (<>
        <HeaderAdmin>  
            <img src={logo} alt='' /> 
            <ButtonStyled buttonStyle={'black'} onClick={logoutAdm} >
            SAIR
            </ButtonStyled>   
        </HeaderAdmin>
        <StyledMain>
            <div>
                <BoxButton> 
                    <ButtonDashboard onClick={()=>{setFlap(true)}}> INICIO </ButtonDashboard> 
                    <ButtonDashboard onClick={()=>{setFlap(false)}}> PRODUTOS </ButtonDashboard>
                </BoxButton>
                {flap? <IndiceMessage>
                    <h1>PAINEL DO ADMINISTRADOR</h1>
                    <p>Seja bem vindo, administrador</p>
                </IndiceMessage>: <ListProduct/>}
            </div>
        </StyledMain>
        <FooterAdmin> <p> Todos os direitos reservados - Kenzie Academy Brasil </p> </FooterAdmin>
    </>
    )
}
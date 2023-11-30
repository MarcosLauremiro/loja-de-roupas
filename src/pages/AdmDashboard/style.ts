import styled from 'styled-components';

export const HeaderAdmin = styled.header`
    display: flex;
    height: 8vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;

    button{
        position: relative;
        left: 32%;
        cursor: pointer;
    }

   
`

export const FooterAdmin = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    height: 10vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: var(--color-black);
    color: var(--color-white);
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 500;  
`
export const StyledMain = styled.main`
    padding-top: 2vh;
    padding-left: 5vw ;
    padding-right: 5vw ;
`

export const BoxButton = styled.div`
display: flex;
gap: 25px;
`
export const ButtonDashboard = styled.button`
    border: none;
    background-color: #fff;
    color: var(--color-black);
    font-family: 'Oswald';
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 2px;
`

export const IndiceMessage = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        font-size: 60px;
        font-family: 'Oswald';
        font-weight: 600;
        letter-spacing: 2px;   
    }
    p{
        font-family: 'Roboto';
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
       

    }
`
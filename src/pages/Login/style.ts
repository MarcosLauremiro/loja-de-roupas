import styled from 'styled-components'

export const StyledMain = styled.main`
   
    height: 60vh;
    display: flex;
    width: 100%;
    margin-top: 3vh;
`
export const HeaderAdmin = styled.header`
    display: flex;
    height: 8vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    height: 100%;   
    justify-content: flex-start;
    gap: 0;
    .boxOne{
        display: flex;
        width: 55%;
        justify-content: flex-end;
        height: 100%;
        img{
            height: 120%;
        }
    }
    .boxTwo{

        display: flex;
        height: 100%;   
        padding-top: 18vh;
        padding-left: 50px;
         width: 40%;
        justify-content: flex-start;
        form{
                display: flex ;
                flex-direction: column;
                gap: 15px;
                

            h3{
                font-family: 'Oswald';
                font-size: 55px;
                font-weight: 500;
              
            }
            div{
                display: flex;
                flex-direction: row;
                gap: 15px;
                


                .buttonAcess{
                    width: 100px;
                    height: 40px;
                    letter-spacing: 2px;
                    background-color: var(--color-black);
                    color: var(--color-white);
                    font-size: 12px;
                    font-weight: 400;
                    font-family: 'Roboto';
                }
                .buttonRegister{
                    height: 40px;  
                    letter-spacing: 2px;
                    background-color: var(--color-white);
                    color: var(--color-black);
                    padding: 10px;
                    font-family: 'Roboto';
                    font-size: 12px;
                    font-weight: 500;
                    border: solid 1px var(--color-black);
                }
            }
        }
    }
`
export const FooterAdmin = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    height: 15vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: var(--color-black);
    color: var(--color-white);
    font-family: 'Roboto';
    font-size: 19px;
    font-weight: 500;  
`
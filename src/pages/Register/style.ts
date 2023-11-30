import styled from 'styled-components'

export const StyledMain = styled.main`
    height: 70vh;
    display: flex;
    width: 100%;
    margin-top: 3vh;
`

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    height: 60vh ;
    justify-content: flex-start;
    gap: 30px;
    
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
        width: 40%;
        justify-content: flex-start;
        form{
                height: 100%;
                display: flex ;
                flex-direction: column;
                gap: 15px;
                font-family: 'Oswald';
            p{
                font-family: 'Roboto';
                font-size: 20px;
                font-weight: 400;
            }

            span{
                font-family: 'Oswald';
                font-size: 16px;
                font-weight: 400;
                letter-spacing: 2px;
            }

            h3{
                font-family: 'Oswald';
                font-size: 55px;
                font-weight: 500;
              
            }
            div{
                display: flex;
                flex-direction: row;
                
                align-items: center;
                
                .buttonRegister{
                    height: 40px; 
                    margin-left: 67%; 
                    letter-spacing: 2px;
                    background-color: var(--color-black);
                    color: var(--color-white);
                    padding: 10px;
                    font-family: 'Roboto';
                    font-size: 12px;
                    font-weight: 500;
                   
                }
            }
        }
    }
`


export const HeaderAdmin = styled.header`
    display: flex;
    height: 8vh;
    width: 100%;
    justify-content: center;
    align-items: center;
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
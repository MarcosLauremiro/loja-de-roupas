import styled from 'styled-components';

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50vh;
    gap: 30px;
`
export const BoxOne = styled.div`
    display: flex;
    justify-content: space-between;
    height: 15vh;
    width: 100%;

    h2{
        font-family: 'Oswald';
        font-size: 55px;
        font-weight: 500;
        line-height: 89px;
        letter-spacing: 0em;
        text-align: left;
    }
    p{
        font-family: 'Roboto';
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
    }
    .InternalBoxOne{
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 1px;
        height: 100%;
    }
    .InternalBoxTwo{
        width: 30%;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        button{
            
            height: 50px; 
            width: 250px;
            letter-spacing: 2px;
            background-color: var(--color-black);
            color: var(--color-white);
            padding: 10px;
            font-family: 'Roboto';
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 40px;
    }
    }
`
export const BoxTwo = styled.ul`
    display: flex;
    height: fit-content;
    padding-bottom: 100px;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
    
`

export const CardProduct = styled.li`
    display: flex;
    appearance: none;
    height: 150px;
    max-width: 600px;
    width: 100%;
    .BoxCardOne{
        height: 100%;
        width: 150px;
        img{
            height: 150px
        }
    }
    .BoxCardTwo{
        height: 100%;
        width: 450px;
        display: flex;
        flex-direction: column;
        padding-top: 40px;
        padding-left: 30px;

        p{
            font-family: 'Roboto';
            font-size: 19px;
            font-weight: 500;
        }
        span{
            font-family: 'Oswald';
            font-size: 18px;
            font-weight: 400;
        }
    }
    .BoxCardTree{
        height: 100%;
        width: 150px;
        display: flex;
        padding-top: 40px;
            button{
                background-color: #fff;
                border:none;
                height: 50px;
                width: 50px;
            }
        }
`   

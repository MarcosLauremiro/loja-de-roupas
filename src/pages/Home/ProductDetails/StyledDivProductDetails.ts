import styled from 'styled-components';

export const StyledDivProductDetails = styled.div`
display:flex;  
justify-content: center;
align-items: center;
width: 100%;
gap: 3.75rem;
flex-wrap: wrap;

div:first-child{
    width: 90%;
    max-width: 580px;
    max-height: 669px;
    overflow: hidden;
}

div:nth-child(2) {
    width: 90%;
    max-width: 580px;
    height: 386px;
    display: flex;
    flex-direction: column;
    

    h2 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        color: var(--color-black);
        margin-bottom: 20px;
    }

    p {
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 32px;
        color: var(--color-black);
        margin-bottom: 15px;
    }

    p:nth-child(3){
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 20px;
        color: var(--color-black);
        line-height: 32px;
    }
}

img {
width: 100%;
height: 100%;
}

div:nth-child(3) {
    width: 568px;
    height: 386px;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
}
`;


export const StyledButtonAdd = styled.button`
    margin-top: 30px;
    background-color: var(--color-black);
    width: 100%;
    max-width: 356px;
    height: 60px;
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    span{
        font-size: 18px;
        font-weight: 500;
        font-family: 'Roboto';
        text-transform: uppercase;
    }

    `


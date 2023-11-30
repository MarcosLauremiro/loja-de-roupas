import styled, { css } from 'styled-components';

interface IstyleButtonProps{
    buttonStyle: 'black' | 'white'
}

export const ButtonStyled = styled.button<IstyleButtonProps>`
    font-family: var(--font-primary);

    ${({buttonStyle}) => {
        switch(buttonStyle){
            case 'black':
                return css`
                    background-color: var(--color-black);
                    border: none;
                    cursor: pointer;
                    color: var(--color-white);
                    text-align: center;
                    height: 2.75rem;
                    padding:0 1rem;
                `
            case 'white':
                return css`
                    background-color: var(--color-white);
                    border: 1px solid var(--color-black);
                    cursor: pointer;
                    color: var(--color-black);
                    text-align: center;
                    height: 2.75rem;
                    padding:0 1rem;
                `
        }
    }}
`
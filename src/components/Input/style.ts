import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    max-width: 500px;
    min-width: 400px;
    height:50px;
    font-family: 'Oswald';
    font-size: 21px;
    font-weight: 400;
    background-color: var(--color-grey);
    color: var(--color-black);
    border: none;
    opacity: 50%;
    appearance: none;

    ::placeholder{
        padding-left: 20px;
        font-size: 21px;
    }
`

import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    :root{
        --font-primary: 'Oswald', sans-serif;
        --color-black: #000;
        --color-white: #fff;
        --color-grey:#dee2e6;
    }
    button{
        cursor: pointer;
    }
`
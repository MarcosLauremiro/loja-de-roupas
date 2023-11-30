import styled from 'styled-components';

export const CartStyled = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;

    background-color: rgba(0, 0, 0, 0.3);
    .modal{
        position: absolute;
        top: 0;
        right: 10px;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background-color: var(--color-white);

        width: 100%;
        max-width: 300px;
        height: 500px;

        padding: 1rem;

        .header_cart{
            display: flex;
            align-items: center;
            justify-content:  space-between;

            height: 20px;
        }
        ul{
            width: 100%;
            height: 100%;
            max-height: calc(500px - 100px);

            display: flex;
            flex-direction: column;
            gap: 1rem;

            overflow: auto;
        }
        .valueAll{
            display: flex;
            flex-direction: row;
            gap: .3rem;
        }
    }
`
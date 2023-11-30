import styled from 'styled-components';

export const AddProductStyled = styled.div`
     position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;

    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.3);

    .modal__container{
        position: relative;
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        max-width: 500px;

        background: var(--color-white);

        padding: 1rem;
        .header__modal{
            display: flex;
            align-items: center;
            justify-content: space-between;

            position: relative;
            span{
                position: absolute;
                top: 0;
                right: 0;
            }
        }
        .inputs{
            display: flex;
            flex-direction: column;
            gap: 1rem;

            width: 100%;

            margin: 0 auto;
        }
        .buttonAdd{
            display: flex;
            justify-content: end;
            button{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .4rem;
            }
        }
    }
    `
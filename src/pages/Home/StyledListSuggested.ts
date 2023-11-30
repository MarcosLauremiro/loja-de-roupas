import styled from 'styled-components';

export const StyledListSuggested = styled.ul`
display: flex;
flex-direction: column;
overflow-x: scroll;
padding: 0 5%;

h2{
  margin-top: clamp(100px, 3vw, 116px );
  margin-bottom: 30px;
  font-family: var(--font-primary);
  font-size:clamp(40px, 3vw, 60px);
  font-weight: 500;
  color: var(--color-black);
  }

div{
    display: flex;
    gap: 40px;

    li{


        img{
            width: 332px;
            height: 383px;
            border-radius: 20px;
            margin-bottom: 45px;
        }

        h3{
            color: var(--color-black);
            font-family: 'Roboto';
            font-weight: 700;
            font-size: 19px;
            margin-bottom: 22px;
        }

        p{
            color: var(--color-black);
            font-family: var(--font-primary);
            font-weight: 400;
            font-size: 18px;
            margin-bottom: 33px;

        }


    }
  }
`;
import styled from 'styled-components';

export const StyledListSection = styled.section`
  display: flex;
  padding: 0 5%;
  flex-direction: column;

  h2 {
    color: var(--color-black);
    font-size: 60px;
    font-family: var(--font-primary);
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 100px;
  }
  ul {
    margin-top: 58px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2.5rem;

  }
  li {
    max-width: 20.75rem;
  }
  h3 {
    color: var(--color-black);
    font-size: 19px;
    font-family: var(--font-primary);
    font-weight: 700;
    text-transform: capitalize;
    gap: 2.5rem;
    margin-top:2.81rem;
  }
  p {
    color: var(--color-black);
    font-size: 18px;
    font-family: var(--font-primary);
    font-weight: 400;
    margin-top: 22px;
  }

  span {
    font-family: 'Roboto', sans-serif;
  }
  @media(max-width: 768px){
    overflow-x: scroll;
    ul{
      flex-wrap: nowrap;
      justify-content: center;
      width: max-content;
    }
  }
`;

import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin: 0;
  height: 156px;
  background-color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;

p {
    text-align: center;
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: 700;
    color: white;
}
@media(max-width: 768px){
  span{
    display: block;
  }
}


`;


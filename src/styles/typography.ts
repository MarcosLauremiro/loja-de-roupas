import styled, { css } from 'styled-components';

interface IstyledTypographyProps {
  fontSize: 'bg' | 'lg' | 'sm' | 'mn' | 'normal';
  fontWidt: '400' | '500' | '700';
}

export const TypographyAll = css<IstyledTypographyProps>`
  font-family: var(--font-primary);
  color: var(--color-black);
  line-height: 1.5;

  ${({ fontSize }) => {
    switch (fontSize) {
      case 'bg':
        return css`
          font-size: 2.375rem;
        `;
      case 'lg':
        return css`
          font-size: 1.75rem;
        `;
      case 'sm':
        return css`
          font-size: 1.375rem;
        `;
        case 'normal':
          return css`
            font-size: 1rem;
        `;
      case 'mn':
        return css`
          font-size: 0.75rem;
        `;
    }
  }}

  ${({ fontWidt }) => {
    switch (fontWidt) {
      case '400':
        return css`
          font-weight: 400;
        `;
      case '500':
        return css`
          font-weight: 500;
        `;
      case '700':
        return css`
          font-weight: 700;
        `;
    }
  }}
`;

export const TitleStyled = styled.h1`
  ${TypographyAll}
`;

export const ParagraphStyled = styled.p`
  ${TypographyAll}
`;

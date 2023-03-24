import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    margin-top: 7.4rem;
    display: flex;
    justify-content: center;

    h1 {
      color: ${theme.colors.blue};
    }

    > strong {
      margin-top: 2.5rem;
      color: ${theme.colors.red};
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`

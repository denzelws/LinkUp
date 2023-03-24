import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  margin-top: 7.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: 4rem;

    span {
      color: ${theme.colors.red};
    }
  `}
`

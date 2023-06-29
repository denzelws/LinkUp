import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    background: ${theme.colors.primaryMain};
    color: ${theme.colors.white};
    border-radius: 0.4rem;
    box-shadow: 0 2rem 2rem -1.6rem rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;

    & + & {
      margin-top: 1.2rem;
    }

    strong {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

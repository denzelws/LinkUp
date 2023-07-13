import styled, { css } from 'styled-components'

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const EmptyText = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    color: ${theme.colors.gray};

    strong {
      color: ${theme.colors.primaryMain};
    }
  `}
`

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    & + & {
      margin-top: ${theme.spacings.xsmall};
    }

    small {
      display: block;
      color: ${theme.colors.danger.main};
      margin-top: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

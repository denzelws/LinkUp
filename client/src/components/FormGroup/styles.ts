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

export const FormItem = styled.div`
  position: relative;
`

export const LoaderWrapper = styled.div`
  position: absolute;
  right: 1.6rem;
  top: 1.8rem;
`

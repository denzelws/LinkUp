import styled, { css } from 'styled-components'

export const WrapperForm = styled.form``

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`

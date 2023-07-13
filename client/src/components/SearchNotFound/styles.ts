import styled, { css } from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ImageWrapper = styled.div`
  img {
    width: 5rem;
  }
`

export const NotFoundMessage = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
    color: ${theme.colors.gray};
    word-break: break-word;
  `}
`

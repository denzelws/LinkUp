import styled, { css } from 'styled-components'
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort'

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    a {
      display: flex;
      align-items: center;
      text-decoration: none;

      span {
        font-size: ${theme.font.sizes.large};
        color: ${theme.colors.blue};
        font-weight: ${theme.font.bold};
      }
    }
  `}
`

export const ArrowIcon = styled(ArrowLeftShort)`
  ${({ theme }) => css`
    margin-right: 0.2rem;
    justify-content: center;
    width: 3rem;
    color: ${theme.colors.blue};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    font-size: 2.4rem;
  `}
`

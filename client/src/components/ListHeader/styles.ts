import styled, { css } from 'styled-components'
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort'

type IconProps = {
  orderby: string
}

export const ListHeader = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.large};

    cursor: pointer;
  `}
`

export const ArrowIcon = styled(ArrowLeftShort)<IconProps>`
  ${({ theme, orderby }) => css`
    margin-right: 0.2rem;
    justify-content: center;
    width: 3rem;
    color: ${theme.colors.blue};
    transform: ${orderby === 'asc' ? 'rotate(90deg)' : 'rotate(270deg)'};
    transition: transform 0.2s ease-in;
  `}
`

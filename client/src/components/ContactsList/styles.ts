import styled, { css } from 'styled-components'
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Contacts = styled.h2``

export const Button = styled.button`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings.xsmall};
    cursor: pointer;
    border: 0.2rem solid #5061fc;
    border-radius: 0.5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    color: #5061fc;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};

    a {
      text-decoration: none;
      color: #5061fc;
    }

    &:hover {
      background: #5061fc;

      a {
        color: ${theme.colors.white};
      }
    }
  `}
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListHeader = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.large};

    cursor: pointer;
  `}
`

export const CardBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: ${theme.spacings.medium};
  `}
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid red;
  height: 6rem;
  padding: 1.5rem 0;
`

type IconProps = {
  orderBy: string
}

export const ArrowIcon = styled(ArrowLeftShort)<IconProps>`
  ${({ theme, orderBy }) => css`
    margin-right: 0.2rem;
    justify-content: center;
    width: 3rem;
    color: ${theme.colors.blue};
    transform: ${orderBy === 'asc' ? 'rotate(90deg)' : 'rotate(270deg)'};
    transition: transform 0.2s ease-in;
  `}
`

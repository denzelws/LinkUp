import styled, { css } from 'styled-components'
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort'

type DetailsProps = {
  hasError: boolean
  contactsLength: number
}

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`

export const Details = styled.div<DetailsProps>`
  ${({ theme, hasError, contactsLength }) => css`
    display: flex;
    justify-content: ${hasError
      ? 'flex-end'
      : contactsLength > 0
      ? 'space-between'
      : 'center'};
    margin-bottom: ${theme.spacings.small};
    border-bottom: 0.2rem solid #e5e5e5;
    padding-bottom: ${theme.spacings.xsmall};
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

  img {
    width: 10rem;
  }
`

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
  orderby: string
}

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

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 10rem;
  }
`

export const InfoBox = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
  `}
`

export const WarningText = styled.strong`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.danger.main};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

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

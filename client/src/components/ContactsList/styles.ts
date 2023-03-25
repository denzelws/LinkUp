import styled, { css } from 'styled-components'

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
    border: 0.1rem solid ${theme.colors.blue};
    border-radius: 0.5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.small};
  `}
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.large};
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

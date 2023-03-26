import styled, { css } from 'styled-components'

import { lighten } from 'polished'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.white};
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    padding: ${theme.spacings.xsmall};
    border-radius: 0.4rem;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const InfoBox = styled.div`
  ${({ theme }) => css`
    > span {
      display: block;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
      font-weight: ${theme.font.bold};
    }
  `}
`

export const ContactName = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    > small {
      background: ${lighten(0.6, theme.colors.blue)};
      color: ${theme.colors.blue};
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
      padding: 0.4rem;
      border-radius: 0.4rem;
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

export const Actions = styled.div`
  display: flex;
`

export const EditButton = styled.div`
  ${({ theme }) => css`
    > svg {
      width: 2rem;
      color: ${theme.colors.blue};
      cursor: pointer;
    }
  `}
`

export const DeleteButton = styled.div`
  ${({ theme }) => css`
    > svg {
      width: 2rem;
      color: ${theme.colors.red};
      cursor: pointer;
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

export const Name = styled.h2``

export const Platform = styled.h2``

export const Email = styled.h2``

export const Phone = styled.h2``

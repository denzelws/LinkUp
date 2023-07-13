import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 10rem;
  }
`

export const WarningText = styled.strong`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.danger.main};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const InfoBox = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
  `}
`

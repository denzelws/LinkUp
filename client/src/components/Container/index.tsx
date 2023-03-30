import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`

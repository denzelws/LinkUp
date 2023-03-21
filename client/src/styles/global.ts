import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
  `}

`

export default GlobalStyles

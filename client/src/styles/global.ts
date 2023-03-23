import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
  font-display: swap;
  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/sora-v11-latin-regular.woff2') format('woff2'),

  }

  @font-face {
  font-display: swap;
  font-family: 'Sora';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/sora-v11-latin-600.woff2') format('woff2'),
  }

* {
    margin: 0;
    padding: 0;
    * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.primary};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}

`

export default GlobalStyles

import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './templates/Home'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
)

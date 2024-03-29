import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import App from './pages/App/App'
import ToastContainer from './components/Toast/ToastContainer'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)

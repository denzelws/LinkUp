import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import ContactsList from './components/ContactsList'
import { Container } from './components/Container'
import Header from './components/Header'

import App from './pages/App/App'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
)

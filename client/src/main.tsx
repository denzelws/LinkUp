import { ThemeProvider } from 'styled-components'
import App from './pages/App/App'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

function AppDom() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}

export default AppDom

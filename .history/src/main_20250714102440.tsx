import { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { ThemeProvider } from 'styled-components'
import App from './App'
import { lightTheme, GlobalStyle} from './styles/'
=======
import App from './App'
import { GlobalStyle, lightTheme } from './styles/'
>>>>>>> feat/create-theme

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
)

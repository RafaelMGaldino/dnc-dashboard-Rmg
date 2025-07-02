import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from 'styled-components'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    appBackground: string
    appColor: string
    // Outras propriedades do tema, se necessário
  }
}

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
  body, html {
    background-color: ${({ theme }) => theme?.appBackground};
    color: ${({ theme }) => theme?.appColor};
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
  }
`

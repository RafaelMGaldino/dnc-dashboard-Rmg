import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: ${({ theme }) => theme.appBackground};
    color: ${({ theme }) => theme.appColor};
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, p, ul, li, figure {
    margin: 0;
    padding: 0;
  }
`

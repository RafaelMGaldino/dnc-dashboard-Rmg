import { createGlobalStyle } from 'styled-components'
import { pxToRem } from '@/utils'

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

   
  .mb-1{
    margin-bottom: ${pxToRem(16)};
    }

  .mb-2{
      margin-bottom: ${pxToRem(32)};
    }

    .skeleton {
      animation: skeletonLoading 2.5s infinite alternate;
      }
`

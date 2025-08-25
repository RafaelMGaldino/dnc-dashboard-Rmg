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

  .mb-5{
      margin: ${pxToRem(16)};
    }

    .skeleton {
      animation: skeletonLoading 2.5s infinite alternate;
      }

  @keyframes skeletonLoading {
     from{
      background: ${(props) => props.theme.appSkeletonFrom};
     }
       to{
      background: ${(props ) => props.theme.appSkeletonTo};
     }
  }



   .skeleton-loading-mh-1{
       min-height: ${pxToRem(175)};
   }
  .skeleton-loading-mh-2{
       min-height: ${pxToRem(400)};
   }
`

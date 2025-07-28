import styled from 'styled-components'
import { pxToRem } from '@/utils'

declare module 'styled-components' {
  export interface DefaultTheme {
    appLogo: string;
    // adicione outras propriedades do tema aqui, se necessário
  }
}
export const Logo = styled.figure<{height: number; width: number}>`
  background: url(/${(props) => props.theme.appLogo});
  background-size: cover;
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
`

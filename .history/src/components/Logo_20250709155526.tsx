import styled from 'styled-components'
import { pxToRem } from '@/utils'
import type { Theme } from '@/types';


export const Logo = styled.figure<{height: number; width: number}>`
  background: url(${(props) => props.Theme.appLogo});
  background-size: cover;
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
`

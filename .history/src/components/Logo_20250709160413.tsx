import styled from 'styled-components'
import { pxToRem } from '@/utils'
import {Logo} from './'

export const Logo = styled.figure<{height: number; width: number}>`
  background: url(${(props) => props.theme.logos});
  background-size: cover;
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
`

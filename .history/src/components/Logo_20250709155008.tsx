import styled from 'styled-components'
import { pxToRem } from '@/utils'
import { Theme } from '@emotion/react';


export const Logo = styled.figure<{height: number; width: number}>`
  background: url(/${(props) => props.theme.appLogo});
  background-size: cover;
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
`

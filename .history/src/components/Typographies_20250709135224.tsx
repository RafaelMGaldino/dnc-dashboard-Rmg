import styled from 'styled-components'
import type { TypographiesProps } from '@/types'
import { pxToRem } from '@/utils/pxToRem'


export const StyledH1 = styled.h1<TypographiesProps>`
color: ${(props) => props.color || 'inherit'};
font-size: ${(props) => pxToRem(props.size || 24)};
font-weight: ${(props) => pxToRem(props.weight || 600)};
letter-spacing: ${pxToRem(-1)};
line-height: ${(props) => pxToRem(props.lineHeight || 36)};
`

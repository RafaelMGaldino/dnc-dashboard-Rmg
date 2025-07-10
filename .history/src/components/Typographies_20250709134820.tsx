import styled from 'styled-components'
import { TypographiesProps } from '@/types'
import { pxToRem } from '@/utils/pxToRem'


export const StyledH1 = styled.h1<TypographiesProps>`
 color: ${(props) => props.color || 'inherit'};
`

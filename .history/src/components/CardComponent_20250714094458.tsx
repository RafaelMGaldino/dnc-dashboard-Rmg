import { pxToRem } from '@/utils'
import styled from 'styled-components'

export const CardComponent = styled.div`
  background: ${(props) => props.theme.card.background};
  border: ${pxToRem(1)} solid ${(props) => props.theme.card.border};
  box-sizing: bordedr-box;
  padding: ${pxToRem(24)};
  width: 100%
  `

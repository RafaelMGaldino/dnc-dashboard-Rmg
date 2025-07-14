import styled from 'styled-components'
import { pxToRem } from '@/utils'
import {Avatar, box, Container} from '@mui/material'

export const StyledHeader = styled.div`
  background: ${(props) => props.theme.appBackground};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStroke};
  height: 100%;
  width: 100%;
`

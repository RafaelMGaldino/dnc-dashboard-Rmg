import styled from 'styled-components'
import { pxToRem } from '@/utils'
import {Avatar, box, Container} from '@mui/material'

export const StyledHeader = styled.div`
  background: ${(props) => props.theme.appBackground};
  border-bottom: ${(props) => props.theme.buttons.primary};
  height: 100%;
  width: 100%;
`

import styled from 'styled-components'
import { pxToRem } from '@/utils'
import {Avatar, Box, Container} from '@mui/material'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.div`
  background: ${(props) => props.theme.appBackground};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStroke};
  margin-bottom: ${pxToRem(37)}; 
  width: 100%;
`
function Header() {
     
    return(
        <StyledHeader>
            <Container maxWidth='lg'>
               <Box sx={{
                     aligItems: 'center',
                      display: 'flex',
                      justifyContet: 'space-between',
                      height: pxToRem(64)
                      
                         }} >
               <Link to="/home">
                    <Logo height={30} width={73} />
               </Link>

               <Link to="perfil"/>
                    <Avatar alt="DNC Avatar" src='/' sx={{width: pxToRem(40), height=(40) }} />

               </Box>
            </Container>
        </StyledHeader>
        
 

    )



}

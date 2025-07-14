import styled from 'styled-components'
import { pxToRem } from '@/utils'
import { Avatar, Box, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { Logo } from '@/components' // ou o caminho correto para seu componente Logo

export const StyledHeader = styled.div`
  background: ${(props) => props.theme.appBackground};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStroke};
  margin-bottom: ${pxToRem(37)}; 
  width: 100%;
`

function Header() {
  return (
    <StyledHeader>
      <Container maxWidth="lg">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            height: pxToRem(64),
          }}
        >
        <Link
  to="/home"
  style={{
    all: 'unset',
    display: 'inline-block',
    cursor: 'pointer'
  }}
>
  <Logo height={30} width={73} />
</Link>

          <Link to="/perfil">
            <Avatar
              alt="DNC Avatar"
              src="/dnc-avatar"
              sx={{
                width: pxToRem(40),
                height: pxToRem(40),
              }}
            />
          </Link>
        </Box>
      </Container>
    </StyledHeader>
  )
}

export default Header

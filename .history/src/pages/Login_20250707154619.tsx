import styled from 'styled-components'
import { Box, Container, Grid } from '@mui/material'

const LoginArea = styled.div`
  background: #666;
  color: white;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`

const LoginImage = styled.div`
  background: url('/login-image.svg') no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 100%;
`

function Login() {
  return (
    <Box sx={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Grid container sx={{ height: '100vh', width: '100vw' }}>
        <Grid
          component="div"
          sx={{
            width: '50%', // largura 50%
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Container maxWidth="sm">
            <LoginArea>Login</LoginArea>
          </Container>
        </Grid>

        <Grid
          component="div"
          sx={{
            width: '50%', // largura 50%
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoginImage />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login

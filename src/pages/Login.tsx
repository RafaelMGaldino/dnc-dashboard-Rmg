import styled from 'styled-components'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

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
      <Grid container sx={{ width: '100%', height: '100vh' }}>
        <Grid
          item
          sx={{
            width: '50%',
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
          item
          sx={{
            width: '50%',
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

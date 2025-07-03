import React from 'react'
import styled from 'styled-components'
import { Box, Container, Grid } from '@mui/material'

const LoginArea = styled.div`
  background: #666;
  padding: 2rem;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LoginImage = styled.div`
  background: url('/login-image.svg') no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
`

function Login() {
  return (
    <Box sx={{ height: '100vh' }}>
      <Grid container columns={12} sx={{ height: '100%' }}>
        <Grid
          gridColumn={{ xs: 'span 12', sm: 'span 6' }}
          sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
        >
          <Container maxWidth="sm">
            <LoginArea>LOGIN</LoginArea>
          </Container>
        </Grid>
        <Grid
          gridColumn={{ xs: 'none', sm: 'span 6' }}
          sx={{
            display: { xs: 'none', sm: 'block' },
            height: '100%',
            padding: 0,
          }}
        >
          <LoginImage />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login

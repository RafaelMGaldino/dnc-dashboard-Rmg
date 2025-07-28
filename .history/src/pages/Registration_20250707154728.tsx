import styled from 'styled-components'
import { Box, Container, Grid } from '@mui/material'

const RegistrationArea = styled.div`
  background: #666;
  color: white;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`

const RegistrationImage = styled.div`
  background: url('/login-image.svg') no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 100%;
`

function Registration() {
  return (
    <Box sx={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Grid container sx={{ width: '100%', height: '100vh' }}>
        <Grid
          component="div"
          sx={{
            width: '50%', // 6 colunas em 12 = 50%
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Container maxWidth="sm">
            <RegistrationArea>Registration</RegistrationArea>
          </Container>
        </Grid>

        <Grid
          component="div"
          sx={{
            width: '50%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <RegistrationImage />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Registration

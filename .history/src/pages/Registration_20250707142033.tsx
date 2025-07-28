import styled from 'styled-components'
import { Box, Container, Grid } from '@mui/material'

const RegistrationArea = styled.div`
  background: #666;
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const RegistrationImage = styled.div`
  background: url('/login-image.svg') no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
`

function Registration() {
  return (
    <Box sx={{ height: '100vh' }}>
      <Grid container columns={12} sx={{ height: '100%' }}>
        <Grid
          gridColumn={{ xs: 'span 12', sm: 'span 6' }}
          sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
        >
          <Container maxWidth="sm">
            <RegistrationArea>Registration</RegistrationArea>
          </Container>
        </Grid>
        <Grid
          gridColumn={{ sm: 'span 6' }}
          sx={{
            display: { xs: 'none', sm: 'block' },
            height: '100%',
            padding: 0,
          }}
        >
          <RegistrationImage />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Registration

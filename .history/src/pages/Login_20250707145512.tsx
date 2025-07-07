import { Box, Container, Grid } from '@mui/material'
import { BannerImage } from '@/components'


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
            <h1>Login</h1>
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

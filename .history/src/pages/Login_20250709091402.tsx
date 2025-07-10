import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent, StyledInputButton } from '@/components'



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
            <FormComponent
              inputs={[
                { type: 'email', placeholder: 'Email' },
                { type: 'password', placeholder: 'Senha' }
              ]}
             {buttons.map((btn, index) => (
  <StyledInputButton
    key={index}
    type={btn.type}
    className={btn.className}
    value={btn.children}
  />
))}

              messages={{
                message: 'Sucesso!!!',
                type: 'success'
              }}
            />

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
          <BannerImage />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login

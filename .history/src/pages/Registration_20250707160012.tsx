import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent } from '@/components'



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
            <h1>Cadastro</h1>
            <FormComponent
              inputs={[
                { type: 'email', placeholder: 'Email' },
                { type: 'password', placeholder: 'Senha' }
              ]}
              buttons={[
                { className: 'primary', type: 'submit', children: 'Login' }
              ]}
              messages={{
                message: 'ERRO!!!',
                type: 'error',
              }}
            />
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
          <BannerImage />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Registration

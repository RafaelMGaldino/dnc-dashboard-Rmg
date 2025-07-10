import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent, Logo, StyledH1, StyledP } from '@/components'
import { pxToRem } from '@/utils'
import { Theme } from './theme'



function Login() {
  return (
    <Box sx={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Grid container sx={{ height: '100vh', width: '100vw' }}>
        <Grid
          component="div"
          sx={{
            width: '50%', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Container maxWidth="sm">

            <Box sx={{marginBottom: pxToRem(24) }}>
             <Logo height={41} width={100} />
            </Box>

            <Box sx={{marginBottom: pxToRem(24) }}>
            <StyledH1>Bem-vindo</StyledH1>
            <StyledP>Digite sua senha e email para logar</StyledP>
            </Box>
            
            <FormComponent
              inputs={[
                { type: 'email', placeholder: 'Email'},
                { type: 'password', placeholder: 'Senha' }
              ]}

            buttons={[
                 { className: 'primary', type: 'submit', children: 'Login'},
              ]}
              message={{
                msg: 'Sucesso!!!',
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

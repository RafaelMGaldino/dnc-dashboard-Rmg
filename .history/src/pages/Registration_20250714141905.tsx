import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent, Logo, StyledH1, StyledP, StyledUl } from '@/components'
import { pxToRem } from '@/utils'

function Registration() {
  return (
    <Box sx={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Grid container sx={{ width: '100%', height: '100vh' }}>
        {/* Lado esquerdo: formulário de cadastro */}
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
            <Box sx={{ marginBottom: pxToRem(24) }}>
              <Logo height={41} width={100} />
            </Box>

            <Box sx={{ marginBottom: pxToRem(24) }}>
              <StyledH1>Faça seu cadastro</StyledH1>
              <StyledP>Primeiro, diga-nos quem você é.</StyledP>
              <StyledUl>
                <li>Entre 8 e 16 caracteres;</li>
                <li>Pelo menos uma letra maiúscula;</li>
                <li>Pelo menos um caractere especial.</li>
                <li>Pelo menos um número</li>
              </StyledUl>
            </Box>

            <FormComponent
              inputs={[
                { type: 'email', placeholder: 'Email' },
                { type: 'password', placeholder: 'Senha' },
              ]}
              buttons={[
                { className: 'primary', type: 'submit', children: 'Login' },
              ]}
              message={{
                msg: 'ERRO!!!',
                type: 'error',
              }}
            />
          </Container>
        </Grid>

        {/* Lado direito: imagem do banner */}
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

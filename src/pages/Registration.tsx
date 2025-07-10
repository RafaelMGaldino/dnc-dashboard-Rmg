<<<<<<< HEAD
import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent, Logo, StyledH1, StyledP, StyledUl} from '@/components'
import { pxToRem } from '@/utils'



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
                <Box sx={{marginBottom: pxToRem(24) }}>
             <Logo height={41} width={100} />
            </Box>

            <Box sx={{marginBottom: pxToRem(24) }}>
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
                { type: 'password', placeholder: 'Senha' }
              ]}
              buttons={[
                { className: 'primary', type: 'submit', children: 'Login' }
              ]}
              message={{
                msg: 'ERRO!!!',
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
=======
import styled from 'styled-components'
import React from 'react'
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
>>>>>>> feat/create-theme
        </Grid>
      </Grid>
    </Box>
  )
}

export default Registration

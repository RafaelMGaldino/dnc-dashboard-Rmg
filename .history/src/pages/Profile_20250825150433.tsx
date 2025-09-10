import { useContext } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'
// Components
import { CardComponent,FormComponent, Header, StyledH2, StyledButton } from '@/components'
import { Box, Container, Grid } from '@mui/material'
// Services
import { logout } from '@/services'
// Types
import { InputProps,ProfileData, ProfileEditableData } from '@/types'
//Hooks
import { useFormValidation } from '@/hooks'

function Profile() {
  const themeContext = useContext(AppThemeContext)

  //Form
  const  inputs: InputProps[] = [
    {name: 'name',type: 'text', placeholder: 'Nome',},
    {name: 'email',type: 'email', placeholder: 'Email', disabled: true,},
    {name: 'phone',type: 'tel', placeholder: 'Telefone',}
    ]

  return (
    <>
      <Header />
      <Box sx={{ width: '100%', minHeight: '100vh', p: 2 }}>
        <Grid container sx={{ width: '100%', gap: 4 }}>
          <Grid
            component="div"
            sx={{
              width: { xs: '100%', sm: '48%' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <CardComponent>Seus Dados...</CardComponent>
          </Grid>
          <Grid
            component="div"
            sx={{
              width: { xs: '100%', sm: '48%' },
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <CardComponent>
              <StyledH2 className='mb-1'>Definições de conta</StyledH2>
              <StyledButton
                className='primary mb-1'
                onClick={themeContext?.toggleTheme}
              >
                Trocar para Tema{' '}
                {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
              </StyledButton>
              <StyledButton className='alert' onClick={logout}>Logout</StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Profile

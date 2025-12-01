import { ChangeEvent, useContext, useEffect} from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'
// Components
import { CardComponent,FormComponent , Header, StyledH2, StyledButton } from '@/components'
import { Box, Container, Grid } from '@mui/material'
// Services
import { logout } from '@/services'
// Types
import { InputProps,ProfileData, ProfileEditableData } from '@/types'
//Hooks
import { useFormValidation, useGet} from '@/hooks'

function Profile() {
  const themeContext = useContext(AppThemeContext)

  //Hooks
  const {
      data: profileData,
      loading: profileLoading,
      error: profileError,
    } = useGet<ProfileData[]>('profile')
 
    useEffect(() =>{
      if(profileData) {
        handleChange(0, profileData[0]?.name)
        handleChange(1, profileData[0]?.email)
        handleChange(2, profileData[0]?.phone)
      }
    },[profileData])

  //Form
  const  inputs: InputProps[] = [
    {name: 'name',type: 'text', placeholder: 'Nome', required: true },
    {name: 'email',type: 'email', placeholder: 'Email', disabled: true,},
    {name: 'phone',type: 'tel', placeholder: 'Telefone', required: true }
    ]
  const { formValues, formValid, handleChange } = useFormValidation(inputs)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
 
  }
  const handleDelete = () => {
    console.log('Deletar conta')
  }

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
            <CardComponent><StyledH2 className='mb-1'>Seus Dados</StyledH2>
              <FormComponent
                inputs={
                  inputs.map((input, index) => ({
                    ...input,
                    type: input.type,
                    placeholder: input.placeholder,
                    value: formValues[index] || '',
                    onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange(index, (e.target as HTMLInputElement).value)
                  }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled: !formValid,
                    type: 'submit',
                    children: 'Atualizar Perfil',
                    onClick: handleSubmit,
                  },
                  {
                    className: 'alert',
                    type: 'button',
                    children: 'Excluir Conta',
                    onClick: handleDelete,
                  },
                ]}
              />
              </CardComponent>
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

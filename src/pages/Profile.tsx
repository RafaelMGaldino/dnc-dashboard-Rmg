import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'
// Components
import { CardComponent, FormComponent, Header, StyledH2, StyledButton } from '@/components'
import { Box, Container, Grid } from '@mui/material'
// Services
import { logout } from '@/services'
// Types
import { InputProps, ProfileData, ProfileEditableData, MenssageProps } from '@/types'
// Hooks
import { useFormValidation, useGet, usePut, useDelete } from '@/hooks'
import Cookies from 'js-cookie'

function Profile() {
  const themeContext = useContext(AppThemeContext)

  // Mensagens de atualização
  const [updateMessage, setUpdateMessage] = useState<MenssageProps>({
    type: 'success',
    msg: '',
  })

  const clearMessage = () => {
    setTimeout(() => {
      setUpdateMessage({ type: 'success', msg: '' })
    }, 3000)
  }

  // Buscar dados do perfil
  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useGet<ProfileData>('profile') 

  const {
    data: profileUpdateData,
    putData: profilePutData,
    loading: profileUpdateLoading,
    error: profileUpdateError,
  } = usePut<ProfileEditableData>('profile/update')

  const { deleteData: profileDeleteData, loading: profileDeleteLoading} = useDelete('profile/delete')

  // Formulário
  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', disabled: true },
    { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
  ]

  const { formValues, formValid, handleChange } = useFormValidation(inputs)

  // Popular os valores quando profileData mudar
  useEffect(() => {
    if (profileData) {
      handleChange(0, profileData.name)
      handleChange(1, profileData.email)
      handleChange(2, profileData.phone)
    }
  }, [profileData, handleChange])

  // Atualizar perfil
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await profilePutData({
      name: String(formValues[0]),
      phone: String(formValues[2]),
    })
  }

  // Excluir conta
  const handleDelete = async () => {
    if (confirm('Tem certeza que deseja excluir sua conta? Esta ação é irreversível.')) {
      try {
        await profileDeleteData()
        alert('Conta excluída com sucesso.')
        Cookies.remove('Authorization')
        window.location.href = '/'
      } catch (error) {
        alert('Não foi possível realizar a operação. Tente novamente.')
      }
    }
  }

  // Mensagem de feedback após update
  useEffect(() => {
    if (profileUpdateData !== null) {
      setUpdateMessage({
        msg: 'Perfil atualizado com sucesso!',
        type: 'success',
      })
      clearMessage()
    } else if (profileUpdateError) {
      setUpdateMessage({
        msg: 'Erro ao atualizar perfil. Tente novamente.',
        type: 'error',
      })
      clearMessage()
    }
  }, [profileUpdateData, profileUpdateError])

  return (
    <>
      <Header />
      <Container sx={{ width: '100%', minHeight: '100vh', p: 2 }}>
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
            {!profileError && (
              <CardComponent
                className={profileLoading ? 'skeleton-loading skeleton-loading-mh-1' : ''}
              >
                {!profileLoading && profileData && (
                  <>
                    <StyledH2 className="mb-1">Seus Dados</StyledH2>
                    <FormComponent
                      inputs={inputs.map((input, index) => ({
                        ...input,
                        value: formValues[index] || '',
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                          handleChange(index, e.target.value),
                      }))}
                      buttons={[
                        {
                          className: 'primary',
                          disabled: !formValid || profileUpdateLoading,
                          type: 'submit',
                          children: profileUpdateLoading ? 'Aguarde..' : 'Atualizar Perfil',
                          onClick: handleSubmit,
                        },
                        {
                          className: 'alert',
                          disabled: profileDeleteLoading,
                          type: 'button',
                          children: profileDeleteLoading ? 'Aguarde...' :'Excluir Conta',
                          onClick: handleDelete,
                        },
                      ]}
                      message={updateMessage}
                    />
                  </>
                )}
              </CardComponent>
            )}
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
              <StyledH2 className="mb-1">Definições de conta</StyledH2>
              <StyledButton className="primary mb-1" onClick={themeContext?.toggleTheme}>
                Trocar para Tema {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
              </StyledButton>
              <StyledButton className="alert" onClick={logout}>
                Logout
              </StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Profile
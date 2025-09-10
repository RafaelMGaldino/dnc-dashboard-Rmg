import { ChangeEvent, useContext } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'
// Components
import { CardComponent, FormComponent, Header, StyledH2, StyledButton } from '@/components'
import { Box, Container, Grid } from '@mui/material'
// Services
import { logout } from '@/services'
// Types
import { InputProps } from '@/types'
// Hooks
import { useFormValidation } from '@/hooks'

function Profile() {
  const themeContext = useContext(AppThemeContext)

  // Form
  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome' },
    { name: 'email', type: 'email', placeholder: 'Email', disabled: true },
    { name: 'phone', type: 'tel', placeholder: 'Telefone' },
  ]

  const { formValues, formValid, handleChange } = useFormValidation(inputs)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Atualizar perfil', formValues)
  }

  const handleDelete = () => {
    console.log('Deletar conta')
  }

  return (
    <>
      <Header />
      <Box sx={{ width: '100%', minHeight: '100vh', p: 2 }}>
        <Grid container sx={{ width: '100%', gap: 4 }}>
          {/* Coluna da esquerda */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 2,
            }}
          >
            <CardComponent>
              <StyledH2 className="mb-1">Seus Dados</StyledH2>
              <FormComponent
                inputs={inputs.map((input, index) => ({
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  disabled: input.disabled,
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
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

          {/* Coluna da direita */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <CardComponent>
              <StyledH2 className="mb-1">Definições de conta</StyledH2>
              <StyledButton
                className="primary mb-1"
                onClick={themeContext?.toggleTheme}
              >
                Trocar para Tema {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
              </StyledButton>
              <StyledButton className="alert" onClick={logout}>
                Logout
              </StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Profile

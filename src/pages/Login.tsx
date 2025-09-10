import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
// COMPONENTS
import { Box, Container, Grid } from '@mui/material'
import { BannerImage,FormComponent,Logo,StyledH1, StyledP} from '@/components'
//UTILS
import { jwtExpirationDateConverter, pxToRem } from '@/utils'

// Hooks
import { useFormValidation, usePost } from '@/hooks'
// Types
import { DecodedJwt ,MenssageProps, LoginData, LoginPostData } from '@/types'
import Cookies from 'js-cookie'

function Login() {
  const navigate = useNavigate()
  const inputs = [
    { type: 'email', placeholder: 'Email' },
    { type: 'password', placeholder: 'Senha' },
  ]

  const { data, loading, error, postData } = usePost<LoginData, LoginPostData>('login')
  const { formValues, formValid, handleChange } = useFormValidation(inputs)

  
  const handleMessage = (): MenssageProps => {
    if (!error) return { msg: '', type: 'success' }

    switch (error) {
      case 401:
        return {
           msg: 'Email ou senha inválidos',
           type: 'error'
           }
      default:
        return {
          msg: 'Não foi possível realizar a operação, entre em contato com nosso suporte',
          type: 'error',
        }
    }
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await postData({
      email: String(formValues[0]),
      password: String(formValues[1]),
    })
  }

  useEffect(() => {
    if (data?.jwt_token) {
      const decoded: DecodedJwt = jwtDecode(data?.jwt_token)
      Cookies.set('Authorization', data?.jwt_token,{
        expires: jwtExpirationDateConverter(decoded.exp),
        secure: true,
      })
    }
   if (Cookies.get ('Authorization'))  navigate('/home')
      
  }, [data, navigate])

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
            <Box sx={{ marginBottom: pxToRem(24) }}>
              <Logo height={41} width={100} />
            </Box>

            <Box sx={{ marginBottom: pxToRem(24) }}>
              <StyledH1>Bem-vindo</StyledH1>
              <StyledP>Digite sua senha e email para logar</StyledP>
            </Box>

            <FormComponent
              inputs={inputs.map((input, index) => ({
                type: input.type,
                placeholder: input.placeholder,
                value: formValues[index] || '',
                onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange(index, (e.target as HTMLInputElement).value)
              }))}
              buttons={[
                {
                  className: 'primary',
                  disabled: !formValid || loading,
                  type: 'submit',
                  children: loading ? 'Aguarde...' : 'Login',
                  onClick: handleSubmit,
                },
              ]}
              message={handleMessage()}
              
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

export default Login
import styled from 'styled-components'

const LoginArea = styled.div`
  backgroud: #666;
`

const LoginImage = styled.div`
  background: url('/login-image.svg') no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Login() {
  return (
    <>
      <LoginArea>Login</LoginArea>
      <LoginImage />
    </>
  )
}
export default Login

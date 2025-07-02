import styled from 'styled-components'

const RegistrationArea = styled.div`
  backgroud: #666;
`

const RegistrationImage = styled.div`
  background: url('/login-image.svg') no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Registration() {
  return (
    <>
      <RegistrationArea>Registration</RegistrationArea>
      <RegistrationImage />
    </>
  )
}
export default Registration

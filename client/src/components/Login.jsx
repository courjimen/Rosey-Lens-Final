import React from 'react'
import '../styles/Forms.css'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

function Login() {
  const navigate = useNavigate()

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential)
      const firstName = decoded.given_name
      const lastName = decoded.family_name
      const email = decoded.email

      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname: firstName, lastname: lastName, email: email })
      })

      if (!response.ok) {
        console.error('Error sending user data:', response.status)
        navigate('/home', { state: { firstName: firstName } })
        return
      }

      const data = await response.json()
          console.log(data.message)
          console.log('User data:', data.user)
          navigate('/user', { state: { userId: data.user.user_id, firstName: firstName } })
          
          navigate('/quiz', { state: { userId: data.user.user_id, firstName: firstName } })

        } catch (error) {
        console.error('Error decoding token:', error)
          navigate('/home', {state: {firstName: 'User' } })
        }
      }

      const handleGoogleLoginFailure = (error) => {
        console.log('Login failed', error)
        navigate('/home', { state: { firstName: 'User' } })
      }

  
  return (
    <div className='login-container'>
      <h2>Sign in below:</h2>
      <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginFailure}/>
    </div>
  )
}

export default Login
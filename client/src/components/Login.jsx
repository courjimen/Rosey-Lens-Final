import React from 'react'
import '../styles/Forms.css'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

function Login() {
  const navigate = useNavigate()
  return (
    <div className='login-container'>
      <h2>Sign in below:</h2>
      <GoogleLogin onSuccess={(credentialResponse) => {
        try {
          const decoded = jwtDecode(credentialResponse.credential)
          console.log(decoded)
          const firstName = decoded.given_name
          navigate('/user', { state: { firstName} })
          navigate('/quiz', { state: { firstName} })
        } catch (error) {
          console.error('Error decoding token:', error)
          navigate('/home', { state: { firstName: 'User' } })
        }
      }}
        onError={() => { 
        console.log('Login failed')
        navigate('/home', { state: { firstName: 'User' } })
    }}
      />
</div>
  )
}

export default Login
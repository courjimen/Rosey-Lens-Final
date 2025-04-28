import React from 'react'
import '../styles/Forms.css'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

function Login() {
  const navigate = useNavigate()
  return (
    <div className='login-container'>
    <GoogleLogin onSuccess={(credentialResponse) => {
      console.log(credentialResponse)
      console.log(jwtDecode(credentialResponse.credential))
      navigate("/home")
    }} 
    onError={() => console.log('Login failed')}
    />

    </div>
  )
}

export default Login
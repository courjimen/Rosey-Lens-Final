import React from 'react'
import '../styles/Forms.css'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

function Login() {
  const navigate = useNavigate()
  return (
    <>
    <GoogleLogin onSuccess={(credentialResponse) => {
      console.log(credentialResponse)
      console.log(jwtDecode(credentialResponse.credential))
      navigate("/home")
    }} 
    onError={() => console.log('Login failed')}
    />

    </>
    // <div className='login-container'>
    //   <h2>Login</h2>
    //   <form className='login-form'>
    //     <div>
    //     <input
    //       type='text'
    //       placeholder='Username'
    //       required
    //     /></div>

    //     <div>
    //     <input
    //       type='text'
    //       placeholder='Password'
    //       required
    //     /></div>

    //     <button type='submit'>Login</button>
    //   </form>
    // </div>
  )
}

export default Login
import React from 'react'
import '../styles/Forms.css'

function Login() {
  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form className='login-form'>
        <div>
        <input
          type='text'
          placeholder='Username'
          required
        /></div>

        <div>
        <input
          type='text'
          placeholder='Password'
          required
        /></div>

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
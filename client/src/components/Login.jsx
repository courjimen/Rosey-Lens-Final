import React from 'react'
import '../styles/Login.css'

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type='text'
          placeholder='Username'
          required
        />

        <input
          type='text'
          placeholder='Password'
          required
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
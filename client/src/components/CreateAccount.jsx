import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/CreateAccount.css'

function CreateAccount() {
  return (
    <div className='create-account'>
      <h2>Create Your Account</h2>
      <div className='form-wrapper'>
        <form className='input-form'>
          <div>
            <input
              type='text'
              placeholder='Username'
              required
            /></div>

          <div>
            <input
              type='email'
              placeholder='Email address'
              required
            /></div>

          <div>
            <input
              type='phone'
              placeholder='Phone'
            /></div>

          <div>
          <input
            type='password'
            placeholder='Password'
            required
          /></div>

          <div>
          <input
            type='password'
            placeholder='Confirm Password'
            required
          /></div>

          <div>
            <button type='submit'>Create Account</button>
          </div>

        </form>
      </div>

      <div className='link-container'>
        <Link to='/guest'>Return Home</Link>
      </div>
    </div>
  )
}

export default CreateAccount

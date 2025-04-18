import React from 'react'
// import { Link } from 'react-router-dom'
import '../styles/CreateAccount.css'

function CreateAccount() {
  return (
    <div>
      <h2>CreateAccount</h2>
      <div>
      <form>
        <input 
        type='text'
        placeholder='Username'
        required
        />
        <input 
        type='email'
        placeholder='Email address'
        required
        />
         <input 
        type='phone'
        placeholder='Phone'
        
        />
        <input 
        type='password'
        placeholder='Password'
        required
        />
        <input 
        type='password'
        placeholder='Confirm Password'
        required
        />

        <div>
        <button type='submit'>Create Account</button>
        </div>
        
      </form>
      </div>

      {/* <Link to='/guest'>Return Home</Link> */}
    </div>
  )
}

export default CreateAccount

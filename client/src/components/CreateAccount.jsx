import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Forms.css'

function CreateAccount() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/newuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: email
        })
      })
      if (!response.ok) {
        const errorText = await response.text() 
        throw new Error(`Account creation failed: ${res.status} - ${errorText}`)
      }

      const data = await response.json()
      console.log('Created Account: ', data)
      navigate('/user')
    } catch (error) {
      console.error('Error creating new account: ', error)
      setError('Failed to connect to server')
      alert(error.message || 'Failed to connect to server')
    }
  }

  return (
    <div className='create-account'>
      <h2>Create Your Account</h2>
      <div className='form-wrapper'>
        <form className='input-form' onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <input
              type='text'
              placeholder='first name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            /></div>

          <div>
            <input
              type='text'
              placeholder='last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            /></div>

          <div>
            <input
              type='email'
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /></div>

          <div>
            <button type='submit'>Create Account</button>
          </div>

        </form>
      </div>

      <div className='link-container'>
        <Link to='/' className='text'>Return Home</Link>
      </div>
    </div>
  )
}

export default CreateAccount

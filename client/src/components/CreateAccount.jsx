import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Forms.css'

function CreateAccount() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmP, setConfirmP] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmP) {
      setError('Passwords do not match. Please try again')
      return
    }

    try {
      const res = await fetch('/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: email,
          phone: phone,
          password: password,
          confirmP: confirmP
        })
      })

      const data = await res.json()

      if (res.ok) {
        console.log('Created Account: ', data.message)
        navigate('/home')
      } else {
        setError('Account creation failed: ', data.message)
      }
    } catch (err) {
      console.error('Error creating new account: ', err)
      setError('Failed to connect to server')
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
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
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
            <input
              type='phone'
              placeholder='Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            /></div>

          <div>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /></div>

          <div>
            <input
              type='password'
              placeholder='Confirm Password'
              value={confirmP}
              onChange={(e) => setConfirmP(e.target.value)}
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

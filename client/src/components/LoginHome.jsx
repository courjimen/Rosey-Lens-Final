import React from 'react'
import '../styles/LoginHome.css'
import roseImage from '../images/roseImage.webp'
import { Link, useLocation } from 'react-router-dom'

function LoginHome() {
    const location = useLocation()
    const firstName = location.state?.firstName
    return (
      <div className='home-page-container'>
        <h1>Welcome to <text className='red-text'>Rosy Lens</text>, {firstName}!</h1>
        <h2>Self care is in the air!</h2>
       <img className='rose' src={roseImage}/>
       <p className='description'>Based on your mood we give you positive <br/> uplifting affirmations, bible verses, or songs!</p>
       <div className='login-options'>
       <p className='login'><Link to="/history" className='red-text'>View Mood History</Link></p>
       <p className='guest'><Link to='/favorites' className='red-text'>View Favorites</Link></p>
       <p className='quiz'><Link to='/quiz' className='red-text'>Check My Mood</Link></p>
       </div>
      </div>
    )
  }

export default LoginHome

import React from 'react'
import '../styles/LoginHome.css'
import roseImage from '../images/roseImage.webp'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function LoginHome() {
  const location = useLocation()
  const navigate = useNavigate()
  const userId = location.state?.userId
  const firstName = location.state?.firstName
  console.log('LoginHome - Rendering with userId:', userId, 'firstName:', firstName);
  //debugging
  const handleQuizClick = () => {
    navigate('/quiz', { state: { userId: userId, firstName: firstName } })
  }
  return (
    <div className='home-page-container'>
      <h1>Welcome to <span className='red-text'>Rosy Lens</span> {firstName}</h1>
      <h2>Self care is in the air!</h2>
      <img className='rose' src={roseImage} />
      <p className='description'>Based on your mood we give you positive <br /> uplifting affirmations, bible verses, or songs!</p>
      <div className='login-options'>
        {/* <p className='login'><Link to={{ pathname: "/history", state: { userId: userId, firstName: firstName} }} className='green-text' >View Mood History</Link></p>
       <p className='guest'><Link to={{ pathname: '/favorites', state: { userId: userId, firstName: firstName} }} className='green-text'>View Favorites</Link></p> */}

        <p className='quiz'> 
          <button onClick={handleQuizClick} className='green-text' style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>Check My Mood </button>
        </p>


      </div>
    </div>
  )
}

export default LoginHome

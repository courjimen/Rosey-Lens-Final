import React from 'react'
import '../styles/LoginHome.css'
import roseImage from '../images/roseImage.webp'
import { useLocation, useNavigate } from 'react-router-dom'

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

  const handleHistoryClick = () => {
    navigate('/history', { state: { userId: userId, firstName: firstName } })
  }

  const handleFavesClick = () => {
    navigate('/favorites', { state: { userId: userId, firstName: firstName } })
  }
  
  return (
    <div className='home-page-container'>
      <h1>Welcome to <span className='red-text'>Rosy Lens</span> {firstName}</h1>
      <h2>Self care is in the air!</h2>
      <img className='rose' src={roseImage} />
      <p className='description'>Based on your mood we give you positive <br /> uplifting affirmations, bible verses, or songs!</p>
      <div className='login-options'>

      {/* Mood History Link */}
        <p className='login'>
          <button onClick={handleHistoryClick} className='green-text button-link'>View History</button>
        </p>

        {/* Favorites Link */}
        <p className='guest'>
          <button onClick={handleFavesClick} className='green-text button-link'>View Favorites</button>
        </p>

        <p className='quiz'>
          <button onClick={handleQuizClick} className='green-text button-link'>Check My Mood</button>
        </p>


      </div>
    </div>
  )
}

export default LoginHome

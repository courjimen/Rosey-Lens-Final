import React from 'react'
import '../styles/Home.css'
import roseImage from '../images/roseImage.webp'

function Home() {
  return (
    <div className='home-page-container'>
      <h1>Welcome to <text className='red-text'>Rosy Lens</text></h1>
      <h2>Self care is in the air!</h2>
     <img className='rose' src={roseImage}/>
     <p className='description'>Based on your mood we give you positive <br/> uplifting affirmations, bible verses, or songs!</p>
     <div className='login-options'>
     <p className='login'><text className='red-text'>Login</text> with Google</p>
     <p className='guest'>Continue as <text className='red-text'>Guest</text></p>
     </div>
    </div>
  )
}

export default Home

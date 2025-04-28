import React from 'react'
import '../styles/Home.css'
import roseImage from '../images/roseImage.webp'

function Home() {
  return (
    <div className='home-page-container'>
      <h1>Welcome to <text className='red-text'>Rosy Lens</text></h1>
      <h2>Self care is in the air!</h2>
     <img className='rose' src={roseImage}/>
     <h2>Based on your mood we give you positive uplifting affirmations, bible verses, or songs!</h2>
    </div>
  )
}

export default Home

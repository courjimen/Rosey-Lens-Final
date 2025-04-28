import React from 'react'
import '../styles/Home.css'
import roseImage from '../images/roseImage.webp'

function Home() {
  return (
    <div className='home-page-container'>
      <h1>Welcome to Rosy Lens</h1>
      <h2>Self care is in the air!</h2>
     <img className='rose' src={roseImage}/>
    </div>
  )
}

export default Home

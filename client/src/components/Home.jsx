import React from 'react'
import '../styles/Home.css'
import roseImage from '../images/roseImage.webp'

function Home() {
  return (
    <div>
      <h2>Welcome to Rosy Lens</h2>
      <p>Self care is in the air!</p>
     <img src={roseImage}/>
    </div>
  )
}

export default Home

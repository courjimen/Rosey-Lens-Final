import React from 'react'
import '../styles/Home.css'
import roseImage from '../images/roseImage.webp'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className='home-page-container'>
      <div>
      <h1>Welcome to <text className='red-text'>Rosy Lens</text></h1>
      <h2>Self care is in the air!</h2>
     <img className='rose' src={roseImage}/>
     </div>

     <div>
     <p className='description'>Based on your mood we give you positive uplifting affirmations, bible verses, or songs!</p>
     </div>

    <div className='login-options'>
     <p><Link className='green-text button-link' to="/login">Login with<br/> Google</Link></p> 
     <p><Link className='green-text button-link' to="/new">Create <br/> Account</Link> </p> 
     <p><Link className='green-text button-link' to='/guest'>Continue as <br/>Guest</Link></p>
     </div>

    </div>
  )
}

export default Home

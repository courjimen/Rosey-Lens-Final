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
     <p className='login'><Link to="/login" className='red-text'>Login</Link> with<br/> Google</p>
     <p className='acct'><Link to="/new" className='red-text'>Create <br/> Account</Link> </p> 
     <p className='guest'>Continue as <Link to='/guest' className='red-text'><br/>Guest</Link></p>
     </div>

    </div>
  )
}

export default Home

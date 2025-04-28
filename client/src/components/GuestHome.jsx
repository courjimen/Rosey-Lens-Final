import React from 'react'
import '../styles/GuestHome.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function GuestHome() {
    return (
        <div className='guest-home'>

            <div className='form-wrapper'>
            Please enter your name:
            <input 
            type='text'
            />
            </div>

            <div>
            <button><Link to='/home'>Return Home</Link></button>
            
            <Link to='/quiz'><FontAwesomeIcon icon={faArrowRight}/></Link>
            
            </div>
        </div>
    )
}

export default GuestHome
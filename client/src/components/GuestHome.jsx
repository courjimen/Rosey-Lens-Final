import React, { useState } from 'react'
import '../styles/GuestHome.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function GuestHome() {
    const [guestName, setGuestName] = useState('')
    const navigate = useNavigate()

    const handleNameChange = (e) => {
        setGuestName(e.target.value)
    }

    const handleStartQuiz = (e) => {
        e.preventDefault()
        if (guestName.trim()) {
            navigate('/quiz', { state: { firstName: guestName }})
        } else {
            alert('Please enter your name to start quiz')
        }
    }

    return (
        <div className='guest-home'>
            <div className='form-wrapper'>
            Please enter your name:
            <input 
            type='text'
            value={guestName}
            onChange={handleNameChange}
            />
            </div>

            <div>
            <button><Link to='/'>Return Home</Link></button>
            <button onClick={handleStartQuiz}><FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
        </div>
    )
}

export default GuestHome
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../styles/Selection.css'
import bibleImage from '../images/bible.svg'
import songImage from '../images/song.svg'
import roseImage from "../images/roseImage.webp"

function Selection() {
  const location = useLocation()
  const navigate = useNavigate()
  const quizResult = location.state?.quizResult
  // console.log(quizResult)
  const userId = location.state?.userId
  const firstName = location.state?.firstName

  console.log("Selection Component - location.state:", location.state);
  console.log("Selection Component - quizResult:", quizResult);

  const handleAffirmationClick = () => {
    navigate('/affirmation', { state: { userId: userId, firstName: firstName, quizResult: quizResult} })
  }
  return (
    <>
      <div className='selection-container'>
        <h2>Pick one option for a sweet surprise</h2>
        <div className='affirmation-options'>

          {/* affirmation */}
          <div className='affirmation-card'>
           <button onClick={handleAffirmationClick} className='affirmation-buttom'>
              <h3>Affirmation</h3>
              <img src={roseImage} />
              <p>Enjoy this uplifting message</p>
            </button>
          </div>

          {/* Bible Verse */}
          <div className='affirmation-card'>
            <Link to='/verse'>
              <h3>Bible Verse</h3>
              <img src={bibleImage} />
              <p>Receive an encouraging verse</p>
            </Link>
          </div>

          {/* Peaceful Song */}
          <div className='affirmation-card'>
            <Link to='/song'>
              <h3>Song</h3>
              <img className='song-image' src={songImage} />
              <p>Find a song with a peaceful vibe </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Selection
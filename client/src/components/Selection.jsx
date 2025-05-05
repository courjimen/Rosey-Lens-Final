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
  const bibleVerse = location.state?.bibleVerse

  console.log("Selection Component - location.state:", location.state);
  console.log("Selection Component - quizResult:", quizResult);

  const handleAffirmationClick = () => {
    navigate('/affirmation', { state: { userId: userId, firstName: firstName, quizResult: quizResult, moodCategory: quizResult?.moodCategory } })
  }

  const handleBibleVerse = () => {
    navigate('/verse', { state: { userId: userId, firstName: firstName, quizResult: quizResult, bibleVerse: quizResult?.bibleVerse, moodCategory: quizResult?.moodCategory } })
  }
  return (
    <>
      <div className='selection-container'>
        <h2>Pick one option for a sweet surprise</h2>
        <div className='affirmation-options'>
          {/* affirmation */}
          <div className='affirmation-card'>
            <h3>Affirmation</h3>
            <img src={roseImage} />
            <button onClick={handleAffirmationClick}> <p>Enjoy this uplifting message</p>
            </button>
          </div>

          {/* Bible Verse */}
          <div className='affirmation-card'>
            <h3>Bible Verse</h3>
            <img src={bibleImage} />
            <button onClick={handleBibleVerse}> <p>Receive an encouraging verse</p>
            </button>
          </div>

          {/* Peaceful Song */}
          <div className='affirmation-card'>
            <Link to='/song'>
              <h3>Song</h3>
              <img className='song-image' src={songImage} />
              <button><p>Find a song with a peaceful vibe </p></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Selection
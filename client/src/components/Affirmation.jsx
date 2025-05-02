import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStarSolid, faStar as faStarRegular } from '@fortawesome/free-solid-svg-icons'
import '../styles/Affirmation.css'

function Affirmation() {
  const [affirmation, setAffirmation] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isFave, setIsFave] = useState(false)

  const location = useLocation()
  const moodCategory = location.state?.quizResult?.moodCategory
  const userId = location.state?.userId

  console.log('Mood category in affirmation:', moodCategory)
  console.log('User ID:', userId)

  useEffect(() => {
    const fetchAffirmation = async () => {
      if (moodCategory) {
        try {
          const response = await fetch(`http://localhost:3000/affirmation/${moodCategory}`)
          if (!response.ok) {
            throw new Error(`HTTP error. status: ${response.status}`)
          }
          const data = await response.json()
          setAffirmation(data.affirmation)
        } catch (error) {
          setError(error.message)
          console.error('Error fetching affirmation:', error)
        } finally {
          setLoading(false)
        }
      } else {
        setError('Unable to grab affirmation.')
        setLoading(false)
      }
    }
    fetchAffirmation()
  }, [moodCategory])

  const handleFave = async () => {
    if (!userId) {
      console.log('Please login to favorite.')
      return
    }

    try {
      const response = await fetch('http://localhost:3000/faves', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          favorite_type: 'affirmation',
          item_id: affirmation,
        }),
      })
      console.log(response)
      if (response.ok) {
        setIsFave(true)
        console.log('Affirmation favorited successfully!')
      } else {
        const errorData = await response.json()
        console.error('Failed to fave affirmation:', errorData)
      }
    } catch (error) {
      console.error('Error favoriting affirmation:', error)
    }
  }

  if (loading) {
    return <div>Loading your affirmation...</div>
  }

  if (error) {
    return <div>Error: {error} </div>
  }

  return (
    <div className='affirmation-container'>
      <h2>We hope this affirmation brightens your day</h2>
     
      <div className='affirmation-card'>
        <p>{affirmation}</p>
        <button className='fave-button' onClick={handleFave}>
          <FontAwesomeIcon icon={isFave ? fasStarSolid : faStarRegular} size='lg' />
        </button>
      </div>

       <div className='links'> 
        <Link to='/user'>Return Home</Link>
        <Link to='/quiz'>Take another Quiz</Link>
        <Link to='/share'></Link>
        </div>
    </div>
  )
}

export default Affirmation
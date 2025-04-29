import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import '../styles/Affirmation.css'

function Affirmation() {
  const [affirmation, setAffirmation] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const moodCategory = location.state?.quizResult?.moodCategory
  console.log(moodCategory)

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
      </div>
     <Link to='/user'>Return Home</Link>
     <Link to='/quiz'>Take another Quiz</Link>
     <Link to='/share'></Link>
    </div>
  )
}

export default Affirmation
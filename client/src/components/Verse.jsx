import React, {useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import '../styles/Affirmation.css'

function Verse() {
  const [verse, setVerse] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const moodCategory = location.state?.quizResult?.moodCategory
  console.log('Mood category in bible verse:', moodCategory)

  useEffect(() => {
    const fetchVerse = async () => {
      if (moodCategory) {
        try {
          const response = await fetch('http://localhost:3000/bible')
          if (!response.ok) {
            throw new Error(`HTTP error. status: ${response.status}`)
          }
          const data = await response.json()
          setVerse(data.verse)
        } catch (error) {
          setError(error.message)
          console.error('Error fetching bible verse:', error)
        } finally {
          setLoading(false)
        }
      } else {
        setError('Unable to grab bible verse.')
        setLoading(false)
      }
    }
    fetchVerse()
  }, [moodCategory])

  if (loading) {
    return <div>Loading your bible verse...</div>
  }

  if (error) {
    return <div>Error: {error} </div>
  }

  return (
    <div className='affirmation-container'>
      <h2>We hope this bible verse brightens your day</h2>
      <div className='affirmation-card'>
        <p>{verse}</p>
      </div>
     <Link to='/user'>Return Home</Link>
     <Link to='/quiz'>Take another Quiz</Link>
     <Link to='/share'></Link>
    </div>
  )
}

export default Verse
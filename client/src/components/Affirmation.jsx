import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Affirmation.css'

function Affirmation() {
  const [affirmation, setAffirmation] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const moodCategory = location.state?.quizResult?.moodCategory

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

  
  return (
    <div>Affirmation</div>
  )
}

export default Affirmation
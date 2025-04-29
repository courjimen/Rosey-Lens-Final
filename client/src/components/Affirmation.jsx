import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Affirmation.css'

function Affirmation() {
  const [affirmation, setAffirmation] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const moodCategory = location.state?.quizResult?.moodCategory
  return (
    <div>Affirmation</div>
  )
}

export default Affirmation
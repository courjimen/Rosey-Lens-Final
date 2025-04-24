import React, { useState, useEffect } from 'react'
import { Button, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import { Card, CardContent, CardHeader, CardTitle } from '@mui/material'
import '../styles/Quiz.css'

function Quiz() {
  const [questionData, setQuestionData] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await fetch('http://localhost:3000/question')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        if (data && data.length > 0) {
          setQuestionData(data[0])
        } else {
          setError('Error fetching questions')
        }
      } catch (error) {
        setError(error)
        console.error('Error fetching questions: ', error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchQuestion()
  }, [])
  
  return (
    <div>Quiz</div>
  )
}

export default Quiz
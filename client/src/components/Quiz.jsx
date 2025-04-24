import React, { useState, useEffect } from 'react'
import { Button, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import { Card, CardContent, CardHeader, CardTitle } from '@mui/material'
import '../styles/Quiz.css'

function Quiz() {
  const [questionData, setQuestionData] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [quizComplete, setQuizCompleted] = useState(false)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch('http://localhost:3000/question')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        if (data && data.length > 0) {
          setQuestionData(data)
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
    fetchQuestions()
  }, [])
  
  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value)
  }
  
  return (
    <div>Quiz</div>
  )
}

export default Quiz
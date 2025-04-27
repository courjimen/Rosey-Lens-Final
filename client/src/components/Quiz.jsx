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
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizResult, setQuizResult] = useState(null);

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
          setError('Server error fetching questions')
        }
      } catch (error) {
        setError(error.message)
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

  const handleSubmit = () => {
    if (!selectedAnswer) return //prevents submitting empty answer
  }

  setAnswers({
    ...answers,
    [questionData[currentQuestionIndex].id]: selectedAnswer,
  })

  //navigates to next question
  if (currentQuestionIndex < questionData.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setSelectedAnswer('') //resets selected answer for next question
  } else {
    try {
      const userId = 1
      const response = await fetch('http://localhost:3000/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, answers }),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const responseData = await response.json()
      setQuizResult(responseData)
      setQuizCompleted(true)
    } catch (error) {
      console.error('Error submitting quiz:', error)
      setError('Could not submit quiz. Please try again')
    }
  }
}

if 

let score = 0
questionData.forEach(question => {
  const selected = answers[question.id]
  if (selected) {
    score += question.score[selected] || 0
  }
})
console.log("Final Score:", score)
setQuizCompleted(true)
  }
return (
  <div>Quiz</div>
)
}

export default Quiz
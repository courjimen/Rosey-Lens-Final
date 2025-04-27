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

  const handleSubmit = async () => {
    if (!selectedAnswer) return //prevents submitting empty answer

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

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
      </div>
    )
  }

  if (!questionData || questionData.length === 0) {
    return (
      <div>
        <h2>No questions to displaly</h2>
      </div>
    )
  }

  if (quizCompleted) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your mood: {quizResult?.mood}</p>
        <p>Your score: {quizResult?.totalScore}</p>
      </div>
    )
  }

  const currentQuestion = questionData[currentQuestionIndex]

  return (
    <div className='quiz-container'>
      <Card className='quiz-card'>
        <CardHeader>
          <CardTitle className='quiz-title'>
            Question {currentQuestionIndex + 1} / {questionData.length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='question-text'>{currentQuestion.text}</p>
          <RadioGroup
            aria-label={`question-${currentQuestion.id}`}
            name={`question-${currentQuestion.id}`}
            value={selectedAnswer}
            onChange={handleAnswerChange}
          >
            {currentQuestion.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
          <div className='button-container'>
            <Button
              disabled={!selectedAnswer}
              className='submit-button'
              onClick={handleSubmit}
            >
              {currentQuestionIndex === questionData.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default Quiz
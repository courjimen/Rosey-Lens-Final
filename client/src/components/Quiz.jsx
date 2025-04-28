import React, { useState, useEffect } from 'react'
import { Button, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles/Quiz.css'
import { useLocation } from 'react-router-dom'

function Quiz() {
  const [questionData, setQuestionData] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizResult, setQuizResult] = useState(null);

 
  const location = useLocation()
  const firstName = location.state?.firstName

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

  const handleNextQuestion = async () => {
    if (!selectedAnswer) return

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
        //need to set to user
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

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer('')
    }
  }

  if (loading) {
    return (
      <div className='loading-container'>
        <h2>Loading...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className='error-container'>
        <h2>Error: {error}</h2>
      </div>
    )
  }

  if (!questionData || questionData.length === 0) {
    return (
      <div className='no-questions-container'>
        <h2>No questions to displaly</h2>
      </div>
    )
  }

  if (quizCompleted) {
    return (
      <div className='quiz-completed-container'>
        <Card className='completed-card'>
          <CardHeader title="Quiz Completed!" className='completed-header' />
          <CardContent className='completed-content'>
            <Typography variant="body1">Your mood: {quizResult?.mood}</Typography>
            <Typography variant="body1">Your score: {quizResult?.totalScore}</Typography>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentQuestion = questionData[currentQuestionIndex]

  return (
    <div className='quiz-container'>
      <Card className='quiz-card'>
        <h1>Hi, {firstName}</h1>
        <h3>Answer the questions below to rate your mood:</h3>
        <CardHeader>
          <Typography className='quiz-title'>
            Question {currentQuestionIndex + 1} / {questionData.length}
          </Typography>
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
              disabled={currentQuestionIndex === 0}
              className='prev-button'
              onClick={handlePrevQuestion}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Previous
            </Button>
            <Button
              disabled={!selectedAnswer}
              className='submit-button'
              onClick={handleNextQuestion}
            >
              {currentQuestionIndex === questionData.length - 1 ? 'Submit' : 'Next'}
              {currentQuestionIndex !== questionData.length - 1 && <FontAwesomeIcon icon={faArrowRight} />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default Quiz
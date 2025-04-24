import React, { useState, useEffect } from 'react'
import { Button, RadioGroup, Radio, FormControlledLLabel } from '@mui/material'
import { Card, CardContent, CardHeader, CardTitle } from '@mui/material'
import '../styles/Quiz.css'

function Quiz() {
  const [questionData, setQuestionData] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  return (
    <div>Quiz</div>
  )
}

export default Quiz
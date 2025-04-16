import express from 'express'
import cors from 'cors'
import moodQuestions from './moodQuiz.js'
import moodData from './currentMood.js'
// import pool from './db.js'

const app = express()
const port = 3000


//GET QUESTIONS
app.get('/question', (req, res) => {
  res.json(moodQuestions)
})

//GET Current Mood Data
app.get('/mood', (req, res) => {
  res.json(moodData)
})

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
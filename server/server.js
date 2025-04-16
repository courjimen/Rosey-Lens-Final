import express from 'express'
import cors from 'cors'
import moodQuestions from './moodQuiz.js'
// import pool from './db.js'

const app = express()
const port = 3000


//GET QUESTIONS
app.get('/question', (req, res) => {
  res.json(moodQuestions)
})

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
import express from 'express'
import cors from 'cors'
import moodQuestions from './moodQuiz.js'
import moodData from './currentMood.js'
import pool from './db.js'
// import fetch from 'node-fetch'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

//POST NEW USER
app.post('/new', async (req, res) => {
  const {username, email, phone, password} = req.body

  try {
    const result = await pool.query('INSERT INTO user (username, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING *', [username, email, phone, password])
    res.json(result.rows[0])
  } catch (err) {
    console.error('Error creating user: ', err)
    res.sendStatus(500)
  }
})
//GET QUESTIONS
app.get('/question', (req, res) => {
  res.json(moodQuestions)
})

//GET Current Mood Data
app.get('/mood', (req, res) => {
  res.json(moodData)
})

//GET BIBLE VERSE
app.get('/bible-verse', async (req, res) => {
  const apiUrl = "https://api.biblesupersearch.com/api"
  try {
    const res = await fetch(apiUrl)

    const data = await res.json()
    res.json(data)
  } catch (err) {
    console.error('Error fetching Bible verse: ', err)
    res.status(500).send('Error retrieving Bible verse')
  }
})

//POST QUIZ SUBMISSION (CURRENT MOOD)
app.post('/quiz', async (req, res) => {
  try {
    const { userId, answers } = req.body
    let totalScore= 0

    //Calculate score
    for (const questionId in answers) {
      const answer = answers[questionId]
      const questionResult = await pool.query('SELECT score FROM questions WHERE id = $1', [questionId])
//STOPPED HERE
    }
  }
})

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
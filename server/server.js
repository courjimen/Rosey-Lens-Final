import express from 'express'
import cors from 'cors'
import moodQuestions from './moodQuiz.js'
import moodData from './currentMood.js'
import pool from './db.js'

const app = express()
const port = 3000

//POST NEW USER
app.post('/new', async () => {
  const {username, email, phone, password} = req.body

  try {
    const result = await pool.query('INSERT INTO user (username, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING *', [username, email, phone, password])
    res.json(result.rows[0])
  } catch (err) {
    console.error('Error creating contact: ', err)
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

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
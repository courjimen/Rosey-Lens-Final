import express from 'express'
import cors from 'cors'
import moodQuestions from './moodQuiz.js'
import moodData from './currentMood.js'
import { calculateScore } from './calculateScore.js'
import pool from './db.js'
import fetch from 'node-fetch'
import { positive, neutral, negative } from './currentMood.js'


const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  next();
});

//POST NEW USER (UPDATED)
app.post('/newuser', async (req, res) => {
  const { firstname, lastname, email } = req.body

  try {
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if (userCheck.rows.length > 0) {
      return res.status(200).json({ message: 'User logged in', user: userCheck.rows[0] })
    } else {
      const result = await pool.query('INSERT INTO users (firstname, lastname, email) VALUES ($1, $2, $3) RETURNING *', [firstname, lastname, email])
      res.status(201).json({ message: "User created", user: result.rows[0] })
    }
  } catch (err) {
    console.error('Error creating user: ', err)
    res.sendStatus(500)
  }
})

//See users
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users')
    res.json(result.rows)
  } catch (err) {
    console.error('Error :', err)
    res.sendStatus(500)
  }
})

//Google Login
app.post('/login', async (req, res) => {
  const { firstname, lastname, email } = req.body

  try {
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if (userCheck.rows.length > 0) {
      return res.status(200).json({ message: 'User logged in', user: userCheck.rows[0] })
    } else {
      const result = await pool.query('INSERT INTO users (firstname, lastname, email) VALUES ($1, $2, $3) RETURNING *', [firstname, lastname, email])
      res.status(201).json({ message: "User created", user: result.rows[0] })
    }
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

//GET Mood Affirmations
app.get('/affirmation/:category', (req, res) => {
  const { category } = req.params
  const affirmations = {
    positive: positive,
    neutral: neutral,
    negative: negative,
  }

  if (affirmations[category]) {
    const randomIndex = Math.floor(Math.random() * affirmations[category].length)
    res.json({ affirmation: affirmations[category][randomIndex] })
  } else {
    res.status(400).json({ error: 'Invalid mood category' })
  }

})

//GET BIBLE VERSE (UPDATED)
app.get('/bible', async (req, res) => {
  const searchTerm = "love"
  const bibleVersion = 'asv'

  if (!searchTerm) {
    return res.status(400).send('Could not search verses')
  }

  const apiUrl = `https://api.biblesupersearch.com/api?bible=${bibleVersion}&search=${searchTerm}`

  try {
    const apiResponse = await fetch(apiUrl)
    if (!apiResponse.ok) {
      return res.status(apiResponse.status).send(`Error from Bible API: ${apiResponse.statusText}`)
    }
    const data = await apiResponse.json()

    //selects random verse
    if (data && data.results && data.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.results.length)
      const randomVerse = data.results[randomIndex]
      res.json({ verse: randomVerse })
    } else {
      res.status(404).send('No verses found')
    }

  } catch (err) {
    console.error('Error fetching Bible verse: ', err)
    res.status(500).send('Error retrieving Bible verse')
  }
})

//POST QUIZ SUBMISSION (UPDATED)
app.post('/quiz', async (req, res) => {
  try {
    const { user_id, answers } = req.body
  
    const {moodCategory, message, totalScore} = calculateScore(answers);

    const result = await pool.query('INSERT INTO quiz_scores (user_id, score, date_completed, mood_category, message) VALUES ($1, $2, NOW(), $3, $4) RETURNING *', [user_id, totalScore, moodCategory, message]
    );
    const quizResult = result.rows[0];

    res.status(201).json({
      message: 'Quiz submitted successfully',
      totalScore,
      mood: message,
      quizResult: quizResult,
      moodCategory: moodCategory,
    });

  } catch (error) {
    console.error('Error submitting quiz:', error);
    res.status(500).json({ error: 'Failed to submit quiz', message: error.message });
  }
});

//See quiz scores
app.get('/quiz', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM quiz_scores')
    res.json(result.rows)
  } catch (err) {
    console.error('Error :', err)
    res.sendStatus(500)
  }
})

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
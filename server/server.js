import express from 'express'
import cors from 'cors'
import moodQuestions from './moodQuiz.js'
import moodData from './currentMood.js'
import pool from './db.js'
import fetch from 'node-fetch'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  next();
});

//POST NEW USER
app.post('/users', async (req, res) => {
  const { firstname, lastname, email } = req.body

  try {
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const result = await pool.query('INSERT INTO users (firstname, lastname, email) VALUES ($1, $2, $3) RETURNING *', [firstname, lastname, email])
    res.status(201).json({ message: "User created", user: result.rows[0] })
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
app.get('/bible', async (req, res) => {
  const searchTerm = req.query.search
  const bibleVersion = 'asv'

  if(!searchTerm) {
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
      res.json({ verse:randomVerse })
    } else {
      res.status(404).send('No verses found')
    }
    
  } catch (err) {
    console.error('Error fetching Bible verse: ', err)
    res.status(500).send('Error retrieving Bible verse')
  }
})

//POST QUIZ SUBMISSION (CURRENT MOOD)
app.post('/quiz', async (req, res) => {
  try {
    const { user_id, score } = req.body
    let totalScore = 0

    //Calculate score
    for (const questionId in answers) {
      const answer = answers[questionId]
      const questionResult = await pool.query('SELECT score FROM questions WHERE id = $1', [questionId])

      if (questionResult.rows.length > 0) {
        const question = questionResult.rows[0]
        const scoreData = question.scoreData
        if (scoreData && scoreData[answer] !== undefined) {
          totalScore += scoreData[answer]
        }
      }
    }

    let moodCategory = ''
    let message = ''

    if (totalScore > 4) {
      moodCategory = 'positive'
      message = moodData.positive[Math.floor(Math.random() * moodData.positive.length)]
    } else if (totalScore < 4 && totalScore > -2) {
      moodCategory = 'neutral'
      message = moodData.neutral[Math.floor(Math.random() * moodData.neutral.length)]
    } else {
      moodCategory = 'negative'
      message = moodData.negative[Math.floor(Math.random() * moodData.negative.length)]
    }

    const result = await pool.query('INSERT INTO quiz_scores (user_id, score, date_completed) VALUES ($1, $2, NOW()) RETURNING *',
      [user_id, score]
    );
    const quizResult = result.rows[0]

    res.status(201).json({
      message: 'Quiz submitted successfully',
      totalScore,
      mood: message,
      quizResult: newQuizResult,
    });

  } catch (error) {
    console.error('Error submitting quiz:', error);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
});

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
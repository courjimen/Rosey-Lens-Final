import express from 'express'
import cors from 'cors'
import moodQuestions from './moodQuiz.js'
import moodData from './currentMood.js'
import { calculateScore } from './calculateScore.js'
import pool from './db.js'
import fetch from 'node-fetch'
import { positive, neutral, negative } from './currentMood.js'
import { loving, uplifting, encouraging } from './currentMood.js'


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
//POST FAVORITES
app.post('/faves', async (req, res) => {
    const { user_id, favorite_type, item_id } = req.body

    try {
      const result = await pool.query('INSERT INTO favorites (user_id, favorite_type, item_id) VALUES ($1, $2, $3) ON CONFLICT (user_id, favorite_type, item_id) DO NOTHING RETURNING *', [user_id, favorite_type, item_id])

      if (result.rows.length > 0) {
        res.status(201).json({ message: 'Affirmaation added to faves', favorite: result.rows[0] })
      } else {
        res.status(200).json({ message: 'Already in faves' })
      }
    } catch (error) {
      console.error('Error adding affirmation to faves: ', error)
      res.status(500).json({ error: 'Failed to add fave', details: error.message })
    }
  })
  
// //GET FAVORITES 
// app.get('faves/affirmations', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT ')
//   }
// })

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
// NEW FETECH BIBLE VERSE
const fetchRandomVerse = async (moodCategory) => {
  let verseReference = '';

  if (moodCategory === 'positive') {
      verseReference = uplifting[Math.floor(Math.random() * uplifting.length)];
  } else if (moodCategory === 'neutral') {
      verseReference = encouraging[Math.floor(Math.random() * encouraging.length)];
  } else if (moodCategory === 'negative') {
      verseReference = loving[Math.floor(Math.random() * loving.length)];
  }

  if (!verseReference) {
      return null;
  }

  const bibleVersion = 'net';
  const apiUrl = `https://api.biblesupersearch.com/api?bible=${bibleVersion}&reference=${verseReference}`;

  try {
      const apiResponse = await fetch(apiUrl);
      if (!apiResponse.ok) {
          console.error(`Error fetching Bible verse (status ${apiResponse.status}): ${apiResponse.statusText}`);
          return null;
      }
      const data = await apiResponse.json();

      if (data && data.results && data.results.length > 0) {
          const verseData = data.results[0];
          if (verseData) {
              const versesText = {};
              if (verseData.verses && verseData.verses.net) {
                  for (const chapter in verseData.verses.net) {
                      if (!versesText[chapter]) {
                          versesText[chapter] = {};
                      }
                      for (const verseNum in verseData.verses.net[chapter]) {
                          versesText[chapter][verseNum] = verseData.verses.net[chapter][verseNum].text;
                      }
                  }
              }
              return {
                  book_name: verseData.book_name,
                  chapter_verse: verseData.chapter_verse,
                  verses: versesText
              };
          }
      }
      return null;
  } catch (err) {
      console.error('Error fetching Bible verse: ', err);
      return null;
  }
};

//NEW POST QUIZ
app.post('/quiz', async (req, res) => {
  try {
      const { user_id, answers } = req.body;

      const { moodCategory, message, totalScore } = calculateScore(answers);

      const quizResult = await pool.query(
          'INSERT INTO quiz_scores (user_id, score, date_completed, mood_category, message) VALUES ($1, $2, NOW(), $3, $4) RETURNING *',
          [user_id, totalScore, moodCategory, message]
      );

      const bibleVerseData = await fetchRandomVerse(moodCategory);

      res.status(201).json({
          message: 'Quiz submitted successfully',
          totalScore,
          mood: message,
          quizResult: quizResult.rows[0],
          moodCategory,
          bibleVerse: bibleVerseData,
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
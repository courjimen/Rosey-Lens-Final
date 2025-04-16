import express from 'express'
import cors from 'cors'
// import pool from './db.js'

const app = express()
const port =  3000

//mood quiz questions
const moodQuestions = [
{id: 1, text: 'How is your overall vibe today?'},
{id: 2, text: 'In terms of energy level, are you feelilng like you are...'},
{id: 3, text: 'What has your general outlook been like today?'},
{id: 4, text: 'Are you feeling stressed or anxious at the moment?'},
{id: 5, text: 'How is your headspace right now, is it...'},
]
//write routes

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})
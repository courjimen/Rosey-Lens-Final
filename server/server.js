import express from 'express'
import cors from 'cors'
// import pool from './db.js'

const app = express()
const port =  3000

//write routes

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})
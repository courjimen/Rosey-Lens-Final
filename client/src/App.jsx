import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import MoodHistory from './components/MoodHistory'
import RevealRose from './components/RevealRose'
import Faves from './components/Faves'
import Quiz from './components/Quiz'
import CurrentMood from './components/CurrentMood'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/new" element={<CreateAccount />} />
        <Route path="/history" element={<MoodHistory />} />
        <Route path="/reveal" element={<RevealRose />} />
        <Route path="/favorites" element={<Faves />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/select" element={<Selection />} />
        <Route path="/mood" element={<CurrentMood />} />
        <Route path="/affirmation" element={<Affirmation />} />
      </Routes>
    </Router>
  )
}

export default App

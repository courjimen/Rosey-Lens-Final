import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import MoodHistory from './components/MoodHistory'
import RevealRose from './components/RevealRose'
import Faves from './components/Faves'
import Quiz from './components/Quiz'
import Selection from './components/Selection'
import Affirmation from './components/Affirmation'
import Home from './components/Home'
import GuestHome from './components/GuestHome'
import LoginHome from './components/LoginHome'
import Verse from './components/Verse'

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
        <Route path="/affirmation" element={<Affirmation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/guest" element={<GuestHome />} />
        <Route path="/user" element={<LoginHome />} />
        <Route path="/verse" element={<Verse />} />
      </Routes>
    </Router>
  )
}

export default App

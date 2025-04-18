import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import MoodHistory from './components/MoodHistory'
import RevealRose from './components/RevealRose'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/new" element={<CreateAccount />} />
        <Route path="/history" element={<MoodHistory />} />
        <Route path="/reveal" element={<RevealRose />} />
      </Routes>
    </Router>
  )
}

export default App

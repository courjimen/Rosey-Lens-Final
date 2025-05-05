import React from 'react'
import '../styles/MoodHistory.css'
import { useLocation, Link } from 'react-router-dom'

function MoodHistory() {
  const location = useLocation()
  const userId = location.state?.userId
  const firstName = location.state?.firstName

  return (
    <>
    <h2> Mood History Feature Coming Soon! <br/>
    <Link to='/user' state={{ userId: userId, firstName: firstName}}>Return Home</Link>
    </h2>
    </>
  )
}

export default MoodHistory
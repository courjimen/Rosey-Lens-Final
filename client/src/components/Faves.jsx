import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/Faves.css'


function Faves() {
  const location = useLocation()
  const userId = location.state?.userId

  const [userFaves, setUserFaves] = useState([])

  useEffect(() => {
    const fetchUserFaves = async () => {
      if (userId) {
        try {
          const response = await fetch(`http://localhost:3000/users/${userId}/faves`)

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          const data = await response.json()
          setUserFaves(data)
        } catch (error) {
          console.error('Error displaying favorites:', error)
        }
      } else {
        console.log('User Id not available. Cannot retrieve faves')
        setUserFaves([])
      }
    }
    fetchUserFaves()
  }, [userId])

  return (
    <div>
      <h2>Your Favorite Affirmations</h2>
      {userFaves.map((favorite, index) => (
        <div key={index}>
          Type: {favorite.favorite_type}, Item ID: {favorite.item_id}
        </div>
      )
      )}
    </div>
  )
}

export default Faves
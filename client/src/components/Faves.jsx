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

  const deleteFave = async (faveItemId) => {
    if (!userId) {
      console.log('User not logged in.')
      return
    }
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}faves/${faveItemId}/`, {
        method: 'DELETE',
      })
      if (response.status === 204) {
        setUserFaves(userFaves.filter((favorite) => favorite.item_id !== faveItemId))
      } else if (response.status === 404) {
        console.error('Fave not found.')
      } else {
        console.error('Failed to delete favorite:', response.status)
      }
    } catch (error) {
      console.error('Error removing item from favorites')
    }
  }

  return (
    <div className='faves-page'>
      <h2>Your Favorite Affirmations</h2>
      {userFaves.map((favorite, index) => (
        <div key={index} className='fave-item'>
          <FontAwesomeIcon icon={faTrashAlt} className='delete-icon' onClick={() => deleteFave(favorite.item_id)} />
          You saved this: {favorite.favorite_type}: "{favorite.item_id}"
        </div>
        )
      )}
      <Link to='/user'>Go Back</Link>
    </div>
  )
}

export default Faves
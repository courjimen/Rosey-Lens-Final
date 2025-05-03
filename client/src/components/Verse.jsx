import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStarSolid, faStar as faStarRegular } from '@fortawesome/free-solid-svg-icons'
import '../styles/Affirmation.css'
import roseImage from '../images/roseImage.webp'

function Verse() {
    const [isFavorited, setIsFavorited] = useState(false)

    const location = useLocation()
    const bibleVerseData = location.state?.bibleVerse
    const userId = location.state?.userId
    const firstName = location.state?.firstName

    console.log('Mood category in bible verse:', bibleVerseData)

    const handleFave = async () => {
        if(!bibleVerseData) {
            console.log('No Bible Verses found to fave')
            return
        }

        const itemId = bibleVerseData.chapter_verse
        const bookName = bibleVerseData.book_name
        let verseText = ''

        if (bibleVerseData.verses && Object.keys(bibleVerseData.verses).length > 0) {
            const firstChapter = Object.keys(bibleVerseData.verses)[0];
            const firstVerseNumber = Object.keys(bibleVerseData.verses[firstChapter])[0];
            verseText = bibleVerseData.verses[firstChapter][firstVerseNumber];
        }

        if (!userId) {
            console.log('Please login to favorite.')
            return
        }

        try {
            const response = await fetch('http://localhost:3000/faves', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: userId,
                    favorite_type: 'Bible Verse',
                    item_id: itemId,
                    book_name: bookName,
                    verse_text: verseText
                }),
            })
            console.log(response)
            if (response.ok) {
                setIsFavorited(true)
                alert('Bible Verse favorited successfully!')
            } else {
                const errorData = await response.json()
                console.error('Failed to fave verse:', errorData)
            }
        } catch (error) {
            console.error('Error favoriting verse:', error)
        }
    }
    if (!bibleVerseData) {
        return (
            <div className='affirmation-container'>
                <h2>Oops! No Bible verse was found.</h2>
                <div className='links'>
                <Link className='green-text'to='/user' state={{ userId: userId, firstName: firstName }}>Return Home</Link>
                </div>
            </div>
        );
    }

    let verseTextDisplay = '';
    if (bibleVerseData.verses && Object.keys(bibleVerseData.verses).length > 0) {
        const firstChapter = Object.keys(bibleVerseData.verses)[0];
        const firstVerseNumber = Object.keys(bibleVerseData.verses[firstChapter])[0];
        verseTextDisplay = bibleVerseData.verses[firstChapter][firstVerseNumber];
    }
    return (
        <div className='affirmation-container'>
            <h2>We hope this Bible verse brightens your day</h2>
            <div className='affirmation-card'>
                <h3>{bibleVerseData.book_name} {bibleVerseData.chapter_verse}</h3>
                <p>"{verseTextDisplay}"</p>
                <button className='fave-button' onClick={handleFave}>
                    <FontAwesomeIcon icon={isFavorited ? fasStarSolid : faStarRegular} size='lg' />
                </button>
            </div>

            <div className='links'>
                <Link to='/user' state={{ userId: userId, firstName: firstName }}>Return Home</Link> <div className='green-text'>||</div>
                <Link to='/quiz' state={{ userId: userId, firstName: firstName }}> Retake Quiz</Link>
                <Link to='/share' state={{ userId: userId, firstName: firstName }}></Link>
            </div>
            <img className='rose-affirmation' src={roseImage}/>
        </div>
    );
}

export default Verse;
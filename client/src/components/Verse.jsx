import React, {useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import '../styles/Affirmation.css'

function Verse() {

  const location = useLocation()
  const bibleVerseData = location.state?.bibleVerse
  console.log('Mood category in bible verse:', bibleVerseData)

  if (!bibleVerseData) {
    return (
        <div className='affirmation-container'>
            <h2>Oops!</h2>
            <p>No Bible verse was found.</p>
            <Link to='/user'>Return Home</Link>
            <Link to='/quiz'>Take another Quiz</Link>
            <Link to='/share'></Link>
        </div>
    );
}

let verseText = '';
    if (bibleVerseData.verses && Object.keys(bibleVerseData.verses).length > 0) {
        const firstChapter = Object.keys(bibleVerseData.verses)[0];
        const firstVerseNumber = Object.keys(bibleVerseData.verses[firstChapter])[0];
        verseText = bibleVerseData.verses[firstChapter][firstVerseNumber];
    }
    return (
      <div className='affirmation-container'>
          <h2>We hope this Bible verse brightens your day</h2>
          <div className='affirmation-card'>
              <h3>{bibleVerseData.book_name} {bibleVerseData.chapter_verse}</h3>
              <p>{verseText}</p>
          </div>
          <Link to='/user'>Return Home</Link>
          <Link to='/quiz'>Take another Quiz</Link>
          <Link to='/share'></Link>
      </div>
  );
}

export default Verse;
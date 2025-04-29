import React from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import roseImage from '../images/roseImage.webp';
import { Link } from 'react-router-dom'

function GuestQuiz({ quizResult, moodCategory }) {

    let imageOpacity = '100%';
    let grayscale = '0%';
    let contrast = '100%';

    if (moodCategory === 'neutral') {
        imageOpacity = '50%';
        grayscale = '50%';
        contrast = '80%';
    } else if (moodCategory === 'negative') {
        imageOpacity = '10%';
        grayscale = '100%';
        contrast = '60%';
    }

    return (
        <div className='quiz-completed-container'>
            <h2>Thank you for taking the Quiz!</h2>
            <Card className='completed-card'>
                <CardHeader title="Quiz Completed!" className='completed-header' />
                <CardContent className='completed-content'>
                    <Typography variant="body1">Your mood: {quizResult?.mood}</Typography>
                    <img
                        className={`quiz-rose mood-${moodCategory}`}
                        src={roseImage}
                        alt="Rose representing your mood"
                    />
                    <Typography variant="body1">Your score: {quizResult?.totalScore}</Typography>
                </CardContent>
            </Card>
            <Link to="/select">Pick Affirmation</Link>
        </div>
    );
}

export default GuestQuiz

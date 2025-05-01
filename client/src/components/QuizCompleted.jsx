import React from 'react'

function QuizCompleted() {
  return (
    <div className='quiz-completed-container'>
      <h2>Thank you for taking the Quiz! Submit score for your affirmation:</h2>
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
      <h2>
        <button onClick={() => navigate('/select', { state: { userId: userId, firstName: firstName, quizResult: quizResult } })}> Pick Affirmation</button>
      </h2>
    </div>
  )
}

export default QuizCompleted
import moodQuestions from "./moodQuiz.js";
import moodData from "./currentMood.js";

//Calculate score
 export const calculateScore = (answers) => {
    let totalScore = 0
    for (const questionId in answers) {
      const answer = answers[questionId]
      const question = moodQuestions.find(q => q.id === parseInt(questionId))

      if (question && question.score && question.score[answer] !== undefined) {
        totalScore += question.score[answer]
      }
    }

    let moodCategory = ''
    let message = ''

    if (totalScore > 4) {
      moodCategory = 'positive'
      message = moodData.positive[Math.floor(Math.random() * moodData.positive.length)]
    } else if (totalScore < 4 && totalScore > -10) {
      moodCategory = 'neutral'
      message = moodData.neutral[Math.floor(Math.random() * moodData.neutral.length)]
    } else {
      moodCategory = 'negative'
      message = moodData.negative[Math.floor(Math.random() * moodData.negative.length)]
    }

    return {moodCategory, message, totalScore};
  }
//mood quiz questions
const moodQuestions = [
    {
      id: 1,
      text: 'How is your overall vibe today?',
      options: ['Pretty awesome', 'A little down', 'Really not great'],
      score: {'Pretty awesome': 2, 'A little down': 0, 'Really not great': -2}
    },
    { 
      id: 2, 
      text: 'In terms of energy level, are you feelilng like you are...',
      options: ['Ready to tackle the world!', 'Just coasting', 'Totally running on empty'],
      score: {'Ready to tackle the world!': 2, 'Just coasting': 0, 'Totally running on empty': -2} 
    },
    { 
      id: 3, 
      text: 'What has your general outlook been like today?',
      options: ['Feeling really positive', 'Kind of neutral tbh', 'Honestly negative and down'],
      score: {'Feeling really positive': 2, 'Kind of neutral tbh': 0, 'Honestly negative and down': -2}
    },
    { 
      id: 4, 
      text: 'Are you feeling stressed or anxious at the moment?',
      options: ['Not at all', 'A little bit', 'Completely overwhelmed'],
      score: {'Not at all': 2, 'A little bit': 0, 'Completely overwhelmed': -2}
    },
    { 
      id: 5, 
      text: 'How is your headspace right now, is it...',
      options: ['Calm and clear', 'Restless and worried', 'Anxious and sad'],
      score: {'Calm and clear': 2, 'Restless and worried': 0, 'Anxious and sad': -2}
    },
  ]

  export default moodQuestions
import React from 'react'
import { render, screen } from '@testing-library/react'
import Quiz from '../components/Quiz.jsx'

describe('Quiz component renders', () => {
    it('renders Quiz'), () => {
        render(<Quiz />)
        expect(screen.getByText("asdfasdf")).toBeInTheDocument();
        
    }
})
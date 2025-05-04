import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Affirmation from '../components/Affirmation.jsx'

describe('Affirmation component renders', () => {
    it('renders Fave Button'), () => {
        render(
            <BrowserRouter>
                <Affirmation />
            </BrowserRouter>)
        expect(screen.getByRole('button')).toBeInTheDocument()
    }
})
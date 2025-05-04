import React from 'react'
import { render } from '@testing-library/react'
import Affirmation from '../components/Affirmation.jsx'

describe('Affirmation component renders', () => {
    it('renders Affirmation'), () => {
        render(<Affirmation />)
    }
})
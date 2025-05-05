import React from 'react'
import { render, screen } from '@testing-library/react'
import CreateAccount from '../components/CreateAccount'

describe('New Account Component', () => {
    it('renders the header', () => {
        render(<CreateAccount />)
        expect(screen.getByRole('button')).toBeDefined()
    })
})



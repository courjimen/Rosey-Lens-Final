import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CreateAccount from '../components/CreateAccount'

describe('New Account Component', () => {
    it('renders the header'), () => {
        render(<CreateAccount />)

        const header = screen.getByRole('heading', { name: /Create Account/i })

        expect(header).toBeInTheDocument()
    } 
})



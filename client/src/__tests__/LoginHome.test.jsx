import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import LoginHome from '../components/LoginHome.jsx'

describe('Login Home component renders', () => {
    it('renders View Favorites Text', () => {
        render(<LoginHome />)
        expect(screen.getByText('View Favorites')).toBeDefined()
    })

    it('renders rose image', () => {
        render(<LoginHome />)
        expect(screen.getByRole('img')).toBeDefined()
    })
})
import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../components/Home.jsx'

describe('Home component renders', () => {
    it('renders Home', () => {
        render(<Home />)
        expect(screen.getByText('Self care is in the air!')).toBeDefined()
    })

    it('renders Links', () => {
        render(<Home />);
        expect(screen.getByRole('link', { name: /login with google/i })).toBeDefined();
        expect(screen.getByRole('link', { name: /create account/i })).toBeDefined();
        expect(screen.getByRole('link', { name: /continue as guest/i })).toBeDefined();
    });
})
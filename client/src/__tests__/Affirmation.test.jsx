import React from 'react';
import { render, screen } from '@testing-library/react';
import Affirmation from '../components/Affirmation.jsx';
import { vi } from 'vitest';


describe('App renders', () => {
    it('renders', () => {
        render(<Affirmation />);
        // expect(screen.getByText('Hello')).toBeDefined()
    })
})
import React from 'react'
import { render, screen } from '@testing-library/react';
import { TestComponent } from "../components/TestComponent";


describe('App renders', () => {
    it('renders', () => {
        render(<TestComponent />);
        expect(screen.getByText('asoldjk')).toBeDefined()
    })
})
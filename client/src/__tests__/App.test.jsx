import React from 'react'
import { render, expect, describe, it } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
    it('renders header'), () => {
        render(<App />)
    }
})



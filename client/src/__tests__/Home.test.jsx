import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Home from '../components/Home.jsx'

describe('Home component renders', () => {
    it('renders Home'), () => {
        render(<Home />)
    }
})
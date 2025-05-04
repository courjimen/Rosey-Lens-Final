import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Login from '../components/Login.jsx'

describe('Login component renders', () => {
    it('renders Login'), () => {
        render(<Login />)
    }
})
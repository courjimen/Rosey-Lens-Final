import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import LoginHome from '../components/LoginHome.jsx'

describe('Login Home component renders', () => {
    it('renders LoginHome'), () => {
        render(<LoginHome />)
    }
})
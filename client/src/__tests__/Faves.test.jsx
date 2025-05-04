import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Faves from '../components/Faves.jsx'

describe('Faves component renders', () => {
    it('renders Faves'), () => {
        render(<Faves />)
    }
})
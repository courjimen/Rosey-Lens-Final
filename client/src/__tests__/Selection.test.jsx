import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Selection from '../components/Selection.jsx'

describe('Selection component renders', () => {
    it('renders Selection'), () => {
        render(<Selection />)
    }
})
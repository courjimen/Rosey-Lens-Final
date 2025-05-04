import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Verse from '../components/Verse.jsx'

describe('Verse component renders', () => {
    it('renders GuestHome', () => {
        render(<Verse />)
    })
})
import React from 'react'
import { render } from '@testing-library/react'
import Verse from '../components/Verse.jsx'

describe('Verse component renders', () => {
    it('renders GuestHome', () => {
        render(<Verse />)
    })
})
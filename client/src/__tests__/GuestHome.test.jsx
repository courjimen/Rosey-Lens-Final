import React from 'react'
import { render } from '@testing-library/react'
import GuestHome from '../components/GuestHome.jsx'

describe('Guest Home component renders', () => {
    it('renders GuestHome', () => {
        render(<GuestHome />)
    })
})
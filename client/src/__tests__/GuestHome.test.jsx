import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import GuestHome from '../components/GuestHome.jsx'

describe('Guest Home component renders', () => {
    it('renders GuestHome'), () => {
        render(<GuestHome />)
    }
})
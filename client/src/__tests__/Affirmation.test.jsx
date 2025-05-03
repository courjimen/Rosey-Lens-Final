import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Affirmation from '../components/Affirmation.jsx'
import { vi } from 'vitest'

describe('faveStar', () => {
  it('renders star and handles clicks'), async () => {
    global.fetch = vi.fn();
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ affirmation: 'Test Affirmation' }),
    });
    render(
      <MemoryRouter
        initialEntries={[{ pathname: '/affirmation', state: { quizResult: { moodCategory: 'happy' }, userId: '123' } }]}
        initialIndex={0}
      >
        <Routes>
          <Route path='/affirmation' element={<Affirmation />} />
        </Routes>
      </MemoryRouter>
    )

 await waitFor(() => {
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    const faveButton = screen.getByRole('button')
    let starIcon = faveButton.querySelector('svg');
    expect(starIcon).toHaveAttribute('data-icon', 'star');

    fireEvent.click(faveButton)

    await waitFor(() => {
      starIcon = faveButton.querySelector('svg');
      expect(starIcon).toHaveAttribute('data-icon', 'star-solid');
    });

    // Use vi.fn's assertions
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:3000/faves',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: '123',
          favorite_type: 'Affirmation',
          item_id: 'Test Affirmation',
        }),
      }
    );
  }})

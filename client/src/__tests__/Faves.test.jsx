import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Faves from '../components/Faves';

const mockLocation = (state) => ({
  pathname: '/faves',
  state: state,
});

vi.mock('react-router-dom', () => {
  const actual = vi.importActual('react-router-dom');
  return {
    ...actual,
    useLocation: vi.fn(),
    Link: ({ children, ...props }) => <a {...props}>{children}</a>,
    BrowserRouter: ({ children }) => <div>{children}</div>,
  };
});

// Mock fetch
global.fetch = vi.fn();

describe('Faves Component', () => {
  beforeEach(() => {
    useLocation.mockReturnValue(mockLocation({ userId: 'user123', firstName: 'Test' }));
    global.fetch.mockClear();
  });

  it('renders the trashcan icon', async () => {
    const mockFaves = [
      {
        favorite_type: 'Affirmation',
        item_id: 'Test affirmation',
      },
    ];
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockFaves),
    });

    render(
      <BrowserRouter>
        <Faves />
      </BrowserRouter>
    );

    // Wait for the component to render and fetch data
    await waitFor(() => screen.getByTestId('trash-icon'));

   expect(screen.getByTestId('trash-icon')).toBeDefined();
  });
});
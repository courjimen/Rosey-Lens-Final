import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Quiz from '../components/Quiz';
import { BrowserRouter, useLocation } from 'react-router-dom';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useLocation: vi.fn(), 
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

// Mock fetch
global.fetch = vi.fn();

describe('Quiz Component renders', () => {
  beforeEach(() => {
    
    const mockLocation = (state) => ({
      pathname: '/quiz',
      state: state,
    });
    useLocation.mockReturnValue(mockLocation({ userId: 'user123', firstName: 'Test User' }));
    global.fetch.mockClear();
  });

  it('renders the quiz card', async () => {

    const mockQuestions = [
      {
        id: 1,
        text: 'How are you feeling today?',
        options: ['Great', 'Okay', 'Not so good'],
      },
    ];
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockQuestions),
    });

    render(
      <BrowserRouter>
        <Quiz />
      </BrowserRouter>
    );

    await waitFor(() =>
      screen.getByText('Answer the questions below to rate your mood:', { exact: false })
    );

    const quizCard = screen.getByText('Answer the questions below to rate your mood:');
    expect(quizCard).toBeDefined();
  });
});

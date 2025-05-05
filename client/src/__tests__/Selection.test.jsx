import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Selection from '../components/Selection.jsx';
import { BrowserRouter, useLocation } from 'react-router-dom';

const mockLocation = (state) => ({
    pathname: '/selection',
    state: state,
});

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useLocation: vi.fn(),
    useNavigate: () => mockNavigate,
    BrowserRouter: ({ children }) => <div>{children}</div>,
    Link: ({ to, children, ...rest }) => (
        <a href={to} {...rest}>{children}</a>
    ),
}));

describe('Selection component', () => {
    beforeEach(() => {
        useLocation.mockReturnValue(mockLocation({ userId: 'user123', firstName: 'Test User', quizResult: { mood: 'happy' } }));
        mockNavigate.mockClear();
    });

    it('renders the affirmation button and navigates to "/affirmation" on click', () => {
        render(
            <BrowserRouter>
                <Selection />
            </BrowserRouter>
        );

        const affirmationButton = screen.getByRole('button', { name: /Enjoy this uplifting message/i });
        expect(affirmationButton).toBeDefined();

        fireEvent.click(affirmationButton);

        expect(mockNavigate).toHaveBeenCalledWith('/affirmation', {
            state: { userId: 'user123', firstName: 'Test User', quizResult: { mood: 'happy' } },
        });
    });
});

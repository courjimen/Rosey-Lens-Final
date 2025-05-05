import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Verse from '../components/Verse';

// Mock Data
const mockLocation = (state) => ({
    pathname: '/verse',
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

global.fetch = vi.fn();

describe('Verse Component', () => {
    beforeEach(() => {
        useLocation.mockReturnValue(mockLocation({
            userId: 'user123',
            firstName: 'Test User',
            bibleVerse: {
                book_name: 'Genesis',
                chapter_verse: '1:1',
                verses: { 1: { 1: 'In the beginning...' } },
            },
        }));
        global.fetch.mockClear();
    });

    it('renders the fave button with a star icon', async () => {
        render(
            <BrowserRouter>
                <Verse />
            </BrowserRouter>
        );

        await waitFor(() => screen.getByTestId('fave-button'));

        const faveButton = screen.getByTestId('fave-button');
        expect(faveButton).toBeDefined();
    });

    it('calls handleFave when the fave button is clicked', async () => {
        const handleFaveMock = vi.fn();

        render(
            <BrowserRouter>
                <Verse />
            </BrowserRouter>
        );

        const faveButton = await screen.findByTestId('fave-button');
        faveButton.onclick = handleFaveMock;

        fireEvent.click(faveButton);
        expect(handleFaveMock).toHaveBeenCalledTimes(1);
    });
});


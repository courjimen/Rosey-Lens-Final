import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Affirmation from '../components/Affirmation.jsx';

describe('Affirmation component renders', () => {
    it('renders header text', async () => {
        //mock data
        vi.mock('react-router-dom', () => ({
            ...vi.importActual('react-router-dom'),
            useLocation: vi.fn(() => ({
                pathname: '/affirmation',
                state: { quizResult: { moodCategory: 'happy' } },
                search: '',
                hash: '',
                key: 'default',
            })),
            Link: vi.fn(({ to, children, ...rest }) => (
                <a href={to} {...rest}>{children}</a>
            )),
        }));

        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ affirmation: 'A test affirmation!' }),
            })
        );

        render(<Affirmation />);
        await waitFor(() => screen.getByText('A test affirmation!'));
        expect(screen.getByText('We hope this affirmation brightens your day')).exist;
        expect(screen.getByText('A test affirmation!')).toBeDefined();

        vi.restoreAllMocks();
    });
});
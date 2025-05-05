import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../components/Login.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Mock useNavigate (so it doesn't cause an error when Login tries to use it)
const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

// Mock jwtDecode
vi.mock('jwt-decode', () => ({
    jwtDecode: vi.fn(),
}));

// Mock fetch
global.fetch = vi.fn();

describe('Login component renders', () => {
    it('renders the "Sign in below:" text without Router', () => {
        render(
            <GoogleOAuthProvider clientId="your-test-client-id">
                <Login />
            </GoogleOAuthProvider>
        );
        expect(screen.getByText('Sign in below:')).toBeDefined();
    });
});
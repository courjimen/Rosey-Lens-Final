// vitest.setup.js
import { vi } from 'vitest';
import React from 'react';
import 'dotenv/config'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  const useNavigateMock = vi.fn();

  const MockLink = ({ to, children, ...rest }) => (
    <a href={to} {...rest}>{children}</a>
  );

  const MockBrowserRouter = ({ children }) => (
    <div>{children}</div>
  );

  return {
    ...actual,
    useLocation: vi.fn(() => ({
      pathname: '/affirmation',
      state: {},
      search: '',
      hash: '',
      key: 'default',
    })),
    useNavigate: () => useNavigateMock,
    Link: MockLink,
    BrowserRouter: MockBrowserRouter,
  };
});

vi.mock('jwt-decode', () => ({
  jwtDecode: vi.fn(),
}));

global.fetch = vi.fn();
// vitest.setup.js
import { vi } from 'vitest';
import React from 'react';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  const useNavigateMock = vi.fn();

  const MockLink = ({ to, children, ...rest }) => (
    <a href={to} {...rest}>{children}</a>
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
  };
});
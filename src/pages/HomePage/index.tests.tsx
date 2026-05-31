import { render, screen } from '@testing-library/react';
import HomePage from '.';

vi.stubGlobal(
  'fetch',
  vi.fn(() => Promise.resolve({ json: () => Promise.resolve([]) } as Response)),
);

describe('HomePage', () => {
  it('renders main landmark', () => {
    render(<HomePage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders the hero heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});

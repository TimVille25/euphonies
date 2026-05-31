import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from '.';

describe('Nav', () => {
  it('renders all navigation links', () => {
    render(<Nav />);
    expect(screen.getByRole('link', { name: /le chœur/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /agenda/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /rejoindre/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('toggles aria-expanded on burger click', async () => {
    render(<Nav />);
    const burger = screen.getByRole('button', { name: /menu/i });
    expect(burger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(burger);
    expect(burger).toHaveAttribute('aria-expanded', 'true');
  });
});

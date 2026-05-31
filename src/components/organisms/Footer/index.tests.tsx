import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('renders footer content', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/Association loi 1901/)).toBeInTheDocument();
  });
});

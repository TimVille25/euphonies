import { render, screen } from '@testing-library/react';
import ContactSection from '.';

describe('ContactSection', () => {
  it('renders the section heading', () => {
    render(<ContactSection />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders a mailto link', () => {
    render(<ContactSection />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', expect.stringContaining('mailto:'));
  });
});

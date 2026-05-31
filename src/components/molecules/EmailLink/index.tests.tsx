import { render, screen } from '@testing-library/react';
import EmailLink from '.';

describe('EmailLink', () => {
  it('renders a mailto link with the email address', () => {
    render(<EmailLink email="contact@euphonies.fr" />);
    const link = screen.getByRole('link', { name: 'contact@euphonies.fr' });
    expect(link).toHaveAttribute('href', 'mailto:contact@euphonies.fr');
  });
});

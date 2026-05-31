import { render, screen } from '@testing-library/react';
import CtaLink from '.';

describe('CtaLink', () => {
  it('renders link with correct href and text', () => {
    render(<CtaLink href="#presentation">Découvrir le projet</CtaLink>);
    const link = screen.getByRole('link', { name: 'Découvrir le projet' });
    expect(link).toHaveAttribute('href', '#presentation');
  });
});

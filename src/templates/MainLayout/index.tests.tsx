import { render, screen } from '@testing-library/react';
import MainLayout from '.';

describe('MainLayout', () => {
  it('renders nav, main content and footer', () => {
    render(<MainLayout><p>Contenu</p></MainLayout>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText('Contenu')).toBeInTheDocument();
  });
});

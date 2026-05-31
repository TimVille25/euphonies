import { render, screen } from '@testing-library/react';
import JoinSection from '.';

describe('JoinSection', () => {
  it('renders the section heading', () => {
    render(<JoinSection />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders all four etapes', () => {
    render(<JoinSection />);
    expect(screen.getByRole('heading', { level: 4, name: "Séance d'essai" })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: 'Décision collégiale' })).toBeInTheDocument();
  });
});

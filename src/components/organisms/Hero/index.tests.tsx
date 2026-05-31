import { render, screen } from '@testing-library/react';
import Hero from '.';

describe('Hero', () => {
  it('renders the ensemble name', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the CTA link', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /découvrir le projet/i })).toBeInTheDocument();
  });
});

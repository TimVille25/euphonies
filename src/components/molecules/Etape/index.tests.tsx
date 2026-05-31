import { render, screen } from '@testing-library/react';
import Etape from '.';

describe('Etape', () => {
  it('renders titre and description', () => {
    render(<Etape titre="Séance d'essai" description="Vous participez à une répétition." />);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent("Séance d'essai");
    expect(screen.getByText('Vous participez à une répétition.')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import Pilier from '.';

describe('Pilier', () => {
  it('renders titre and description', () => {
    render(<Pilier titre="Des concerts en lieux choisis" description="Chapelles et espaces patrimoniaux." />);
    expect(screen.getByText('Des concerts en lieux choisis')).toBeInTheDocument();
    expect(screen.getByText('Chapelles et espaces patrimoniaux.')).toBeInTheDocument();
  });
});

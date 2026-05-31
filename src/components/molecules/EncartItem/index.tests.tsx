import { render, screen } from '@testing-library/react';
import EncartItem from '.';

describe('EncartItem', () => {
  it('renders its children', () => {
    render(<EncartItem>Partitions fournies plusieurs semaines à l'avance.</EncartItem>);
    expect(screen.getByText(/Partitions fournies/)).toBeInTheDocument();
  });
});

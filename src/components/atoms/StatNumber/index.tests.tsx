import { render, screen } from '@testing-library/react';
import StatNumber from '.';

describe('StatNumber', () => {
  it('renders value and unit', () => {
    render(<StatNumber value={12} unit="voix" />);
    expect(screen.getByText('voix')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
  });
});

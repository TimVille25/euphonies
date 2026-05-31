import { render, screen } from '@testing-library/react';
import Stat from '.';

describe('Stat', () => {
  it('renders value, unit and label', () => {
    render(<Stat value={12} unit="voix" label="Un ensemble intime" />);
    expect(screen.getByText('voix')).toBeInTheDocument();
    expect(screen.getByText('Un ensemble intime')).toBeInTheDocument();
  });
});

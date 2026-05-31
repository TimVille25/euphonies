import { render, screen } from '@testing-library/react';
import Label from '.';

describe('Label', () => {
  it('renders its children', () => {
    render(<Label>Le chœur</Label>);
    expect(screen.getByText('Le chœur')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import Tag from '.';

describe('Tag', () => {
  it('renders its children', () => {
    render(<Tag>Prochainement</Tag>);
    expect(screen.getByText('Prochainement')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import SectionHeader from '.';

describe('SectionHeader', () => {
  it('renders label and heading', () => {
    render(<SectionHeader label="Le chœur" heading="Un ensemble vocal de musique classique et contemporaine" />);
    expect(screen.getByText('Le chœur')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Un ensemble vocal de musique classique et contemporaine');
  });
});

import { render, screen } from '@testing-library/react';
import PresentationSection from '.';

describe('PresentationSection', () => {
  it('renders the section heading', () => {
    render(<PresentationSection />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders all three piliers', () => {
    render(<PresentationSection />);
    expect(screen.getByText('Des concerts en lieux choisis')).toBeInTheDocument();
    expect(screen.getByText('Un répertoire qui traverse les siècles')).toBeInTheDocument();
  });

  it('renders the stats', () => {
    render(<PresentationSection />);
    expect(screen.getByText('pupitres')).toBeInTheDocument();
    expect(screen.getByText('instrument')).toBeInTheDocument();
  });
});

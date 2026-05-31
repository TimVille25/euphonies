import { render, screen } from '@testing-library/react';
import ConcertCard from '.';

const concert = {
  id: 'test',
  title: 'Concert de printemps',
  description: 'Chapelle Saint-Jean',
  day: '15',
  month: 'Avr',
  tag: 'Prochainement',
};

describe('ConcertCard', () => {
  it('renders concert title, description, day, month and tag', () => {
    render(<ConcertCard concert={concert} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Concert de printemps');
    expect(screen.getByText('Chapelle Saint-Jean')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('Avr')).toBeInTheDocument();
    expect(screen.getByText('Prochainement')).toBeInTheDocument();
  });
});

import { render, screen, waitFor } from '@testing-library/react';
import ConcertList from '.';

const mockConcerts = [
  {
    id: 'test-concert',
    title: 'Concert test',
    description: 'Description test',
    day: '15',
    month: 'Avr',
    tag: 'Prochainement',
  },
];

describe('ConcertList', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({ json: () => Promise.resolve(mockConcerts) } as Response),
      ),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the section heading', () => {
    render(<ConcertList />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders concerts fetched from the API', async () => {
    render(<ConcertList />);
    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 3, name: 'Concert test' })).toBeInTheDocument();
    });
  });
});

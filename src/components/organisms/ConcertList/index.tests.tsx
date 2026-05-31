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
    date: '2026-04-15',
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

  it('injects a MusicEvent JSON-LD script for each concert', async () => {
    const { container } = render(<ConcertList />);
    await waitFor(() => {
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      expect(scripts).toHaveLength(1);
      const schema = JSON.parse(scripts[0].textContent!);
      expect(schema['@type']).toBe('MusicEvent');
      expect(schema.name).toBe('Concert test');
      expect(schema.startDate).toBe('2026-04-15');
    });
  });
});

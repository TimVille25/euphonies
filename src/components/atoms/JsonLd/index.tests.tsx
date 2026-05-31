import { render } from '@testing-library/react';
import JsonLd from '.';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'EuphonieS',
};

describe('JsonLd', () => {
  it('renders a script tag with type application/ld+json', () => {
    const { container } = render(<JsonLd schema={schema} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
  });

  it('serialises the schema as JSON in the script content', () => {
    const { container } = render(<JsonLd schema={schema} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(JSON.parse(script!.textContent!)).toEqual(schema);
  });
});

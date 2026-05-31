import { render } from '@testing-library/react';
import Rule from '.';

describe('Rule', () => {
  it('renders', () => {
    const { container } = render(<Rule />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies center modifier when center prop is true', () => {
    const { container } = render(<Rule center />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toMatch(/a-rule--center/);
  });
});

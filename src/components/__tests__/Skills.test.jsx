import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from '../Skills';

describe('Skills component', () => {
  it('renders a skill labeled "React"', () => {
    render(<Skills />);
    const labels = screen.getAllByText('React');
    expect(labels.length).toBeGreaterThan(0);
  });

  it('labels the scrolling logo loop for assistive tech', () => {
    render(<Skills />);
    expect(screen.getAllByLabelText(/technologies i use/i).length).toBeGreaterThan(0);
  });

  it('groups skills into Backend, Frontend, Mobile and Data', () => {
    render(<Skills />);
    ['Backend', 'Frontend', 'Mobile', 'Data'].forEach((group) => {
      expect(screen.getByText(group)).toBeInTheDocument();
    });
  });
});

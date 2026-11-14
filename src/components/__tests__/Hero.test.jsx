import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../Hero';

// Mock framer-motion so Motion.<tag> renders as that plain tag
vi.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: (_target, prop) => {
      const Component = ({ children, ...rest }) => {
        // Strip framer-motion-specific props before passing to DOM element
        const {
          initial, animate, exit, variants, transition,
          whileInView, whileHover, whileTap, viewport,
          ...domProps
        } = rest;
        const Tag = prop;
        return <Tag {...domProps}>{children}</Tag>;
      };
      Component.displayName = `motion.${prop}`;
      return Component;
    },
  }),
}));

// The ASCII background needs WebGL2, which jsdom does not provide
vi.mock('../reactbits/GradientASCII', () => ({
  default: () => <div data-testid="gradient-ascii-mock" />,
}));

describe('Hero component', () => {
  it('renders h1 containing "Naing Khant"', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Naing Khant');
  });

  it('renders CTA link with href="#contact"', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', { name: /get in touch/i });
    expect(cta).toHaveAttribute('href', '#contact');
  });

  it('renders a CTA to the selected work section', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', { name: /view work/i });
    expect(cta).toHaveAttribute('href', '#work');
  });

  it('renders the profile photo with alt text', () => {
    render(<Hero />);
    expect(screen.getByAltText('Naing Khant')).toBeInTheDocument();
  });

  it('renders bio <p> element', () => {
    render(<Hero />);
    const bio = screen.getByText(/backend-focused software developer/i);
    expect(bio.tagName).toBe('P');
  });
});

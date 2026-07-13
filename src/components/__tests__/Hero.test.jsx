import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../Hero';

// Mock framer-motion so Motion.div renders as a plain div
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
        return <div {...domProps}>{children}</div>;
      };
      Component.displayName = `motion.${prop}`;
      return Component;
    },
  }),
}));

// Mock Typing component
vi.mock('../Typing', () => ({
  default: () => <span data-testid="typing-mock">Developer</span>,
}));

// Mock FloatingIcons component
vi.mock('../FloatingIcons', () => ({
  default: () => <div data-testid="floating-icons-mock" />,
}));

// Mock profile image import
vi.mock('../../assets/myprofile.png', () => ({ default: 'myprofile.png' }));

describe('Hero component', () => {
  it('renders h1 containing "Naing Khant"', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Naing Khant');
  });

  it('renders CTA link with href="#contact"', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', { name: /hire me/i });
    expect(cta).toHaveAttribute('href', '#contact');
  });

  it('renders bio <p> element', () => {
    render(<Hero />);
    const bio = screen.getByText(/backend-focused software developer/i);
    expect(bio.tagName).toBe('P');
  });
});

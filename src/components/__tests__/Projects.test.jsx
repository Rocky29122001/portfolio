import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Projects from '../Projects';

// Mock framer-motion so Motion components render as plain elements
vi.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: (_target, prop) => {
      const Component = ({ children, ...rest }) => {
        const {
          initial, animate, exit, variants, transition,
          whileInView, whileHover, whileTap, viewport,
          ...domProps
        } = rest;
        const Tag = prop === 'h2' ? 'h2' : prop === 'article' ? 'article' : 'div';
        return <Tag {...domProps}>{children}</Tag>;
      };
      Component.displayName = `motion.${prop}`;
      return Component;
    },
  }),
}));

describe('Projects component', () => {
  it('renders exactly 4 project cards', () => {
    render(<Projects />);
    const cards = document.querySelectorAll('.project-card');
    expect(cards.length).toBe(4);
  });

  it('renders the fourth card with title "Kyaw Kyar Car Showroom"', () => {
    render(<Projects />);
    expect(screen.getByText('Kyaw Kyar Car Showroom')).toBeInTheDocument();
  });

  it('fourth card description mentions buying, selling, and promoting', () => {
    render(<Projects />);
    const desc = screen.getByText(/buying.*selling.*promoting/i);
    expect(desc).toBeInTheDocument();
  });

  it('fourth card has tag "React JS"', () => {
    render(<Projects />);
    const tags = screen.getAllByText('React JS');
    expect(tags.length).toBeGreaterThan(0);
  });

  it('fourth card has a "View Project" link with href="#"', () => {
    render(<Projects />);
    const links = screen.getAllByRole('link', { name: /view kyaw kyar car showroom/i });
    expect(links.length).toBeGreaterThan(0);
    expect(links[0]).toHaveAttribute('href', '#');
  });
});

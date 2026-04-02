import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import About from '../About';

// Mock framer-motion so Motion.div/h2 renders as plain elements
vi.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: (_target, prop) => {
      const Component = ({ children, ...rest }) => {
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

// Mock react-icons to avoid SVG rendering issues
vi.mock('react-icons/fa', () => ({
  FaCode: () => <svg data-testid="icon-code" />,
  FaDatabase: () => <svg data-testid="icon-database" />,
  FaServer: () => <svg data-testid="icon-server" />,
  FaGraduationCap: () => <svg data-testid="icon-graduation" />,
}));

describe('About component', () => {
  it('renders "Myanmar Institute of Information Technology (MIIT)"', () => {
    render(<About />);
    expect(
      screen.getByText('Myanmar Institute of Information Technology (MIIT)')
    ).toBeInTheDocument();
  });

  it('renders "B.E (Hons) Electronics Engineering"', () => {
    render(<About />);
    expect(
      screen.getByText('B.E (Hons) Electronics Engineering')
    ).toBeInTheDocument();
  });

  it('does NOT render "B.E (Hons.) Electronics & Communication Engineering"', () => {
    render(<About />);
    expect(
      screen.queryByText('B.E (Hons.) Electronics & Communication Engineering')
    ).not.toBeInTheDocument();
  });

  it('renders .education-block element', () => {
    const { container } = render(<About />);
    expect(container.querySelector('.education-block')).not.toBeNull();
  });
});

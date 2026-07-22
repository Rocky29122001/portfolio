import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Skills from '../Skills';

// Mock framer-motion so SectionHeading's Motion.div/h2 render as plain elements
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

// Mock react-icons/fa — FaReact renders with its style prop so we can assert color
vi.mock('react-icons/fa', () => ({
  FaReact: ({ style, ...props }) => <svg data-testid="icon-react" style={style} {...props} />,
  FaPhp: () => <svg />,
  FaLaravel: () => <svg />,
  FaPython: () => <svg />,
  FaJs: () => <svg />,
  FaHtml5: () => <svg />,
  FaCss3Alt: () => <svg />,
  FaBootstrap: () => <svg />,
  FaDatabase: () => <svg />,
  FaMobileAlt: () => <svg />,
  FaPause: () => <svg />,
  FaPlay: () => <svg />,
}));

// Mock react-icons/tb
vi.mock('react-icons/tb', () => ({
  TbBrandCSharp: () => <svg />,
}));

describe('Skills component', () => {
  it('renders a skill tile labeled "React"', () => {
    render(<Skills />);
    const labels = screen.getAllByText('React');
    expect(labels.length).toBeGreaterThan(0);
  });

  it('renders the React icon', () => {
    render(<Skills />);
    const icons = screen.getAllByTestId('icon-react');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('toggles the pause/resume control for the scrolling ticker', () => {
    render(<Skills />);
    const toggle = screen.getByRole('button', { name: /pause skills scroll/i });
    expect(toggle).toHaveAttribute('aria-pressed', 'false');

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /resume skills scroll/i })).toBeInTheDocument();
  });
});

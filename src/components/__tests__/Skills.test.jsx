import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Skills from '../Skills';

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
}));

// Mock react-icons/tb
vi.mock('react-icons/tb', () => ({
  TbBrandCSharp: () => <svg />,
}));

describe('Skills component', () => {
  it('renders a skill card with label "React JS"', () => {
    render(<Skills />);
    const labels = screen.getAllByText('React JS');
    expect(labels.length).toBeGreaterThan(0);
  });

  it('renders the React icon with color #61DAFB', () => {
    render(<Skills />);
    const icons = screen.getAllByTestId('icon-react');
    expect(icons.length).toBeGreaterThan(0);
    expect(icons[0]).toHaveStyle({ color: '#61DAFB' });
  });
});

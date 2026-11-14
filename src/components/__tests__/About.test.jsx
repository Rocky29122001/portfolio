import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import About from '../About';
import { workProjects, academicProjects } from '../../data/projects';

// Mock framer-motion so Motion.* renders as plain elements
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

const pad = (n) => String(n).padStart(2, '0');

describe('About component', () => {
  it('renders the section with the about id', () => {
    const { container } = render(<About />);
    expect(container.querySelector('section#about')).not.toBeNull();
  });

  it('renders the headline statement', () => {
    render(<About />);
    expect(
      screen.getByText('I turn complex backend problems into clean, scalable systems.')
    ).toBeInTheDocument();
  });

  it('mentions the degree in the intro copy', () => {
    render(<About />);
    expect(
      screen.getByText(/B\.E \(Hons\.\) in Electronics & Communication Engineering/)
    ).toBeInTheDocument();
  });

  it('derives stats from project data', () => {
    const { container } = render(<About />);
    const all = [...workProjects, ...academicProjects];
    const values = [...container.querySelectorAll('.about-stats dd')].map((dd) => dd.textContent);
    expect(values).toEqual([
      pad(all.length),
      pad(all.filter((p) => p.showDetail && p.link).length),
      pad(workProjects.length),
    ]);
  });

  it('renders three numbered principles', () => {
    const { container } = render(<About />);
    const nums = [...container.querySelectorAll('.principle-num')].map((n) => n.textContent);
    expect(nums).toEqual(['01', '02', '03']);
    expect(screen.getByText('Clean code')).toBeInTheDocument();
  });
});

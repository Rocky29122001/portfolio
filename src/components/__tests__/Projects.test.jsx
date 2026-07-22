import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Projects from '../Projects';
import { workProjects, academicProjects } from '../../data/projects';

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
  it('renders one row per project across both groups', () => {
    render(<Projects />);
    const rows = document.querySelectorAll('.project-row');
    expect(rows.length).toBe(workProjects.length + academicProjects.length);
  });

  it('renders Work and Academic group headings', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: 'Work' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Academic' })).toBeInTheDocument();
  });

  it('renders every project title', () => {
    render(<Projects />);
    [...workProjects, ...academicProjects].forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  it('shows a Case Study link for academic projects with a detail page', () => {
    render(<Projects />);
    const link = screen.getByRole('link', { name: /view cafemono/i });
    expect(link).toHaveAttribute('href', '/projects/cafemono');
  });

  it('only shows Case Study links for work projects that opt in with a link', () => {
    render(<Projects />);
    workProjects.forEach((p) => {
      const link = screen.queryByRole('link', { name: new RegExp(`view ${p.title}`, 'i') });
      if (p.showDetail !== false && p.link) {
        expect(link).toHaveAttribute('href', p.link);
      } else {
        expect(link).not.toBeInTheDocument();
      }
    });
  });

  it('opens live demos in a new tab', () => {
    render(<Projects />);
    const demo = screen.getByRole('link', { name: /view demo for cafemono/i });
    expect(demo).toHaveAttribute('href', 'https://cafemono.vercel.app/');
    expect(demo).toHaveAttribute('target', '_blank');
  });
});

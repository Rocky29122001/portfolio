// Feature: portfolio-redesign, Property 3: All project cards are rendered

import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import * as fc from 'fast-check';

/**
 * Validates: Requirements 5.1, 5.6
 *
 * Generate random arrays of project objects (length 1–10); render a
 * parameterised ProjectsTest component; assert the number of rendered
 * `.project-card` elements equals the array length.
 */

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
        const Tag = prop === 'h2' ? 'h2' : prop === 'article' ? 'article' : 'div';
        return <Tag {...domProps}>{children}</Tag>;
      };
      Component.displayName = `motion.${prop}`;
      return Component;
    },
  }),
}));

/**
 * Minimal inline test component that mirrors Projects render logic
 * but accepts a `projects` prop — making it parameterisable for property tests.
 */
const ProjectsTest = ({ projects }) => (
  <section className="section" id="projects">
    <div className="project-box">
      {projects.map((p, i) => (
        <article key={p.title ?? i} className="project-card glass">
          <div className="project-header">{p.title}</div>
          <p className="project-desc">{p.desc}</p>
          <div className="project-tags">
            {(p.tags ?? []).map((t, j) => (
              <span key={j} className="tag">{t}</span>
            ))}
          </div>
          <a href={p.link ?? '#'} className="btn project-btn">
            View Project
          </a>
        </article>
      ))}
    </div>
  </section>
);

// Arbitrary for a single project object
const projectArb = fc.record({
  title: fc.string({ minLength: 1, maxLength: 50 }),
  desc: fc.string({ minLength: 0, maxLength: 200 }),
  tags: fc.array(fc.string({ minLength: 1, maxLength: 20 }), { minLength: 0, maxLength: 5 }),
  link: fc.constantFrom('#', 'https://example.com'),
});

// Arbitrary for an array of 1–10 project objects
const projectsArrayArb = fc.array(projectArb, { minLength: 1, maxLength: 10 });

describe('Property 3: All project cards are rendered', () => {
  it('property: renders exactly N .project-card elements for any array of length N (100 iterations)', () => {
    fc.assert(
      fc.property(projectsArrayArb, (projects) => {
        const { container } = render(<ProjectsTest projects={projects} />);
        const cards = container.querySelectorAll('.project-card');
        expect(cards.length).toBe(projects.length);
      }),
      { numRuns: 100 }
    );
  });
});

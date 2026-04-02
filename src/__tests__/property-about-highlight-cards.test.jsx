// Feature: portfolio-redesign, Property 4: About section renders >= 3 highlight cards

import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import * as fc from 'fast-check';
import About from '../components/About';

/**
 * Validates: Requirements 3.2
 *
 * Render the About component and assert that the number of `.highlight-box`
 * elements is >= 3 across 100 iterations.
 */

// Mock framer-motion so Motion.* renders as plain div elements
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

describe('Property 4: About section renders >= 3 highlight cards', () => {
  it('property: About always renders at least 3 .highlight-box elements (100 iterations)', () => {
    fc.assert(
      fc.property(fc.integer(), () => {
        const { container } = render(<About />);
        const highlightBoxes = container.querySelectorAll('.highlight-box');
        expect(highlightBoxes.length).toBeGreaterThanOrEqual(3);
      }),
      { numRuns: 100 }
    );
  });
});

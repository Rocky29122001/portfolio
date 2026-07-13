// Feature: portfolio-redesign, Property 5: Section heading animation duration is 0.4–0.8s
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { fadeUp } from '../animations.js';

describe('Property 5: Section heading animation duration is within spec range', () => {
  it('fadeUp transition.duration is >= 0.4 and <= 0.8 across 100 iterations', () => {
    // Validates: Requirements 6.3
    const duration = fadeUp.show.transition.duration;

    fc.assert(
      fc.property(fc.integer(), () => {
        expect(duration).toBeGreaterThanOrEqual(0.4);
        expect(duration).toBeLessThanOrEqual(0.8);
      }),
      { numRuns: 100 }
    );
  });
});

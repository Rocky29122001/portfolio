// Feature: portfolio-redesign, Property 2: React JS appears in both halves of the duplicated skills loop

import { describe, it } from 'vitest';
import { expect } from 'vitest';
import * as fc from 'fast-check';

/**
 * Validates: Requirements 4.3
 *
 * For any skills array containing at least one "React JS" entry,
 * the duplicated loop array ([...skills, ...skills]) must contain "React JS"
 * at index i (first half) and at index i + skills.length (second half).
 */

describe('Property 2: React JS appears in both halves of the duplicated skills loop', () => {
  it('property: React JS is present at index i and i + skills.length in the loop (100 iterations)', () => {
    // Arbitrary skill label (anything except "React JS" to keep generated entries distinct)
    const otherSkillArb = fc.record({
      label: fc.string({ minLength: 1, maxLength: 20 }).filter(s => s !== 'React JS'),
    });

    const reactJsEntry = { label: 'React JS' };

    // Generate an array of other skills, then inject a React JS entry at a random position
    const skillsArb = fc.array(otherSkillArb, { minLength: 0, maxLength: 13 }).chain(others => {
      // Pick a random insertion index within [0, others.length]
      return fc.integer({ min: 0, max: others.length }).map(insertAt => {
        const skills = [...others];
        skills.splice(insertAt, 0, reactJsEntry);
        return skills;
      });
    });

    fc.assert(
      fc.property(skillsArb, (skills) => {
        const loop = [...skills, ...skills];

        // Find the index of "React JS" in the first half
        const i = skills.findIndex(s => s.label === 'React JS');

        // i must be a valid index (React JS is guaranteed to be present)
        expect(i).toBeGreaterThanOrEqual(0);

        // Assert React JS appears at i in the first half
        expect(loop[i].label).toBe('React JS');

        // Assert React JS appears at i + skills.length in the second half
        expect(loop[i + skills.length].label).toBe('React JS');
      }),
      { numRuns: 100 }
    );
  });
});

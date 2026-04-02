// Feature: portfolio-redesign, Property 1: Hero h1 font-size >= 52px on desktop

import { describe, it } from 'vitest';
import * as fc from 'fast-check';
import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Validates: Requirements 1.1
 *
 * Parse the raw pixel value of `.hero-content h1` font-size from the CSS source
 * and assert it is >= 52px on desktop.
 *
 * jsdom does not compute media queries, so we read the CSS file directly and
 * extract the font-size from the desktop rule (outside any media query).
 */

function parseHeroH1FontSize(cssContent) {
  // Find the `.hero-content h1` block that is NOT inside a @media query.
  // Strategy: strip all @media blocks first, then find the rule.
  const withoutMedia = cssContent.replace(/@media[^{]*\{(?:[^{}]*|\{[^{}]*\})*\}/g, '');

  const ruleMatch = withoutMedia.match(/\.hero-content\s+h1\s*\{([^}]*)\}/);
  if (!ruleMatch) return null;

  const declarations = ruleMatch[1];
  const fontSizeMatch = declarations.match(/font-size\s*:\s*(\d+(?:\.\d+)?)px/);
  if (!fontSizeMatch) return null;

  return parseFloat(fontSizeMatch[1]);
}

describe('Property 1: Hero h1 font-size >= 52px on desktop', () => {
  const cssPath = resolve(process.cwd(), 'src/index.css');
  const cssContent = readFileSync(cssPath, 'utf-8');
  const fontSize = parseHeroH1FontSize(cssContent);

  it('should parse a valid font-size from .hero-content h1', () => {
    expect(fontSize).not.toBeNull();
    expect(typeof fontSize).toBe('number');
  });

  it('property: parsed font-size is >= 52px for any arbitrary input (100 iterations)', () => {
    // The CSS value is static; we use fc.integer() as the arbitrary to satisfy
    // the fast-check property interface and run 100 iterations.
    fc.assert(
      fc.property(fc.integer(), () => {
        expect(fontSize).toBeGreaterThanOrEqual(52);
      }),
      { numRuns: 100 }
    );
  });
});

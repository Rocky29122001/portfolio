import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Validates: Requirements 6.6
 *
 * Assert that index.css contains an @supports not (backdrop-filter) block
 * with rgba(15, 23, 42, 0.85) as the fallback background for glass-card elements.
 */

describe('Backdrop-filter fallback in index.css', () => {
  const cssPath = resolve(process.cwd(), 'src/index.css');
  const cssContent = readFileSync(cssPath, 'utf-8');

  it('should contain an @supports not (backdrop-filter) block', () => {
    expect(cssContent).toMatch(/@supports\s+not\s+\(backdrop-filter/);
  });

  it('should set background to rgba(15, 23, 42, 0.85) inside the @supports block', () => {
    // Find the start of the @supports not (backdrop-filter...) block
    // Use a greedy match up to the opening brace to handle nested parens like blur(1px)
    const startMatch = cssContent.match(/@supports\s+not\s+\(backdrop-filter[\s\S]*?\)\s*\{/);
    expect(startMatch).not.toBeNull();

    // Extract everything from the opening brace to the matching closing brace
    const startIndex = startMatch.index + startMatch[0].length;
    let depth = 1;
    let i = startIndex;
    while (i < cssContent.length && depth > 0) {
      if (cssContent[i] === '{') depth++;
      else if (cssContent[i] === '}') depth--;
      i++;
    }
    const blockContent = cssContent.slice(startIndex, i - 1);
    expect(blockContent).toContain('rgba(15, 23, 42, 0.85)');
  });
});

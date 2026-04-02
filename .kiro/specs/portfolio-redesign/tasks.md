# Implementation Plan: Portfolio Redesign

## Overview

Incremental implementation of the portfolio visual refresh across five components and the global stylesheet, followed by unit and property-based tests. Each task builds on the previous and ends with all changes wired together.

## Tasks

- [x] 1. Update Hero.jsx — typography, gradient accent, bio opacity, and entrance animation timing
  - In `src/components/Hero.jsx`, update the image `Motion.div` transition to `duration: 0.6`
  - Update the text `Motion.div` (hero-content) to add `transition={{ duration: 0.7, delay: 0.3 }}` to the `fadeUp` variant override
  - Add `style={{ background: "linear-gradient(90deg, #38bdf8, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}` to the `<span>Naing Khant</span>`
  - Add `style={{ opacity: 0.85 }}` to the bio `<p>` element
  - _Requirements: 1.1, 1.3, 1.4, 1.5_

  - [x] 1.1 Write unit tests for Hero component
    - Assert `h1` contains "Naing Khant"
    - Assert CTA `href="#contact"` is present
    - Assert bio `<p>` is rendered
    - _Requirements: 1.1, 1.5, 1.6_

- [x] 2. Update index.css — h1 font-size, education-block styles, backdrop-filter fallback, section dividers
  - Change `.hero-content h1` font-size from `48px` to `56px`
  - Add `.education-block` styles: flex layout, gap, icon color, institution/degree typography
  - Add `@supports not (backdrop-filter: blur(1px))` block setting `.glass-card`, `.glass`, `.skill-card`, `.project-card` background to `rgba(15, 23, 42, 0.85)`
  - Add a subtle `border-top: 1px solid rgba(255, 255, 255, 0.05)` section divider rule to `.section`
  - _Requirements: 1.1, 2.3, 6.2, 6.5, 6.6_

  - [x] 2.1 Write property test for Hero h1 font-size (Property 1)
    - **Property 1: Hero h1 font-size >= 52px on desktop**
    - Parse the raw pixel value of `.hero-content h1` font-size from the CSS source; assert it is ≥ 52
    - Run minimum 100 iterations with fast-check
    - `// Feature: portfolio-redesign, Property 1: Hero h1 font-size >= 52px on desktop`
    - _Requirements: 1.1_

  - [x] 2.2 Write unit test for backdrop-filter fallback in index.css
    - Assert `@supports not (backdrop-filter)` block exists in `index.css` with `rgba(15, 23, 42, 0.85)` fallback background
    - _Requirements: 6.6_

- [x] 3. Update About.jsx — remove outdated degree, add Education_Block with animation
  - Remove the outdated degree string "B.E (Hons.) Electronics & Communication Engineering" from the bio `<p>`
  - Import `FaGraduationCap` from `react-icons/fa`
  - Import `fadeUp` from `../animations`
  - Add inline `Education_Block` JSX below the bio paragraphs inside `.about-text`:
    ```jsx
    <Motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <div className="education-block glass-card">
        <FaGraduationCap className="edu-icon" />
        <div>
          <p className="edu-institution">Myanmar Institute of Information Technology (MIIT)</p>
          <p className="edu-degree">B.E (Hons) Electronics Engineering</p>
        </div>
      </div>
    </Motion.div>
    ```
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

  - [x] 3.1 Write unit tests for About component
    - Assert "Myanmar Institute of Information Technology (MIIT)" is rendered
    - Assert "B.E (Hons) Electronics Engineering" is rendered
    - Assert "B.E (Hons.) Electronics & Communication Engineering" is NOT rendered
    - Assert `.education-block` element exists
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [x] 3.2 Write property test for About highlight card count (Property 4)
    - **Property 4: About section renders >= 3 highlight cards**
    - Render the About component; query all `.highlight-box` elements; assert count ≥ 3
    - Run minimum 100 iterations with fast-check
    - `// Feature: portfolio-redesign, Property 4: About section renders >= 3 highlight cards`
    - _Requirements: 3.2_

- [x] 4. Checkpoint — ensure Hero, CSS, and About changes are consistent
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Update Skills.jsx — add React JS skill entry
  - Add `FaReact` to the import from `react-icons/fa`
  - Add `{ label: "React JS", Icon: FaReact, color: "#61DAFB" }` to the `skills` array
  - The existing `loop = [...skills, ...skills]` handles duplication automatically
  - _Requirements: 4.1, 4.2, 4.3_

  - [x] 5.1 Write unit tests for Skills component
    - Assert a skill card with label "React JS" is rendered
    - Assert the React icon element has `style` color `#61DAFB`
    - _Requirements: 4.1, 4.2_

  - [x] 5.2 Write property test for skills marquee loop completeness (Property 2)
    - **Property 2: React JS appears in both halves of the duplicated skills loop**
    - For any skills array containing at least one "React JS" entry, assert `[...skills, ...skills]` contains "React JS" at index `i` and at index `i + skills.length`
    - Run minimum 100 iterations with fast-check
    - `// Feature: portfolio-redesign, Property 2: React JS appears in both halves of the duplicated skills loop`
    - _Requirements: 4.3_

- [x] 6. Update Projects.jsx — add fourth project card
  - Add the following entry to the `projects` array in `src/components/Projects.jsx`:
    ```js
    {
      title: "Kyaw Kyar Car Showroom",
      desc: "A React JS web application for buying, selling, and promoting cars. Features include vehicle listings, search filters, and dealer contact.",
      tags: ["React JS"],
      link: "#"
    }
    ```
  - The existing `stagger` + `fadeUp` map already covers all cards — no animation changes needed
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [x] 6.1 Write unit tests for Projects component
    - Assert exactly 4 `.project-card` elements are rendered
    - Assert fourth card title is "Kyaw Kyar Car Showroom"
    - Assert fourth card description contains "buying", "selling", and "promoting"
    - Assert fourth card has tag "React JS"
    - Assert fourth card link `href="#"` is present
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [x] 6.2 Write property test for project render count (Property 3)
    - **Property 3: All project cards are rendered**
    - Generate random arrays of project objects (length 1–10); render a parameterised Projects component; assert the number of rendered `.project-card` elements equals the array length
    - Run minimum 100 iterations with fast-check
    - `// Feature: portfolio-redesign, Property 3: All project cards are rendered`
    - _Requirements: 5.1, 5.6_

- [x] 7. Write property test for heading animation duration (Property 5)
  - Inspect the `fadeUp` variant's `transition.duration` value from `src/animations.js`
  - Assert the value is ≥ 0.4 and ≤ 0.8
  - Run minimum 100 iterations with fast-check
  - `// Feature: portfolio-redesign, Property 5: Section heading animation duration is 0.4–0.8s`
  - _Requirements: 6.3_

- [x] 8. Final checkpoint — ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests use fast-check with a minimum of 100 iterations each
- Unit tests use Vitest + React Testing Library
- Checkpoints ensure incremental validation before moving to the next component

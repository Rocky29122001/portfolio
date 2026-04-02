# Requirements Document

## Introduction

This feature covers a senior-level redesign of Naing Khant's personal portfolio website. The goals are: elevate the visual polish and typography hierarchy to reflect a professional, senior developer profile; update the education information to accurately reflect graduation from Myanmar Institute of Information Technology (MIIT) with a B.E (Hons) Electronics Engineering degree; add React JS to the skills section; and add a fourth project card for "Kyaw Kyar Car Showroom" to the Projects section.

The portfolio is built with React + Vite, Framer Motion, and react-icons.

## Glossary

- **Portfolio**: The personal portfolio website owned by Naing Khant
- **Hero_Section**: The full-viewport landing section containing the profile image, name, role, and CTA button
- **About_Section**: The section describing Naing Khant's background, education, and core strengths
- **Skills_Section**: The scrolling marquee section displaying technology skill cards
- **Projects_Section**: The grid section displaying project cards
- **Education_Block**: The sub-component within the About section that displays degree and institution information
- **Project_Card**: A single card in the Projects section representing one project
- **Skill_Card**: A single card in the Skills marquee representing one technology
- **CTA**: Call-to-action button (e.g., "Hire Me")

---

## Requirements

### Requirement 1: Hero Section Typography and Visual Hierarchy

**User Story:** As a visitor, I want to see a polished hero section with clear typographic hierarchy, so that I immediately understand who Naing Khant is and what he does.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the developer name at a font size no smaller than 52px on desktop viewports (≥1024px).
2. THE Hero_Section SHALL display the role/typing subtitle at a visually distinct size smaller than the name heading, using a font weight of 400–500.
3. THE Hero_Section SHALL display a short bio paragraph with opacity between 0.75 and 0.9 to create visual depth.
4. WHEN the page loads, THE Hero_Section SHALL animate the profile image and text content into view using entrance animations with a total duration not exceeding 1.2 seconds.
5. THE Hero_Section SHALL include a gradient accent or highlight on the developer name to reinforce the primary brand color (`#38bdf8`).
6. THE Hero_Section SHALL display a CTA button that links to the `#contact` section.
7. WHEN the viewport width is less than 768px, THE Hero_Section SHALL stack the image and text content vertically and center-align the text.

---

### Requirement 2: About Section — Correct Education Information

**User Story:** As a visitor, I want to read accurate education details about Naing Khant, so that I have a correct understanding of his academic background.

#### Acceptance Criteria

1. THE About_Section SHALL display the institution name "Myanmar Institute of Information Technology (MIIT)" as the education institution.
2. THE About_Section SHALL display the degree "B.E (Hons) Electronics Engineering" as the qualification.
3. THE Education_Block SHALL be visually distinct from the general bio text, using an icon, label, or card treatment to separate it.
4. THE About_Section SHALL NOT display the outdated degree text "B.E (Hons.) Electronics & Communication Engineering".
5. WHEN the About_Section is scrolled into view, THE Education_Block SHALL animate into view with a fade-up transition.

---

### Requirement 3: About Section — Senior-Level Visual Polish

**User Story:** As a visitor, I want the About section to feel premium and well-structured, so that I perceive Naing Khant as a senior-level developer.

#### Acceptance Criteria

1. THE About_Section SHALL display the bio text and highlight cards with consistent padding of at least 28px.
2. THE About_Section SHALL display at least three highlight cards (e.g., Clean Code, Database Design, Scalable Systems) using the existing glass-card style.
3. WHEN a highlight card is hovered, THE About_Section SHALL apply a `translateY(-5px)` transform transition within 0.3 seconds.
4. THE About_Section SHALL use a two-column or stacked layout that adapts responsively for viewports below 768px.

---

### Requirement 4: Add React JS to Skills Section

**User Story:** As a visitor, I want to see React JS listed in the skills marquee, so that I know Naing Khant works with React.

#### Acceptance Criteria

1. THE Skills_Section SHALL include a Skill_Card with the label "React JS".
2. THE Skill_Card for React JS SHALL display the official React icon (`FaReact` from react-icons/fa) in the color `#61DAFB`.
3. THE Skills_Section marquee loop SHALL include the React JS card in both halves of the duplicated array so the infinite scroll remains seamless.
4. WHEN the Skills_Section is scrolled into view, THE Skills_Section heading SHALL animate in using the existing `fadeUp` variant.

---

### Requirement 5: Add Kyaw Kyar Car Showroom Project

**User Story:** As a visitor, I want to see the Kyaw Kyar Car Showroom project listed, so that I can learn about Naing Khant's React JS frontend work.

#### Acceptance Criteria

1. THE Projects_Section SHALL display four Project_Cards, including one for "Kyaw Kyar Car Showroom".
2. THE Project_Card for Kyaw Kyar Car Showroom SHALL display the title "Kyaw Kyar Car Showroom".
3. THE Project_Card for Kyaw Kyar Car Showroom SHALL display a description stating it is a website for buying, selling, and promoting cars.
4. THE Project_Card for Kyaw Kyar Car Showroom SHALL display the technology tag "React JS".
5. THE Project_Card for Kyaw Kyar Car Showroom SHALL include a "View Project" link with `href="#"`.
6. WHEN the Projects_Section is scrolled into view, THE Projects_Section SHALL animate all four Project_Cards using the existing `stagger` and `fadeUp` variants.

---

### Requirement 6: Overall Visual Polish and Section Transitions

**User Story:** As a visitor, I want the portfolio to feel cohesive and premium throughout, so that I perceive it as the work of a senior developer.

#### Acceptance Criteria

1. THE Portfolio SHALL use consistent horizontal padding of 10% on desktop and 5% on viewports below 768px across all sections.
2. THE Portfolio SHALL apply a subtle section divider or gradient transition between alternating light and dark sections to avoid abrupt visual breaks.
3. WHEN any section heading is scrolled into view, THE Portfolio SHALL animate the heading using a fade-up or fade-in transition with a duration between 0.4s and 0.8s.
4. THE Portfolio SHALL maintain a consistent color palette using `--primary: #38bdf8`, `--bg-dark: #020617`, and `--bg-light: #0f172a` as defined in the CSS custom properties.
5. THE Portfolio SHALL apply `backdrop-filter: blur` and semi-transparent backgrounds to all glass-card elements for a premium layered appearance.
6. IF a user's device does not support `backdrop-filter`, THEN THE Portfolio SHALL fall back to a solid semi-transparent background (`rgba(15, 23, 42, 0.85)`) so content remains readable.

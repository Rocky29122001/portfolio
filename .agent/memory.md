# Project Memory
<!-- Durable facts for every future session. One bullet per fact, dated. -->

## Decisions
- (2026-11-12) No router library. `src/App.jsx` maps pathnames to components in a `detailPages` object and navigates with `history.pushState` + a `popstate` listener. Components receive `onNavigate`.
- (2026-11-12) WebGL effects use **ogl** (`src/components/reactbits/FlexCarousel.jsx`), not three.js, even though the branch is named `feature/threejs`.
- (2026-11-12) Smooth scrolling is Lenis, created in `App.jsx`. It is skipped entirely when `prefers-reduced-motion: reduce` is set.

## Conventions
- (2026-11-12) Adding a project case study:
  1. Put assets in `src/assets/projects/<slug>/`.
  2. Add an entry in `src/data/projects.js` (`workProjects` or the academic list) with `link: "/projects/<slug>"`, `showDetail: true` and `image`.
  3. Create `src/components/<Name>Detail.jsx`.
  4. Register it in `detailPages` in `App.jsx`.
- (2026-11-12) In `projects.js`, work items have no detail page unless they set `showDetail` + `link`. `image` replaces the monogram visual on the card. `status` adds an extra badge.
- (2026-11-12) Project screenshots/mockups must be original images (see commit 40bc9db for the blackjack game-screen mockup).
- (2026-11-12) Reusable third-party-style effects live in `src/components/reactbits/` (each one is a component + .css pair).

## Gotchas
- (2026-11-12) There is no `npm test` script. Run tests with `npx vitest run`. Config is in `vite.config.js` (jsdom, globals, `src/test-setup.js` loads jest-dom).
- (2026-11-12) Property-based tests use **fast-check** (`src/__tests__/property-*.test.*`). Component tests are in `src/components/__tests__/`.
- (2026-11-12) jsdom has no WebGL. Tests that render ogl components need mocking.

## References
- Repo: https://github.com/Rocky29122001/portfolio

# Development Roadmap

Statuses: `TODO`, `IN_PROGRESS`, `BLOCKED`, `DONE`. Update this file as work progresses.

## G0 — Repository and environment baseline
- [x] Inspect existing repository and local environment.
- [x] Confirm Node.js, npm, Git, and VS Code extension recommendations.
- [x] Initialize or verify Astro + TypeScript project.
- [x] Defer React until an interactive island justifies it.
- [x] Add Tailwind using the current official compatible integration.
- [x] Configure formatting, linting, type checks, and build.
- [x] Verify local development and production build.
- [ ] Create baseline commit only after user authorization.

## G1 — Design system
- [x] Define validated color tokens and contrast.
- [x] Configure typography and fallbacks.
- [x] Implement theme switching and persistence.
- [x] Build core UI primitives.
- [x] Create design-system preview page.

## G2 — Global shell and navigation
- [x] Main layout and essential metadata.
- [x] Floating navigation and EP mark.
- [x] Mobile navigation with keyboard-operable disclosure and close behavior.
- [x] EN/FR route mapping and language switch where an equivalent route exists.
- [x] Bilingual footer and active route states.
- [x] Mark planned destinations as unavailable without linking to missing routes.

## G3 — Home

- [x] Hero static layout.
- [x] Hero motion and reduced-motion fallback (no animation added; a static Hero best serves this content).
- [x] About preview.
- [x] Featured projects.
- [x] Skills overview.
- [x] Experience preview.
- [x] Contact CTA.
- [x] Complete French home page with equivalent EN/FR navigation.

## G4 — Internal pages
- [x] About (bilingual; limited to verified positioning information).
- [x] Projects index and keyboard-operable CSS filters.
- [x] Reusable bilingual project case-study template with explicit evidence gaps.
- [x] HSVP Hub case study (verified status only; hospital details withheld).
- [x] JED case study (testing and acceptance remain pending).
- [x] Auction Bids case study (partial status and reconstruction only).
- [x] Library Management case study (V1 status and improvement areas only).
- [x] Skills (focus areas only; no unverified technologies or proficiency claims).
- [x] Experience (route and bilingual explanatory page created; professional details deferred until verified).
- [x] Contact (route and bilingual explanatory page created; public channels deferred until confirmed).

## G5 — Content and evidence
- [ ] Collect and verify project screenshots.
- [ ] Verify public repository links.
- [ ] Confirm technologies and feature claims.
- [ ] Collect professional experience details when needed.
- [ ] Complete and review French content.
- [ ] Remove placeholders before launch.

## G6 — Quality
- [ ] Unit/component tests where useful.
- [ ] Playwright critical-path tests.
- [ ] Responsive browser review.
- [ ] Accessibility audit.
- [ ] SEO, sitemap, canonical, hreflang, social metadata.
- [ ] Performance and image optimization.
- [ ] Privacy and link audit.
- [ ] Production build passes.

## G7 — Deployment
- [ ] Confirm hosting and domain.
- [ ] Configure preview and production deployment.
- [ ] Verify redirects, routes, metadata, and assets.
- [ ] Smoke-test production.
- [ ] Document maintenance and rollback.

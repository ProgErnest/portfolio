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
- [x] HSVP Hub case study (owner-authorized high-level scope and technologies; no institution name, real-system capture, or unverified production claim).
- [x] JED case study (implementation complete and deployed, as confirmed by the owner; no repository link).
- [x] Auction Bids case study (partial status and reconstruction only).
- [x] Library Management case study (V1 status and improvement areas only).
- [x] Skills (focus areas and technologies supported by confirmed internship details; no unverified proficiency claims).
- [x] Experience (bilingual; internship details confirmed by the owner; sensitive HSVP Hub details withheld).
- [x] Contact (bilingual; public contact channels provided by the owner).

## G5 — Content and evidence (IN_PROGRESS)

- [x] Confirm the four current project statuses and use only working features stated by the owner.
- [x] Keep the JED repository link out of the portfolio at the owner's request; describe the implementation as complete and deployed.
- [x] Verify public access, project correspondence, and listed technologies for Auction Bids and Library Management; add the authorized Library Management link.
- [x] Add the owner-confirmed HSVP Hub features, user groups, contribution, results, limitations, and backend/frontend technologies without identifying the associated institution.
- [ ] Resolve the committed `.env.prod` file in the public Auction Bids repository before linking it from the portfolio.
- [x] Review the existing captures selected for publication; the owner confirms the captures use fictional data and authorizes their use.
- [x] Add one approved capture each for JED, Auction Bids, and Library Management, with bilingual captions identifying fictional data.
- [x] Exclude HSVP Hub captures from publication because the reviewed login screen exposes the institution and clinical processes.
- [x] Collect professional experience details when needed (completed during G4).
- [x] Complete the French equivalents for current project status, verified technologies, and open information.
- [x] Replace generic project placeholders with project-specific, explicit information gaps.

## G6 — Quality

- [x] Complete the experience and motion overhaul audit and implementation planning.
- [ ] Unit/component tests where useful.
- [ ] Playwright critical-path tests.
- [ ] Responsive browser review.
- [ ] Accessibility audit.
- [ ] SEO, sitemap, canonical, hreflang, social metadata.
- [ ] Performance and image optimization.
- [ ] Privacy and link audit.
- [x] Production build passes (verified during G5).

## G7 — Deployment

- [ ] Confirm hosting and domain.
- [ ] Configure preview and production deployment.
- [ ] Verify redirects, routes, metadata, and assets.
- [ ] Smoke-test production.
- [ ] Document maintenance and rollback.

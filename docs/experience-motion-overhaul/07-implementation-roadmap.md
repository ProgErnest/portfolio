# Implementation Roadmap

No implementation should begin until the creative and technical decisions in this document receive explicit human approval.

## Phase A — Audit and preparation

**Objective:** Establish a factual implementation baseline.

**Tasks**

- Finalize route and content inventory.
- Confirm G5 publication constraints.
- Resolve project-link and evidence decisions.
- Add missing accessibility and SEO baselines.

**Dependencies**

- Approved project facts.
- Screenshot confidentiality decisions.
- Final domain decision where relevant.

**Deliverables**

- This audit suite.
- Updated backlog or roadmap.
- Baseline browser captures.

**Acceptance criteria**

- Every page is represented.
- Every claim is verified.
- No private or unapproved content is proposed for reuse.

**Validation**

- Human review of this audit.

## Phase B — Design system evolution

**Objective:** Turn the existing system into a distinctive, component-governed visual language.

**Tasks**

- Validate the proposed art direction.
- Extend tokens for evidence, system-line, and motion primitives.
- Update the design-system page.
- Establish responsive composition rules.
- Define keyboard, focus, hover, disabled, and loading states.

**Dependencies**

- Phase A.
- Approval of art direction.

**Deliverables**

- Updated design-system specimens.
- Evidence-frame pattern.
- EP system-field pattern.
- Motion token conventions.

**Acceptance criteria**

- Light/dark contrast remains compliant.
- All existing components retain keyboard behavior.
- No new generic card or gradient convention is introduced.

**Validation**

- Human visual review on mobile, tablet, and desktop.

## Phase C — Motion design system

**Objective:** Add one coherent, reusable motion layer.

**Tasks**

- Create the reveal, route, and evidence transition primitives.
- Centralize reduced-motion detection.
- Implement one Hero sequence.
- Implement navigation and filter transitions.
- Document lifecycle cleanup.

**Dependencies**

- Phase B.
- A proof that native CSS/API behavior is sufficient.

**Deliverables**

- Shared motion CSS.
- Small motion utility module if needed.
- Motion specimen page.

**Acceptance criteria**

- Static content works without JavaScript.
- Reduced-motion users receive no essential motion.
- Back/forward navigation does not duplicate listeners.
- Theme changes do not reset layout.

**Validation**

- Browser review and performance observation.

## Phase D — Global shell and home

**Objective:** Establish continuity across the portfolio.

**Tasks**

- Refactor navigation and footer only if necessary.
- Implement the EP system field.
- Recompose the home sections.
- Add approved project preview evidence if selected.
- Preserve route and localization behavior.

**Dependencies**

- Phases B and C.
- Home composition approval.

**Deliverables**

- Updated global shell.
- Updated English/French home.

**Acceptance criteria**

- Primary routes remain reachable.
- Theme and language controls work.
- Home remains readable with and without JavaScript.
- No layout shift in Hero or evidence content.

**Validation**

- Human page review before moving to internal routes.

## Phase E — Internal pages

**Objective:** Transform each internal page independently.

**Tasks**

- Rebuild or recompose About.
- Rebuild Projects index.
- Add evidence and system-map patterns to case studies.
- Recompose Skills and Experience.
- Improve Contact close.

**Dependencies**

- Phase D.
- Project content approval.

**Deliverables**

- One approved page at a time.
- Updated bilingual routes.

**Acceptance criteria**

- English/French copy remains complete.
- Verified and unverified facts remain clearly separated.
- Existing links remain intact.
- Responsive behavior is explicit.

**Validation**

- Individual route review before proceeding to the next route.

## Phase F — Optional immersive proof

**Objective:** Test only an approved high-value immersive concept.

**Tasks**

- Prototype one EP or project-system WebGL/SVG experience.
- Add static fallback.
- Lazy-load and measure.
- Remove or revise if impact is weak.

**Dependencies**

- Phase E.
- Explicit human approval.
- A concrete benefit, not novelty alone.

**Deliverables**

- One isolated prototype.
- Performance observation.
- Keep/remove recommendation.

**Acceptance criteria**

- It does not hide static content.
- It adds meaningful context.
- It remains usable on mobile.
- It respects reduced motion.

**Validation**

- Human aesthetic review and technical performance review.

## Phase G — Integration and optimization

**Objective:** Complete G6 quality work and resolve G7 prerequisites.

**Tasks**

- Add Playwright critical paths.
- Run lint, formatting, Astro checks, and build.
- Add sitemap, canonical, hreflang, and robots.
- Add 404 handling.
- Audit privacy and external links.
- Optimize images and fonts.
- Review responsive and accessibility behavior.

**Dependencies**

- All selected redesign phases.
- Final domain decision.

**Deliverables**

- Test suite.
- Quality report.
- Deployment prerequisites.

**Acceptance criteria**

- All critical routes pass.
- No console errors.
- No broken assets or internal links.
- No private evidence or secret data.
- No known accessibility regression.

**Validation**

- Human release checklist.

## Suggested implementation order

1. Design-system and motion primitives.
2. Global navigation and footer.
3. Home.
4. Projects index.
5. JED and Library Management case studies.
6. Auction Bids case study.
7. HSVP Hub case study.
8. About.
9. Skills.
10. Experience.
11. Contact.
12. Optional immersive proof.
13. G6 quality and G7 preparation.

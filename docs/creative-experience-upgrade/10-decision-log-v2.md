# Decision Log v2

## Decisions retained

### Static-first Astro

- **Context:** The portfolio is informational, bilingual, and evidence-led.
- **Decision:** Preserve Astro static generation and TypeScript.
- **Rationale:** Best baseline for content, performance, and progressive
  enhancement.
- **Consequence:** Motion must layer over semantic HTML.
- **Approval:** Existing project decision; v2 maintains it.

### Approved identity tokens

- **Context:** Existing green/blue light and dark tokens are contrast-verified.
- **Decision:** Retain palette and type families.
- **Consequence:** Expressiveness comes from composition, scale, linework, and
  pacing rather than arbitrary recoloring.
- **Approval:** Existing project decision; v2 maintains it.

### Factual and privacy boundaries

- **Context:** Project statuses and HSVP Hub confidentiality are explicit.
- **Decision:** Treat verified source data as immutable design constraints.
- **Consequence:** No fake telemetry, outcomes, institution name, patient data,
  credentials, or restricted captures.
- **Approval:** Existing content guidance; v2 maintains it.

## Decisions revised

### “Systems Engineering Field Notes” as the whole direction

- **Prior:** A precise editorial system was sufficient.
- **v2:** Retain the field-notes foundation and add cinematic pacing and
  interactive spatial relationships.
- **Why:** The audit found the result credible but visually too close to
  documentation.

### Native motion as the complete ambition

- **Prior:** CSS and small native effects were the default endpoint.
- **v2:** Native motion remains the default, but one GSAP or spatial prototype
  may be evaluated when a narrative requirement demonstrates need.
- **Why:** Ambition increases without pre-approving unnecessary dependencies.

### Home-only spatial experiment

- **Prior:** Spatial/3D was mostly a possible home prototype.
- **v2:** SVG/HTML spatial maps are valid across Home, HSVP Hub, Skills, and
  Projects; WebGL remains targeted and optional.
- **Why:** Balance across pages matters more than a single spectacle.

## Decisions rejected or deferred

### Global WebGL background

- **Decision:** Reject.
- **Reason:** Adds cost everywhere, weakens content clarity, and has no verified
  narrative requirement.

### Universal custom cursor

- **Decision:** Defer; permit only contextual desktop experiments.
- **Reason:** Native cursor and keyboard behavior must remain primary.

### Lenis smooth scrolling

- **Decision:** Do not adopt initially.
- **Reason:** No demonstrated benefit offsets accessibility and lifecycle cost.

### React Three Fiber migration

- **Decision:** Do not adopt initially.
- **Reason:** No React runtime and no proven need for a stateful 3D component.

### Animation of every section/card

- **Decision:** Reject.
- **Reason:** Creates generic motion and hides hierarchy.

## Open validation decisions

1. Approve or revise the “Field System / Living Proof” thesis.
2. Select the acceptable degree of asymmetric composition.
3. Approve the EP field as the Home hero device.
4. Approve evidence frames versus full-bleed treatments.
5. Resolve Auction Bids `.env.prod` review before any repository link.
6. Choose one first SVG proof: Home EP field or HSVP protected system map.
7. Decide whether the approved SVG proof is strong enough to justify a later
   Three.js experiment.
8. Confirm any future owner-approved screenshots before implementation.

## Explicit non-decisions

This package does not approve code changes, dependency installation, route
changes, content changes, deployment, production configuration, or publication
of private project evidence.

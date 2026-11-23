# Page Redesign Specifications

This document defines proposed experiences. It does not authorize implementation.

## Global shell

### Objective

Preserve navigation reliability while making the shell feel like part of the portfolio’s visual identity.

### Proposed composition

- Keep the floating, bordered shell.
- Reduce the desktop navigation’s visual weight.
- Add a compact route indicator or current-section signal.
- Preserve language and theme controls.

### Interactions

- Subtle active-link movement.
- Route indicator fade or 120ms underline position transition.
- Mobile menu opens as a deliberate panel rather than an abrupt disclosure.
- Escape and link activation remain intact.

### Animation

- 1–2px route-progress indication.
- No entrance animation on every navigation.
- Respect reduced motion.

### Constraints

- The brand and language switch must remain visible.
- Header height must not reduce content space on mobile.
- All controls remain keyboard accessible.

## Home

### Objective

Present Ernest’s identity and engineering direction in one memorable system-oriented composition.

### Proposed composition

- Keep the H1 and concise introduction.
- Replace the large circular mark with a more purposeful EP field:
  - a structured grid;
  - EP monogram as a primary node;
  - thin connection lines to “Build”, “Study”, and “Systems” only if real copy is approved.
- Move project evidence below the fold rather than filling the Hero with more decorative devices.
- Convert the project and skills rows into asymmetric editorial groups.

### Preserve

- Exact verified title and introduction copy.
- Primary project and contact actions.
- English/French parity.
- Static content.

### Transform

- Turn the Hero from a two-column headline-and-circle layout into a headline-and-system-field composition.
- Replace repeated equal-height sections with differing page rhythms.
- Add static project preview surfaces using approved captures.
- Show experience and contact as stronger closing routes instead of placeholder boxes.

### Proposed components

- EP system field.
- Evidence-led project strip.
- Compact status rail.
- Closing contact composition.

### Motion

- One Hero entrance sequence.
- One pointer-responsive EP node effect only if low-cost.
- Project preview reveal as rows enter.
- No sequential fade of every section.

## Projects index

### Objective

Make project status and evidence scannable while preserving the credibility of incomplete work.

### Proposed composition

- Replace text-only rows with a 2x2 evidence grid on wide screens.
- Preserve a compact list mode on small screens.
- Place status and project name in a deliberate title rail.
- Use approved screenshots as evidence thumbnails.
- Add a functional archive or list view for projects without suitable imagery.

### Interactions

- Keep CSS radio filtering.
- Add an accessible count update.
- Add a visual crossfade or height transition only if layout stability is maintained.
- Preserve keyboard navigation.

### Animation

- Filtered rows can fade 120ms and move 4–8px.
- No large reflow or parallax.
- Add a small status marker transition.

### Constraints

- Do not imply that the Auction Bids project is more complete than documented.
- No HSVP Hub screenshot in the public index unless approved.
- Filtering must remain usable without JavaScript.

## HSVP Hub case study

### Objective

Explain systems scope and personal contribution without exposing the institution or real patient processes.

### Proposed composition

- Open with status and contribution thesis.
- Add a text-based system map:
  - roles;
  - administrative operations;
  - medical workflows;
  - access control;
  - data persistence.
- Use an evidence rail containing permitted process summaries.
- Keep limitations prominent and precise.

### Preserve

- Functional V1 / redesign V2 status.
- Verified technologies.
- No institution name or real-system capture.
- Individual academic-internship context.

### New components

- Architecture relationship diagram.
- Evidence gap panel.
- Technology role list.
- Contribution timeline.

### Motion

- Diagram nodes reveal once.
- Lines draw only when entering the section.
- No fake live-system animation.

## JED case study

### Objective

Present the deployed client implementation with evidence, without claiming measured outcomes or client acceptance.

### Proposed composition

- Lead with a compact outcome statement.
- Feature an approved dashboard capture.
- Build a feature-to-evidence strip for sales, inventory, expenses, and reports.
- Keep deployment environment and measured outcomes explicitly open.

### Interactions

- Enlarged evidence view.
- Caption remains persistent.
- Optional screenshot annotation using approved labels only.

### Animation

- Screenshot entrance and expansion.
- No invented dashboard animation inside the screenshot.

## Auction Bids case study

### Objective

Communicate reconstruction honestly and avoid overstating progress.

### Proposed composition

- Use a reconstruction-state visual: incomplete rails, stable boundaries, and current/next state labels.
- The approved sign-in capture may remain a small evidence artifact.
- Keep all feature claims limited.

### Interactions

- Optional screenshot reveal.
- Repository link only after `.env.prod` review is resolved.

### Animation

- Simple status indicator pulse only if it communicates active work, not system loading.
- Prefer a static reconstruction meter without implying a real percentage.

## Library Management case study

### Objective

Present the functional V1 and improvement areas as a concrete foundation.

### Proposed composition

- Two-part composition: working catalog evidence and workflow improvement opportunities.
- Show V1 boundaries and proposed UX work without pretending it is complete.
- Keep the public repository link.

### Interactions

- Screenshot expansion.
- Optional workflow map as static HTML/SVG.

### Animation

- Evidence reveal.
- Highlight one improvement category at a time if a small interaction is added.

## About

### Objective

Make the career direction and verified path feel like a progression, not a disclaimer.

### Proposed composition

- Editorial split: “What I’m practicing” and “What the work proves”.
- Optional portrait slot remains deferred.
- Add an evidence timeline: study, professional internship, academic internship, project development.

### Animation

- Timeline lines reveal once.
- No large portrait or text reveal.

## Skills

### Objective

Move from a capability list to an evidence map.

### Proposed composition

- Skills as three columns:
  - field of practice;
  - verified technology context;
  - direction of development.
- Link each skill to the relevant project or internship.
- Keep proficiency levels absent.

### Animation

- Link-state transitions only.
- Optional skill-to-project focus interaction.

## Experience

### Objective

Make two verified internships feel distinct without inventing outcomes.

### Proposed composition

- One compact timeline spine.
- Date, role, organization, and exact confirmed task as separate columns.
- HooYia internship and DevCode Camer internship receive distinct but consistent modules.
- Project link remains a clear continuation.

### Animation

- Progress marker follows scroll.
- Entries reveal once.
- Avoid percentage, chronology, or outcome visuals not supported by data.

## Contact

### Objective

Close the experience with confidence and clarity.

### Proposed composition

- Large direct statement based on actual availability copy.
- Channel list remains in a clean grid.
- Add a small EP end-mark.
- Avoid collecting form data until backend and privacy requirements are approved.

### Interactions

- External-link feedback.
- Copy-email control could be useful if implemented with native Clipboard API.
- Contact links remain plain HTML fallbacks.

### Animation

- Closing reveal only.
- No continuous glow or pulsing availability indicator.

# Technical Strategy

## Core principles

- Preserve Astro routing and static rendering.
- Keep project data and translations separate from presentation.
- Use browser primitives before libraries.
- Add React only for a stateful interaction that cannot be expressed cleanly in Astro or CSS.
- Keep all motion and immersive enhancements optional.
- Avoid architecture changes without a documented decision and approval.

## Recommended implementation layers

### 1. Static markup and data

Continue using:

- Astro components.
- Typed project data.
- Explicit route mappings.
- Localized copy within component and data files.

Before major redesign, centralize repeated copy in a localization module only if the current duplication becomes a maintenance issue.

### 2. CSS

Use CSS custom properties for:

- layout scale;
- motion duration and easing;
- reveal offsets;
- evidence frames;
- route-specific accent emphasis.

Avoid utility classes that obscure semantic structure. Astro scoped styles are suitable for route-specific compositions.

### 3. Native client behavior

Use:

- custom elements for reveal and evidence behavior;
- `IntersectionObserver`;
- `matchMedia` for reduced motion;
- `HTMLDetailsElement` for mobile navigation;
- `:has()` with a progressive-enhancement fallback.

Do not run scripts until a component exists on the page.

### 4. Optional island

React is not recommended in the first overhaul phase. If a complex project evidence viewer or interactive system map is approved, evaluate a single React island at that point.

## Routing and transitions

Astro’s static router is currently straightforward. If page transitions are added:

- Add the Astro view-transition primitive rather than introducing a separate router.
- Scope it to one transition contract.
- Keep full document navigation available.
- Ensure language-switch links preserve equivalent routes.
- Test browser back/forward behavior.

Avoid fade-only transitions across every route. They are unlikely to carry enough narrative value and can increase page complexity.

## Project filtering

The existing radio and `:has()` filter should remain as the baseline. Before adding JavaScript:

- Confirm CSS support targets.
- Add a `noscript` or default-all fallback where appropriate.
- Preserve the accessible `fieldset` and legend.
- Use `aria-live` only for a verified count update.

## Evidence viewer

A future evidence viewer can be built with native HTML and a small dialog implementation:

- `<dialog>` for modal evidence.
- Native close behavior and Escape support.
- Focus restoration.
- A static link fallback.
- Lazy image loading.
- Reduced-motion-compatible transitions.

Do not include HSVP Hub restricted imagery.

## Motion dependency policy

The project should not add both GSAP and Framer Motion.

### Phase 1

- CSS transitions.
- Web Animations API for short sequences.
- IntersectionObserver.
- Native scroll behavior.

### Phase 2

- Consider GSAP only for a demonstrated timeline or scroll-linked sequence.
- Consider Astro view transitions for route continuity.
- Do not add Lenis initially.

### Phase 3

- Consider Three.js or React Three Fiber only after a human-approved interactive prototype proves its value.
- Keep a static fallback.

## Performance budget recommendations

Because no numeric baseline is available, these are implementation gates rather than measured claims:

- No global client JavaScript framework in addition to Astro.
- No full WebGL scene on initial route load.
- Reused motion code must remain small.
- Hero media, if added, must use responsive image sources.
- Images must specify width and height.
- Lazy-load below-the-fold screenshots.
- Avoid external font requests if transfer cost is a concern, unless the approved typography is self-hosted.
- Test on narrow mobile, tablet, laptop, and wide desktop viewports.

## SEO and metadata

Before visual implementation, or in the G6 optimization stage:

- Add canonical URLs.
- Add hreflang mappings.
- Add sitemap and robots configuration.
- Add 404 handling.
- Add explicit Open Graph/Twitter metadata where appropriate.
- Add social preview assets only if owner-approved.
- Audit internal links and external links.

## Testing

The first implementation increment should add Playwright critical-path coverage:

- Home loads in English and French.
- Navigation opens and closes.
- Language switch preserves route equivalents.
- Theme toggle changes and persists.
- Project index filters.
- Each project route loads.
- Contact links are present.
- Mobile and desktop snapshots pass keyboard checks.

Add component tests only for stateful behavior introduced by future islands.

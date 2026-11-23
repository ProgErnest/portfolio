# Motion Technical Architecture

## Architectural stance

Preserve Astro 7.4.12, Tailwind CSS 4, TypeScript, typed project data, and
static generation. Add no framework migration. The existing repository has no
React or 3D dependency; that absence is a useful performance baseline.

## Layers

### Layer 1 — semantic static shell

Astro components render headings, links, status text, images, captions, dialog
fallbacks, and bilingual copy. Every future interaction starts here.

### Layer 2 — CSS primitives

Centralize motion variables, route-specific data attributes, focus states,
evidence frames, field lines, and reduced-motion overrides in the existing style
system. Prefer transforms and opacity only when opacity does not hide essential
content.

### Layer 3 — small enhancement module

Proposed future modules:

- `src/utils/motion.ts`: reduced-motion capability, animation cancellation,
  cleanup helpers.
- `src/components/animations/Reveal.astro`: declarative reveal marker or
  standards-based custom element.
- `src/components/animations/RouteProgress.astro`: optional route signal.
- `src/components/animations/EvidenceDialog.astro`: only if native dialog
  behavior cannot stay local to the evidence component.
- `src/components/visuals/SystemMap.astro`: accessible HTML/SVG map.

These names are architectural proposals, not a request to create them now.

### Layer 4 — optional route islands

Use a small client module only on routes with a real interaction. React is
unjustified unless one approved stateful interaction becomes materially clearer
as a component. Do not introduce React Three Fiber merely to host one scene.

## Technology matrix

| Technology | Use | Complexity | Bundle/performance | Decision |
|---|---|---:|---|---|
| CSS | tokens, hover, focus, simple scene | Low | Minimal | Adopt first |
| IntersectionObserver | section/evidence entry | Low | Minimal | Adopt |
| Web Animations API | bounded sequences | Low/medium | Native | Adopt |
| SVG/HTML | maps and connectors | Medium | Low | Adopt for spatial proofs |
| Astro view transitions | route continuity | Medium | Low/medium | Prototype after lifecycle review |
| GSAP | one complex timeline/pin proof | Medium/high | Added runtime | Defer behind proof |
| ScrollTrigger | measured pinned sequence | High | Added runtime | Defer |
| Lenis | smooth scrolling | Medium | Runtime and accessibility risk | Do not initially adopt |
| Three.js | approved spatial proof | High | GPU/runtime cost | Optional late experiment |
| React Three Fiber | React scene composition | High | Adds React | Do not initially adopt |

Do not combine overlapping animation engines.

## Lifecycle and routing

Initialize enhancements on first render and after any approved Astro navigation
event. A route initializer must be idempotent. Cleanup must cancel animations,
disconnect observers, remove listeners, and dispose WebGL resources. Back/forward
navigation is a required test path. Native navigation remains a supported
fallback if view transitions are disabled.

## Loading and performance

- Keep initial HTML complete and interactive.
- Dynamically import non-critical motion and any spatial scene.
- Lazy-load below-fold images; specify dimensions.
- Do not load WebGL under reduced motion or on unsupported/constrained devices.
- Pause or dispose scenes when hidden.
- Use GPU-friendly transforms and avoid layout reads in pointer loops.
- Measure rather than claim performance.

Suggested gates to measure: route load timing, transferred JavaScript, image
bytes, layout shift around Hero/evidence, frame stability during interaction, and
memory after route changes. Record device, browser, viewport, and network
conditions with each result.

## Accessibility and localization

Use semantic buttons/links, visible focus, localized labels, complete English and
French copy, and text fallbacks for every SVG. Reduced motion is checked before
initialization. No animation may be the only indication of active state.

## Validation order

1. `npm run format:check`
2. `npm run lint`
3. `npm run check`
4. `npm run build`
5. Keyboard, reduced-motion, theme, English/French, and responsive browser
   review.
6. If a scene exists, measure and review disposal after route changes.


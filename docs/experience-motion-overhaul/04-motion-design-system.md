# Motion Design System

## Principles

- Motion explains a change or establishes narrative order.
- Static content remains complete.
- Motion is progressive enhancement.
- Reduce motion preferences are mandatory.
- GPU-heavy effects are opt-in and lazy-loaded.
- One page should not combine every available effect.
- Viewport and route changes must not leave listeners or animation instances behind.

## Recommended architecture

Use Astro as the static shell and keep motion enhancements in a single small client module plus CSS primitives. Add React only if a reusable stateful interaction genuinely requires it.

At minimum, introduce future modules such as:

- `src/components/animations/Reveal.astro` or a standards-based custom element.
- `src/components/animations/RouteProgress.astro` if Astro view transitions are used.
- `src/utils/motion.ts` for reduced-motion detection and cleanup.
- CSS data attributes such as `data-motion="reveal"` and `data-motion="stagger"`.

Do not add GSAP and Framer Motion together. They solve overlapping problems. The preferred first implementation is CSS plus the Web Animations API or a small GSAP dependency only if complex sequencing justifies it.

## Motion global

### Route progress

Purpose: indicate navigation, not decorate it.

- A 1–2px green progress line at the top of the sticky shell.
- Duration tied to route loading or a short 180–260ms completed-state transition.
- No full-screen preloader unless a concrete slow-load experience justifies it.

### Page-load entrance

Purpose: create one orchestrated first impression.

- One Hero copy reveal.
- One EP construction reveal.
- No staggered reveal for every downstream section.
- Total duration should remain under 900ms.

### Section reveal

Purpose: preserve hierarchy on deep pages.

- Intersection-based reveal for page-heading, evidence, or major section groups.
- Only translate 12–24px and fade; avoid 3D transforms on text.
- Disable automatically for reduced-motion users.

## Motion interactive

### Project evidence hover

- Scale an evidence frame 1.01–1.015.
- Shift caption or evidence rail slightly.
- Preserve layout dimensions.
- Add a visible keyboard focus state.

### Button response

- Existing button boundaries should remain stable.
- Add 120–180ms color, border, and transform transitions.
- Magnetic behavior is not recommended for the primary CTAs or mobile.

### Contextual cursor

Only add a custom cursor if it provides context:

- Project evidence: “View evidence”.
- External repository: “Open”.
- Internal route: “Explore”.

It should never replace the native cursor on touch devices or users who rely on assistive tools.

### 3D and tilt

Tilt is low-value if no spatial relationship is communicated. The EP construction or a project architecture diagram could use pointer depth, but it should use 2–6px translation and remain subtle. Full card tilt is likely generic.

## Scroll-driven motion

Use one of two approaches:

1. Native CSS `scroll-timeline` where supported, with an IntersectionObserver fallback.
2. GSAP ScrollTrigger only after native features prove insufficient.

Recommended uses:

- Project list rows reveal in a restrained sequence.
- Case-study evidence moves at a slower rate than the text rail.
- Experience entries gain state as the reader reaches them.
- A single progress rail tracks document position.

Not recommended:

- Pinned sections for every page.
- Horizontal scrolling for standard project content.
- Parallax for body text.
- Scroll-linked opacity that can hide content.

## Immersive experiences

### EP system field

Complexity: low to moderate.

Possible implementation:

- CSS/SVG with minimal JavaScript pointer response.
- A subtle animated network or coordinate field in the Hero.
- It communicates the “beyond code / building systems” theme without fake telemetry.

Performance impact: low if no WebGL.

### Project system map

Complexity: moderate.

Possible implementation:

- SVG or HTML structure showing content, interface, backend, data, and verified technology relationships.
- A case-study-specific architecture view.
- No invented infrastructure or confidential topology.

Performance impact: low to moderate.

### WebGL scene

Complexity: high.

At this stage, WebGL is not recommended as a global experience. It is only worth proposing for a later proof:

- A sparse EP or system-graph scene on the home page.
- Lazy-loaded after the primary Hero is interactive.
- Fallback is always the static EP construction.
- Three.js or React Three Fiber would require an explicit dependency and performance/maintenance decision.

## Technology recommendations

| Technology | Recommendation | Rationale |
|---|---|---|
| Astro + CSS | Adopt first | Lowest cost and best static fallback. |
| Web Animations API | Adopt for targeted sequences | Native API with no extra dependency. |
| IntersectionObserver | Adopt for reveals | Browser-native and easy to manage. |
| GSAP | Consider only after a complex prototype | Useful for timelines and scroll scenes, but no need yet. |
| ScrollTrigger | Defer | Overlap with native observer and scroll timeline; add only for a demonstrated need. |
| Lenis | Defer | Smooth scrolling can harm accessibility and has no verified use case here. |
| Framer Motion | Do not adopt | React and an animation runtime are unjustified by current behavior. |
| Three.js | Defer | No evidence of a visual requirement that HTML/SVG cannot satisfy. |
| Rive/Lottie | Do not adopt initially | No verified asset or interaction requirement. |

## Accessibility requirements

- `prefers-reduced-motion: reduce` disables or minimizes all non-essential motion.
- The motion preference is read before initialization.
- Interactive reveals do not make keyboard focus impossible.
- Scroll and pointer effects never replace visible labels.
- Animated text remains in the DOM and available to assistive technology.
- Avoid flashing or rapid color sequences.
- Touch interactions use regular tap behavior.

## Lifecycle requirements

Before using Astro view transitions or a scroll library:

- Initialize once per route.
- Clean up listeners and observers.
- Cancel pending animations on page navigation.
- Reset scroll state consistently.
- Test browser back/forward navigation.
- Test theme switches without recreating unrelated animation state.

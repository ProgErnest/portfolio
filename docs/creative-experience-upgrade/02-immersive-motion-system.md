# Immersive Motion System

## Purpose and boundaries

Motion is a narrative grammar, not a component decoration library. It must
explain entrance, relationship, focus, progress, or transition. Static markup
remains complete and useful.

## Motion tokens

Use CSS custom properties and a small TypeScript utility as the single source
for values. Names describe intent rather than a specific component.

| Token | Value | Use |
|---|---:|---|
| `--motion-instant` | 80ms | pressed/focus feedback |
| `--motion-fast` | 140ms | color, border, icon response |
| `--motion-standard` | 220ms | local hover and disclosure |
| `--motion-reveal` | 480ms | section or evidence entrance |
| `--motion-scene` | 720ms | hero or route scene |
| `--motion-long` | 1100ms max | one deliberate construction |
| `--ease-standard` | `cubic-bezier(.2,.8,.2,1)` | most entrances |
| `--ease-emphasis` | `cubic-bezier(.16,1,.3,1)` | scale/position emphasis |
| `--ease-exit` | `cubic-bezier(.7,0,.84,0)` | leaving or closing |
| `--motion-distance-sm` | 8px | local feedback |
| `--motion-distance-md` | 20px | section reveal |
| `--motion-scale-subtle` | 1.012 | evidence hover |
| `--motion-parallax-near` | 8px max | pointer/scroll depth |
| `--motion-parallax-far` | 20px max | field decoration only |

Spring physics are not global tokens. If a prototype needs a spring, define its
stiffness, damping, and mass in the prototype record and measure the result.

## Priorities and triggers

Priority order:

1. Input feedback and focus.
2. Navigation/state change.
3. Content hierarchy.
4. Narrative scene.
5. Decorative atmosphere.

Decorative motion is dropped first under reduced motion, constrained devices, or
CPU pressure. Triggers are page load, route change, viewport entry, intentional
pointer movement, keyboard focus, and user activation. Never use an indefinite
animation to communicate a static fact.

## Global sequences

### Initial entrance

One 600–900ms sequence: shell settles, hero copy enters, then the EP field
constructs. Downstream sections are already present and may use a single
viewport reveal. No preloader.

### Route continuity

If Astro view transitions are approved, use one route contract: outgoing stage
recedes, incoming stage establishes its identity, and the shell remains stable.
The transition must not delay navigation or trap focus. Full document navigation
is the fallback.

### Progress

A 1–2px top route line may indicate navigation loading. A document progress rail
may appear only on long case studies. Neither is a fake loading percentage.

## Interactive motion

| Interaction | Desktop | Keyboard/touch | Reduced motion |
|---|---|---|---|
| Evidence hover | 1.012 scale and caption lift | Focus gets same caption; tap opens | No scale; focus and open remain |
| Route indicator | 140ms position/color change | Active route is textual in DOM | Immediate state |
| EP field | 2–6px pointer depth | Focusable links expose the same destinations | Static field |
| Filter | 4–8px reorder/reveal | Native radio semantics | Immediate filtering |
| Expandable evidence | Dialog open/close transition | Escape, close button, focus return | Immediate dialog |
| Magnetic action | Desktop experiment only, 6px max | No magnetic keyboard/touch behavior | Disabled |
| Contextual cursor | Optional desktop label near evidence | Never replaces labels or native cursor | Disabled |

No effect is hover-only. Touch receives tap behavior. Pointer listeners are
passive where possible and removed when a route changes.

## Scroll-driven motion

Use native `IntersectionObserver` and CSS scroll-linked animation first. A
ScrollTrigger prototype is justified only for one of:

- A pinned case-study map where the text-to-node relationship is otherwise
  unclear.
- A chronological Experience spine where progress is the subject.
- A single home transition from identity to evidence.

Do not pin every section, hide body text with opacity, or turn ordinary project
reading into horizontal scrolling. The scroll position must never be required to
recover content.

## SVG grammar

SVG is preferred for relationship diagrams:

- Draw connectors from 0 to 1 once when their section enters.
- Highlight only the selected relationship.
- Keep labels in HTML when they need rich accessibility.
- Use `aria-hidden="true"` for purely decorative lines.
- Morph only between semantically equivalent states; never morph unrelated
  diagrams for spectacle.

## Reduced motion

Read `prefers-reduced-motion` before initializing enhancement. Under reduce:

- Skip page-load choreography, parallax, path drawing, cursor followers, and
  WebGL.
- Preserve focus, hover color, expanded state, and content order.
- Replace transitions with immediate state changes or a short opacity change
  only when it prevents disorientation.
- Do not remove content because animation is unavailable.

## Lifecycle contract

Every enhancement exposes `init()` and returns `cleanup()`, or is a custom
element with `connectedCallback`/`disconnectedCallback`. Cleanup removes
observers, pointer listeners, timers, animation handles, and route hooks.
Astro navigation must not duplicate instances. Theme changes update tokens
without rebuilding unrelated scenes.

## Implementation ladder

1. CSS transitions and native disclosure.
2. IntersectionObserver plus Web Animations API.
3. CSS `scroll-timeline` with a non-animated fallback.
4. GSAP for one measured complex timeline.
5. Three.js only for an approved, lazy-loaded spatial proof.

Never add GSAP and Framer Motion together. Never add a library solely to make a
static list fade in.


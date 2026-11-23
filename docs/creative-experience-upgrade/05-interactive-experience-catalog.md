# Interactive Experience Catalog

All interactions are progressive enhancements. The static control or link is
the source of truth.

| ID | Experience | Trigger/feedback | States | Responsive and accessibility | Complexity |
|---|---|---|---|---|---|
| I-01 | EP field links | Focus/click a trajectory; linked section gains focus styling | idle, focused, active | Keyboard links; touch tap; reduced motion is static | Low |
| I-02 | Route progress | Navigation begins/completes | idle, loading, complete | No content dependency; no motion under reduce | Low |
| I-03 | Project status filter | Native radio selection; visible set changes | all, active, completed, functional | Works without JS; announce count only if actually computed | Low |
| I-04 | Evidence frame | Hover/focus lifts caption; click opens dialog | idle, focused, expanded | Keyboard Escape and focus return; mobile full-width | Medium |
| I-05 | HSVP system map | Select a published category | idle, selected | Text list fallback; no sensitive topology | Medium |
| I-06 | Skills evidence focus | Select a skill category | idle, selected | Keyboard buttons; mobile swaps detail block | Medium |
| I-07 | Experience marker | Entry enters viewport | upcoming, current, visited | Static ordered list; no pinned mobile sequence | Low |
| I-08 | Contextual cursor | Desktop pointer over evidence/action | native, contextual | Disabled on touch, keyboard, reduced motion; native cursor remains | Medium |
| I-09 | Magnetic action proof | Pointer near non-primary action | idle, attracted, released | Never affects keyboard/touch or primary CTA; optional | Medium |
| I-10 | Copy contact address | User activates copy control | idle, copied, failed | Native link remains; status text is announced | Low |
| I-11 | Case-study progress rail | Scroll through a long case study | start, in-progress, end | Decorative enhancement; headings remain available | Medium |
| I-12 | One spatial prototype | Pointer/scroll in approved scene | static, enhanced, unavailable | Lazy-loaded; static fallback; no reduce-motion scene | High |

## Interaction contracts

### Evidence dialog

Use native `<dialog>` or an equivalent standards-based focus-managed pattern.
The close button has a localized accessible name, Escape closes, focus returns to
the trigger, and the caption remains in the dialog. Image dimensions are known
before load. If JavaScript fails, the image remains a normal link.

### Filters

Keep the existing fieldset, legend, radio inputs, and CSS baseline. Any
enhancement may add a live count only when it is accurate and localized.
Filtering must not reorder the DOM in a way that breaks keyboard reading order.

### System maps

Interactive nodes are buttons or links with visible text. SVG is a visual aid,
not the only label. Selection is represented by `aria-pressed` or an equivalent
state, and the explanatory content remains in the DOM.

### Pointer effects

Use `pointermove` only after a capability and reduced-motion check. Clamp all
translation. Never attach a follower that obscures text, never hide the native
cursor, and never require a pointer to discover a destination.

## Explicit non-interactions

- No fake live telemetry.
- No infinite availability pulse.
- No percentage completion for projects without measured progress.
- No hover-only project facts.
- No hidden content behind scroll position.
- No smooth-scroll dependency without a measured accessibility benefit.


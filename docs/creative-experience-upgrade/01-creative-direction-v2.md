# Creative Direction v2 — Field System / Living Proof

## Status

Design specification only. This document does not authorize application-code
changes. The eight documents in `docs/experience-motion-overhaul/` remain
unchanged and are the baseline being evolved.

## Creative thesis

**Field System / Living Proof** combines three compatible readings of Ernest
Programmer:

1. **Systems engineering field notes**: precise labels, relationships, evidence,
   boundaries, and honest status.
2. **Cinematic digital experience**: deliberate entrances, scale changes, and
   narrative pacing that make the visitor feel progress rather than browse a
   template.
3. **Interactive spatial design**: layers, paths, depth, and responsive
   diagrams used to explain relationships, not to simulate a product dashboard.

The portfolio should feel like a working model of an engineering practice:
structured enough to trust, alive enough to remember, and explicit about what is
verified versus still developing.

## What is retained, deepened, replaced, and tested

| Prior proposal | v2 decision | Reason |
|---|---|---|
| Systems Engineering Field Notes | Retain as the factual foundation | It protects credibility and gives the visual system a meaningful grammar. |
| Green/blue semantic palette | Retain; add only derived tints and grid opacity | Existing contrast and identity are already approved. |
| EP construction | Deepen into a route-aware signature | The mark becomes continuity, not repeated decoration. |
| Repeated rules and two-column sections | Replace selectively with field, rail, and stage compositions | The audit identified visual sameness as the main limitation. |
| CSS/native motion | Retain as default | Static-first and accessibility remain non-negotiable. |
| GSAP/ScrollTrigger | Prototype only for one proven narrative sequence | Complexity must earn its dependency. |
| Global WebGL hero | Reject as a default | It would make novelty and performance the product. |
| Targeted spatial proof | Experiment behind a feature gate | A small, meaningful system graph may improve comprehension. |
| Custom cursor and magnetic CTAs | Defer or limit to contextual, desktop-only experiments | Native affordances must remain stronger than decoration. |

## Visual identity

### Signature

The global signature is a **green signal travelling through a blue technical
field**, anchored by the EP monogram. It appears differently by route:

- Home: EP as an origin node with three restrained trajectories.
- About: EP as a method marker beside a progression line.
- Projects: EP as a coordinate stamp on evidence.
- Case studies: EP as a connector origin in a system map.
- Skills: EP as the center of an evidence relationship map.
- Experience: EP as a chronological marker.
- Contact: EP as a final open endpoint.

The mark must never imply real telemetry, live users, or an operational hospital
system. Labels describe published portfolio content only.

### Palette

Keep the approved semantic values:

- Light canvas `#F5F7F9`, surface `#FFFFFF`, raised surface `#E9EEF2`.
- Dark canvas `#101820`, surface `#182631`, raised surface `#203542`.
- Green `#087F59` / `#5CD6A2`.
- Blue `#1E6FAE` / `#78B8F4`.
- Focus `#0B6EA8` / `#95C8FF`.

Derived values may be used for lines and overlays only:

- Technical grid: current border color at 10–18% opacity.
- Green signal: current green at 70–90% opacity.
- Blue depth: current blue at 12–24% opacity.
- Warm state: introduce only if a real warning or unresolved item needs a
  non-green/non-blue distinction; do not use it as decoration.

No aurora gradients, rainbow lighting, fake terminal output, or unexplained
glows.

### Typography

- **Space Grotesk**: display statements, route titles, and large project names.
- **Inter**: paragraphs, controls, navigation, and captions.
- **JetBrains Mono**: dates, status, coordinates, technology labels, and evidence
  boundaries.

Typography supplies cinematic scale: a large statement establishes a scene, a
small mono rail supplies verifiable context, and body copy restores clarity.
Avoid making every heading uppercase or giving every section an eyebrow.

## Composition grammar

Each route should combine at most three of these layers:

1. **Stage**: the dominant statement, image, or diagram.
2. **Rail**: narrow metadata, status, date, or evidence boundary.
3. **Field**: linework, coordinates, or a spatial relationship.
4. **Proof**: a screenshot, verified fact, repository link, or explicit gap.

Use asymmetric grids, offset baselines, cropping, and intentional negative space.
On mobile, collapse the layers into a readable sequence; do not preserve an
artificial desktop collage.

Avoid:

- A card for every item.
- Glass panels around every section.
- Decorative numbers that do not encode sequence.
- Full-bleed screenshots without captions.
- Visual changes that make incomplete projects look complete.

## Route identities

| Route | Identity | Dominant composition | Meaningful interaction |
|---|---|---|---|
| Home | Origin / direction | Hero stage plus EP field | Pointer depth on the EP field; project trajectory links |
| About | Method / formation | Split statement and evidence progression | Focus a practice-to-project relationship |
| Projects | Observatory / proof index | Evidence grid with status rail | Filter and focus projects without losing context |
| Case studies | System / evidence | Project-specific map plus proof rail | Expand evidence or inspect a relationship |
| Skills | Relationship map | Capability-to-project graph | Select a capability and reveal verified contexts |
| Experience | Progression | Chronological spine with artifact links | Scroll/state focus on each verified entry |
| Contact | Open endpoint | Sparse closing field and direct channels | Contextual link feedback; optional copy action |

## Image and evidence treatment

Approved screenshots remain evidence, never scenery. Every image has:

1. A fixed aspect-ratio frame with width and height known before load.
2. Localized alternative text.
3. A caption stating fictional/non-result data when applicable.
4. An optional enlarged view with focus restoration.

Do not add HSVP Hub screenshots without explicit approval. Do not expose
credentials, patient records, institution names, or `.env` content.

## Reference qualities

The intended qualities are an engineering notebook, a museum wayfinding system,
an observability diagram, and a film title sequence—not a literal imitation of
any product or designer. References are qualities to study: pacing, hierarchy,
linework, and spatial composition. Do not copy branded interfaces or assets.

## Coherence rules

1. Every motion or spatial object must clarify hierarchy, relationship, or state.
2. Every visual claim must be traceable to approved content.
3. One route may have one dominant spectacle; supporting sections stay quiet.
4. Static HTML must retain the complete story.
5. The same EP geometry may recur, but its route meaning must change.
6. Light and dark themes change atmosphere, not information hierarchy.
7. French and English preserve the same sequence and affordances.

## Human validation gates

Before implementation, validate the thesis, the degree of asymmetry, the hero
balance between copy and EP field, the evidence-frame treatment, and whether a
single spatial prototype is worth building.


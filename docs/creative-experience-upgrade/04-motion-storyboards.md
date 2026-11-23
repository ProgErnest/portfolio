# Motion Storyboards

Durations are indicative targets, not measured claims. Every storyboard has a
static end state and a reduced-motion variant.

## Global shell

| Step | Trigger | Animation | Result |
|---|---|---|---|
| 1 | Document ready | Shell remains visible; no blocking preloader | Navigation is immediately usable |
| 2 | Route starts | 1px top line advances as a navigation signal | User sees progress without fake percentage |
| 3 | Route ready | Line completes in 180–260ms and clears | New page is established |
| 4 | Keyboard focus | Focus ring appears immediately | Control state is unambiguous |

Reduced motion: no line animation; active route and focus update immediately.
Mobile: keep the shell static and avoid moving the disclosure panel after focus.

## Home

| Step | Trigger | Elements | Motion | Duration | Final state |
|---|---|---|---|---:|---|
| 1 | Ready | Hero stage | Copy is already readable; clip/mask prepares only the display line | 0–120ms | No content hidden |
| 2 | Ready | H1 and intro | One upward reveal with standard ease | 420ms | Position locked |
| 3 | After copy | EP field | Origin node appears, then three connectors draw | 520ms | Static system field |
| 4 | After field | Actions | Buttons settle with color/border response | 180ms | Navigation available |
| 5 | Scroll entry | Project strip | Rows shift 8px and settle as a group | 360ms | Evidence readable |

Reduced motion: all stages render at once. Mobile: omit pointer depth and draw
connectors as static lines.

## About

| Step | Trigger | Elements | Animation | Result |
|---|---|---|---|---|
| 1 | Viewport entry | Practice statement | 12px reveal | Statement establishes context |
| 2 | Viewport entry | Evidence progression | Line extends to the next verified item | Formation reads as sequence |
| 3 | Focus/click | Practice relationship | Related project link gains a border and text emphasis | Relationship is explicit |

Reduced motion: no line growth; selected relationship uses static contrast.

## Projects index

| Step | Trigger | Elements | Animation | Result |
|---|---|---|---|---|
| 1 | Filter change | Project surfaces | Opacity is not the sole signal; items move 4px and settle | Filtered set remains legible |
| 2 | Focus | Status rail | Marker changes color/border immediately | Status remains textual |
| 3 | Viewport entry | First project group | Group reveal, not per-card cascade | Page rhythm is restrained |

Reduced motion: filtering is immediate. Mobile: use no height choreography that
can move a focused radio out of view.

## Case studies

### HSVP Hub

1. On section entry, map nodes appear in their final positions.
2. Connectors draw once from access/authentication toward published process
   categories.
3. Selecting a node highlights its explanatory text and nothing else.
4. The evidence boundary remains fixed and visible.

Reduced motion: nodes and connectors are static; selection uses border/focus.
Mobile: map becomes a vertical ordered list before any connector treatment.

### JED

1. Screenshot frame enters with a 12px reveal.
2. Caption remains visible throughout.
3. Focus or click opens the native dialog with a short scale from 0.99 to 1.
4. Feature selection highlights the corresponding caption region if approved.

Reduced motion: dialog opens immediately. Mobile uses full-width image viewing
with native scrolling and a persistent close control.

### Auction Bids

1. Reconstruction frame appears as a static boundary.
2. A small status marker changes once on section entry; no looping pulse.
3. Screenshot can expand, retaining the fictional-placeholder caption.

Reduced motion and mobile: static frame and immediate dialog.

### Library Management

1. Catalog evidence enters once.
2. A workflow connector highlights only when its associated text receives focus.
3. Improvement lane reveals as a single group, not a promise of shipped work.

## Skills

1. Categories render as a readable list.
2. Selecting a category highlights verified contexts in the adjacent evidence
   list.
3. SVG relationship lines, if used, draw once and never continuously move.

Reduced motion: static list and selected border only. Mobile: selection changes
the adjacent details block; no two-dimensional graph is required.

## Experience

1. Timeline spine is present in the static DOM.
2. As an entry enters the viewport, its marker gains emphasis and its content
   moves 12px into place.
3. The next marker does not animate until the prior entry is readable.
4. Project/external links retain normal focus behavior.

Reduced motion: all entries are visible with static markers. Mobile uses a
vertical rule and avoids sticky/pinned chronology.

## Contact

1. Closing statement enters as one group.
2. Channel links respond to focus/hover with a 140ms border/color transition.
3. Optional copy action confirms success in text, not only a transient tooltip.

Reduced motion: immediate statement and native link behavior.

## Route transition storyboard

Only if Astro view transitions pass the lifecycle and accessibility gate:

1. Preserve shell and focus context.
2. Outgoing stage leaves through a short directional clip based on route family.
3. Incoming stage establishes its title and field.
4. Restore focus to the new main heading or a route-defined target.

Fallback is a normal navigation with no custom transition. Do not use a
universal fade as the only route identity.


# Spatial and 3D Concepts

These concepts are exploration candidates, not approved dependencies. The
static fallback is part of every concept.

## Concept S-01 — EP Coordinate Field

**Page:** Home.  
**Narrative goal:** Turn the positioning statement into a navigable origin
field.  
**Composition:** A 2D SVG/HTML coordinate field with the EP node and three
short trajectories to existing portfolio sections.  
**Interaction:** Pointer depth up to 6px; keyboard links focus the destination.
No free camera.  
**Scroll:** Field gradually gives way to project proof; no pinned viewport.  
**Mobile:** Static stacked nodes; no pointer layer.  
**Technology:** SVG, CSS custom properties, optional Web Animations API.  
**Fallback:** Same nodes and links as ordered HTML.  
**Cost:** Low/medium development, low performance.  
**Recommendation:** First spatial proof; likely sufficient without WebGL.

## Concept S-02 — Evidence Constellation

**Page:** Projects index.  
**Narrative goal:** Show projects as distinct evidence points without implying
  comparable completion.  
**Composition:** Four labeled points with status-coded rails and optional
  screenshot thumbnails.  
**Interaction:** Selecting a point focuses its project row; no orbiting.  
**Scroll/mobile:** Converts to a list.  
**Technology:** SVG or CSS grid.  
**Fallback:** Existing project list and filter.  
**Cost:** Medium development, low performance.  
**Recommendation:** Prefer SVG/HTML; no Three.js need.

## Concept S-03 — Protected System Map

**Page:** HSVP Hub case study.  
**Narrative goal:** Explain published domain relationships without exposing
  institutional topology or patient information.  
**Composition:** Abstract categories, not real infrastructure: access,
  administrative operations, medical operations, and background processing.  
**Interaction:** Select a category to reveal verified text.  
**Scroll/mobile:** Vertical ordered map.  
**Technology:** Accessible HTML plus SVG connectors.  
**Fallback:** Definitions list.  
**Cost:** Medium development, low performance.  
**Recommendation:** Strong fit; use instead of WebGL.

## Concept S-04 — Spatial Skill Graph

**Page:** Skills.  
**Narrative goal:** Connect areas of practice to verified project or internship
  contexts without proficiency scores.  
**Composition:** Central practice node and a small number of evidence links.  
**Interaction:** Focus a category; connected labels highlight.  
**Mobile:** Tabs/list, not a squeezed graph.  
**Technology:** SVG/HTML.  
**Fallback:** Existing skill records.  
**Cost:** Medium development, low performance.  
**Recommendation:** Good candidate after the first SVG map.

## Concept S-05 — Sparse EP WebGL Scene

**Page:** Home, below the primary Hero only.  
**Narrative goal:** Test whether depth adds meaning to the EP field beyond SVG.  
**Composition:** A few low-poly lines/points forming a slowly changing field; no
  branded 3D object and no simulated telemetry.  
**Interaction:** Camera parallax from pointer; optional scroll rotation.  
**Mobile:** Disable scene and show the SVG field.  
**Technology:** Three.js, dynamically imported after Hero interaction.  
**Fallback:** S-01.  
**Cost:** High development and maintenance; medium/high GPU cost.  
**Recommendation:** Prototype only after S-01 fails to express the intended
  spatial relationship. Do not make it global.

## Concept S-06 — Case Study Depth Plane

**Page:** JED or Library Management, only if approved evidence supports it.  
**Narrative goal:** Place one screenshot and its feature annotations on
  successive planes.  
**Composition:** 2.5D layered image, caption, and labels; no invented UI
  content.  
**Interaction:** Focus/scroll moves between evidence layers.  
**Mobile:** Flat image plus expandable captions.  
**Technology:** CSS transforms or SVG first; WebGL not required.  
**Fallback:** Evidence frame and caption.  
**Cost:** Medium development, low/medium performance.  
**Recommendation:** Use CSS/SVG; reject if it obscures the screenshot.

## Technology decision

Three.js is justified only if a static SVG/HTML proof cannot communicate a
relationship, and only after measuring the prototype on a laptop and standard
mobile device. React Three Fiber is not preferred because the repository has no
React runtime and the scene does not require React state. Shaders and particles
are exploratory implementation details, not a creative requirement. Any scene
must be lazy, disposable, reduced-motion safe, and excluded from initial
critical content.


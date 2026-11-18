# Design System — Approved Direction

## Art direction
Technical Engineering Lab × Premium Technology Studio.

The site should feel engineered, editorial, confident, and human. Avoid generic AI-generated portfolio conventions.

## Identity
- Main identity: Ernest Programmer
- Graphical signature: EP monogram
- Provisional tagline: Beyond Code. Building Systems.

## Color direction
- Primary accent: green; secondary accent: blue.
- Dark theme: graphite/navy surfaces. Light theme: white and cool neutrals.
- Gradients are occasional accents, never the dominant visual language.

### Implemented semantic tokens

| Token | Light | Dark | Purpose |
|---|---|---|---|
| Page | `#F5F7F9` | `#101820` | Main canvas |
| Surface | `#FFFFFF` | `#182631` | Content panels and fields |
| Raised surface | `#E9EEF2` | `#203542` | Secondary grouping |
| Primary text | `#13212B` | `#F3F7F8` | Headings and body copy |
| Secondary text | `#465660` | `#B8C6CE` | Supporting copy |
| Border | `#778994` | `#617986` | Component boundaries |
| Green accent | `#087F59` | `#5CD6A2` | Primary action and emphasis |
| Blue accent | `#1E6FAE` | `#78B8F4` | Links and secondary emphasis |
| Focus | `#0B6EA8` | `#95C8FF` | Keyboard focus indicator |

### Contrast verification

Ratios below were calculated using the WCAG relative-luminance formula for the
implemented sRGB hex values. Normal-size text requires 4.5:1; meaningful
non-text component boundaries and focus indicators require 3:1.

| Theme | Foreground | Background | Ratio | Result |
|---|---|---|---:|---|
| Light | Primary text `#13212B` | Page `#F5F7F9` | 15.28:1 | Pass |
| Light | Primary text `#13212B` | Surface `#FFFFFF` | 16.40:1 | Pass |
| Light | Secondary text `#465660` | Page `#F5F7F9` | 7.08:1 | Pass |
| Light | Secondary text `#465660` | Surface `#FFFFFF` | 7.61:1 | Pass |
| Light | Green `#087F59` | Page `#F5F7F9` | 4.67:1 | Pass |
| Light | Green `#087F59` | Surface `#FFFFFF` | 5.01:1 | Pass |
| Light | Blue `#1E6FAE` | Page `#F5F7F9` | 4.96:1 | Pass |
| Light | Blue `#1E6FAE` | Surface `#FFFFFF` | 5.33:1 | Pass |
| Light | Border `#778994` | Page `#F5F7F9` | 3.38:1 | Pass |
| Light | Border `#778994` | Surface `#FFFFFF` | 3.63:1 | Pass |
| Light | Focus `#0B6EA8` | Page `#F5F7F9` | 5.13:1 | Pass |
| Light | Focus `#0B6EA8` | Surface `#FFFFFF` | 5.51:1 | Pass |
| Light | Button text `#FFFFFF` | Green button `#087F59` | 5.01:1 | Pass |
| Dark | Primary text `#F3F7F8` | Page `#101820` | 16.59:1 | Pass |
| Dark | Primary text `#F3F7F8` | Surface `#182631` | 14.31:1 | Pass |
| Dark | Secondary text `#B8C6CE` | Page `#101820` | 10.23:1 | Pass |
| Dark | Secondary text `#B8C6CE` | Surface `#182631` | 8.83:1 | Pass |
| Dark | Green `#5CD6A2` | Page `#101820` | 9.88:1 | Pass |
| Dark | Green `#5CD6A2` | Surface `#182631` | 8.52:1 | Pass |
| Dark | Blue `#78B8F4` | Page `#101820` | 8.49:1 | Pass |
| Dark | Blue `#78B8F4` | Surface `#182631` | 7.32:1 | Pass |
| Dark | Border `#617986` | Page `#101820` | 3.91:1 | Pass |
| Dark | Border `#617986` | Surface `#182631` | 3.37:1 | Pass |
| Dark | Focus `#95C8FF` | Page `#101820` | 10.21:1 | Pass |
| Dark | Focus `#95C8FF` | Surface `#182631` | 8.81:1 | Pass |
| Dark | Button text `#101820` | Green button `#5CD6A2` | 9.88:1 | Pass |

Adjacent page/surface fills are intentionally low contrast; content panels,
fields, swatches, and other meaningful boundaries use the passing border token.
The focus ring is a 3px outline with offset, not color alone.

## Typography
- Headings: Space Grotesk.
- Body and UI: Inter.
- Technical labels/code: JetBrains Mono.
- All three families are available under the SIL Open Font License 1.1:
  [Space Grotesk](https://github.com/google/fonts/blob/main/ofl/spacegrotesk/OFL.txt),
  [Inter](https://github.com/google/fonts/blob/main/ofl/inter/OFL.txt), and
  [JetBrains Mono](https://github.com/google/fonts/blob/main/ofl/jetbrainsmono/OFL.txt).
- The site requests the variable 400–700 ranges from Google Fonts with
  `display=swap`, preconnects to the stylesheet and font origins, and specifies
  local/system fallback stacks. Browser font loading is lazy per used family;
  no font package or build dependency is added.
- Performance trade-off: this introduces Google Fonts stylesheet/font requests
  and a third-party connection. `display=swap` keeps fallback text available
  while fonts load; self-hosting can remove the third-party request if measured
  performance or privacy requirements later justify bundling font files.
  The local browser review confirmed all three families loaded, but did not
  measure cold-cache transfer size or latency.

## Shapes and components
- Geometric and structured layout.
- Moderate corner radii; avoid excessive pill shapes.
- Fine borders and restrained shadows.
- Floating glassmorphism navigation.
- Consistent Lucide iconography.
- Clear focus, hover, active, disabled, and loading states.

## Motion
- G1 adds no decorative motion.
- Respect `prefers-reduced-motion` by disabling transitions and animations.
- Keep all content and controls usable without animation.

## Responsive
Design deliberately for small mobile, large mobile, tablet, laptop, and wide desktop. Do not merely shrink the desktop layout.

## G1 implementation
- Theme defaults to the system preference; the light/dark choice is stored in
  `localStorage` under `ernest-theme`.
- The theme control is a native button with a changing accessible name and
  keyboard-visible focus.
- Shared primitives: primary, secondary, and quiet buttons; badge; text field;
  and bordered content panel.
- Design-system specimens are available in English at `/design-system/` and in
  French at `/fr/design-system/`.

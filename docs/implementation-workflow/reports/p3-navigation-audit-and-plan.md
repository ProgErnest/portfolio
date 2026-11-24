# P3 — Navigation audit and isolated prototype plan

**Date:** 24 November 2026
**Status:** Audit and final validation complete; awaiting explicit closure approval

## Audit summary

The current portfolio remains a static-first Astro 7.4.12 site. The shared
navigation is implemented in `src/components/layout/Navigation.astro`, the
theme in `src/layouts/Layout.astro` and
`src/components/ui/ThemeToggle.astro`, and localized route pairs in
`src/data/routes.ts`.

Observed strengths:

- The desktop and tablet/mobile shells share one native navigation component.
- The mobile menu uses `<details>`, native summary semantics, and an Escape
  handler.
- English and French routes have explicit mappings through `getLocalizedPath()`.
- Active routes use `aria-current="page"`.
- The skip link, focus ring, theme persistence, and reduced-motion fallback
  remain in the static HTML/CSS baseline.
- No Astro `ClientRouter`, view-transition component, GSAP, Three.js, or
  route-replacement mechanism is active.

Observed P3 risks:

- Navigation scripts currently use document-global selectors and are not
  expressed as a reusable lifecycle contract.
- The mobile menu opens at the server-provided state and closes after script
  initialization; it may flash on first mobile paint.
- The menu has no explicit outside-click behavior. It is not a modal, so a
  focus trap is unnecessary and must not be added.
- Theme initialization and toggle listeners are independent; a route router
  would require idempotent reinitialization.
- The existing specimen motion script is not a route lifecycle implementation
  and contains repeated listeners/progress handlers that must not be promoted
  into the global shell.

## Shell decision

P3 will retain the floating shell as the desktop identity. The mobile and
tablet adaptation remains a disclosure in the shell rather than a conventional
unified sidebar.

Planned shell contract:

- Desktop: stable floating shell, visible route text and active state, language
  and theme controls.
- Mobile/tablet: compact menu summary, full-width panel within the viewport,
  two-column destinations where space permits, clear active state, Escape close
  and focus return.
- Outside click may close the disclosure if it does not steal focus.
- Native link and `<details>` behavior remain the source of truth.
- No custom route transition is allowed to change link destinations, URL,
  history, keyboard behavior, or direct-load behavior.

## Section rail decision

A global rail is not approved for P3. The rail would not describe most existing
pages accurately and could become decorative.

If a rail is later introduced, it will be limited to a long page with real,
stable section IDs, beginning with the Home or a future case-study route. It
will use static links and actual section positions.

## Astro route-transition compatibility

Astro 7.4.12 provides `ClientRouter` and the `astro:transitions/client`,
`astro:transitions`, and view-transition APIs. A route-level activation would
replace document DOM and requires the shared lifecycle contract before adoption.

The prototype will remain non-activating:

- It will demonstrate the vertical closing/revealing mask locally.
- It will not intercept links or alter browser history.
- Reduced motion will show the final state immediately.
- No content will depend on the mask.
- Native navigation remains the fallback.

This is not approval to activate `ClientRouter` globally.

## Lifecycle contract for future routing

A future route enhancement must use explicit roots and idempotent initialization:

- Initialize only components present in the current DOM.
- Remove menu, theme, media-query, pointer, observer, timer, and animation
  listeners during cleanup.
- Cancel request-animation-frame work and Web Animations handles.
- Prevent duplicate initialization by component root state.
- Restore focus only to a valid route-defined target.
- Reinitialize per-page behavior after a route swap.
- Keep native navigation and direct URLs working without JavaScript.
- Under reduced motion, skip route choreography and keep state changes immediate.

## Baseline verification

The P3 audit run passed:

- `npm run format:check`
- `npm run lint`
- `npm run check` — 0 errors, 0 warnings, 32 modernization hints
- `npm run build` — 22 static routes built
- Git worktree — clean on `main`

No browser automation runner is configured in the repository.

## Next controlled increment

1. Add the vertical-mask interaction to the isolated P2 motion specimen.
2. Verify its keyboard, reduced-motion, fallback, and cleanup behavior.
3. Record the result and compatibility decision.
4. Do not activate the mask or `ClientRouter` in production routes.

## Prototype result

An isolated vertical-mask control was added to the existing bilingual motion
specimen, which is already confined to `/design-system/` and
`/fr/design-system/`. The prototype:

- covers and reveals a full-viewport mask in 420 ms phases;
- exposes an accessible live status;
- performs no route interception, URL change, or history operation;
- disables itself under `prefers-reduced-motion: reduce`;
- restores the final state and clears timers after the sequence;
- leaves native links, navigation, and direct loading untouched.

This prototype verifies a CSS/JavaScript mask concept only. It does not test
Astro DOM replacement, back/forward lifecycle behavior, or route focus
restoration. Those remain gates for a future `ClientRouter` prototype.

## P3 decision

Keep Astro `ClientRouter` disabled for the current increment. The existing
navigation remains native and reliable. The isolated mask is not activated in
the shared layout.

## Final targeted validation corrections

To prevent a first-paint mobile disclosure flash, the navigation root now
starts with an explicit closed menu state and updates that state whenever the
native `<details>` element opens or closes. Mobile CSS keeps the panel hidden
until the state is open. The desktop script continues to open the native
disclosure at initialization.

The specimen motion script also now cancels active Web Animations and clears
mask classes, timer state, and inline visibility immediately when reduced
motion becomes active. CSS provides an immediate non-animated fallback.

## Final validation gate

### Responsive browser validation

Tested in Chromium through the integrated browser against the existing local
Astro server:

| Configuration | Result |
|---|---|
| 320 px | 15 px browser scrollbar difference; no document overflow; 44 px menu target |
| 375 px | No document overflow |
| 390 px | No document overflow; shell remained within viewport |
| 430 px | No document overflow |
| 768 px | Shell remained within viewport |
| 1024 px | Shell remained within viewport |
| 1280 px | Desktop shell; menu summary hidden; links visible |
| 1440 px | Desktop shell; links visible; no overflow |

The shell is 72 px high in measured responsive configurations. The 44 px mobile
summary target satisfies a practical touch-target baseline. The shell and menu
panel remained inside the measured viewport.

### Accessibility behavior

Browser-tested behavior:

- Native `<details>` opening and keyboard activation work.
- Escape closes the mobile disclosure and returns focus to the summary.
- No focus trap was introduced.
- The language and theme controls remain reachable through keyboard navigation.
- Visible focus was not removed from global controls.
- Active routes retain `aria-current="page"`.
- The skip link and native link behavior remain in the HTML.

A screen-reader software pass was not available in the supplied environment.
The native `<details>`, `<summary>`, `aria-controls`, `aria-current`,
`aria-label`, and live status are still documented as the semantic fallback.

### Motion prototype

Browser-tested behavior:

- Initial reduced-motion state disables the prototype and hides the mask.
- Normal-motion activation covers and reveals as designed.
- Repeated activation after restoring motion works.
- Changing to reduced motion during the active sequence immediately hides the
  mask, cancels animations, resets classes, and disables the control.
- Timer cleanup leaves the mask hidden and restores the idle status.
- The prototype does not intercept navigation or alter URL/history.

### P3-02 Home validation

Browser validation also covered the English and French Home routes:

- H01 EP field uses explicit links for practice, projects, and direction.
- H02 manifesto copy remains readable under the responsive title scale.
- H03 scroll signal links to the real projects section.
- 320, 390, 768, 1024, and 1280 px configurations showed no document overflow.
- Reduced motion removed the title entrance animation.
- Visible keyboard focus is preserved on the field trajectory links.
- The static HTML contains all Home copy, project evidence, and trajectory links
  without JavaScript.

No-JavaScript static content was verified through the served HTML. The native
`<details>` remains the source of truth before enhancement. The closed-state
CSS is only enabled after JavaScript adds `.is-enhanced`, preserving a usable
native fallback.

### Technical checks

The final run passed:

- `npm run format:check`
- `npm run lint`
- `npm run check` with 0 errors, 0 warnings, and 32 existing JSDoc modernization
  hints
- `npm run build` with 22 static routes

### Unresolved limitations

- No dedicated screen-reader application was available for a manual pass.
- The repository has no Playwright runner or persistent E2E suite; browser
  checks were performed with the integrated Chromium browser.
- `ClientRouter`, back/forward DOM replacement, and route-focus restoration
  were not activated or tested as route transitions because that remains outside
  the approved P3 final gate.

### Closure decision

P3 can close as **navigation validation complete** for the approved scope: audit,
responsive shell validation, native disclosure accessibility, localized/theme
controls, isolated mask robustness, reduced motion, and static fallbacks.

Astro `ClientRouter` remains disabled. Production route transitions remain
outside P3 and are not approved. P4 must not begin until the explicit
human P3 closure gate is approved.

# Acceptance Criteria

## Creative and UX criteria

- The result has a distinct identity recognizable as Ernest Programmer.
- It is not a generic dark portfolio with green accents.
- Motion communicates hierarchy or change rather than decoration.
- The EP signature is used coherently, not as repeated decoration.
- Each page has a specific purpose and composition.
- Project status remains explicit and accurate.
- Confidential project information remains excluded.
- English and French routes offer complete equivalents.
- The experience remains credible to recruiters and engineers.

## Functional criteria

- All existing routes remain available.
- Language switching maps English and French equivalents correctly.
- Unknown routes have a useful 404 response.
- The theme toggle persists in `localStorage`.
- The theme toggle works when JavaScript is unavailable only insofar as a system default is still represented.
- Mobile navigation opens, closes, and responds to Escape.
- Project filters remain usable without JavaScript or degrade to the complete project list.
- External repository and contact links remain valid.
- Case-study repository links remain limited to authorized repositories.
- The Auction Bids repository remains excluded until `.env.prod` is confirmed sanitized or removed.

## Accessibility criteria

- Skip navigation remains available.
- Focus indicators remain visible.
- All controls have accessible names.
- Status and active-route states are meaningful in the DOM.
- Heading hierarchy has no skipped structural level.
- Images have localized alternative text.
- Screenshot captions identify fictional or non-result content.
- Mobile controls have sufficient target size.
- Color contrast passes the existing token baseline in both themes.
- Reduced-motion preference removes or minimizes non-essential motion.
- No interaction relies on hover alone.
- Native HTML fallbacks remain usable.

## Responsive criteria

- No horizontal overflow at narrow mobile widths.
- Navigation and theme controls remain usable.
- Project evidence and captions remain readable.
- Internal page headings do not clip or overlap.
- The mobile layout is designed as a mobile composition, not a compressed desktop grid.
- Tablet and wide desktop layouts remain deliberate.
- Sticky navigation does not obscure focused content.

## Motion criteria

- The page-load sequence, if implemented, is short and singular.
- Section reveals do not hide content.
- Scroll animations stop or simplify under reduced motion.
- No page animation depends on cursor position.
- Custom cursor behavior is optional and never replaces native affordances.
- Listeners and observers are cleaned up during route changes.
- Animation cannot break browser back/forward navigation.
- WebGL or 3D scenes, if approved, have a static fallback.

## Technical criteria

- Astro remains the static-first renderer.
- React is not introduced without a documented interaction need.
- GSAP and Framer Motion are not added together.
- WebGL is not introduced on every route.
- New components remain reusable only where reuse provides real value.
- Project and route data remain centralized.
- No secrets or private artifacts are committed.
- No backend or database is added without explicit approval.

## Performance criteria

Numeric thresholds should be measured before claiming a pass. The following are gates:

- No visible layout shift in the primary Hero or evidence frames.
- Initial route load does not include an unnecessary animation runtime.
- Above-the-fold image assets have appropriate dimensions.
- Below-the-fold screenshots use lazy loading.
- Motion code is included only on routes that use it.
- WebGL assets are lazy-loaded and never block static content.
- Reduced-motion users do not load non-essential 3D or animation assets if avoidable.

## Content and privacy criteria

- No institution name or confidential HSVP Hub capture is published.
- JED uses no customer-repository claim or unverified client-acceptance claim.
- Auction Bids explicitly remains partially functional and under reconstruction.
- Library Management accurately states V1 functionality and remaining UX/workflow work.
- Fictional screenshot content is clearly labeled.
- No credential, `.env`, patient record, or real-system capture is added.

## Verification plan

Run before each implementation checkpoint:

- `npm run format:check`
- `npm run lint`
- `npm run check`
- `npm run build`
- Playwright critical paths if available
- Mobile, tablet, laptop, and wide-desktop browser review
- Light/dark theme review
- English/French review
- Reduced-motion review
- Keyboard-only review
- Internal-link and asset audit
- Privacy and link audit

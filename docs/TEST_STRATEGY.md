# Test Strategy

## At every increment
- Run formatter check and lint where configured.
- Run TypeScript/Astro checks.
- Run relevant unit or component tests.
- Run production build.
- Review the diff for accidental changes and secrets.

## Browser validation
For UI work, inspect at minimum:
- Narrow mobile viewport.
- Tablet viewport.
- Desktop viewport.
- Keyboard-only navigation for interactive controls.
- Dark and light themes.
- English and French routes.
- Reduced-motion preference for animated sections.

## End-to-end critical paths
- Home loads and primary navigation works.
- Language switch opens the equivalent localized page where available.
- Theme toggle works and persists.
- Projects index opens each project detail page.
- Contact links work and form feedback is accessible if a form is implemented.
- Unknown routes produce a useful not-found page.

## Release checks
- Production build passes.
- No broken internal links or missing assets.
- No console errors on critical routes.
- Metadata, canonical, hreflang, sitemap, and robots directives are correct.
- No private data, secrets, or confidential screenshots are present.
- Performance and accessibility findings are reviewed and documented.

Do not invent numeric quality scores. Report actual tool output and tested viewports.

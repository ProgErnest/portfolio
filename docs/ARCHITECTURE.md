# Architecture — Initial Decision

## Approved direction
Static-first, multi-page Astro website with TypeScript.

Proposed stack:
- Astro as the primary framework and page renderer.
- TypeScript for application logic and typed data.
- Tailwind CSS 4 for styling, using the current official Astro-compatible integration.
- React only for interactions that genuinely benefit from client-side components.
- GSAP and CSS for selected animations; defer WebGL/Three.js unless a demonstrated requirement justifies it.
- Markdown/MDX content collections for project case studies.
- Zod for schema validation where appropriate.
- Playwright for end-to-end browser testing.
- Git/GitHub for version control.
- Cloudflare Pages as the proposed static hosting target, subject to deployment verification.

## Architectural principles
- Prefer static generation and progressive enhancement.
- Avoid a custom backend or database in V1 unless a concrete requirement emerges.
- Keep content separate from presentation.
- Keep translations explicit and complete.
- Use reusable layouts and components without over-generalizing.
- Lazy-load non-critical media and avoid unnecessary client JavaScript.
- Keep secrets out of source control.

## Routing and localization
- English default routes at `/`.
- French routes under `/fr/`.
- Define a reliable route mapping so language switching links to the equivalent page where it exists.
- Configure canonical URLs, hreflang, sitemap, and language metadata during the SEO phase.

## Proposed source organization
```text
src/
  components/
    layout/
    home/
    projects/
    ui/
    animations/
  content/
    projects/
  data/
  i18n/
  layouts/
  pages/
    projects/
    fr/
  styles/
  utils/
  types/
public/
docs/
tests/
```

Adapt this structure to Astro conventions and the actual installed version. Do not force folders that have no use.

## Dependency policy
Before adding or upgrading a dependency:
1. Explain the concrete need.
2. Check compatibility with the installed Astro and Node versions.
3. Prefer official integrations and maintained packages.
4. Avoid adding a library for functionality achievable cleanly with platform APIs or existing dependencies.

## Changes to this decision
Any material architecture change requires a written entry in `DECISION_LOG.md` and user approval.

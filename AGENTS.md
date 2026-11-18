## Development

When starting the dev server, use background mode:

```
npm run dev -- --host 127.0.0.1
```

## Project guidance

The portfolio is a static-first, bilingual (English/French) Astro site. Read the
project brief, architecture, design system, content guidelines, agent workflow,
roadmap, pending information, decision log, and test strategy in `docs/` before
working on the related areas.

- Keep English as the default and provide complete French equivalents.
- Use only verified biographical and project information. Respect the HSVP Hub
  confidentiality constraints in `docs/CONTENT_GUIDELINES.md`.
- Prefer Astro and progressive enhancement. Add React only for a specific
  interaction that benefits from client-side hydration.
- Do not add a backend, database, or paid service without explicit approval.
- Preserve existing files and patterns; do not commit, push, or deploy unless
  explicitly authorized.
- Follow `docs/AGENT_WORKFLOW.md` for incremental work and verification.

## Development server

Manage the server started from the project root with the VS Code terminal or
task. Stop it with `Ctrl+C` when finished.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

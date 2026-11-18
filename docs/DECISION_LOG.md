# Decision Log

Record material decisions. Format:

## YYYY-MM-DD — Short decision title
- Context:
- Options considered:
- Decision:
- Rationale:
- Consequences:
- Approval: user / agent within approved scope

## Initial decisions
### Architecture
- Context: Professional portfolio with mostly informational content and selected interactions.
- Decision: Astro-first, static-first, TypeScript; React only for justified interactive components.
- Rationale: Strong static rendering and limited need for a server backend.
- Consequences: Keep content separate; no custom backend/database in V1.
- Approval: User-approved direction in project planning; verify implementation details against current package compatibility.

### Hosting
- Decision: Cloudflare Pages is the proposed target.
- Status: Proposed; verify account, domain, build settings, and deployment constraints before production.

### Localization
- Decision: English default, French under `/fr/`.
- Status: Approved.

### Visual identity
- Decision: Green primary, blue secondary; dark/light themes; Space Grotesk, Inter, JetBrains Mono; technical engineering studio direction.
- Status: Direction approved; exact tokens and contrast remain to be validated.

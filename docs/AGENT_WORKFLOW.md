# Agent Workflow

## Roles
A single coding agent may perform these roles sequentially. Separate agents are optional, not required:
- Lead Engineer / Orchestrator
- UI/UX implementer
- Frontend implementer
- QA and accessibility reviewer
- Content and SEO reviewer

## Iteration loop
1. Inspect repository and relevant documentation.
2. State the goal and acceptance criteria.
3. Identify dependencies, risks, and missing user input.
4. Break work into small tasks.
5. Implement one coherent increment.
6. Run format, lint, type, test, and build checks available.
7. Inspect browser output for visual changes.
8. Review the diff and fix regressions.
9. Update docs and roadmap.
10. Report results and next increment.

## Autonomy boundaries
The agent may autonomously:
- Inspect files and propose changes.
- Implement scoped, reversible tasks.
- Add tests and documentation.
- Run local checks and development servers.

The agent must ask before:
- Destructive operations or broad refactors.
- Material architecture or design changes.
- Adding services with cost, collecting personal data, or introducing a backend.
- Publishing, deploying, or changing production configuration.
- Using private or sensitive project evidence.
- Committing/pushing if the user has not authorized it.

## User checkpoints
- G0: environment and repository baseline.
- G1: design system.
- G2: navigation and global layout.
- G3: homepage and Hero.
- G4: internal pages.
- G5: project evidence and content.
- G6: quality review.
- G7: production deployment.

## Definition of Done
Acceptance criteria pass; relevant checks pass or failures are documented; no known regression remains; accessibility and responsive implications are reviewed; docs are updated; report is factual.

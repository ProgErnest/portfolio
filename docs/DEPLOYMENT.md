# Deployment Plan

## Target
Cloudflare Pages is the proposed static hosting target.

## Before configuration
- Confirm the user's Cloudflare account access and chosen domain.
- Verify the Astro build output directory from the actual project configuration.
- Confirm build command and Node.js version.
- Confirm localized routes and static asset paths.
- Ensure no secrets are committed.

## Deployment stages
1. Local production build.
2. Preview deployment.
3. Browser smoke tests on preview.
4. User approval.
5. Production deployment.
6. Post-deployment route, asset, metadata, and contact-link checks.

Do not publish or change production DNS without explicit user approval.

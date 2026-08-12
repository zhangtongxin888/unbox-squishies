# Unbox Squishies Guide

The source of truth for [unbox-squishies.wiki](https://unbox-squishies.wiki), an independent, fact-checked beginner guide for the Roblox experience `[📦] Unbox Squishies`.

## Site purpose

- Put the beginner route first.
- Keep readers moving through quick start, core loop, progression, mistakes, FAQ, and sources.
- Separate official facts, official media observations, editorial strategy, and unpublished information.
- Never borrow mechanics from similarly named games.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run build:next
npm run lint
npm test
```

`npm run build:next` verifies the Vercel production build. `npm test` verifies the Sites/vinext-compatible build plus route, content, metadata, structured data, robots, sitemap, 404, and asset checks.

## Content maintenance

Verified game facts live in `content/game-data.ts`. Each important claim must use one of four evidence states:

- `official-listing`
- `official-media`
- `guide-strategy`
- `not-published`

When facts change, update the source URL, review date, visible copy, sitemap review date, and tests together. The official target is Universe ID `10558440509`, Root Place ID `93740767919502`, created by `Squish Squish Squish`.

## Hosting

The independent GitHub repository is the only long-term maintenance source. Sites is used only for design review and must not hold the formal custom domain. Formal hosting is prepared for Vercel via `vercel.json`; Cloudflare-compatible vinext output remains available through `npm run build`.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # dev server with HMR (http://localhost:3000)
npm run generate     # static build → .output/public (used for deployment)
npm run build        # SSR build (not used for deployment)
npm run preview      # serve .output/public locally after generate
npx nuxt prepare    # regenerate .nuxt/ types (run after config changes)
npm install --ignore-scripts  # install without triggering nuxt prepare (safe when upgrading modules)
```

No test framework is configured.

## Architecture

### Deployment model
Static site generated with `nuxt generate`, served on GitHub Pages from the **`gh-pages` branch** (not `main`). The GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on push to `gh-pages`, runs on Node 22, and uploads `.output/public` as the Pages artifact. All blog post routes are explicitly listed in `nitro.prerender.routes` in `nuxt.config.ts` — add new blog slugs there when adding new posts.

### Two data patterns — know which one applies
**Content-driven (Markdown):** Blog posts only. Lives in `content/blog/*.md`, queried with `queryCollection('blog')` from `@nuxt/content` v3. Collection schema is in `content.config.ts`. Always wrap queries in `useAsyncData()`.

**Hardcoded JS arrays:** Everything else — journeys (`pages/journeys/index.vue` + `pages/journeys/[id].vue`), gallery images (`pages/gallery.vue`), timeline events (`pages/timeline.vue`), achievements (`pages/achievements.vue`). To add/edit these, edit the arrays directly in each page component.

### Archival video config
`config/archivalVideos.ts` exports a named object used by `pages/timeline.vue`, `pages/achievements.vue`, `pages/about.vue`, and `pages/gallery.vue`. The `ArchivalVideo` component wraps a YouTube iframe with a VGA-era UI shell.

### Tailwind setup — v4, not v3 module
Tailwind CSS v4 is wired directly through Vite's PostCSS (`@tailwindcss/postcss`) in `nuxt.config.ts`. The `@nuxtjs/tailwindcss` module is **not used** (it's an unused devDependency, can be removed). `tailwind.config.js` extends v4 with an Inter font family, a `primary` color palette, and three custom animations (`fade-in`, `slide-up`, `globe-rotate`). Global utility classes (`.section-padding`, `.container-max`, `.btn-primary`, etc.) are defined in `assets/css/main.css`.

### Iconify icons
`iconify-icon` is registered as a Vue custom element via `vue.compilerOptions.isCustomElement`. Usage: `<iconify-icon icon="lucide:chevron-down" class="..."></iconify-icon>`. The npm package `iconify-icon` is installed; the CDN script tag in `nuxt.config.ts` `app.head.script` is redundant.

### `@nuxt/image` — installed but not activated
`@nuxt/image` is in `package.json` but is **not listed in `modules`** in `nuxt.config.ts`. All images currently use plain `<img>` tags. Adding `'@nuxt/image'` to modules and replacing `<img>` with `<NuxtImg>` is a pending enhancement.

### `@nuxt/content` v3 specifics
- Requires `content.config.ts` at project root to define collections.
- Uses `experimental.nativeSqlite: true` — relies on Node.js built-in `node:sqlite` (Node 22.5+). Do not set this to false or remove it; the build will fail with a prompt to install `better-sqlite3`.
- Field name is `path` (not `_path` as in v2).
- Surround (prev/next navigation) uses `queryCollectionItemSurroundings('blog', route.path, { fields })`.

### SEO metadata
Global defaults are in `nuxt.config.ts` → `app.head`. Per-page overrides use `useSeoMeta()` in `<script setup>`. A `Person`/`WebSite` JSON-LD schema is set globally; individual blog posts should add `Article` schema via `useSeoMeta` or `useSchemaOrg`. The sitemap is a server route at `server/routes/sitemap.xml.ts` with hardcoded URLs — update it when adding pages.

### Component auto-import
Nuxt auto-imports everything in `components/` and `components/sections/`. The manual `import` statements in `pages/index.vue`, `pages/achievements.vue`, `pages/gallery.vue`, `pages/timeline.vue`, and `pages/about.vue` are redundant and can be removed.

## Blog post frontmatter

```markdown
---
title: 'Post Title'
description: 'Short description'
date: 'YYYY-MM-DD'
author: 'Saloo Choudhury'   # or 'Neena Choudhury' or 'Saloo & Neena Choudhury'
category: 'Journey Stories' # used for filtering on blog index
featured: true               # shows in the horizontal featured strip
image: '/images/journey/Saloo-JourneyN.jpg'
tags: ['tag1', 'tag2']
---
```

After adding a post, add its slug to `nitro.prerender.routes` in `nuxt.config.ts`.

## Key config locations

| What | Where |
|------|-------|
| Site-wide head / SEO defaults | `nuxt.config.ts` → `app.head` |
| Content collection schema | `content.config.ts` |
| YouTube video IDs for archival clips | `config/archivalVideos.ts` |
| Navigation links + icons | `components/AppHeader.vue` → `navigation` array |
| Sitemap URLs | `server/routes/sitemap.xml.ts` |
| GitHub Actions deploy | `.github/workflows/deploy.yml` |

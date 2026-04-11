# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a multi-project workspace (`play-with-Claude-Code`) containing three independent sub-projects. Each has its own tech stack and purpose. The top-level git repo (remote: `soninsthlm/play-with-Claude-Code`) is used to organize branches per project.

## Projects

### claude-video (Remotion)
Programmatic video generation using Remotion + React + TypeScript.

- **Dev server:** `npm run dev` (opens Remotion Studio)
- **Render video:** `npx remotion render`
- **Build bundle:** `npm run build`
- **Lint:** `npm run lint` (ESLint + TypeScript check)
- **Branch:** `video/fade-in`

Source is in `src/` — `Root.tsx` registers compositions, `Composition.tsx` contains the video scene logic using Remotion's `useCurrentFrame`/`interpolate` APIs. Config in `remotion.config.ts` (JPEG format, overwrite enabled).

### jensonng.github.io (Vite + React + Tailwind)
Portfolio site for creative works, generated from a Figma design.

- **Dev server:** `npm run dev` (port 3000, auto-opens browser)
- **Build:** `npm run build` (output to `dist/`)
- **Package manager:** bun (see `bun.lock`) or npm
- **Branch:** `web/jensonng-portfolio`

Uses Vite with `@tailwindcss/vite`, Radix UI components, shadcn/ui patterns, react-router-dom for routing, Supabase for backend, and Motion for animations. Path alias `@` maps to `src/`. Figma assets are aliased in `vite.config.ts` via `figma:asset/*` patterns. Pages live in `src/pages/`, reusable components in `src/components/ui/`.

### freakinfood (WordPress Theme)
Classic WordPress theme for a food blog, designed for Elementor + Strato hosting.

- **No build tools** — pure PHP/HTML/CSS/JS
- **Branch:** `web/freakinfood`
- **Required plugins:** Elementor, ACF, Contact Form 7 or WPForms

Theme files are in `wp-theme/`. Design tokens in `design/tokens.css`. Custom post types and taxonomies registered in `wp-theme/functions.php` and `wp-theme/inc/`. Template parts in `wp-theme/template-parts/`.

## Branch Strategy

Each project lives on its own branch off `main`:
- `video/fade-in` — Remotion video project
- `web/jensonng-portfolio` — Portfolio site
- `web/freakinfood` — WordPress theme

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite, serves at localhost:5173)
- **Build:** `npm run build` (runs `tsc -b && vite build`, outputs to `dist/`)
- **Lint:** `npm run lint` (ESLint with typescript-eslint + react-hooks + react-refresh plugins)
- **Preview production build:** `npm run preview`

No test framework is configured.

## Architecture

Single-page portfolio site: React 19 + TypeScript + Vite + Tailwind CSS v4.

### Data-driven content

All personal content (bio, projects, skills, experience) lives in `src/data/profile.ts` as a single `Profile` object. Sections read from this object — edit profile data there, not in section components. Types are in `src/types/index.ts`.

### Layout

`App.tsx` renders a fixed decorative backdrop (gradient orbs + grid) behind a `z-10` content layer containing: `Navbar → Hero → About → Skills → Projects → Experience → Contact → Footer`. Each section is a standalone component in `src/sections/`.

### Visual system

- **Theme:** Tailwind v4 with custom `@theme` tokens in `src/index.css`. Accent color palette (`--color-accent-*`) is cyan; neutral palette is zinc-like. Change accent colors there.
- **Dark mode:** Class-based (`.dark` on `<html>`), toggled via `ThemeToggle` component, persisted in `localStorage`.
- **Glass morphism:** `.glass-surface` class provides the frosted-glass card style used throughout.
- **Animations:** CSS-only. Floating orbs (`orb-drift`), shimmer on project cards, and scroll-reveal via `.reveal` / `.is-visible` classes. Respects `prefers-reduced-motion`.

### Scroll reveal

`useReveal` hook (IntersectionObserver-based) drives the `<Reveal>` wrapper component. Wrap any element in `<Reveal delay={ms}>` for fade-in-on-scroll. The CSS transition is in `.reveal` / `.reveal.is-visible` in `index.css`.

### Icon system

`src/components/Icon.tsx` maps string names (from profile data) to Lucide React components via a static `iconMap`. When adding new icons to profile data, register them in this map.

## Deployment

Static site deployed to Vercel. `npm run build` produces the `dist/` folder.

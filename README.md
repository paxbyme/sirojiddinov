# Portfolio Web

A modern, minimalistic personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

### 1. Edit Your Profile Data

All personal content lives in a single file: **`src/data/profile.ts`**

Update these fields:
- `name`, `title`, `location`, `email` — basic info
- `heroTagline`, `heroDescription` — hero section text
- `bio` — about section paragraph
- `highlights` — the 3 feature cards in the About section
- `socialLinks` — your social media URLs (icons use [Lucide](https://lucide.dev/icons) names)
- `skillCategories` — your skills grouped by category
- `projects` — project cards with title, description, tech stack, and links
- `experience` — timeline items (set `type: "work"` or `type: "education"`)

### 2. Replace the Avatar

The hero section uses a gradient circle as a placeholder. To use a real image:

1. Add your photo to `src/assets/` (e.g., `avatar.jpg`)
2. In `src/sections/Hero.tsx`, replace the gradient `<div>` with an `<img>` tag.

### 3. Add Project Images

Project cards use gradient placeholders. Replace the gradient `<div>` in `src/sections/Projects.tsx` with actual images.

### 4. Accent Color

The accent color (emerald) is defined in `src/index.css` under `@theme`. Swap the `--color-accent-*` values with any color palette.

### 5. Dark Mode

Dark mode is supported via the toggle in the navbar. It uses Tailwind's `class` strategy and persists the preference in `localStorage`.

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## Tech Stack

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide React](https://lucide.dev) (icons)

## Project Structure

```
src/
  components/    → Reusable UI components (Button, Card, Tag, etc.)
  sections/      → Page sections (Navbar, Hero, About, Skills, etc.)
  data/          → Profile data (single source of truth)
  types/         → TypeScript interfaces
```
# sirojiddinov

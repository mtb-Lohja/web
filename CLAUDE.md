# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Development Server
```bash
npm run dev
```
Starts the Astro development server for local development at http://localhost:4321/

### Build
```bash
npm run build
```
Creates a production build in the `/dist` directory.

### Preview
```bash
npm run preview
```
Preview the production build locally.

### Deploy
- **Automated**: Push to master branch triggers CI deployment (see `.github/workflows/deploy.yml`)
- **Manual Firebase**: Run `firebase deploy` after building (update firebase.json to use dist instead of public)
- **Clean build**: `rm -rf dist .astro` before building to resolve issues

### Code Formatting
```bash
npm run format
```
Formats JavaScript and Astro files using Prettier.

## Architecture Overview

This is a static Astro.js website for MTB-Lohja (Finnish mountain biking community). The site was migrated from Gatsby to Astro for better performance and maintainability.

### Core Technologies
- **Astro v5** - Modern static site generator with partial hydration
- **React 18** - Used only for interactive components (navigation, map)
- **Sass** - CSS preprocessing
- **Markdown** - Content management via Astro content collections
- **React Leaflet** - Interactive maps for bike trails (client-side only)
- **TypeScript** - Type safety for content collections

### Site Structure
- **Content Collections**: Content managed in `/src/content/posts/` using Astro's content collections API
- **File-based Routing**: Pages in `/src/pages/` with dynamic routing via `[...slug].astro`
- **Layout System**: Base layout in `/src/layouts/BaseLayout.astro`
- **Component Architecture**: 
  - Astro components in `/src/components/`
  - React components in `/src/components/react/` (client-side hydrated)

### Content Organization
Content is organized in `/src/content/posts/` by category:
- `24h/` - Annual 24-hour mountain bike events (by year)
- `oktoberfest/` - Oktoberfest cycling events 
- `uutiset/` - News articles
- `viikkoajot/` - Weekly rides information
- Root level pages: `tietoa.md`, `foorumi.md`, etc.

### Build Process
1. Astro processes content collections from `/src/content/posts/`
2. Static routes generated for each markdown file based on frontmatter `path`
3. Dynamic routing via `[...slug].astro` handles all post URLs
4. Homepage (`index.astro`) shows the latest post by date
5. Static files output to `/dist/`

### Key Features
- **Zero JS by default**: Only hydrates interactive components
- **Client directives**: Navigation uses `client:load`, Map uses `client:only="react"`
- **Preserved URLs**: All existing URLs from Gatsby version maintained
- **Performance**: Faster loading with selective hydration

### Deployment
- Firebase Hosting configured (`firebase.json`) - needs update to use `dist` instead of `public`
- Static assets served from `/public/` (copied to build output)
- Legacy forum archive preserved in `/public/foorumiarkisto/`

### Development Environment
- Nix flake provides Node.js 24
- Uses npm as package manager
- Content updates via markdown files in content collections
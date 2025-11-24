# Mabrains Docs

This directory contains the Docusaurus site that powers the public Mabrains documentation, including the Chipro guides. It is a standard Docusaurus v3 project with a small amount of custom styling and plugins (image zoom).

## Installation

```bash
npm ci        # reproducible install
# or
npm install
```

## Project Scripts

| Command | Description |
| --- | --- |
| `npm run start` | Launches the hot-reloading dev server at `http://localhost:3000`. |
| `npm run build` | Produces the optimized static site in `build/`. |
| `npm run serve` | Serves the existing `build/` directory for testing (no rebuild). |
| `npm run clear` | Cleans the `.docusaurus` cache – run if the dev server behaves oddly. |

## Local Development

1. Install dependencies.
2. Start the dev server:

   ```bash
   npm run start
   ```

3. The site opens automatically; edit files in `docs/docs`, `docs/src`, or `docs/static`. Changes hot-reload without restarting the server.

If you add new sidebar entries, update `sidebars.ts`. For global settings (navbar, footer, plugins) edit `docusaurus.config.ts`.

## Production Build & Verification

```bash
npm run build          # emits static files to build/
npm run serve          # (optional) run locally to smoke-test the build
```

Upload the contents of `build/` to any static host (S3, Netlify, Vercel, etc.).

## Docker Deployment

A two-stage Dockerfile is included for consistent builds:

```bash
# build the image
docker build -t chipro-docs .

# serve on localhost:3000
docker run --rm -p 3000:3000 chipro-docs
```
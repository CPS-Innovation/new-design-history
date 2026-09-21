# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server with hot reload (Eleventy --serve --quiet)
npm run build      # Build static site to _site/
npm run serve      # Serve the pre-built _site/ with http-server
node scripts/generate.js  # Generate markdown post templates from images in app/images/
```

## What this project is

A GOV.UK Design History site for the Crown Prosecution Service (CPS). It documents design decisions and iterations for CPS digital services (Manage Cases, Advocate Panel Application, Indictments, Polaris, Witex, LCC, etc.). Built with Eleventy (11ty) and the `@x-govuk/govuk-eleventy-plugin`.

Deployed at: https://cps-new-design-history-2189687bc35a.herokuapp.com/

## Architecture

- `app/` — Eleventy input directory
  - `posts/` — Design history entries as markdown files, organised by service name (e.g. `manage-cases/`, `indictments/`)
  - `images/` — Screenshots organised to mirror the `posts/` structure
  - `_layouts/` — Nunjucks templates (`post.njk`, `product.njk`)
  - `_components/` — Reusable Nunjucks macros (screenshot components)
  - `_data/` — Global data files
- `_site/` — Built output (generated, not committed)
- `public/` — Static assets passed through to output
- `scripts/` — Helper scripts for content creation

The Eleventy config (`eleventy.config.js`) uses Nunjucks for all template engines, generates search index and tag pages via the GOV.UK plugin, and passes images through directly. Posts use a `posts.json` collection config that computes clean URL permalinks by stripping the `posts/` prefix.

## Post format

Each design entry is a markdown file with YAML front matter:

```yaml
---
title: "Entry title"
date: 2026-01-15
tags: manage-cases
authors:
  - name: Author Name
screenshots:
  - title: "Screenshot caption"
    src: manage-cases/screenshot-filename.png
---
```

Filenames follow `YYYY-MM-DD-description.md`. Images live in `app/images/<service-name>/`.

## Deployment

- **Netlify** (`netlify.toml`): runs `npm run build`, publishes `_site/`
- **Heroku** (`Procfile`): runs `npm run serve` (serves pre-built `_site/`)

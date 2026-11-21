# Zoltan 'Tavstal' Solymosi · Project Hub

![Workflow Status](https://img.shields.io/github/actions/workflow/status/TavstalDev/tavstaldev.github.io/release.yml?branch=stable&label=build&style=plastic-square)
![License](https://img.shields.io/github/license/TavstalDev/tavstaldev.github.io?style=plastic-square)

My personal portfolio and project playground, built with React + Vite.

**Live site:** [tavstal.eu](https://tavstal.eu)

## Overview

This repository contains the source for my personal website. The site presents:

- **About** - background, location, and education
- **Projects** - a filterable and searchable list of projects (SDKs/libraries, backend & APIs, desktop apps, and game plugins)
- **Experience & Education** - career and academic timeline
- **Skills** - languages, frameworks/tools, and server/networking experience
- **Contact** - ways to get in touch

Site content (profile links, projects, experience, education, skills, and categories) is primarily driven by [`src/config/ProjectConfig.jsx`](src/config/ProjectConfig.jsx).

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/)
- [React Router 7](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/) and [Bootstrap Icons](https://icons.getbootstrap.com/) (loaded via CDN)
- [ESLint](https://eslint.org/) for linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 20.19` (see `engines` in [`package.json`](package.json))
- npm

### Install

```bash
npm install
```

### Development

Start the local development server (configured on port `8090`):

```bash
npm run dev
```

### Build

Create a production build in `dist/`:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

Run ESLint across the project:

```bash
npm run lint
```

## Project Structure

```text
.
├─ public/                 # Static assets (favicons, images, certificates, CSS)
├─ src/
│  ├─ components/          # Reusable UI components
│  ├─ config/              # Site/project data configuration
│  ├─ layouts/             # Page layouts
│  ├─ pages/               # Route-level pages
│  ├─ App.jsx              # Route definitions
│  └─ main.jsx             # App entry point
├─ index.html              # HTML template and metadata
├─ vite.config.js          # Vite configuration
└─ package.json            # Scripts and dependencies
```

## Deployment

The app is built as a static site (`npm run build`) with Vite. The Vite base path is set to `/` in [`vite.config.js`](vite.config.js), and the package homepage is configured as `https://tavstal.eu`.

## License

This project is licensed under the terms of the [LICENSE](LICENSE) file.

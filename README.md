# mellysam.github.io

Personal site built with SvelteKit as a static single-page app and deployed to GitHub Pages.

## Requirements

- Node.js 24
- npm

## Installation

Install dependencies:

```sh
npm install
```

## Developing

Start the local dev server:

```sh
npm run dev
```

Open the app automatically:

```sh
npm run dev -- --open
```

Run Svelte and TypeScript checks:

```sh
npm run check
```

Format files:

```sh
npm run format
```

## Build and Preview

Build the static site:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deployment

GitHub Actions deploys the `build` directory to GitHub Pages on pushes to `main`. The workflow can also be run manually from the Actions tab.

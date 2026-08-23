# Changes

Make changes as small as possible and as large as necessary.
Keep diffs simple and easy for people to understand.

# Code and Dev Text

Use clear, simple language in code, development text, README files, and comments.

# Components

Keep components small. Each component should have one clear responsibility and an explicit, easy-to-read interface.
When a component starts handling multiple concerns, split it before adding more behavior.

# Project

This is a SvelteKit SPA deployed to GitHub Pages with `@sveltejs/adapter-static`.
Use npm scripts from `package.json`; CI builds with Node 24 and publishes the `build` directory.

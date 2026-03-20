# Prisma.md

A beautiful, zero-install Markdown editor and live preview — built with a Liquid Glass aesthetic.

Write Markdown on the left, see the rendered result on the right. Your content is saved automatically in the browser.

**[→ Open Prisma.md](https://hlucas13.github.io/prisma.md/)**

---

## Features

- **Live preview** — renders as you type, with 120 ms debounce
- **Syntax highlighting** — 25+ languages via CodeMirror + highlight.js
- **Copy for Teams** — copies rich HTML to clipboard (paste directly into Microsoft Teams)
- **Print / Export PDF** — clean print stylesheet included
- **Dark mode** — full light/dark theme toggle
- **Draggable divider** — resize editor and preview panes freely
- **Persistent content** — auto-saved to `localStorage`
- **Zero dependencies to install** — pure HTML, CSS, and vanilla JS; all libraries loaded from CDN

## Tech Stack

| Library | Purpose |
|---------|---------|
| [Marked.js v4](https://marked.js.org/) | Markdown parsing (GFM + tables + breaks) |
| [CodeMirror 5](https://codemirror.net/5/) | Editor with Markdown syntax highlighting |
| [highlight.js 11](https://highlightjs.org/) | Code block syntax highlighting |

## Usage

No build step required. Open `index.html` in a browser — or use the hosted version on GitHub Pages.

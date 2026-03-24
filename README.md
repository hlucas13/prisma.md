# Prisma.md

A beautiful, zero-install Markdown editor with live preview — built with a **Liquid Glass** aesthetic inspired by physics-based light refraction.

Write Markdown on the left, see the rendered result on the right. Your content is saved automatically in the browser.

**[→ Open Prisma.md](https://hlucas13.github.io/prisma.md/)**

[![Buy me a coffee](https://img.buymeacoffee.com/button-api/?text=Buy+me+a+coffee&emoji=&slug=hlucas13&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff)](https://www.buymeacoffee.com/hlucas13)

---

## Features

### Editor & Preview

- **Live preview** — renders as you type, with a 120 ms debounce
- **Syntax highlighting in the editor** — 25+ languages via CodeMirror 5 (JavaScript, TypeScript, Python, Rust, Go, SQL, YAML, Ruby, PHP, Swift, Dockerfile, PowerShell, and more)
- **Fenced code block highlighting** — language identifiers in ` ```lang ` blocks are resolved to the correct CodeMirror mode, including aliases such as `ts`, `bash`, `cs`, `jsx`, `tsx`, `kotlin`, `postgres`
- **Draggable divider** — resize editor and preview panes freely in landscape mode
- **Portrait / mobile layout** — panes stack vertically; each pane header is tappable to collapse or expand it
- **Persistent content** — auto-saved to `localStorage` on every change

### Export & Copy

- **Copy — Universal** — copies rich HTML to the clipboard; preserves headings, bold, tables, and code blocks when pasting into Word, Notion, and other apps
- **Copy — Microsoft Teams** — inline-styled HTML with Segoe UI fonts; code blocks and formatting survive the Teams paste pipeline
- **Copy — Outlook / Gmail** — conservative inline CSS that guarantees tables and bold text in email clients
- **Copy — Slack** — converts Markdown to Slack's native `mrkdwn` format (bold, italic, code blocks, links, task-list checkboxes, and horizontal rules)
- **Print / Export PDF** — opens the native print / save-as-PDF dialogue; the active preview theme's `@media print` rules are applied automatically

### Import / Paste

- **Drag & drop `.md` files** — drop a Markdown or `.markdown` file onto the editor pane to load it instantly
- **Drag & drop images** — drop any image onto the editor pane to embed it as a Base64 `![alt](data:…)` inline image
- **Paste HTML → Markdown** — pasting rich HTML (from a browser, Word, or any web page) automatically converts it to clean Markdown
- **Paste TSV / spreadsheet data → table** — pasting tab-separated data (e.g. copied from Excel or Google Sheets) is automatically converted to a GFM Markdown table

### Table Generator

- **Visual table builder** — opens a modal where you can choose the number of rows (2–30) and columns (1–12), fill in the cells with Tab / Enter navigation, and insert the resulting GFM table at the cursor

### Preview Themes

Four built-in themes, each with full light and dark variants, applied instantly without a page reload:

| Theme        | Style                                     |
| ------------ | ----------------------------------------- |
| **GitHub**   | Classic · blue/green · light & dark       |
| **Modern**   | Indigo · Helvetica · light & dark         |
| **Academic** | Serif Georgia · sepia · light & dark      |
| **Minimal**  | Neutral · distraction-free · light & dark |

### Settings

- **Sync scroll** — bidirectional scroll synchronisation between the editor and the preview pane (position-percentage based)
- **Dark mode** — full light/dark toggle with animated Liquid Glass switch; follows the OS `prefers-color-scheme` setting when no preference has been saved
- **Frosted glass** — toggles the frosted-glass backdrop-filter effect across the entire UI; preference is persisted in `localStorage`
- **Language** — scrollable wheel picker to switch the interface language; available locales: **English (UK)**, **Portuguese (BR)**, **Portuguese (PT)**, **Spanish (ES)**, **French (FR)**

### Insights Bar

Always-visible bar at the bottom of the editor pane showing:

- **Word count** and **character count**
- **Estimated reading time** (based on 200 wpm)
- **Lint / grammar warning count** — click to open the warnings panel

### Markdown Linter & Grammar Checker

Runs on every keystroke (debounced) and reports issues inline:

| Rule                                       | Type    |
| ------------------------------------------ | ------- |
| Heading hierarchy skip (e.g. H1 → H3)      | Lint    |
| Multiple H1 headings in one document       | Lint    |
| Unclosed inline link — missing `)`         | Lint    |
| Image without alt text                     | Lint    |
| Repeated consecutive word (≥ 3 characters) | Grammar |
| Double space in the middle of a line       | Grammar |

Code content (fenced blocks and inline code) is masked before linting so rules never fire inside code.  
Clicking a warning in the panel moves the cursor to the affected line.

### Local History

- Auto-saves a snapshot to `localStorage` every **30 seconds** and on editor blur
- Keeps up to **25 versions**; each entry shows a timestamp and a text preview
- Click any version in the History modal to restore it; a toast confirms the restore

### Help & Wiki

Built-in modal (accessible from the dock) with a full feature guide, a Markdown quick-reference table, and a keyboard shortcuts reference.

---

## Keyboard Shortcuts

| Keys            | Action                                                 |
| --------------- | ------------------------------------------------------ |
| `Tab`           | Indent line / list item                                |
| `Shift` + `Tab` | Unindent line / list item                              |
| `Enter`         | Continue list — auto-inserts the next bullet or number |
| `Esc`           | Close the open modal or menu                           |

---

## Tech Stack

### Runtime (CDN — no local install required)

| Library                                  | Version | Purpose                                                                            |
| ---------------------------------------- | ------- | ---------------------------------------------------------------------------------- |
| [Marked.js](https://marked.js.org/)      | v4      | Markdown parsing — GFM, tables, line breaks                                        |
| [CodeMirror](https://codemirror.net/5/)  | 5.65.16 | Editor with Markdown syntax highlighting and fenced code block language resolution |
| [highlight.js](https://highlightjs.org/) | 11.9.0  | Code block syntax highlighting in the preview                                      |
| [GSAP](https://gsap.com/)                | 3       | Animated Liquid Glass toggle transitions                                           |

### Build & Dev tooling (local, not shipped)

| Tool                                                                                  | Purpose                                                                                              |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [esbuild](https://esbuild.github.io/)                                                 | Bundles `js/main.ts` and all imports into a single IIFE `app.bundle.js` in ~25 ms                    |
| [TypeScript](https://www.typescriptlang.org/)                                         | Type-checking (`tsc --noEmit`); compilation handled by esbuild                                       |
| [ESLint](https://eslint.org/) + [`@typescript-eslint`](https://typescript-eslint.io/) | Static analysis on all `.ts` source files                                                            |
| [Prettier](https://prettier.io/)                                                      | Formatting — config in `.prettierrc`                                                                 |
| [Husky](https://typicode.github.io/husky/)                                            | Git hooks: runs lint-staged on `pre-commit` and commitlint on `commit-msg`                           |
| [lint-staged](https://github.com/lint-staged/lint-staged)                             | On commit, runs ESLint + Prettier only on staged `.ts` files, and Prettier on other staged files     |
| [commitlint](https://commitlint.js.org/)                                              | Enforces [Conventional Commits](https://www.conventionalcommits.org/) format on every commit message |

---

## Liquid Glass

The UI chrome (dock, menus, modals, and toggles) is built around a physics-based Liquid Glass system, documented in the module `src/glass-distortion.ts`.

The implementation follows the refraction principles described in **[Liquid Glass — CSS & SVG](https://kube.io/blog/liquid-glass-css-svg/)** by Kube:

- **Snell's law refraction** — each pixel of the glass surface displaces the background according to the angle of refraction derived from the surface normal, using an index of refraction of **1.45** (borosilicate glass).
- **Convex height profile** — the surface height function `h(t) = √t` models a curved glass lens that is thicker at the centre and tapers toward the rim.
- **SVG displacement maps** — a `<feImage>` + `<feDisplacementMap>` filter pipeline applies the computed per-pixel displacement at runtime, replacing the old turbulence-noise approach with deterministic, physics-consistent distortion.
- **Two filter instances** — `#glass-distortion-dock` (resized dynamically via `ResizeObserver`, `userSpaceOnUse`) and `#glass-distortion-panel` (`objectBoundingBox`, scales to any modal or menu).
- **Progressive enhancement** — a `@supports (backdrop-filter: url(#x))` check unlocks the `backdrop-filter` compositing path on Chromium; all other browsers fall back to the base blur and tint layers.
- **Convex specular hierarchy** — glass surfaces carry a three-layer inset `box-shadow` stack: primary top-left arc highlight → full perimeter rim → counter-specular depth shadow, matching the light model expected from a convex glass element.

---

## Project Structure

```
prisma.md/
├── index.html              # Single-page app shell; loads CDN libraries and app.bundle.js
├── style.css               # All styles — layout, themes, Liquid Glass, animations
├── app.bundle.js           # Bundled output (generated by build.js — do not edit manually)
├── build.js                # esbuild script; bundles src/main.ts into app.bundle.js
├── tsconfig.json           # TypeScript config (noEmit — compilation is done by esbuild)
├── eslint.config.js        # ESLint flat config with @typescript-eslint rules
├── commitlint.config.js    # Commitlint config (extends @commitlint/config-conventional)
├── .prettierrc             # Prettier formatting rules
│
└── src/                    # TypeScript source modules (ES module syntax; bundled for production)
    ├── globals.d.ts            # Ambient declarations for CDN globals (CodeMirror, marked, hljs)
    ├── i18n.ts                 # Translation strings and t() lookup for all supported locales
    ├── samples.ts              # Per-locale sample Markdown shown on first load
    ├── lint.ts                 # Markdown linter and grammar checker (pure functions)
    ├── converter.ts            # HTML → Markdown, TSV → Markdown table, Markdown → Slack mrkdwn
    ├── export-builder.ts       # Inline-styled HTML builder for Teams and email copy targets
    ├── preview-themes.ts       # CSS override strings for each preview theme (light + dark)
    ├── history-store.ts        # localStorage read/write helpers for local history snapshots
    ├── glass-distortion.ts     # Physics-based SVG displacement map generator (Snell's law)
    └── main.ts                 # Application entry point — wires together all modules and the DOM
```

> **Note:** `app.bundle.js` is the file actually loaded by `index.html`. It is produced by `build.js` using [esbuild](https://esbuild.github.io/), which bundles `src/main.ts` and all its imports into a single IIFE. The individual `.ts` files under `src/` are the authoritative source — edit those, then rebuild.

---

## Contributing

Contributions are welcome! Feel free to open an **Issue** to report bugs, suggest features, or ask questions — and a **Pull Request** to propose changes.

- **Bug reports:** Include steps to reproduce, browser/OS, and a screenshot if relevant.
- **Feature requests:** Describe the use-case and why it would be a good fit for Prisma.md.
- **Pull Requests:** Keep changes focused and explain the motivation in the PR description. For larger changes, open an Issue first to discuss the approach.

**[→ Open an Issue](https://github.com/hlucas13/prisma.md/issues/new)** · **[→ View open PRs](https://github.com/hlucas13/prisma.md/pulls)**

---

## Running Locally

No build step is needed to _run_ the app:

```bash
# Clone the repository
git clone https://github.com/hlucas13/prisma.md.git
cd prisma.md

# Open directly in the browser — no server required
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

Alternatively, serve it with any static file server to avoid browser `file://` restrictions on the Clipboard API:

```bash
# Python (no install needed on macOS / Linux)
python3 -m http.server 8080

# Node.js (npx, no install needed)
npx serve .
```

Then open `http://localhost:8080` in the browser.

---

## Development Setup

Install dev dependencies (only needed to rebuild or use linting tools):

```bash
npm install
```

### Rebuilding `app.bundle.js`

`app.bundle.js` must be regenerated whenever any file under `src/` changes.

```bash
npm run build
```

Expected output:

```
  app.bundle.js  130kb
⚡ Done in 25ms
✅  app.bundle.js — XXXX lines, XXX.X KB
```

esbuild resolves all TypeScript imports from `src/main.ts`, compiles them, and outputs a single browser-ready IIFE.

### Other scripts

```bash
npm run typecheck   # Type-check all .ts files with tsc (no output emitted)
npm run lint        # Run ESLint on src/
```

### Commit workflow

Git hooks are managed by **Husky** and run automatically on `git commit`:

| Hook         | What runs                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| `pre-commit` | ESLint `--fix` + Prettier on staged `src/**/*.ts` files; Prettier on staged `.html`, `.css`, `.json`, `.md` |
| `commit-msg` | commitlint — rejects messages that don't follow Conventional Commits                                        |

**Conventional Commits format:**

```
<type>(optional scope): description

feat: add dark mode toggle
fix(editor): correct scroll sync offset
docs: update README
chore: upgrade esbuild
```

Accepted types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`, `revert`.

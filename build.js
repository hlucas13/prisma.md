/**
 * build.js — bundles js/*.js modules into a single app.bundle.js
 *
 * Usage:  node build.js
 *
 * The output file works both on GitHub Pages (HTTPS) and locally (file://)
 * because it has no import statements — everything lives in one IIFE scope.
 */
'use strict';

const fs = require('fs');
const path = require('path');

// Module load order matters: dependencies before dependents
const MODULE_ORDER = [
    'js/i18n.js', // no deps
    'js/samples.js', // needs i18n
    'js/lint.js', // needs i18n
    'js/converter.js', // needs i18n
    'js/export-builder.js', // no deps
    'js/preview-themes.js', // no deps
    'js/history-store.js', // needs i18n
    'js/glass-distortion.js', // no deps — runs after DOM is ready
    'js/main.js', // needs all above
];

const ROOT = __dirname;

function stripModuleSyntax(code) {
    // Remove import lines  (import ... from '...')
    code = code.replace(/^import\s+[^;]+from\s+['"][^'"]+['"];?\s*\n?/gm, '');
    // Remove export keyword from declarations (export function/const/let/class)
    code = code.replace(
        /^export\s+((?:function|const|let|var|class)\s)/gm,
        '$1',
    );
    // Remove standalone `export { ... };` lines
    code = code.replace(/^export\s*\{[^}]*\};?\s*\n?/gm, '');
    return code;
}

const parts = [`(() => {\n'use strict';\n`];

for (const relPath of MODULE_ORDER) {
    const fullPath = path.join(ROOT, relPath);
    let code = fs.readFileSync(fullPath, 'utf8');
    code = stripModuleSyntax(code);
    // Remove leading/trailing blank lines from each chunk
    code = code.trim();
    // Section separator comment
    parts.push(`\n// ════════════════════════════════════════`);
    parts.push(`// ${relPath}`);
    parts.push(`// ════════════════════════════════════════\n`);
    parts.push(code);
}

parts.push(`\n})();`);

const bundle = parts.join('\n');
const outPath = path.join(ROOT, 'app.bundle.js');
fs.writeFileSync(outPath, bundle, 'utf8');

const lines = bundle.split('\n').length;
const kb = (Buffer.byteLength(bundle, 'utf8') / 1024).toFixed(1);
console.log(`✅  app.bundle.js — ${lines} lines, ${kb} KB`);

// ── Prisma.md — main application module ──
import {
    convertToSlack,
    htmlToMarkdown,
    isTsvData,
    tsvToMarkdown,
} from './converter.js';
import { buildInlineStyledHTML } from './export-builder.js';
import {
    clearHistory,
    formatHistoryDate,
    getHistory,
    saveSnapshot,
} from './history-store.js';
import { setCurrentLang, t } from './i18n.js';
import { runGrammar, runMarkdownLint } from './lint.js';
import { PREVIEW_THEMES } from './preview-themes.js';
import { getSampleMarkdown } from './samples.js';

// SVG paths for sync states
const SVG_LOCK_CLOSED =
    '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>';
const SVG_LOCK_OPEN =
    '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>';
// SVG paths for theme states
const SVG_MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
const SVG_SUN =
    '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';

function applyLanguage(lang) {
    setCurrentLang(lang);
    document.documentElement.lang = lang;
    for (const el of document.querySelectorAll('[data-i18n]')) {
        el.textContent = t(el.dataset.i18n);
    }
    for (const el of document.querySelectorAll('[data-i18n-title]')) {
        el.title = t(el.dataset.i18nTitle);
    }
    for (const el of document.querySelectorAll('[data-i18n-aria-label]')) {
        el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
    }
    for (const el of document.querySelectorAll('[data-i18n-placeholder]')) {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    }
    const langContainer = document.getElementById('lang-select');
    if (langContainer) {
        langContainer
            .querySelectorAll('.lang-option')
            .forEach((el) =>
                el.classList.toggle('selected', el.dataset.lang === lang),
            );
        const triggerLabel = langContainer.querySelector('.lang-trigger-label');
        if (triggerLabel) triggerLabel.textContent = langTriggerLabel(lang);
    }
    localStorage.setItem('prisma-lang', lang);
    // If the editor still holds a sample, refresh it in the new language.
    if (isSampleContent) setSampleContent();
}

// ── Elements ──
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const btnExport = document.getElementById('btn-export');
const btnThemes = document.getElementById('btn-themes');
const btnClear = document.getElementById('btn-clear');
const btnSettings = document.getElementById('btn-settings');
const divider = document.getElementById('divider');
const toast = document.getElementById('toast');
const hljsLight = document.getElementById('hljs-light');
const hljsDark = document.getElementById('hljs-dark');
const cmThemeDark = document.getElementById('cm-theme-dark');
const exportMenu = document.getElementById('export-menu');
const settingsMenu = document.getElementById('settings-menu');
const btnCopyUniversal = document.getElementById('btn-copy-universal');
const btnCopyTeams = document.getElementById('btn-copy-teams');
const btnCopyEmail = document.getElementById('btn-copy-email');
const btnCopySlack = document.getElementById('btn-copy-slack');
const btnPrintPdf = document.getElementById('btn-print-pdf');
const toggleSync = document.getElementById('toggle-sync');
const toggleTheme = document.getElementById('toggle-theme');
const toggleGlass = document.getElementById('toggle-glass');
const iconSync = document.getElementById('icon-sync');
const iconTheme = document.getElementById('icon-theme');
const themesMenu = document.getElementById('themes-menu');
const btnHamburger = document.getElementById('btn-hamburger');
const hamburgerPanel = document.getElementById('hamburger-panel');
const btnTable = document.getElementById('btn-table');
const tableModal = document.getElementById('table-modal');
const tableModalBackdrop = document.getElementById('table-modal-backdrop');
const tblRows = document.getElementById('tbl-rows');
const tblCols = document.getElementById('tbl-cols');
const tblGrid = document.getElementById('tbl-grid');
const btnCloseTable = document.getElementById('btn-close-table');
const btnInsertTable = document.getElementById('btn-insert-table');

// ── Insights elements ──
const statWords = document.getElementById('stat-words');
const statReadTime = document.getElementById('stat-read-time');
const statChars = document.getElementById('stat-chars');
const btnIssuesToggle = document.getElementById('btn-issues-toggle');
const statIssuesCount = document.getElementById('stat-issues-count');
const lintPanel = document.getElementById('lint-panel');
const lintList = document.getElementById('lint-list');
const btnLintClose = document.getElementById('btn-lint-close');

// ── CodeMirror language alias map ──
// Add aliases so fenced code blocks (```java, ```bash, etc.) get highlighted.
// clike.js covers Java, C, C++, C#, Kotlin, Scala via their MIME types.
// We register missing common aliases here.
const EXTRA_MODES = [
    { name: 'java', mime: 'text/x-java', mode: 'clike' },
    { name: 'c', mime: 'text/x-csrc', mode: 'clike' },
    { name: 'cpp', mime: 'text/x-c++src', mode: 'clike' },
    { name: 'c++', mime: 'text/x-c++src', mode: 'clike' },
    { name: 'cs', mime: 'text/x-csharp', mode: 'clike' },
    { name: 'csharp', mime: 'text/x-csharp', mode: 'clike' },
    { name: 'kotlin', mime: 'text/x-kotlin', mode: 'clike' },
    { name: 'scala', mime: 'text/x-scala', mode: 'clike' },
    { name: 'bash', mime: 'application/x-sh', mode: 'shell' },
    { name: 'sh', mime: 'application/x-sh', mode: 'shell' },
    { name: 'zsh', mime: 'application/x-sh', mode: 'shell' },
    { name: 'ps1', mime: 'application/x-powershell', mode: 'powershell' },
    { name: 'pwsh', mime: 'application/x-powershell', mode: 'powershell' },
    { name: 'ts', mime: 'application/typescript', mode: 'javascript' },
    {
        name: 'typescript',
        mime: 'application/typescript',
        mode: 'javascript',
    },
    { name: 'tsx', mime: 'text/typescript-jsx', mode: 'javascript' },
    { name: 'jsx', mime: 'text/jsx', mode: 'javascript' },
    { name: 'html', mime: 'text/html', mode: 'xml' },
    { name: 'yml', mime: 'text/x-yaml', mode: 'yaml' },
    { name: 'mysql', mime: 'text/x-mysql', mode: 'sql' },
    { name: 'postgres', mime: 'text/x-pgsql', mode: 'sql' },
    { name: 'sqlite', mime: 'text/x-sqlite', mode: 'sql' },
    { name: 'docker', mime: 'text/x-dockerfile', mode: 'dockerfile' },
    { name: 'rb', mime: 'text/x-ruby', mode: 'ruby' },
    { name: 'py', mime: 'text/x-python', mode: 'python' },
];

// Merge into modeInfo for findModeByName (used by some CodeMirror consumers).
if (!CodeMirror.modeInfo) CodeMirror.modeInfo = [];
const existingNames = new Set(
    CodeMirror.modeInfo.map((m) => m.name.toLowerCase()),
);
for (const entry of EXTRA_MODES) {
    if (!existingNames.has(entry.name.toLowerCase())) {
        CodeMirror.modeInfo.push(entry);
        existingNames.add(entry.name.toLowerCase());
    }
}

// ── Fenced code block language alias registration ──
// The markdown mode resolves fenced identifiers via:
//   CodeMirror.getMode(config, identifier) → resolveMode(identifier)
// which checks mimeModes — NOT modeInfo/findModeByName.
// Register common aliases so identifiers like `ts`, `java`, `bash` etc. highlight correctly.

// Simple aliases: identifier resolves to a mode name string
const _fencedSimple = {
    js: 'javascript',
    json: 'javascript',
    bash: 'shell',
    sh: 'shell',
    zsh: 'shell',
    py: 'python',
    rb: 'ruby',
    rs: 'rust',
    yml: 'yaml',
    ps1: 'powershell',
    pwsh: 'powershell',
    mysql: 'sql',
    postgres: 'sql',
    postgresql: 'sql',
    sqlite: 'sql',
};
for (const [a, m] of Object.entries(_fencedSimple)) CodeMirror.defineMIME(a, m);

// Aliases with mode options (TypeScript, JSX, JSON with proper flags)
CodeMirror.defineMIME('ts', { name: 'javascript', typescript: true });
CodeMirror.defineMIME('typescript', {
    name: 'javascript',
    typescript: true,
});
CodeMirror.defineMIME('jsx', { name: 'javascript', jsx: true });
CodeMirror.defineMIME('tsx', {
    name: 'javascript',
    typescript: true,
    jsx: true,
});

// C-family, HTML, Dockerfile: defineMode wrappers that delegate to canonical MIMEs,
// preserving language-specific keyword sets already configured in clike.js.
const _fencedWrapped = {
    java: 'text/x-java',
    c: 'text/x-csrc',
    cpp: 'text/x-c++src',
    'c++': 'text/x-c++src',
    csharp: 'text/x-csharp',
    cs: 'text/x-csharp',
    kotlin: 'text/x-kotlin',
    scala: 'text/x-scala',
    html: 'text/html',
    docker: 'text/x-dockerfile',
};
for (const [alias, mime] of Object.entries(_fencedWrapped)) {
    if (!CodeMirror.modes[alias]) {
        CodeMirror.defineMode(alias, function (config) {
            return CodeMirror.getMode(config, mime);
        });
    }
}

// ── CodeMirror init ──
const cm = CodeMirror.fromTextArea(editor, {
    mode: {
        name: 'markdown',
        fencedCodeBlockHighlighting: true,
        highlightFormatting: true,
        strikethrough: true,
        taskLists: true,
    },
    theme: 'default',
    lineWrapping: true,
    tabSize: 4,
    indentWithTabs: false,
    autofocus: true,
    extraKeys: {
        Enter: 'newlineAndIndentContinueMarkdownList',
        Tab: (c) => c.execCommand('indentMore'),
        'Shift-Tab': (c) => c.execCommand('indentLess'),
    },
});
cm.setSize('100%', '100%');

// ── Marked.js config ──
marked.setOptions({
    breaks: true,
    gfm: true,
    highlight: (code, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    },
});

// ── Persistence ──
const STORAGE_KEY = 'prisma-md-content';

// True while the editor still holds an auto-generated sample (never been
// edited by the user). Used by applyLanguage to swap the sample language.
let isSampleContent = false;
// Guard that prevents the cm 'change' event fired by cm.setValue() inside
// setSampleContent() from immediately flipping isSampleContent back to false.
let settingSample = false;

function setSampleContent() {
    settingSample = true;
    cm.setValue(getSampleMarkdown()); // 'change' fires synchronously here
    settingSample = false;
    isSampleContent = true;
}

function loadContent() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) {
        setSampleContent();
    } else {
        cm.setValue(saved);
        isSampleContent = false;
    }
}

function saveContent() {
    localStorage.setItem(STORAGE_KEY, cm.getValue());
}

// ── Render ──
function render() {
    preview.querySelector('.markdown-body').innerHTML = marked.parse(
        cm.getValue(),
    );
}

// ── Word Count / Reading Time ──
function updateStats(text) {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    statWords.textContent =
        words === 1 ? t('stats.word') : t('stats.words', words);
    statReadTime.textContent = t('stats.readTime', minutes);
    statChars.textContent = t('stats.chars', chars);
}

// ── Markdown Lint + Grammar Checker ──

// Replace content inside fenced code blocks and inline code with neutral
// whitespace so lint/grammar rules don't fire on code content.
function renderIssues(issues) {
    lintList.innerHTML = '';

    if (issues.length === 0) {
        btnIssuesToggle.hidden = true;
        btnIssuesToggle.setAttribute('aria-expanded', 'false');
        lintPanel.classList.remove('visible');
        lintPanel.setAttribute('aria-hidden', 'true');
        return;
    }

    btnIssuesToggle.hidden = false;
    statIssuesCount.textContent =
        issues.length === 1 ? t('issues.one') : t('issues.many', issues.length);

    const MAX_DISPLAY = 20;
    const displayed = issues.slice(0, MAX_DISPLAY);
    const overflow = issues.length - MAX_DISPLAY;

    for (const issue of displayed) {
        const li = document.createElement('li');
        li.className = 'lint-item';
        if (issue.line) li.dataset.line = issue.line;

        const badge = document.createElement('span');
        badge.className = `lint-item-badge lint-item-badge--${issue.type}`;
        badge.textContent = issue.type === 'lint' ? 'MD' : 'Gram.';
        li.appendChild(badge);

        if (issue.line) {
            const lineSpan = document.createElement('span');
            lineSpan.className = 'lint-item-line';
            lineSpan.textContent = `L${issue.line}`;
            li.appendChild(lineSpan);
        }

        const msg = document.createElement('span');
        msg.className = 'lint-item-msg';
        msg.textContent = issue.message;
        li.appendChild(msg);

        if (issue.line) {
            li.addEventListener('click', () => {
                cm.setCursor({ line: issue.line - 1, ch: 0 });
                cm.scrollIntoView({ line: issue.line - 1, ch: 0 }, 80);
                cm.focus();
            });
        }

        lintList.appendChild(li);
    }

    if (overflow > 0) {
        const li = document.createElement('li');
        li.className = 'lint-item';
        li.style.opacity = '0.55';
        li.style.fontStyle = 'italic';
        const msg = document.createElement('span');
        msg.className = 'lint-item-msg';
        msg.textContent = t('issues.overflow', overflow);
        li.appendChild(msg);
        lintList.appendChild(li);
    }
}

btnIssuesToggle.addEventListener('click', () => {
    const open = !lintPanel.classList.contains('visible');
    lintPanel.classList.toggle('visible', open);
    lintPanel.setAttribute('aria-hidden', String(!open));
    btnIssuesToggle.setAttribute('aria-expanded', String(open));
});

btnLintClose.addEventListener('click', () => {
    lintPanel.classList.remove('visible');
    lintPanel.setAttribute('aria-hidden', 'true');
    btnIssuesToggle.setAttribute('aria-expanded', 'false');
});

// ── Live update with debounce ──
let debounceTimer;
cm.on('change', () => {
    // Any change not triggered by setSampleContent() means the user has
    // written their own content — stop swapping samples on lang change.
    if (!settingSample) isSampleContent = false;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const text = cm.getValue();
        render();
        saveContent();
        updateStats(text);
        renderIssues([...runMarkdownLint(text), ...runGrammar(text)]);
    }, 120);
});

// ── Menus ──
const allMenus = [exportMenu, settingsMenu, themesMenu, hamburgerPanel];

function closeAllMenus() {
    for (const m of allMenus) {
        m.classList.remove('visible');
        m.setAttribute('inert', '');
    }
}

function toggleMenu(menu, open) {
    for (const m of allMenus) {
        if (m !== menu) {
            m.classList.remove('visible');
            m.setAttribute('inert', '');
        }
    }
    menu.classList.toggle('visible', open);
    if (open) {
        menu.removeAttribute('inert');
    } else {
        menu.setAttribute('inert', '');
    }
}

btnExport.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(exportMenu, !exportMenu.classList.contains('visible'));
});

btnThemes.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(themesMenu, !themesMenu.classList.contains('visible'));
});

btnSettings.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(settingsMenu, !settingsMenu.classList.contains('visible'));
});

btnHamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !hamburgerPanel.classList.contains('visible');
    toggleMenu(hamburgerPanel, open);
    btnHamburger.setAttribute('aria-expanded', String(open));
});

hamburgerPanel.querySelectorAll('[data-delegates]').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.getElementById(btn.dataset.delegates).click();
    });
});

document.addEventListener('click', (e) => {
    if (
        !allMenus.some((m) => m.contains(e.target)) &&
        !e.target.closest(
            '#btn-export, #btn-settings, #btn-themes, #btn-hamburger',
        )
    ) {
        closeAllMenus();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllMenus();
});

// ── Universal copy (raw rendered HTML — Word, Notion, and other apps) ──
btnCopyUniversal.addEventListener('click', async () => {
    closeAllMenus();
    const body = preview.querySelector('.markdown-body');
    const html = body.innerHTML;
    const plain = body.innerText;
    try {
        await navigator.clipboard.write([
            new ClipboardItem({
                'text/html': new Blob([html], { type: 'text/html' }),
                'text/plain': new Blob([plain], { type: 'text/plain' }),
            }),
        ]);
        showToast(t('toast.copied'));
    } catch {
        try {
            await navigator.clipboard.writeText(plain);
            showToast(t('toast.copiedPlain'));
        } catch {
            showToast(t('toast.copyError'));
        }
    }
});

// ── Print / PDF ──
// (PDF export is handled via the PDF theme menu — see PDF Themes section below)

// ── Clear ──
btnClear.addEventListener('click', () => {
    cm.setValue('');
    render();
    saveContent();
    cm.focus();
});

// ── Toast ──
function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2200);
}

// ── Draggable divider (landscape only) ──
let isDragging = false;

divider.addEventListener('mousedown', (e) => {
    if (
        window.matchMedia('(max-width: 768px), (orientation: portrait)').matches
    )
        return;
    isDragging = true;
    divider.classList.add('active');
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const container = document.querySelector('main');
    const rect = container.getBoundingClientRect();
    const offset = e.clientX - rect.left;
    const total = rect.width;
    const pct = Math.min(Math.max((offset / total) * 100, 15), 85);

    document.querySelector('.editor-pane').style.flex = `0 0 ${pct}%`;
    document.querySelector('.preview-pane').style.flex = `0 0 ${100 - pct}%`;
    cm.refresh();
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        divider.classList.remove('active');
    }
});

// ── Liquid Toggle helpers ──
function syncLiquidToggle(el, state) {
    el.setAttribute('aria-checked', String(state));
    el.style.setProperty('--complete', state ? '100' : '0');
}

function animateLiquidToggle(el, toState) {
    el.dataset.active = 'true';
    gsap.to(el, {
        '--complete': toState ? 100 : 0,
        duration: 0.14,
        delay: 0.18,
        ease: 'power1.inOut',
        onComplete: () => {
            gsap.delayedCall(0.05, () => {
                delete el.dataset.active;
                el.setAttribute('aria-checked', String(toState));
            });
        },
    });
}

// ── Sync Scroll ──
let syncScrollEnabled = true;
let scrolling = null; // tracks which element is currently scrolling

function syncEditorToPreview() {
    if (!syncScrollEnabled || scrolling === 'preview') return;
    scrolling = 'editor';
    const info = cm.getScrollInfo();
    const pct = info.top / Math.max(info.height - info.clientHeight, 1);
    preview.scrollTop = pct * (preview.scrollHeight - preview.clientHeight);
    requestAnimationFrame(() => {
        scrolling = null;
    });
}

function syncPreviewToEditor() {
    if (!syncScrollEnabled || scrolling === 'editor') return;
    scrolling = 'preview';
    const pct =
        preview.scrollTop /
        Math.max(preview.scrollHeight - preview.clientHeight, 1);
    const info = cm.getScrollInfo();
    cm.scrollTo(null, pct * (info.height - info.clientHeight));
    requestAnimationFrame(() => {
        scrolling = null;
    });
}

cm.on('scroll', syncEditorToPreview);
preview.addEventListener('scroll', syncPreviewToEditor);

function updateSyncToggle() {
    syncLiquidToggle(toggleSync, syncScrollEnabled);
    iconSync.innerHTML = syncScrollEnabled ? SVG_LOCK_CLOSED : SVG_LOCK_OPEN;
}

toggleSync.addEventListener('click', () => {
    syncScrollEnabled = !syncScrollEnabled;
    animateLiquidToggle(toggleSync, syncScrollEnabled);
    iconSync.innerHTML = syncScrollEnabled ? SVG_LOCK_CLOSED : SVG_LOCK_OPEN;
    localStorage.setItem(
        'markdown-preview-sync',
        syncScrollEnabled ? '1' : '0',
    );
});

// Restore sync preference
const savedSync = localStorage.getItem('markdown-preview-sync');
if (savedSync === '0') {
    syncScrollEnabled = false;
}
updateSyncToggle();

// ── Dark Mode ──
function applyTheme(dark, animate = false) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    iconTheme.innerHTML = dark ? SVG_SUN : SVG_MOON;
    if (animate) {
        animateLiquidToggle(toggleTheme, dark);
    } else {
        syncLiquidToggle(toggleTheme, dark);
    }
    hljsLight.disabled = dark;
    hljsDark.disabled = !dark;
    cmThemeDark.disabled = !dark;
    cm.setOption('theme', dark ? 'dracula' : 'default');
    localStorage.setItem('markdown-preview-theme', dark ? 'dark' : 'light');
}

toggleTheme.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    applyTheme(!isDark, true);
});

// Restore theme — saved preference wins; otherwise follow system/browser
const savedTheme = localStorage.getItem('markdown-preview-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
applyTheme(
    savedTheme !== null ? savedTheme === 'dark' : prefersDark.matches,
    false,
);

// Follow system changes live (only when the user hasn't set a preference)
prefersDark.addEventListener('change', (e) => {
    if (localStorage.getItem('markdown-preview-theme') === null) {
        applyTheme(e.matches, false);
    }
});

// ── Platform-specific copy (Teams / Outlook+Gmail / Slack) ──

// Build HTML with inline styles for paste into Teams or email clients.
// Walks the rendered preview DOM and applies inline CSS to each element
// so formatting survives paste into apps that strip external stylesheets.
btnCopyTeams.addEventListener('click', async () => {
    closeAllMenus();
    const html = buildInlineStyledHTML(
        preview.querySelector('.markdown-body'),
        'teams',
    );
    const plain = preview.querySelector('.markdown-body').innerText;
    try {
        await navigator.clipboard.write([
            new ClipboardItem({
                'text/html': new Blob([html], { type: 'text/html' }),
                'text/plain': new Blob([plain], { type: 'text/plain' }),
            }),
        ]);
        showToast(t('toast.copiedTeams'));
    } catch {
        try {
            await navigator.clipboard.writeText(plain);
            showToast(t('toast.copiedPlain'));
        } catch {
            showToast(t('toast.copyError'));
        }
    }
});

btnCopyEmail.addEventListener('click', async () => {
    closeAllMenus();
    const html = buildInlineStyledHTML(
        preview.querySelector('.markdown-body'),
        'email',
    );
    const plain = preview.querySelector('.markdown-body').innerText;
    try {
        await navigator.clipboard.write([
            new ClipboardItem({
                'text/html': new Blob([html], { type: 'text/html' }),
                'text/plain': new Blob([plain], { type: 'text/plain' }),
            }),
        ]);
        showToast(t('toast.copiedEmail'));
    } catch {
        try {
            await navigator.clipboard.writeText(plain);
            showToast(t('toast.copiedPlain'));
        } catch {
            showToast(t('toast.copyError'));
        }
    }
});

btnCopySlack.addEventListener('click', async () => {
    closeAllMenus();
    const mrkdwn = convertToSlack(cm.getValue());
    try {
        await navigator.clipboard.writeText(mrkdwn);
        showToast(t('toast.copiedSlack'));
    } catch {
        showToast(t('toast.copyError'));
    }
});

// ── Glass Style ──
function applyGlassStyle(frosted, animate = false) {
    document.documentElement.dataset.glass = frosted ? 'frosted' : 'clear';
    if (animate) {
        animateLiquidToggle(toggleGlass, frosted);
    } else {
        syncLiquidToggle(toggleGlass, frosted);
    }
    localStorage.setItem('prisma-glass', frosted ? 'frosted' : 'clear');
}

toggleGlass.addEventListener('click', () => {
    applyGlassStyle(document.documentElement.dataset.glass !== 'frosted', true);
});

const savedGlass = localStorage.getItem('prisma-glass');
// Default is clear — frosted only when the user has explicitly saved it
applyGlassStyle(savedGlass === 'frosted', false);

// ── Drag & Drop ──
const dropOverlay = document.getElementById('drop-overlay');
const editorPane = document.querySelector('.editor-pane');

function isFileDrag(e) {
    return (
        e.dataTransfer?.types &&
        Array.from(e.dataTransfer.types).includes('Files')
    );
}

function showDragUI() {
    editorPane.classList.add('drag-active');
    dropOverlay.classList.add('visible');
    dropOverlay.removeAttribute('aria-hidden');
}

function hideDragUI() {
    editorPane.classList.remove('drag-active');
    dropOverlay.classList.remove('visible');
    dropOverlay.setAttribute('aria-hidden', 'true');
}

// Show effect as soon as a file enters anywhere on the page
document.addEventListener('dragenter', (e) => {
    if (!isFileDrag(e)) return;
    e.preventDefault();
    showDragUI();
});

// Keep the drag alive over the whole document; block browser from opening file
document.addEventListener('dragover', (e) => {
    if (!isFileDrag(e)) return;
    e.preventDefault();
    // Show copy cursor only over editor pane, none elsewhere
    const rect = editorPane.getBoundingClientRect();
    const overEditor =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
    e.dataTransfer.dropEffect = overEditor ? 'copy' : 'none';
});

// Hide effect when cursor truly leaves the browser window
document.addEventListener('dragleave', (e) => {
    if (e.relatedTarget !== null) return;
    hideDragUI();
});

// Block drop everywhere on the document …
document.addEventListener('drop', (e) => {
    if (!isFileDrag(e)) return;
    e.preventDefault();
    hideDragUI();
});

// … except on the editor pane — this fires first (capture bubbles up)
editorPane.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation(); // prevent the document drop handler above from also running
    hideDragUI();

    const files = e.dataTransfer?.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const nameLower = file.name.toLowerCase();
    const isMd =
        nameLower.endsWith('.md') ||
        nameLower.endsWith('.markdown') ||
        file.type === 'text/markdown';
    const isImage = file.type.startsWith('image/');

    if (isMd) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            cm.setValue(ev.target.result);
            render();
            saveContent();
            showToast(t('toast.fileLoaded', file.name));
        };
        reader.readAsText(file, 'UTF-8');
    } else if (isImage) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            const dataUrl = ev.target.result;
            const altText = file.name.replace(/\.[^.]+$/, '');
            const cursor = cm.getCursor();
            const lineContent = cm.getLine(cursor.line);
            const prefix = lineContent.trim() ? '\n' : '';
            cm.replaceRange(`${prefix}![${altText}](${dataUrl})\n`, cursor);
            render();
            saveContent();
            showToast(t('toast.imageInserted', file.name));
        };
        reader.readAsDataURL(file);
    } else {
        showToast(t('toast.fileUnsupported'));
    }
});

function applyPreviewTheme(name) {
    let el = document.getElementById('preview-theme');
    if (!el) {
        el = document.createElement('style');
        el.id = 'preview-theme';
        document.head.appendChild(el);
    }
    el.textContent = PREVIEW_THEMES[name] ?? PREVIEW_THEMES.github;
    for (const row of document.querySelectorAll('.pdf-theme-row')) {
        row.classList.toggle('active', row.dataset.pdfTheme === name);
    }
    localStorage.setItem('prisma-preview-theme', name);
}

// Theme row selection
for (const row of document.querySelectorAll('.pdf-theme-row')) {
    row.addEventListener('click', () => {
        applyPreviewTheme(row.dataset.pdfTheme);
    });
}

// PDF export — the preview theme CSS already covers @media print,
// so just open the native print dialog (which shows a preview).
btnPrintPdf.addEventListener('click', () => {
    closeAllMenus();
    globalThis.print();
});
// ── Paste handler: HTML → Markdown, TSV → Markdown table ──
cm.on('paste', (_, e) => {
    const cd = e.clipboardData || window.clipboardData;
    if (!cd) return;

    const plain = cd.getData('text/plain');
    const html = cd.getData('text/html');

    // Excel / spreadsheet TSV paste → Markdown table
    if (isTsvData(plain)) {
        e.preventDefault();
        const md = tsvToMarkdown(plain);
        if (cm.somethingSelected()) {
            cm.replaceSelection(md + '\n');
        } else {
            const cursor = cm.getCursor();
            const line = cm.getLine(cursor.line);
            const prefix = line.trim() ? '\n' : '';
            cm.replaceRange(prefix + md + '\n', cursor);
        }
        render();
        saveContent();
        showToast(t('toast.tablePasted'));
        return;
    }

    // HTML paste → Markdown (only when real markup is present)
    if (html) {
        const hasMarkup =
            /<(h[1-6]|p|ul|ol|li|table|blockquote|pre|strong|em|br)\b/i.test(
                html,
            );
        if (hasMarkup) {
            e.preventDefault();
            const md = htmlToMarkdown(html);
            if (cm.somethingSelected()) {
                cm.replaceSelection(md + '\n');
            } else {
                const cursor = cm.getCursor();
                const line = cm.getLine(cursor.line);
                const prefix = line.trim() ? '\n' : '';
                cm.replaceRange(prefix + md + '\n', cursor);
            }
            render();
            saveContent();
            showToast(t('toast.htmlConverted'));
        }
    }
});

// Auto-save snapshot every 30 s when content has changed
let _lastSnapshotContent = '';
setInterval(() => {
    const cur = cm.getValue();
    if (cur !== _lastSnapshotContent && cur.trim()) {
        saveSnapshot(cur);
        _lastSnapshotContent = cur;
    }
}, 30000);

cm.on('blur', () => {
    const cur = cm.getValue();
    if (cur !== _lastSnapshotContent && cur.trim()) {
        saveSnapshot(cur);
        _lastSnapshotContent = cur;
    }
});
// ── History Modal ──
const historyModal = document.getElementById('history-modal');
const historyModalBackdrop = document.getElementById('history-modal-backdrop');
const btnCloseHistory = document.getElementById('btn-close-history');
const historyList = document.getElementById('history-list');
const btnClearHistory = document.getElementById('btn-clear-history');

function renderHistoryList() {
    const history = getHistory();
    historyList.innerHTML = '';
    if (!history.length) {
        const empty = document.createElement('div');
        empty.className = 'history-empty';
        empty.textContent = t('history.empty');
        historyList.appendChild(empty);
        return;
    }
    for (const item of history) {
        const el = document.createElement('button');
        el.className = 'history-item';
        el.type = 'button';
        el.innerHTML = `<span class="history-item-time">${formatHistoryDate(item.ts)}</span><span class="history-item-preview">${item.preview.replace(/</g, '&lt;')}</span>`;
        el.addEventListener('click', () => {
            cm.setValue(item.content);
            render();
            saveContent();
            closeHistoryModal();
            cm.focus();
            showToast(t('toast.versionRestored'));
        });
        historyList.appendChild(el);
    }
}

function openHistoryModal() {
    renderHistoryList();
    historyModal.classList.add('visible');
    historyModal.removeAttribute('inert');
    btnCloseHistory.focus();
}

function closeHistoryModal() {
    historyModal.classList.remove('visible');
    historyModal.setAttribute('inert', '');
    document.getElementById('btn-history').focus();
}

document.getElementById('btn-history').addEventListener('click', (e) => {
    e.stopPropagation();
    closeAllMenus();
    openHistoryModal();
});

historyModalBackdrop.addEventListener('click', closeHistoryModal);
btnCloseHistory.addEventListener('click', closeHistoryModal);
btnClearHistory.addEventListener('click', () => {
    clearHistory();
    renderHistoryList();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && historyModal.classList.contains('visible'))
        closeHistoryModal();
});

// ── Table Generator ──
function buildTableGrid() {
    const rows = Math.max(2, Number.parseInt(tblRows.value, 10) || 3);
    const cols = Math.max(1, Number.parseInt(tblCols.value, 10) || 3);
    tblGrid.style.gridTemplateColumns = `repeat(${cols}, minmax(110px, 1fr))`;
    tblGrid.innerHTML = '';

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const inp = document.createElement('input');
            inp.type = 'text';
            inp.className = 'tbl-cell' + (r === 0 ? ' tbl-header-cell' : '');
            inp.placeholder =
                r === 0
                    ? t('table.colPlaceholder', c + 1)
                    : t('table.cellPlaceholder', r, c + 1);
            inp.dataset.row = r;
            inp.dataset.col = c;

            // Round corners on edge cells so focus box-shadow follows wrapper's border-radius
            const isFirstRow = r === 0;
            const isLastRow = r === rows - 1;
            const isFirstCol = c === 0;
            const isLastCol = c === cols - 1;
            const R = '9px';
            inp.style.borderTopLeftRadius = isFirstRow && isFirstCol ? R : '';
            inp.style.borderTopRightRadius = isFirstRow && isLastCol ? R : '';
            inp.style.borderBottomLeftRadius = isLastRow && isFirstCol ? R : '';
            inp.style.borderBottomRightRadius = isLastRow && isLastCol ? R : '';

            // Enter moves to next row same column
            inp.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const nextR = r + 1 < rows ? r + 1 : r;
                    const next = tblGrid.querySelector(
                        `[data-row='${nextR}'][data-col='${c}']`,
                    );
                    if (next) next.focus();
                }
            });

            tblGrid.appendChild(inp);
        }
    }

    // Focus first header cell
    const first = tblGrid.querySelector('.tbl-cell');
    if (first) requestAnimationFrame(() => first.focus());
}

function openTableModal() {
    tableModal.classList.add('visible');
    tableModal.removeAttribute('inert');
    buildTableGrid();
}

function closeTableModal() {
    tableModal.classList.remove('visible');
    tableModal.setAttribute('inert', '');
}

function generateMarkdownTable() {
    const rows = Math.max(2, Number.parseInt(tblRows.value, 10) || 3);
    const cols = Math.max(1, Number.parseInt(tblCols.value, 10) || 3);
    const cells = [...tblGrid.querySelectorAll('.tbl-cell')];

    let md = '\n';

    // Header row
    const headerCells = cells.slice(0, cols).map((i) => i.value.trim() || ' ');
    md += '| ' + headerCells.join(' | ') + ' |\n';

    // Separator
    md += '| ' + headerCells.map(() => '---').join(' | ') + ' |\n';

    // Data rows
    for (let r = 1; r < rows; r++) {
        const rowCells = cells
            .slice(r * cols, (r + 1) * cols)
            .map((i) => i.value.trim() || ' ');
        md += '| ' + rowCells.join(' | ') + ' |\n';
    }

    return md + '\n';
}

btnTable.addEventListener('click', (e) => {
    e.stopPropagation();
    closeAllMenus();
    openTableModal();
});

tableModalBackdrop.addEventListener('click', closeTableModal);
btnCloseTable.addEventListener('click', closeTableModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tableModal.classList.contains('visible')) {
        closeTableModal();
    }
});

btnInsertTable.addEventListener('click', () => {
    const md = generateMarkdownTable();
    const cursor = cm.getCursor();
    const lineContent = cm.getLine(cursor.line);
    const insertion = lineContent.trim() === '' ? md : '\n' + md;
    cm.replaceRange(insertion, cursor);
    render();
    saveContent();
    closeTableModal();
    cm.focus();
    showToast(t('toast.tableInserted'));
});

// Stepper buttons
document.getElementById('tbl-rows-dec').addEventListener('click', () => {
    tblRows.value = Math.max(2, Number.parseInt(tblRows.value, 10) - 1);
    buildTableGrid();
});
document.getElementById('tbl-rows-inc').addEventListener('click', () => {
    tblRows.value = Math.min(30, Number.parseInt(tblRows.value, 10) + 1);
    buildTableGrid();
});
document.getElementById('tbl-cols-dec').addEventListener('click', () => {
    tblCols.value = Math.max(1, Number.parseInt(tblCols.value, 10) - 1);
    buildTableGrid();
});
document.getElementById('tbl-cols-inc').addEventListener('click', () => {
    tblCols.value = Math.min(12, Number.parseInt(tblCols.value, 10) + 1);
    buildTableGrid();
});

tblRows.addEventListener('change', buildTableGrid);
tblCols.addEventListener('change', buildTableGrid);

// Restore preview theme
applyPreviewTheme(localStorage.getItem('prisma-preview-theme') || 'github');

// ── Language dropdown picker ──
const LANG_LABELS = {
    en: 'EN (UK)',
    'pt-BR': 'PT (BR)',
    'pt-PT': 'PT (PT)',
    es: 'ES (ES)',
    fr: 'FR (FR)',
};
function langTriggerLabel(lang) {
    return LANG_LABELS[lang] || lang.toUpperCase();
}

{
    const selector = document.getElementById('lang-select');
    const trigger = selector.querySelector('.lang-trigger');
    const options = [...selector.querySelectorAll('.lang-option')];

    function openDropdown() {
        selector.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
        selector.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
    }

    trigger.addEventListener('click', () => {
        selector.classList.contains('open') ? closeDropdown() : openDropdown();
    });

    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) closeDropdown();
    });

    options.forEach((opt) => {
        opt.addEventListener('click', () => {
            const lang = opt.dataset.lang;
            options.forEach((o) => o.classList.toggle('selected', o === opt));
            const triggerLabel = selector.querySelector('.lang-trigger-label');
            if (triggerLabel) triggerLabel.textContent = langTriggerLabel(lang);
            closeDropdown();
            applyLanguage(lang);
            const text = cm.getValue();
            updateStats(text);
            renderIssues([...runMarkdownLint(text), ...runGrammar(text)]);
        });
    });
}

// ── Init ──
applyLanguage(localStorage.getItem('prisma-lang') || 'en');
loadContent();
render();
const _initText = cm.getValue();
updateStats(_initText);
renderIssues([...runMarkdownLint(_initText), ...runGrammar(_initText)]);
// Force CodeMirror to recalculate layout after DOM is fully painted
requestAnimationFrame(() => cm.refresh());

// ── Portrait pane collapse/expand ──
const portraitQuery = window.matchMedia(
    '(max-width: 768px), (orientation: portrait)',
);
const paneHeaderEditor = document.getElementById('pane-header-editor');
const paneHeaderPreview = document.getElementById('pane-header-preview');
const editorPaneEl = document.querySelector('.editor-pane');
const previewPaneEl = document.querySelector('.preview-pane');

function isPortrait() {
    return portraitQuery.matches;
}

const mainEl = document.querySelector('main');

function setPaneCollapsed(pane, header, collapsed) {
    pane.classList.toggle('pane--collapsed', collapsed);
    header.setAttribute('aria-expanded', String(!collapsed));
    // Add bottom padding only when preview is collapsed (dock would cover content)
    if (pane === previewPaneEl) {
        mainEl.classList.toggle('main--preview-collapsed', collapsed);
    }
}

function togglePane(pane, header) {
    if (!isPortrait()) return;
    const willCollapse = !pane.classList.contains('pane--collapsed');
    setPaneCollapsed(pane, header, willCollapse);
    // If expanding editor, refresh CodeMirror layout
    if (!willCollapse && pane === editorPaneEl) {
        requestAnimationFrame(() => cm.refresh());
    }
}

paneHeaderEditor.addEventListener('click', () =>
    togglePane(editorPaneEl, paneHeaderEditor),
);
paneHeaderPreview.addEventListener('click', () =>
    togglePane(previewPaneEl, paneHeaderPreview),
);

// Reset collapse state when switching between portrait ↔ landscape
portraitQuery.addEventListener('change', (e) => {
    if (!e.matches) {
        // Landscape: ensure both panes are uncollapsed
        setPaneCollapsed(editorPaneEl, paneHeaderEditor, false);
        setPaneCollapsed(previewPaneEl, paneHeaderPreview, false);
    }
    requestAnimationFrame(() => cm.refresh());
});

// ── Help / Wiki Modal ──
const helpModal = document.getElementById('help-modal');
const helpModalBackdrop = document.getElementById('help-modal-backdrop');
const btnCloseHelp = document.getElementById('btn-close-help');
const btnHelp = document.getElementById('btn-help');
const helpBody = document.getElementById('help-body');

function buildHelpBody() {
    const iconEdit = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
    const iconExport = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`;
    const iconHistory = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    const iconTable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`;
    const iconThemes = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="8" height="8" rx="2"/><rect x="14" y="2" width="8" height="8" rx="2"/><rect x="2" y="14" width="8" height="8" rx="2"/><rect x="14" y="14" width="8" height="8" rx="2"/></svg>`;
    const iconSettings = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`;
    const iconMd = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
    const iconKbd = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/></svg>`;

    function section(icon, title, body) {
        return `<div class="help-section">
            <div class="help-section-hd">
                <span class="help-section-icon">${icon}</span>
                <h3 class="help-section-title">${title}</h3>
            </div>
            <div class="help-section-body">${body}</div>
        </div>`;
    }

    const exportRows = [
        ['Universal', t('export.universalDesc')],
        ['Microsoft Teams', t('export.teamsDesc')],
        ['Outlook / Gmail', t('export.emailDesc')],
        ['Slack', t('export.slackDesc')],
        [t('export.printName'), t('export.printDesc')],
    ]
        .map(
            ([name, desc]) => `<div class="help-export-item">
        <span class="help-export-name">${name}</span>
        <span class="help-export-desc">${desc}</span>
    </div>`,
        )
        .join('');

    const mdRows = [
        ['# Heading 1', 'H1 — largest heading'],
        ['## Heading 2', 'H2 — sub-heading'],
        ['**bold**', 'Bold text'],
        ['*italic*', 'Italic text'],
        ['~~strikethrough~~', 'Strikethrough'],
        ['`inline code`', 'Inline code'],
        ['```lang\\n…\\n```', 'Fenced code block'],
        ['[text](url)', 'Hyperlink'],
        ['![alt](url)', 'Image'],
        ['> quote', 'Blockquote'],
        ['- item', 'Unordered list'],
        ['1. item', 'Ordered list'],
        ['- [ ] task', 'Task list (unchecked)'],
        ['- [x] task', 'Task list (checked)'],
        ['---', 'Horizontal rule'],
        ['| A | B |\\n|---|---|\\n| 1 | 2 |', 'Table'],
    ]
        .map(([syn, desc]) => `<tr><td>${syn}</td><td>${desc}</td></tr>`)
        .join('');

    const kbdRows = [
        [['Tab'], 'Indent line / list item'],
        [['Shift', 'Tab'], 'Unindent line / list item'],
        [['Enter'], 'Continue list — auto-inserts next bullet or number'],
        [['Esc'], 'Close open modal or menu'],
    ]
        .map(([keys, desc]) => {
            const kbds = keys.map((k) => `<kbd>${k}</kbd>`).join(' + ');
            return `<div class="help-shortcut-row">
            <span class="help-shortcut-keys">${kbds}</span>
            <span class="help-shortcut-desc">${desc}</span>
        </div>`;
        })
        .join('');

    return [
        section(
            iconEdit,
            t('help.s1'),
            `<ul class="help-list">
            <li>${t('help.s1d1')}</li>
            <li>${t('help.s1d2')}</li>
            <li>${t('help.s1d3')}</li>
            <li>${t('help.s1d4')}</li>
            <li>${t('help.s1d5')}</li>
        </ul>`,
        ),
        section(
            iconExport,
            t('help.s2'),
            `<p class="help-p">${t('help.s2intro')}</p>
            <div class="help-export-grid">${exportRows}</div>`,
        ),
        section(
            iconHistory,
            t('help.s3'),
            `<p class="help-p">${t('help.s3d1')}</p>`,
        ),
        section(
            iconTable,
            t('help.s4'),
            `<p class="help-p">${t('help.s4d1')}</p>`,
        ),
        section(
            iconThemes,
            t('help.s5'),
            `<p class="help-p">${t('help.s5d1')}</p>`,
        ),
        section(
            iconSettings,
            t('help.s6'),
            `<p class="help-p">${t('help.s6d1')}</p>`,
        ),
        section(
            iconMd,
            t('help.s7'),
            `<table class="help-md-table">
            <thead><tr><th>Syntax</th><th>Output</th></tr></thead>
            <tbody>${mdRows}</tbody>
        </table>`,
        ),
        section(
            iconKbd,
            t('help.s8'),
            `<div class="help-shortcuts-grid">${kbdRows}</div>`,
        ),
    ].join('');
}

function openHelpModal() {
    helpBody.innerHTML = buildHelpBody();
    closeAllMenus();
    helpModal.classList.add('visible');
    helpModal.removeAttribute('inert');
    btnCloseHelp.focus();
}

function closeHelpModal() {
    helpModal.classList.remove('visible');
    helpModal.setAttribute('inert', '');
}

btnHelp.addEventListener('click', (e) => {
    e.stopPropagation();
    openHelpModal();
});

helpModalBackdrop.addEventListener('click', closeHelpModal);
btnCloseHelp.addEventListener('click', closeHelpModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && helpModal.classList.contains('visible'))
        closeHelpModal();
});

(() => {
  'use strict';

  const iconSync = document.getElementById('icon-sync');
  const labelSync = document.getElementById('label-sync');
  const iconTheme = document.getElementById('icon-theme');
  const labelTheme = document.getElementById('label-theme');

  // SVG paths for sync states
  const SVG_LOCK_CLOSED = '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>';
  const SVG_LOCK_OPEN = '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>';
  // SVG paths for theme states
  const SVG_MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  const SVG_SUN =
    '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';

  // ── Elements ──
  const editor = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const btnCopy = document.getElementById('btn-copy');
  const btnPrint = document.getElementById('btn-print');
  const btnClear = document.getElementById('btn-clear');
  const btnSync = document.getElementById('btn-sync');
  const btnTheme = document.getElementById('btn-theme');
  const divider = document.getElementById('divider');
  const toast = document.getElementById('toast');
  const hljsLight = document.getElementById('hljs-light');
  const hljsDark = document.getElementById('hljs-dark');
  const cmThemeDark = document.getElementById('cm-theme-dark');

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
    { name: 'typescript', mime: 'application/typescript', mode: 'javascript' },
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

  // Merge: only add entries not already in modeInfo (avoid duplicates)
  // meta.js must be loaded for CodeMirror.modeInfo to exist; guard just in case.
  if (!CodeMirror.modeInfo) CodeMirror.modeInfo = [];
  const existingNames = new Set(CodeMirror.modeInfo.map((m) => m.name.toLowerCase()));
  for (const entry of EXTRA_MODES) {
    if (!existingNames.has(entry.name.toLowerCase())) {
      CodeMirror.modeInfo.push(entry);
      existingNames.add(entry.name.toLowerCase());
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

  // ── Sample markdown ──
  const sampleMarkdown = `# Prisma.md ✨

Bem-vindo! Escreve **Markdown** à esquerda e vê o resultado à direita.

## Funcionalidades

- ✅ Live preview em tempo real
- ✅ Copiar formatado para colar no **Teams**
- ✅ Imprimir / Exportar para **PDF**
- ✅ Syntax highlighting em blocos de código
- ✅ Suporte a tabelas, listas, blockquotes, etc.

## Exemplo de código

\`\`\`javascript
function greet(name) {
    return \`Hello, \${name}!\`;
}
console.log(greet("World"));
\`\`\`

## Tabela

| Feature       | Status |
|---------------|--------|
| Live Preview  | ✅     |
| Copy to Teams | ✅     |
| Print / PDF   | ✅     |

## Blockquote

> "A simplicidade é a sofisticação suprema." — Leonardo da Vinci

## Checklist

- [x] Criar editor
- [x] Adicionar preview
- [ ] Conquistar o mundo

---

*Feito com ❤️ para produtividade.*
`;

  // ── Persistence ──
  const STORAGE_KEY = 'prisma-md-content';

  function loadContent() {
    const saved = localStorage.getItem(STORAGE_KEY);
    cm.setValue(saved === null ? sampleMarkdown : saved);
  }

  function saveContent() {
    localStorage.setItem(STORAGE_KEY, cm.getValue());
  }

  // ── Render ──
  function render() {
    preview.querySelector('.markdown-body').innerHTML = marked.parse(cm.getValue());
  }

  // ── Live update with debounce ──
  let debounceTimer;
  cm.on('change', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      render();
      saveContent();
    }, 120);
  });

  // ── Copy formatted HTML to clipboard (for Teams) ──
  btnCopy.addEventListener('click', async () => {
    const body = preview.querySelector('.markdown-body');
    const html = body.innerHTML;
    const plainText = body.innerText;

    try {
      const blob = new Blob([html], { type: 'text/html' });
      const textBlob = new Blob([plainText], { type: 'text/plain' });
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': blob,
          'text/plain': textBlob,
        }),
      ]);
      showToast('Copiado! Cola no Teams com Ctrl+V');
    } catch {
      // Fallback: copy plain text
      try {
        await navigator.clipboard.writeText(plainText);
        showToast('Copiado como texto simples');
      } catch {
        showToast('Erro ao copiar — tenta manualmente');
      }
    }
  });

  // ── Print / PDF ──
  btnPrint.addEventListener('click', () => {
    globalThis.print();
  });

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

  // ── Draggable divider ──
  let isDragging = false;

  divider.addEventListener('mousedown', (e) => {
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
    const pct = preview.scrollTop / Math.max(preview.scrollHeight - preview.clientHeight, 1);
    const info = cm.getScrollInfo();
    cm.scrollTo(null, pct * (info.height - info.clientHeight));
    requestAnimationFrame(() => {
      scrolling = null;
    });
  }

  cm.on('scroll', syncEditorToPreview);
  preview.addEventListener('scroll', syncPreviewToEditor);

  function updateSyncBtn() {
    btnSync.classList.toggle('active', syncScrollEnabled);
    iconSync.innerHTML = syncScrollEnabled ? SVG_LOCK_CLOSED : SVG_LOCK_OPEN;
    labelSync.textContent = 'Scroll';
    btnSync.title = syncScrollEnabled ? 'Scroll sincronizado entre editor e preview (clica para desativar)' : 'Scroll independente em cada painel (clica para sincronizar)';
  }

  btnSync.addEventListener('click', () => {
    syncScrollEnabled = !syncScrollEnabled;
    updateSyncBtn();
    localStorage.setItem('markdown-preview-sync', syncScrollEnabled ? '1' : '0');
    // Squeeze animation — mirrors the switcher pill scaleToggle from the reference
    btnSync.classList.remove('is-toggling');
    btnSync.getBoundingClientRect(); // force reflow to restart animation
    btnSync.classList.add('is-toggling');
    btnSync.addEventListener('animationend', () => btnSync.classList.remove('is-toggling'), { once: true });
  });

  // Restore sync preference
  const savedSync = localStorage.getItem('markdown-preview-sync');
  if (savedSync === '0') {
    syncScrollEnabled = false;
  }
  updateSyncBtn();

  // ── Dark Mode ──
  function applyTheme(dark) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    iconTheme.innerHTML = dark ? SVG_SUN : SVG_MOON;
    labelTheme.textContent = dark ? 'Claro' : 'Escuro';
    hljsLight.disabled = dark;
    hljsDark.disabled = !dark;
    cmThemeDark.disabled = !dark;
    cm.setOption('theme', dark ? 'dracula' : 'default');
    localStorage.setItem('markdown-preview-theme', dark ? 'dark' : 'light');
  }

  btnTheme.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    applyTheme(!isDark);
  });

  // Restore theme preference (default: light mode)
  const savedTheme = localStorage.getItem('markdown-preview-theme');
  applyTheme(savedTheme === 'dark');

  // ── Init ──
  loadContent();
  render();
  // Force CodeMirror to recalculate layout after DOM is fully painted
  requestAnimationFrame(() => cm.refresh());
})();

// ── Preview theme CSS overrides (applied to #preview element) ──

export const PREVIEW_THEMES = {
  github: `
        /* GitHub · light */
        #preview {
            --bg-surface: #ffffff;
            --bg-surface-2: #f6f8fa;
            --text-primary: #1f2328;
            --text-secondary: #57606a;
            --text-blockquote: #57606a;
            --accent: #0969da;
            --link-color: #0969da;
            --border: #d0d7de;
            --bg-code: #f6f8fa;
            --bg-table-alt: #f6f8fa;
        }
        #preview .markdown-body code { color: #cf222e; }
        #preview .markdown-body pre code { color: #1f2328; }
        @media print {
            html, body { background: #ffffff !important;
                -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        /* GitHub · dark */
        #preview[data-theme='dark'] {
            --bg-surface: #0d1117;
            --bg-surface-2: #161b22;
            --text-primary: #e6edf3;
            --text-secondary: #8b949e;
            --text-blockquote: #8b949e;
            --accent: #4ade80;
            --link-color: #4ade80;
            --border: #21262d;
            --bg-code: #161b22;
            --bg-table-alt: #161b22;
        }
        #preview[data-theme='dark'] .markdown-body code { color: #f9a8d4; }
        #preview[data-theme='dark'] .markdown-body pre code { color: #e6edf3; }
        @media print {
            html[data-theme='dark'], html[data-theme='dark'] body {
                background: #0d1117 !important;
                -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
    `,
  modern: `
        /* Moderno · light */
        #preview {
            --bg-surface: #f8fafc;
            --bg-surface-2: #f0f0ff;
            --text-primary: #1e293b;
            --text-secondary: #4f46e5;
            --text-blockquote: #4f46e5;
            --accent: #6366f1;
            --link-color: #6366f1;
            --border: #e0e7ff;
            --bg-code: #ede9fe;
            --bg-table-alt: #f5f3ff;
        }
        #preview .markdown-body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
        #preview .markdown-body h1 { color: #6366f1; }
        #preview .markdown-body h2 { color: #4338ca; }
        #preview .markdown-body code { color: #4338ca; }
        #preview .markdown-body pre code { color: #1e1b4b; }
        @media print {
            html, body { background: #f8fafc !important;
                -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        /* Moderno · dark */
        #preview[data-theme='dark'] {
            --bg-surface: #0f0c1e;
            --bg-surface-2: #1e1b4b;
            --text-primary: #e0e7ff;
            --text-secondary: #a5b4fc;
            --text-blockquote: #a5b4fc;
            --accent: #a5b4fc;
            --link-color: #a5b4fc;
            --border: #3730a3;
            --bg-code: #1e1b4b;
            --bg-table-alt: #1a1744;
        }
        #preview[data-theme='dark'] .markdown-body h1 { color: #a5b4fc; }
        #preview[data-theme='dark'] .markdown-body h2 { color: #818cf8; }
        #preview[data-theme='dark'] .markdown-body code { color: #c7d2fe; }
        #preview[data-theme='dark'] .markdown-body pre code { color: #e0e7ff; }
        @media print {
            html[data-theme='dark'], html[data-theme='dark'] body {
                background: #0f0c1e !important;
                -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
    `,
  academic: `
        /* Acadêmico · light */
        #preview {
            --bg-surface: #fffdf7;
            --bg-surface-2: #f5efe0;
            --text-primary: #1a1a1a;
            --text-secondary: #5c4a2a;
            --text-blockquote: #7c5c3a;
            --accent: #92400e;
            --link-color: #7c3a1e;
            --border: #d6c9b0;
            --bg-code: #f0ece0;
            --bg-table-alt: #f5efe0;
        }
        #preview .markdown-body { font-family: Georgia, 'Times New Roman', Times, serif; }
        #preview .markdown-body p { text-align: justify; }
        #preview .markdown-body h2 { text-transform: uppercase; letter-spacing: 0.06em; }
        #preview .markdown-body code { font-family: 'Courier New', Consolas, monospace; color: #44250a; }
        #preview .markdown-body pre code { font-family: 'Courier New', Consolas, monospace; color: #1a1a1a; }
        @media print {
            html, body { background: #fffdf7 !important;
                -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        /* Acadêmico · dark */
        #preview[data-theme='dark'] {
            --bg-surface: #1c1612;
            --bg-surface-2: #2a2016;
            --text-primary: #e8dcc8;
            --text-secondary: #b09070;
            --text-blockquote: #c0a882;
            --accent: #fbbf24;
            --link-color: #fcd34d;
            --border: #4a3c28;
            --bg-code: #2a2016;
            --bg-table-alt: #241e14;
        }
        #preview[data-theme='dark'] .markdown-body code { color: #fcd34d; }
        #preview[data-theme='dark'] .markdown-body pre code { color: #e8dcc8; }
        @media print {
            html[data-theme='dark'], html[data-theme='dark'] body {
                background: #1c1612 !important;
                -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
    `,
  minimal: `
        /* Minimalista · light */
        #preview {
            --bg-surface: #ffffff;
            --bg-surface-2: #f9f9f9;
            --text-primary: #111111;
            --text-secondary: #555555;
            --text-blockquote: #666666;
            --accent: #374151;
            --link-color: #374151;
            --border: #e5e5e5;
            --bg-code: #f4f4f4;
            --bg-table-alt: #f9f9f9;
        }
        #preview .markdown-body code { color: #333333; }
        #preview .markdown-body pre code { color: #111111; }
        #preview .markdown-body a { text-decoration: underline; }
        @media print {
            html, body { background: #ffffff !important;
                -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        /* Minimalista · dark */
        #preview[data-theme='dark'] {
            --bg-surface: #111111;
            --bg-surface-2: #1f1f1f;
            --text-primary: #eeeeee;
            --text-secondary: #aaaaaa;
            --text-blockquote: #aaaaaa;
            --accent: #9ca3af;
            --link-color: #d1d5db;
            --border: #2a2a2a;
            --bg-code: #1f1f1f;
            --bg-table-alt: #191919;
        }
        #preview[data-theme='dark'] .markdown-body code { color: #d1d5db; }
        #preview[data-theme='dark'] .markdown-body pre code { color: #eeeeee; }
        #preview[data-theme='dark'] .markdown-body a { text-decoration: underline; }
        @media print {
            html[data-theme='dark'], html[data-theme='dark'] body {
                background: #111111 !important;
                -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
    `,
};

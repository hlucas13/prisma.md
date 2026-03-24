// ── Markdown lint + grammar checker (pure functions) ──
import { t } from './i18n';

export function maskCodeContent(text) {
    // Fenced code blocks: keep newlines to preserve line numbers
    let masked = text.replace(/```[\s\S]*?```/g, (m) =>
        '\n'.repeat((m.match(/\n/g) || []).length)
    );
    // Inline code: replace with same-length spaces
    masked = masked.replace(/`[^`\n]+`/g, (m) => ' '.repeat(m.length));
    return masked;
}

export function runMarkdownLint(text) {
    const issues = [];
    const masked = maskCodeContent(text);
    const lines = masked.split('\n');

    let h1Count = 0;
    let lastHeadingLevel = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]; // already masked — code blocks are empty
        const lineNum = i + 1;

        // ── Heading hierarchy ──
        const hm = line.match(/^(#{1,6})\s+\S/);
        if (hm) {
            const level = hm[1].length;
            if (level === 1) h1Count++;
            if (lastHeadingLevel > 0 && level > lastHeadingLevel + 1) {
                issues.push({
                    line: lineNum,
                    type: 'lint',
                    message: t('lint.heading', lastHeadingLevel, level),
                });
            }
            lastHeadingLevel = level;
        }

        // ── Unclosed inline link: [text]( with no closing ) on the line ──
        if (/\[[^\]]+\]\([^)]*$/.test(line)) {
            issues.push({
                line: lineNum,
                type: 'lint',
                message: t('lint.unclosedLink'),
            });
        }

        // ── Image without alt text: ![]( ──
        if (/!\[\s*\]\(/.test(line)) {
            issues.push({
                line: lineNum,
                type: 'lint',
                message: t('lint.imageAlt'),
            });
        }
    }

    // Multiple H1 (global document-level rule)
    if (h1Count > 1) {
        issues.push({
            line: null,
            type: 'lint',
            message: t('lint.multipleH1', h1Count),
        });
    }

    return issues;
}

export function runGrammar(text) {
    const issues = [];
    const masked = maskCodeContent(text);
    const lines = masked.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) continue;
        const lineNum = i + 1;

        // Rule 1: Repeated consecutive word (≥ 3 chars, both languages)
        for (const m of line.matchAll(/\b(\w{3,})\s+\1\b/gi)) {
            issues.push({
                line: lineNum,
                type: 'grammar',
                message: t('grammar.repeated', m[1]),
            });
        }

        // Rule 2: Double space between non-whitespace characters
        if (/\S {2,}\S/.test(line)) {
            issues.push({
                line: lineNum,
                type: 'grammar',
                message: t('grammar.doubleSpace'),
            });
        }
    }

    return issues;
}

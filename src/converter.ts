// ── Conversion utilities: HTML→Markdown, TSV→Markdown, Markdown→Slack ──
import { t } from './i18n';

export function convertToSlack(md) {
    let out = md;

    // Images (must come before links)
    out = out.replace(/!\[([^\]]*)\]\([^)]+\)/g, (_, alt) =>
        alt ? t('slack.image', alt) : t('slack.imagePlain')
    );

    // Links → <url|text>
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<$2|$1>');

    // Headings → *bold heading*
    out = out.replace(/^#{1,6}\s+(.+)$/gm, '*$1*');

    // Bold **text** or __text__ → *text*
    out = out.replace(/\*\*([^*\n]+)\*\*/g, '*$1*');
    out = out.replace(/__([^_\n]+)__/g, '*$1*');

    // Italic *text* (single asterisk) → _text_
    out = out.replace(/(?<![*_])\*([^*\n]+)\*(?![*_])/g, '_$1_');

    // Strikethrough ~~text~~ → ~text~
    out = out.replace(/~~([^~\n]+)~~/g, '~$1~');

    // Horizontal rules
    out = out.replace(
        /^[-*_]{3,}$/gm,
        '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500'
    );

    // Task lists
    out = out.replace(/^(\s*)-\s+\[x\]/gim, '$1\u2705');
    out = out.replace(/^(\s*)-\s+\[ \]/gim, '$1\u2610');

    // Code blocks: strip language hint (Slack ignores it anyway)
    out = out.replace(/^```[a-zA-Z0-9_+\-]*$/gm, '```');

    return out;
}

// ── HTML → Markdown conversion ──
function walkNode(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent;
    if (node.nodeType !== Node.ELEMENT_NODE) return '';

    const tag = node.tagName.toLowerCase();
    const children = () => [...node.childNodes].map(walkNode).join('');

    switch (tag) {
        case 'h1':
            return `\n# ${children().trim()}\n\n`;
        case 'h2':
            return `\n## ${children().trim()}\n\n`;
        case 'h3':
            return `\n### ${children().trim()}\n\n`;
        case 'h4':
            return `\n#### ${children().trim()}\n\n`;
        case 'h5':
            return `\n##### ${children().trim()}\n\n`;
        case 'h6':
            return `\n###### ${children().trim()}\n\n`;
        case 'p':
            return `\n${children()}\n`;
        case 'br':
            return '\n';
        case 'strong':
        case 'b': {
            const ib = children().trim();
            return ib ? `**${ib}**` : '';
        }
        case 'em':
        case 'i': {
            const ii = children().trim();
            return ii ? `*${ii}*` : '';
        }
        case 'del':
        case 's': {
            const id = children().trim();
            return id ? `~~${id}~~` : '';
        }
        case 'code':
            if (node.closest('pre')) return children();
            return `\`${children()}\``;
        case 'pre': {
            const codeEl = node.querySelector('code');
            const lang = codeEl?.className?.match(/language-(\S+)/)?.[1] ?? '';
            const text = (
                codeEl ? codeEl.textContent : node.textContent
            ).trim();
            return `\n\`\`\`${lang}\n${text}\n\`\`\`\n`;
        }
        case 'a': {
            const href = node.getAttribute('href') ?? '';
            const text = children().trim();
            if (!text) return href;
            if (!href || href === text) return text;
            return `[${text}](${href})`;
        }
        case 'img': {
            const src = node.getAttribute('src') ?? '';
            const alt = node.getAttribute('alt') ?? '';
            return `![${alt}](${src})`;
        }
        case 'ul':
            return (
                '\n' +
                [...node.children]
                    .filter((c) => c.tagName === 'LI')
                    .map((li) => `- ${walkNode(li).trim()}`)
                    .join('\n') +
                '\n'
            );
        case 'ol':
            return (
                '\n' +
                [...node.children]
                    .filter((c) => c.tagName === 'LI')
                    .map((li, i) => `${i + 1}. ${walkNode(li).trim()}`)
                    .join('\n') +
                '\n'
            );
        case 'li':
            return children();
        case 'blockquote': {
            const bq = children().trim();
            return (
                '\n' +
                bq
                    .split('\n')
                    .map((l) => `> ${l}`)
                    .join('\n') +
                '\n'
            );
        }
        case 'hr':
            return '\n---\n';
        case 'table':
            return tableNodeToMarkdown(node);
        case 'thead':
        case 'tbody':
        case 'tfoot':
            return children();
        case 'tr':
        case 'th':
        case 'td':
            return children();
        case 'script':
        case 'style':
        case 'head':
        case 'meta':
        case 'link':
            return '';
        default:
            return children();
    }
}

function tableNodeToMarkdown(tableNode) {
    const rows = [...tableNode.querySelectorAll('tr')];
    if (!rows.length) return '';
    const allCells = rows.map((row) =>
        [...row.querySelectorAll('th, td')].map((c) =>
            c.textContent.trim().replace(/\|/g, '\\|')
        )
    );
    const colCount = Math.max(...allCells.map((r) => r.length));
    const padded = allCells.map((r) => {
        const copy = [...r];
        while (copy.length < colCount) copy.push('');
        return copy;
    });
    const header = '| ' + padded[0].join(' | ') + ' |';
    const sep = '| ' + padded[0].map(() => '---').join(' | ') + ' |';
    const body = padded
        .slice(1)
        .map((r) => '| ' + r.join(' | ') + ' |')
        .join('\n');
    return '\n' + header + '\n' + sep + (body ? '\n' + body : '') + '\n';
}

export function htmlToMarkdown(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return walkNode(div)
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

export function isTsvData(text) {
    const lines = text.split('\n').filter((l) => l.trim());
    return lines.length >= 1 && lines[0].includes('\t');
}

export function tsvToMarkdown(tsv) {
    const rows = tsv
        .split('\n')
        .filter((l) => l.trim())
        .map((r) =>
            r
                .replace(/\r$/, '')
                .split('\t')
                .map((c) => c.trim().replace(/\|/g, '\\|'))
        );
    if (!rows.length) return tsv;
    const colCount = Math.max(...rows.map((r) => r.length));
    const padded = rows.map((r) => {
        const copy = [...r];
        while (copy.length < colCount) copy.push('');
        return copy;
    });
    const header = '| ' + padded[0].join(' | ') + ' |';
    const sep = '| ' + padded[0].map(() => '---').join(' | ') + ' |';
    const body = padded
        .slice(1)
        .map((r) => '| ' + r.join(' | ') + ' |')
        .join('\n');
    return header + '\n' + sep + (body ? '\n' + body : '');
}

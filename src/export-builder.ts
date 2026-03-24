// ── Inline-styled HTML builder (for Teams / email paste) ──

export function buildInlineStyledHTML(markdownBodyEl, platform) {
    const clone = markdownBodyEl.cloneNode(true);

    const isTeams = platform === 'teams';
    const fontStack = isTeams
        ? "'Segoe UI','Helvetica Neue',Arial,sans-serif"
        : "Arial,'Helvetica Neue',Helvetica,sans-serif";

    const p = {
        text: '#1f2328',
        secondary: '#57606a',
        accent: '#0969da',
        border: '#d0d7de',
        codeBg: '#f6f8fa',
        codeText: '#cf222e',
        thBg: '#f6f8fa',
        quoteBg: '#f6f8fa',
        quoteBorder: '#d0d7de',
        quoteText: '#57606a',
    };

    function styleEl(el) {
        const tag = el.tagName.toLowerCase();
        const f = `font-family:${fontStack};`;

        switch (tag) {
            case 'h1':
                el.setAttribute(
                    'style',
                    `${f}font-size:24px;font-weight:700;color:${p.text};margin:0 0 16px;padding-bottom:8px;border-bottom:2px solid ${p.border};line-height:1.3;`
                );
                break;
            case 'h2':
                el.setAttribute(
                    'style',
                    `${f}font-size:20px;font-weight:700;color:${p.text};margin:24px 0 12px;padding-bottom:6px;border-bottom:1px solid ${p.border};line-height:1.3;`
                );
                break;
            case 'h3':
                el.setAttribute(
                    'style',
                    `${f}font-size:17px;font-weight:700;color:${p.text};margin:20px 0 8px;line-height:1.3;`
                );
                break;
            case 'h4':
            case 'h5':
            case 'h6':
                el.setAttribute(
                    'style',
                    `${f}font-size:15px;font-weight:700;color:${p.text};margin:16px 0 8px;line-height:1.3;`
                );
                break;
            case 'p':
                el.setAttribute(
                    'style',
                    `${f}font-size:15px;line-height:1.75;color:${p.text};margin:0 0 14px;`
                );
                break;
            case 'ul':
            case 'ol':
                el.setAttribute(
                    'style',
                    `${f}font-size:15px;line-height:1.75;color:${p.text};margin:0 0 14px;padding-left:24px;`
                );
                break;
            case 'li':
                el.setAttribute(
                    'style',
                    `${f}font-size:15px;line-height:1.75;color:${p.text};margin:0 0 4px;`
                );
                break;
            case 'code':
                if (el.closest('pre')) {
                    el.setAttribute(
                        'style',
                        `font-family:'Courier New',Consolas,monospace;background:none;color:inherit;padding:0;font-size:13px;line-height:1.5;`
                    );
                } else {
                    el.setAttribute(
                        'style',
                        `font-family:'Courier New',Consolas,monospace;background:${p.codeBg};color:${p.codeText};padding:2px 6px;border-radius:3px;font-size:87%;`
                    );
                }
                break;
            case 'pre':
                el.setAttribute(
                    'style',
                    `background:${p.codeBg};padding:14px 18px;border-radius:${isTeams ? '6px' : '4px'};margin:0 0 16px;border:1px solid ${p.border};font-family:'Courier New',Consolas,monospace;font-size:13px;line-height:1.5;white-space:pre;overflow:auto;`
                );
                break;
            case 'table':
                el.setAttribute(
                    'style',
                    `border-collapse:collapse;width:100%;margin:0 0 16px;font-size:14px;${f}`
                );
                el.setAttribute('cellpadding', '0');
                el.setAttribute('cellspacing', '0');
                break;
            case 'th':
                el.setAttribute(
                    'style',
                    `border:1px solid ${p.border};padding:8px 14px;text-align:left;background:${p.thBg};font-weight:600;font-size:13px;color:${p.secondary};${f}`
                );
                break;
            case 'td':
                el.setAttribute(
                    'style',
                    `border:1px solid ${p.border};padding:8px 14px;text-align:left;${f}color:${p.text};`
                );
                break;
            case 'blockquote':
                el.setAttribute(
                    'style',
                    `${f}margin:0 0 16px;padding:10px 14px;border-left:4px solid ${p.quoteBorder};background:${p.quoteBg};font-style:italic;color:${p.quoteText};font-size:15px;line-height:1.75;`
                );
                break;
            case 'strong':
                el.setAttribute('style', 'font-weight:700;');
                break;
            case 'em':
                el.setAttribute('style', 'font-style:italic;');
                break;
            case 'del':
                el.setAttribute('style', 'text-decoration:line-through;');
                break;
            case 'a':
                el.setAttribute(
                    'style',
                    `color:${p.accent};text-decoration:none;`
                );
                break;
            case 'img':
                el.setAttribute('style', 'max-width:100%;height:auto;');
                break;
            case 'hr':
                el.setAttribute(
                    'style',
                    `border:none;border-top:1px solid ${p.border};margin:24px 0;`
                );
                break;
        }

        for (const child of el.children) styleEl(child);
    }

    for (const child of clone.children) styleEl(child);

    const wrap = document.createElement('div');
    wrap.setAttribute(
        'style',
        `font-family:${fontStack};font-size:15px;line-height:1.75;color:${p.text};max-width:720px;`
    );
    wrap.innerHTML = clone.innerHTML;
    return wrap.outerHTML;
}

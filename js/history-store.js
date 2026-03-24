// ── Local history — storage helpers ──
import { t, currentLang } from './i18n.js';

const HISTORY_KEY = 'prisma-md-history';
const HISTORY_MAX = 25;

export function getHistory() {
    try {
        return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    } catch {
        return [];
    }
}

export function saveSnapshot(content) {
    if (!content.trim()) return;
    const history = getHistory();
    if (history.length > 0 && history[0].content === content) return;
    const now = Date.now();
    history.unshift({
        id: now,
        ts: now,
        preview: content.replace(/\s+/g, ' ').slice(0, 80).trim(),
        content,
    });
    if (history.length > HISTORY_MAX) history.length = HISTORY_MAX;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}
export function formatHistoryDate(ts) {
    const d = new Date(ts);
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return t('history.justNow');
    if (mins < 60) return t('history.minsAgo', mins);
    const hours = Math.floor(mins / 60);
    if (hours < 24) return t('history.hoursAgo', hours);
    return d.toLocaleDateString(
        currentLang.startsWith('pt') ? currentLang : 'en',
        {
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        },
    );
}

export function clearHistory() {
    localStorage.removeItem(HISTORY_KEY);
}

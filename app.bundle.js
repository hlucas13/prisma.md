(() => {
'use strict';


// ════════════════════════════════════════
// js/i18n.js
// ════════════════════════════════════════

// ── i18n — translation data and lookup ──

const LOCALES = {
    en: {
        'settings.label': 'Settings',
        'settings.syncName': 'Sync scroll',
        'settings.syncDesc': 'Syncs scroll between editor and preview',
        'settings.themeName': 'Dark mode',
        'settings.themeDesc': 'Toggle between light and dark mode',
        'settings.glassName': 'Frosted glass',
        'settings.glassDesc': 'Frosted glass effect across the UI',
        'settings.langName': 'Language',
        'settings.langDesc': 'Interface language',
        'dock.export': 'Export',
        'dock.themes': 'Themes',
        'dock.history': 'History',
        'dock.table': 'Table',
        'dock.clear': 'Clear',
        'dock.settings': 'Settings',
        'dock.more': 'More',
        'drop.title': 'Drop here',
        'drop.descMd': 'to load the file',
        'drop.descImage': 'to insert as Base64',
        'lint.title': 'Warnings',
        'lint.close': 'Close warnings',
        'lint.closeAria': 'Close warnings panel',
        'export.label': 'Copy as\u2026',
        'export.universalDesc':
            'Rich HTML \u00b7 Word, Notion and other apps',
        'export.teamsDesc':
            'Inline HTML with Segoe UI styles \u00b7 code preserved',
        'export.emailDesc':
            'Conservative inline CSS \u00b7 tables and bold guaranteed',
        'export.slackDesc': 'mrkdwn text \u00b7 Slack native format',
        'export.printName': 'Print / PDF',
        'export.printDesc': 'Native preview \u00b7 uses active theme',
        'history.title': 'Local History',
        'history.clearBtn': 'Clear all',
        'history.hint':
            'Auto-saved every 30\u202fs and on editor blur. Click a version to restore.',
        'table.title': 'Insert Table',
        'table.rows': 'Rows',
        'table.cols': 'Columns',
        'table.hint': 'First row is the header \u00b7 Tab to navigate',
        'table.cancel': 'Cancel',
        'table.insert': 'Insert Table',
        'themes.label': 'Preview theme',
        'themes.githubDesc':
            'Classic \u00b7 blue/green \u00b7 light & dark',
        'themes.modern': 'Modern',
        'themes.modernDesc': 'Indigo \u00b7 Helvetica \u00b7 light & dark',
        'themes.academic': 'Academic',
        'themes.academicDesc':
            'Serif Georgia \u00b7 sepia \u00b7 light & dark',
        'themes.minimal': 'Minimal',
        'themes.minimalDesc':
            'Neutral \u00b7 distraction-free \u00b7 light & dark',
        'stats.word': '1 word',
        'stats.words': (n) => `${n.toLocaleString('en')} words`,
        'stats.chars': (n) => `${n.toLocaleString('en')} chars`,
        'stats.readTime': (m) => `~${m} min`,
        'lint.heading': (prev, cur) =>
            `Heading hierarchy: H${prev} followed by H${cur} \u2014 intermediate level missing`,
        'lint.unclosedLink': 'Unclosed link \u2014 missing closing `)`',
        'lint.imageAlt': 'Image without alt text',
        'lint.multipleH1': (n) =>
            `${n} H1 headings found \u2014 only one recommended per document`,
        'grammar.repeated': (word) => `Repeated word: "${word}"`,
        'grammar.doubleSpace': 'Double space in the middle of the text',
        'issues.one': '1 warning',
        'issues.many': (n) => `${n} warnings`,
        'issues.overflow': (n) =>
            `\u2026and ${n} more ${n === 1 ? 'warning' : 'warnings'}`,
        'toast.copied': 'Copied! Paste with Ctrl+V',
        'toast.copiedPlain': 'Copied as plain text',
        'toast.copyError': 'Copy failed \u2014 try manually',
        'toast.copiedTeams': 'Copied for Teams! Paste with Ctrl+V',
        'toast.copiedEmail': 'Copied for email! Paste with Ctrl+V',
        'toast.copiedSlack': 'Copied for Slack! Paste with Ctrl+V',
        'toast.fileLoaded': (name) => `"${name}" loaded`,
        'toast.imageInserted': (name) => `Image "${name}" inserted`,
        'toast.fileUnsupported': 'Unsupported file \u2014 use .md or image',
        'toast.tablePasted': 'Table pasted!',
        'toast.htmlConverted': 'HTML converted to Markdown!',
        'toast.tableInserted': 'Table inserted!',
        'toast.versionRestored': 'Version restored!',
        'history.justNow': 'Just now',
        'history.minsAgo': (m) => `${m} min ago`,
        'history.hoursAgo': (h) => `${h}h ago`,
        'history.empty':
            'No history saved yet. Editor auto-saves every 30\u202fs.',
        'table.colPlaceholder': (c) => `Column ${c}`,
        'table.cellPlaceholder': (r, c) => `row ${r}, col ${c}`,
        'slack.image': (alt) => `[Image: ${alt}]`,
        'slack.imagePlain': '[Image]',
        'editor.placeholder': 'Write your Markdown here\u2026',
        'pane.markdown': 'Markdown',
        'pane.preview': 'Preview',
        'help.btnName': 'Help & Wiki',
        'help.btnDesc': 'Features, Markdown guide & shortcuts',
        'help.title': 'Help & Wiki',
        'help.s1': 'Editor & Preview',
        'help.s1d1':
            'Write Markdown in the left pane \u2014 the preview updates in real time.',
        'help.s1d2':
            'Drag & drop a <strong>.md</strong> file onto the editor to load it.',
        'help.s1d3':
            'Drag & drop an <strong>image</strong> to embed it inline as Base64.',
        'help.s1d4':
            'The insights bar shows word count, reading time and lint warnings.',
        'help.s1d5':
            'Paste <strong>HTML</strong> directly into the editor — it is automatically converted to Markdown.',
        'help.s2': 'Export',
        'help.s2intro':
            'Click <strong>Export</strong> in the dock to copy in one of these formats:',
        'help.s3': 'Local History',
        'help.s3d1':
            'Auto-saves every 30\u202fs and on blur. Click any version in <strong>History</strong> to restore it.',
        'help.s4': 'Table Generator',
        'help.s4d1':
            'Click <strong>Table</strong> to open the generator. Set rows & columns, fill in the cells and click Insert.',
        'help.s5': 'Preview Themes',
        'help.s5d1':
            'Click <strong>Themes</strong> to switch: <em>GitHub</em>, <em>Modern</em>, <em>Academic</em> or <em>Minimal</em>.',
        'help.s6': 'Settings',
        'help.s6d1':
            'Open <strong>Settings</strong> to toggle sync scroll, dark mode, frosted glass and to switch the interface language.',
        'help.s7': 'Markdown Quick Reference',
        'help.s8': 'Keyboard Shortcuts',
    },
    'pt-BR': {
        'settings.label': 'Ajustes',
        'settings.syncName': 'Scroll sincronizado',
        'settings.syncDesc': 'Sincroniza scroll entre editor e preview',
        'settings.themeName': 'Tema escuro',
        'settings.themeDesc': 'Alterna entre modo claro e escuro',
        'settings.glassName': 'Vidro fosco',
        'settings.glassDesc': 'Efeito frosted glass em toda a UI',
        'settings.langName': 'Idioma',
        'settings.langDesc': 'Idioma da interface',
        'dock.export': 'Exportar',
        'dock.themes': 'Temas',
        'dock.history': 'Hist\u00f3rico',
        'dock.table': 'Tabela',
        'dock.clear': 'Limpar',
        'dock.settings': 'Ajustes',
        'dock.more': 'Mais',
        'drop.title': 'Solte aqui',
        'drop.descMd': 'para carregar o arquivo',
        'drop.descImage': 'para inserir como Base64',
        'lint.title': 'Avisos',
        'lint.close': 'Fechar avisos',
        'lint.closeAria': 'Fechar painel de avisos',
        'export.label': 'Copiar como\u2026',
        'export.universalDesc':
            'HTML rico \u00b7 Word, Notion e outras apps',
        'export.teamsDesc':
            'HTML inline com estilos Segoe UI \u00b7 c\u00f3digo preservado',
        'export.emailDesc':
            'CSS inline conservador \u00b7 tabelas e negritos garantidos',
        'export.slackDesc': 'Texto mrkdwn \u00b7 formato nativo do Slack',
        'export.printName': 'Imprimir / PDF',
        'export.printDesc': 'Preview nativo \u00b7 usa o tema ativo',
        'history.title': 'Hist\u00f3rico Local',
        'history.clearBtn': 'Apagar tudo',
        'history.hint':
            'Salvo automaticamente a cada 30\u202fs e ao sair do editor. Clique em uma vers\u00e3o para restaurar.',
        'table.title': 'Inserir Tabela',
        'table.rows': 'Linhas',
        'table.cols': 'Colunas',
        'table.hint':
            'A primeira linha \u00e9 o cabe\u00e7alho \u00b7 Tab para navegar',
        'table.cancel': 'Cancelar',
        'table.insert': 'Inserir Tabela',
        'themes.label': 'Tema do preview',
        'themes.githubDesc':
            'Cl\u00e1ssico \u00b7 azul/verde \u00b7 light & dark',
        'themes.modern': 'Moderno',
        'themes.modernDesc':
            '\u00cdndigo \u00b7 Helvetica \u00b7 light & dark',
        'themes.academic': 'Acad\u00eamico',
        'themes.academicDesc':
            'Serifado Georgia \u00b7 s\u00e9pia \u00b7 light & dark',
        'themes.minimal': 'Minimalista',
        'themes.minimalDesc':
            'Neutro \u00b7 sem distra\u00e7\u00e3o \u00b7 light & dark',
        'stats.word': '1 palavra',
        'stats.words': (n) => `${n.toLocaleString('pt-BR')} palavras`,
        'stats.chars': (n) => `${n.toLocaleString('pt-BR')} chars`,
        'stats.readTime': (m) => `~${m} min`,
        'lint.heading': (prev, cur) =>
            `Hierarquia de t\u00edtulos: H${prev} seguido de H${cur} \u2014 n\u00edvel intermedi\u00e1rio ausente`,
        'lint.unclosedLink':
            'Link n\u00e3o fechado \u2014 falta o `)` de encerramento',
        'lint.imageAlt': 'Imagem sem texto alternativo (alt text)',
        'lint.multipleH1': (n) =>
            `${n} t\u00edtulos H1 encontrados \u2014 recomenda-se apenas um por documento`,
        'grammar.repeated': (word) => `Palavra repetida: "${word}"`,
        'grammar.doubleSpace': 'Espa\u00e7o duplo no meio do texto',
        'issues.one': '1 aviso',
        'issues.many': (n) => `${n} avisos`,
        'issues.overflow': (n) =>
            `\u2026e mais ${n} ${n === 1 ? 'aviso' : 'avisos'}`,
        'toast.copied': 'Copiado! Cole com Ctrl+V',
        'toast.copiedPlain': 'Copiado como texto simples',
        'toast.copyError': 'Erro ao copiar \u2014 tente manualmente',
        'toast.copiedTeams': 'Copiado para Teams! Cole com Ctrl+V',
        'toast.copiedEmail': 'Copiado para e-mail! Cole com Ctrl+V',
        'toast.copiedSlack': 'Copiado para Slack! Cole com Ctrl+V',
        'toast.fileLoaded': (name) => `"${name}" carregado`,
        'toast.imageInserted': (name) => `Imagem "${name}" inserida`,
        'toast.fileUnsupported':
            'Arquivo n\u00e3o suportado \u2014 use .md ou imagem',
        'toast.tablePasted': 'Tabela colada!',
        'toast.htmlConverted': 'HTML convertido para Markdown!',
        'toast.tableInserted': 'Tabela inserida!',
        'toast.versionRestored': 'Vers\u00e3o restaurada!',
        'history.justNow': 'Agora mesmo',
        'history.minsAgo': (m) => `${m} min atr\u00e1s`,
        'history.hoursAgo': (h) => `${h}h atr\u00e1s`,
        'history.empty':
            'Sem hist\u00f3rico salvo ainda. O editor salva automaticamente a cada 30\u202fs.',
        'table.colPlaceholder': (c) => `Coluna ${c}`,
        'table.cellPlaceholder': (r, c) => `linha ${r}, col ${c}`,
        'slack.image': (alt) => `[Imagem: ${alt}]`,
        'slack.imagePlain': '[Imagem]',
        'editor.placeholder': 'Escreva seu Markdown aqui\u2026',
        'pane.markdown': 'Markdown',
        'pane.preview': 'Preview',
        'help.btnName': 'Ajuda & Wiki',
        'help.btnDesc': 'Fun\u00e7\u00f5es, guia Markdown e atalhos',
        'help.title': 'Ajuda & Wiki',
        'help.s1': 'Editor & Preview',
        'help.s1d1':
            'Escreva Markdown no painel esquerdo \u2014 o preview atualiza em tempo real.',
        'help.s1d2':
            'Arraste e solte um arquivo <strong>.md</strong> no editor para careg\u00e1-lo.',
        'help.s1d3':
            'Arraste e solte uma <strong>imagem</strong> para inseri-la inline como Base64.',
        'help.s1d4':
            'A barra de estat\u00edsticas mostra contagem de palavras, tempo de leitura e alertas.',
        'help.s1d5':
            'Cole <strong>HTML</strong> diretamente no editor \u2014 convertido automaticamente para Markdown.',
        'help.s2': 'Exportar',
        'help.s2intro':
            'Clique em <strong>Exportar</strong> no dock para copiar em um desses formatos:',
        'help.s3': 'Hist\u00f3rico Local',
        'help.s3d1':
            'Salva automaticamente a cada 30\u202fs e ao sair do campo. Clique em uma vers\u00e3o no <strong>Hist\u00f3rico</strong> para restaur\u00e1-la.',
        'help.s4': 'Gerador de Tabela',
        'help.s4d1':
            'Clique em <strong>Tabela</strong> para abrir o gerador. Defina linhas e colunas, preencha as c\u00e9lulas e clique em Inserir.',
        'help.s5': 'Temas do Preview',
        'help.s5d1':
            'Clique em <strong>Temas</strong> para alternar: <em>GitHub</em>, <em>Moderno</em>, <em>Acad\u00eamico</em> ou <em>Minimalista</em>.',
        'help.s6': 'Ajustes',
        'help.s6d1':
            'Abra <strong>Ajustes</strong> para ativar scroll sincronizado, modo escuro, vidro fosco e trocar idioma.',
        'help.s7': 'Refer\u00eancia R\u00e1pida Markdown',
        'help.s8': 'Atalhos de Teclado',
    },
    es: {
        'settings.label': 'Ajustes',
        'settings.syncName': 'Scroll sincronizado',
        'settings.syncDesc':
            'Sincroniza el scroll entre editor y vista previa',
        'settings.themeName': 'Modo oscuro',
        'settings.themeDesc': 'Alterna entre modo claro y oscuro',
        'settings.glassName': 'Cristal esmerilado',
        'settings.glassDesc': 'Efecto de cristal esmerilado en toda la UI',
        'settings.langName': 'Idioma',
        'settings.langDesc': 'Idioma de la interfaz',
        'dock.export': 'Exportar',
        'dock.themes': 'Temas',
        'dock.history': 'Historial',
        'dock.table': 'Tabla',
        'dock.clear': 'Limpiar',
        'dock.settings': 'Ajustes',
        'dock.more': 'M\u00e1s',
        'drop.title': 'Suelta aqu\u00ed',
        'drop.descMd': 'para cargar el archivo',
        'drop.descImage': 'para insertar como Base64',
        'lint.title': 'Advertencias',
        'lint.close': 'Cerrar advertencias',
        'lint.closeAria': 'Cerrar panel de advertencias',
        'export.label': 'Copiar como\u2026',
        'export.universalDesc':
            'HTML enriquecido \u00b7 Word, Notion y otras apps',
        'export.teamsDesc':
            'HTML inline con estilos Segoe UI \u00b7 c\u00f3digo preservado',
        'export.emailDesc':
            'CSS inline conservador \u00b7 tablas y negritas garantizadas',
        'export.slackDesc': 'Texto mrkdwn \u00b7 formato nativo de Slack',
        'export.printName': 'Imprimir / PDF',
        'export.printDesc': 'Vista previa nativa \u00b7 usa el tema activo',
        'history.title': 'Historial Local',
        'history.clearBtn': 'Borrar todo',
        'history.hint':
            'Guardado autom\u00e1ticamente cada 30\u202fs y al salir del editor. Haz clic en una versi\u00f3n para restaurar.',
        'table.title': 'Insertar Tabla',
        'table.rows': 'Filas',
        'table.cols': 'Columnas',
        'table.hint':
            'La primera fila es el encabezado \u00b7 Tab para navegar',
        'table.cancel': 'Cancelar',
        'table.insert': 'Insertar Tabla',
        'themes.label': 'Tema del preview',
        'themes.githubDesc':
            'Cl\u00e1sico \u00b7 azul/verde \u00b7 claro & oscuro',
        'themes.modern': 'Moderno',
        'themes.modernDesc':
            '\u00cdndigo \u00b7 Helvetica \u00b7 claro & oscuro',
        'themes.academic': 'Acad\u00e9mico',
        'themes.academicDesc':
            'Georgia serif \u00b7 sepia \u00b7 claro & oscuro',
        'themes.minimal': 'Minimalista',
        'themes.minimalDesc':
            'Neutro \u00b7 sin distracciones \u00b7 claro & oscuro',
        'stats.word': '1 palabra',
        'stats.words': (n) => `${n.toLocaleString('es')} palabras`,
        'stats.chars': (n) => `${n.toLocaleString('es')} chars`,
        'stats.readTime': (m) => `~${m} min`,
        'lint.heading': (prev, cur) =>
            `Jerarqu\u00eda de encabezados: H${prev} seguido de H${cur} \u2014 nivel intermedio faltante`,
        'lint.unclosedLink':
            'Enlace no cerrado \u2014 falta el \`)\ de cierre',
        'lint.imageAlt': 'Imagen sin texto alternativo (alt text)',
        'lint.multipleH1': (n) =>
            `${n} encabezados H1 encontrados \u2014 se recomienda solo uno por documento`,
        'grammar.repeated': (word) => `Palabra repetida: "${word}"`,
        'grammar.doubleSpace': 'Espacio doble en el medio del texto',
        'issues.one': '1 advertencia',
        'issues.many': (n) => `${n} advertencias`,
        'issues.overflow': (n) =>
            `\u2026y ${n} m\u00e1s ${n === 1 ? 'advertencia' : 'advertencias'}`,
        'toast.copied': '\u00a1Copiado! Pega con Ctrl+V',
        'toast.copiedPlain': 'Copiado como texto simple',
        'toast.copyError': 'Error al copiar \u2014 intenta manualmente',
        'toast.copiedTeams': '\u00a1Copiado para Teams! Pega con Ctrl+V',
        'toast.copiedEmail': '\u00a1Copiado para email! Pega con Ctrl+V',
        'toast.copiedSlack': '\u00a1Copiado para Slack! Pega con Ctrl+V',
        'toast.fileLoaded': (name) => `"${name}" cargado`,
        'toast.imageInserted': (name) => `Imagen "${name}" insertada`,
        'toast.fileUnsupported':
            'Archivo no soportado \u2014 usa .md o imagen',
        'toast.tablePasted': '\u00a1Tabla pegada!',
        'toast.htmlConverted': '\u00a1HTML convertido a Markdown!',
        'toast.tableInserted': '\u00a1Tabla insertada!',
        'toast.versionRestored': '\u00a1Versi\u00f3n restaurada!',
        'history.justNow': 'Ahora mismo',
        'history.minsAgo': (m) => `hace ${m} min`,
        'history.hoursAgo': (h) => `hace ${h}h`,
        'history.empty':
            'Sin historial guardado a\u00fan. El editor guarda autom\u00e1ticamente cada 30\u202fs.',
        'table.colPlaceholder': (c) => `Columna ${c}`,
        'table.cellPlaceholder': (r, c) => `fila ${r}, col ${c}`,
        'slack.image': (alt) => `[Imagen: ${alt}]`,
        'slack.imagePlain': '[Imagen]',
        'editor.placeholder': 'Escribe tu Markdown aqu\u00ed\u2026',
        'pane.markdown': 'Markdown',
        'pane.preview': 'Vista previa',
        'help.btnName': 'Ayuda & Wiki',
        'help.btnDesc': 'Funciones, gu\u00eda Markdown y atajos',
        'help.title': 'Ayuda & Wiki',
        'help.s1': 'Editor & Vista Previa',
        'help.s1d1':
            'Escribe Markdown en el panel izquierdo \u2014 la vista previa se actualiza en tiempo real.',
        'help.s1d2':
            'Arrastra y suelta un archivo <strong>.md</strong> en el editor para cargarlo.',
        'help.s1d3':
            'Arrastra y suelta una <strong>imagen</strong> para insertarla inline como Base64.',
        'help.s1d4':
            'La barra de estad\u00edsticas muestra recuento de palabras, tiempo de lectura y advertencias.',
        'help.s1d5':
            'Pega <strong>HTML</strong> directamente en el editor \u2014 se convierte autom\u00e1ticamente a Markdown.',
        'help.s2': 'Exportar',
        'help.s2intro':
            'Haz clic en <strong>Exportar</strong> en el dock para copiar en uno de estos formatos:',
        'help.s3': 'Historial Local',
        'help.s3d1':
            'Se guarda autom\u00e1ticamente cada 30\u202fs y al perder el foco. Haz clic en una versi\u00f3n en <strong>Historial</strong> para restaurarla.',
        'help.s4': 'Generador de Tablas',
        'help.s4d1':
            'Haz clic en <strong>Tabla</strong> para abrir el generador. Define filas y columnas, rellena las celdas y haz clic en Insertar.',
        'help.s5': 'Temas del Preview',
        'help.s5d1':
            'Haz clic en <strong>Temas</strong> para cambiar: <em>GitHub</em>, <em>Moderno</em>, <em>Acad\u00e9mico</em> o <em>Minimalista</em>.',
        'help.s6': 'Ajustes',
        'help.s6d1':
            'Abre <strong>Ajustes</strong> para activar scroll sincronizado, modo oscuro, cristal esmerilado y cambiar el idioma.',
        'help.s7': 'Referencia R\u00e1pida de Markdown',
        'help.s8': 'Atajos de Teclado',
    },
    fr: {
        'settings.label': 'Param\u00e8tres',
        'settings.syncName': 'D\u00e9filement synchronis\u00e9',
        'settings.syncDesc':
            'Synchronise le d\u00e9filement entre l\u2019\u00e9diteur et l\u2019aper\u00e7u',
        'settings.themeName': 'Mode sombre',
        'settings.themeDesc': 'Basculer entre mode clair et sombre',
        'settings.glassName': 'Verre d\u00e9poli',
        'settings.glassDesc':
            'Effet verre d\u00e9poli sur toute l\u2019interface',
        'settings.langName': 'Langue',
        'settings.langDesc': 'Langue de l\u2019interface',
        'dock.export': 'Exporter',
        'dock.themes': 'Th\u00e8mes',
        'dock.history': 'Historique',
        'dock.table': 'Tableau',
        'dock.clear': 'Effacer',
        'dock.settings': 'Param\u00e8tres',
        'dock.more': 'Plus',
        'drop.title': 'D\u00e9posez ici',
        'drop.descMd': 'pour charger le fichier',
        'drop.descImage': 'pour ins\u00e9rer en Base64',
        'lint.title': 'Avertissements',
        'lint.close': 'Fermer les avertissements',
        'lint.closeAria': 'Fermer le panneau d\u2019avertissements',
        'export.label': 'Copier en\u2026',
        'export.universalDesc':
            'HTML enrichi \u00b7 Word, Notion et autres apps',
        'export.teamsDesc':
            'HTML inline avec styles Segoe UI \u00b7 code pr\u00e9serv\u00e9',
        'export.emailDesc':
            'CSS inline conservateur \u00b7 tableaux et gras garantis',
        'export.slackDesc': 'Texte mrkdwn \u00b7 format natif Slack',
        'export.printName': 'Imprimer / PDF',
        'export.printDesc':
            'Aper\u00e7u natif \u00b7 utilise le th\u00e8me actif',
        'history.title': 'Historique local',
        'history.clearBtn': 'Tout effacer',
        'history.hint':
            'Sauvegard\u00e9 automatiquement toutes les 30\u202fs et \u00e0 la sortie de l\u2019\u00e9diteur. Cliquez sur une version pour la restaurer.',
        'table.title': 'Ins\u00e9rer un tableau',
        'table.rows': 'Lignes',
        'table.cols': 'Colonnes',
        'table.hint':
            'La premi\u00e8re ligne est l\u2019en-t\u00eate \u00b7 Tab pour naviguer',
        'table.cancel': 'Annuler',
        'table.insert': 'Ins\u00e9rer le tableau',
        'themes.label': 'Th\u00e8me de l\u2019aper\u00e7u',
        'themes.githubDesc':
            'Classique \u00b7 bleu/vert \u00b7 clair & sombre',
        'themes.modern': 'Moderne',
        'themes.modernDesc':
            'Indigo \u00b7 Helvetica \u00b7 clair & sombre',
        'themes.academic': 'Acad\u00e9mique',
        'themes.academicDesc':
            'Georgia serif \u00b7 s\u00e9pia \u00b7 clair & sombre',
        'themes.minimal': 'Minimaliste',
        'themes.minimalDesc':
            'Neutre \u00b7 sans distraction \u00b7 clair & sombre',
        'stats.word': '1 mot',
        'stats.words': (n) => `${n.toLocaleString('fr')}\u00a0mots`,
        'stats.chars': (n) => `${n.toLocaleString('fr')}\u00a0chars`,
        'stats.readTime': (m) => `~${m}\u00a0min`,
        'lint.heading': (prev, cur) =>
            `Hi\u00e9rarchie des titres\u00a0: H${prev} suivi de H${cur} \u2014 niveau interm\u00e9diaire manquant`,
        'lint.unclosedLink':
            'Lien non ferm\u00e9 \u2014 la parenth\u00e8se `)` de fermeture est manquante',
        'lint.imageAlt': 'Image sans texte alternatif (alt text)',
        'lint.multipleH1': (n) =>
            `${n} titres H1 trouv\u00e9s \u2014 un seul est recommand\u00e9 par document`,
        'grammar.repeated': (word) =>
            `Mot r\u00e9p\u00e9t\u00e9\u00a0: \u00ab\u00a0${word}\u00a0\u00bb`,
        'grammar.doubleSpace': 'Double espace au milieu du texte',
        'issues.one': '1 avertissement',
        'issues.many': (n) => `${n} avertissements`,
        'issues.overflow': (n) => `\u2026et ${n} de plus`,
        'toast.copied': 'Copi\u00e9\u00a0! Collez avec Ctrl+V',
        'toast.copiedPlain': 'Copi\u00e9 en texte brut',
        'toast.copyError': 'Erreur de copie \u2014 essayez manuellement',
        'toast.copiedTeams':
            'Copi\u00e9 pour Teams\u00a0! Collez avec Ctrl+V',
        'toast.copiedEmail':
            'Copi\u00e9 pour e-mail\u00a0! Collez avec Ctrl+V',
        'toast.copiedSlack':
            'Copi\u00e9 pour Slack\u00a0! Collez avec Ctrl+V',
        'toast.fileLoaded': (name) =>
            `\u00ab\u00a0${name}\u00a0\u00bb charg\u00e9`,
        'toast.imageInserted': (name) =>
            `Image \u00ab\u00a0${name}\u00a0\u00bb ins\u00e9r\u00e9e`,
        'toast.fileUnsupported':
            'Fichier non support\u00e9 \u2014 utilisez .md ou une image',
        'toast.tablePasted': 'Tableau coll\u00e9\u00a0!',
        'toast.htmlConverted': 'HTML converti en Markdown\u00a0!',
        'toast.tableInserted': 'Tableau ins\u00e9r\u00e9\u00a0!',
        'toast.versionRestored': 'Version restaur\u00e9e\u00a0!',
        'history.justNow': '\u00c0 l\u2019instant',
        'history.minsAgo': (m) => `il y a ${m}\u00a0min`,
        'history.hoursAgo': (h) => `il y a ${h}\u00a0h`,
        'history.empty':
            'Aucun historique enregistr\u00e9. L\u2019\u00e9diteur sauvegarde automatiquement toutes les 30\u202fs.',
        'table.colPlaceholder': (c) => `Colonne ${c}`,
        'table.cellPlaceholder': (r, c) => `ligne ${r}, col ${c}`,
        'slack.image': (alt) => `[Image\u00a0: ${alt}]`,
        'slack.imagePlain': '[Image]',
        'editor.placeholder': 'R\u00e9digez votre Markdown ici\u2026',
        'pane.markdown': 'Markdown',
        'pane.preview': 'Aper\u00e7u',
        'help.btnName': 'Aide & Wiki',
        'help.btnDesc':
            'Fonctionnalit\u00e9s, guide Markdown et raccourcis',
        'help.title': 'Aide & Wiki',
        'help.s1': '\u00c9diteur & Aper\u00e7u',
        'help.s1d1':
            'R\u00e9digez du Markdown dans le panneau gauche \u2014 l\u2019aper\u00e7u se met \u00e0 jour en temps r\u00e9el.',
        'help.s1d2':
            'Glissez-d\u00e9posez un fichier <strong>.md</strong> dans l\u2019\u00e9diteur pour le charger.',
        'help.s1d3':
            'Glissez-d\u00e9posez une <strong>image</strong> pour l\u2019ins\u00e9rer en ligne en Base64.',
        'help.s1d4':
            'La barre de statistiques affiche le nombre de mots, le temps de lecture et les avertissements.',
        'help.s1d5':
            'Collez du <strong>HTML</strong> directement dans l\u2019\u00e9diteur \u2014 il est automatiquement converti en Markdown.',
        'help.s2': 'Exporter',
        'help.s2intro':
            'Cliquez sur <strong>Exporter</strong> dans le dock pour copier dans l\u2019un de ces formats\u00a0:',
        'help.s3': 'Historique local',
        'help.s3d1':
            'Sauvegarde automatiquement toutes les 30\u202fs et \u00e0 la perte du focus. Cliquez sur une version dans <strong>Historique</strong> pour la restaurer.',
        'help.s4': 'G\u00e9n\u00e9rateur de tableaux',
        'help.s4d1':
            'Cliquez sur <strong>Tableau</strong> pour ouvrir le g\u00e9n\u00e9rateur. D\u00e9finissez les lignes et colonnes, remplissez les cellules et cliquez sur Ins\u00e9rer.',
        'help.s5': 'Th\u00e8mes de l\u2019aper\u00e7u',
        'help.s5d1':
            'Cliquez sur <strong>Th\u00e8mes</strong> pour choisir\u00a0: <em>GitHub</em>, <em>Moderne</em>, <em>Acad\u00e9mique</em> ou <em>Minimaliste</em>.',
        'help.s6': 'Param\u00e8tres',
        'help.s6d1':
            'Ouvrez les <strong>Param\u00e8tres</strong> pour activer le d\u00e9filement synchronis\u00e9, le mode sombre, le verre d\u00e9poli et changer la langue.',
        'help.s7': 'R\u00e9f\u00e9rence Markdown rapide',
        'help.s8': 'Raccourcis clavier',
    },
    'pt-PT': {
        'settings.label': 'Defini\u00e7\u00f5es',
        'settings.syncName': 'Scroll sincronizado',
        'settings.syncDesc':
            'Sincroniza o scroll entre o editor e a pr\u00e9-visualiza\u00e7\u00e3o',
        'settings.themeName': 'Modo escuro',
        'settings.themeDesc': 'Alterna entre modo claro e escuro',
        'settings.glassName': 'Vidro fosco',
        'settings.glassDesc': 'Efeito frosted glass em toda a interface',
        'settings.langName': 'Idioma',
        'settings.langDesc': 'Idioma da interface',
        'dock.export': 'Exportar',
        'dock.themes': 'Temas',
        'dock.history': 'Hist\u00f3rico',
        'dock.table': 'Tabela',
        'dock.clear': 'Limpar',
        'dock.settings': 'Defini\u00e7\u00f5es',
        'dock.more': 'Mais',
        'drop.title': 'Largue aqui',
        'drop.descMd': 'para carregar o ficheiro',
        'drop.descImage': 'para inserir como Base64',
        'lint.title': 'Avisos',
        'lint.close': 'Fechar avisos',
        'lint.closeAria': 'Fechar painel de avisos',
        'export.label': 'Copiar como\u2026',
        'export.universalDesc':
            'HTML rico \u00b7 Word, Notion e outras aplica\u00e7\u00f5es',
        'export.teamsDesc':
            'HTML inline com estilos Segoe UI \u00b7 c\u00f3digo preservado',
        'export.emailDesc':
            'CSS inline conservador \u00b7 tabelas e negritos garantidos',
        'export.slackDesc': 'Texto mrkdwn \u00b7 formato nativo do Slack',
        'export.printName': 'Imprimir / PDF',
        'export.printDesc':
            'Pr\u00e9-visualiza\u00e7\u00e3o nativa \u00b7 usa o tema ativo',
        'history.title': 'Hist\u00f3rico Local',
        'history.clearBtn': 'Apagar tudo',
        'history.hint':
            'Guardado automaticamente a cada 30\u202fs e ao sair do editor. Clique numa vers\u00e3o para restaurar.',
        'table.title': 'Inserir Tabela',
        'table.rows': 'Linhas',
        'table.cols': 'Colunas',
        'table.hint':
            'A primeira linha \u00e9 o cabe\u00e7alho \u00b7 Tab para navegar',
        'table.cancel': 'Cancelar',
        'table.insert': 'Inserir Tabela',
        'themes.label': 'Tema da pr\u00e9-visualiza\u00e7\u00e3o',
        'themes.githubDesc':
            'Cl\u00e1ssico \u00b7 azul/verde \u00b7 light & dark',
        'themes.modern': 'Moderno',
        'themes.modernDesc':
            '\u00cdndigo \u00b7 Helvetica \u00b7 light & dark',
        'themes.academic': 'Acad\u00e9mico',
        'themes.academicDesc':
            'Georgia serif \u00b7 s\u00e9pia \u00b7 light & dark',
        'themes.minimal': 'Minimalista',
        'themes.minimalDesc':
            'Neutro \u00b7 sem distra\u00e7\u00e3o \u00b7 light & dark',
        'stats.word': '1 palavra',
        'stats.words': (n) => `${n.toLocaleString('pt-PT')} palavras`,
        'stats.chars': (n) => `${n.toLocaleString('pt-PT')} chars`,
        'stats.readTime': (m) => `~${m} min`,
        'lint.heading': (prev, cur) =>
            `Hierarquia de t\u00edtulos: H${prev} seguido de H${cur} \u2014 n\u00edvel intermedi\u00e1rio em falta`,
        'lint.unclosedLink':
            'Liga\u00e7\u00e3o n\u00e3o fechada \u2014 falta o `)` de encerramento',
        'lint.imageAlt': 'Imagem sem texto alternativo (alt text)',
        'lint.multipleH1': (n) =>
            `${n} t\u00edtulos H1 encontrados \u2014 recomenda-se apenas um por documento`,
        'grammar.repeated': (word) =>
            `Palavra repetida: \u201c${word}\u201d`,
        'grammar.doubleSpace': 'Espa\u00e7o duplo no meio do texto',
        'issues.one': '1 aviso',
        'issues.many': (n) => `${n} avisos`,
        'issues.overflow': (n) =>
            `\u2026e mais ${n} ${n === 1 ? 'aviso' : 'avisos'}`,
        'toast.copied': 'Copiado! Cole com Ctrl+V',
        'toast.copiedPlain': 'Copiado como texto simples',
        'toast.copyError': 'Erro ao copiar \u2014 tente manualmente',
        'toast.copiedTeams': 'Copiado para o Teams! Cole com Ctrl+V',
        'toast.copiedEmail': 'Copiado para e-mail! Cole com Ctrl+V',
        'toast.copiedSlack': 'Copiado para o Slack! Cole com Ctrl+V',
        'toast.fileLoaded': (name) => `\u201c${name}\u201d carregado`,
        'toast.imageInserted': (name) =>
            `Imagem \u201c${name}\u201d inserida`,
        'toast.fileUnsupported':
            'Ficheiro n\u00e3o suportado \u2014 utilize .md ou imagem',
        'toast.tablePasted': 'Tabela colada!',
        'toast.htmlConverted': 'HTML convertido para Markdown!',
        'toast.tableInserted': 'Tabela inserida!',
        'toast.versionRestored': 'Vers\u00e3o restaurada!',
        'history.justNow': 'Agora mesmo',
        'history.minsAgo': (m) => `h\u00e1 ${m} min`,
        'history.hoursAgo': (h) => `h\u00e1 ${h}h`,
        'history.empty':
            'Sem hist\u00f3rico guardado ainda. O editor guarda automaticamente a cada 30\u202fs.',
        'table.colPlaceholder': (c) => `Coluna ${c}`,
        'table.cellPlaceholder': (r, c) => `linha ${r}, col ${c}`,
        'slack.image': (alt) => `[Imagem: ${alt}]`,
        'slack.imagePlain': '[Imagem]',
        'editor.placeholder': 'Escreva o seu Markdown aqui\u2026',
        'pane.markdown': 'Markdown',
        'pane.preview': 'Pr\u00e9-visualiza\u00e7\u00e3o',
        'help.btnName': 'Ajuda & Wiki',
        'help.btnDesc': 'Funcionalidades, guia Markdown e atalhos',
        'help.title': 'Ajuda & Wiki',
        'help.s1': 'Editor & Pr\u00e9-visualiza\u00e7\u00e3o',
        'help.s1d1':
            'Escreva Markdown no painel esquerdo \u2014 a pr\u00e9-visualiza\u00e7\u00e3o atualiza em tempo real.',
        'help.s1d2':
            'Arraste e largue um ficheiro <strong>.md</strong> no editor para o carregar.',
        'help.s1d3':
            'Arraste e largue uma <strong>imagem</strong> para a inserir inline como Base64.',
        'help.s1d4':
            'A barra de estat\u00edsticas mostra contagem de palavras, tempo de leitura e avisos.',
        'help.s1d5':
            'Cole <strong>HTML</strong> diretamente no editor \u2014 convertido automaticamente para Markdown.',
        'help.s2': 'Exportar',
        'help.s2intro':
            'Clique em <strong>Exportar</strong> no dock para copiar num destes formatos:',
        'help.s3': 'Hist\u00f3rico Local',
        'help.s3d1':
            'Guarda automaticamente a cada 30\u202fs e ao sair do campo. Clique numa vers\u00e3o no <strong>Hist\u00f3rico</strong> para a restaurar.',
        'help.s4': 'Gerador de Tabela',
        'help.s4d1':
            'Clique em <strong>Tabela</strong> para abrir o gerador. Defina linhas e colunas, preencha as c\u00e9lulas e clique em Inserir.',
        'help.s5': 'Temas da Pr\u00e9-visualiza\u00e7\u00e3o',
        'help.s5d1':
            'Clique em <strong>Temas</strong> para alternar: <em>GitHub</em>, <em>Moderno</em>, <em>Acad\u00e9mico</em> ou <em>Minimalista</em>.',
        'help.s6': 'Defini\u00e7\u00f5es',
        'help.s6d1':
            'Abra as <strong>Defini\u00e7\u00f5es</strong> para ativar scroll sincronizado, modo escuro, vidro fosco e mudar o idioma.',
        'help.s7': 'Refer\u00eancia R\u00e1pida Markdown',
        'help.s8': 'Atalhos de Teclado',
    },
};

let currentLang = 'en';

function setCurrentLang(lang) {
    currentLang = lang;
}

function t(key, ...args) {
    const val = LOCALES[currentLang]?.[key] ?? LOCALES.en[key] ?? key;
    return typeof val === 'function' ? val(...args) : val;
}

// ════════════════════════════════════════
// js/samples.js
// ════════════════════════════════════════

// ── Sample Markdown content (one per supported language) ──
function getSampleMarkdown() {
    if (currentLang === 'pt-PT') {
        return `# Prisma.md ✨

Bem-vindo! Escreva **Markdown** no editor e veja o resultado renderizado na pré-visualização.  
Em ecrãs largos ficam **lado a lado**; em ecrãs verticais / pequenos ficam **em cima e em baixo**.  
O conteúdo é **guardado automaticamente** a cada 30 s — consulte o *Histórico* no painel inferior.

---

## Formatação de Texto

**Negrito** · *Itálico* · ***Negrito & Itálico*** · ~~Tachado~~

Código inline: \`const x = Math.PI * r ** 2;\`

---

## Listas

### Não ordenada — com aninhamento

- Item A
  - Sub-item A1
  - Sub-item A2
- Item profundo A2a
- Item B
- Item C

### Ordenada — com sub-passos

1. Primeiro passo
2. Segundo passo
   1. Sub-passo 2.1
   2. Sub-passo 2.2
3. Terceiro passo

### Lista de verificação

- [x] Pré-visualização em tempo real (debounce de 120 ms)
- [x] Realce de sintaxe — 25+ linguagens
- [x] Copiar formatado — Teams, Outlook, Word, Notion…
- [x] Arrastar e Largar — carregue ficheiros .md ou insira imagens como Base64
- [x] Histórico local — guardado automaticamente a cada 30 s
- [x] Múltiplos temas — GitHub · Moderno · Académico · Minimalista
- [x] Modo escuro & efeito vidro fosco
- [x] Colar HTML → convertido automaticamente para Markdown
- [x] Inserir tabela — escolha linhas e colunas no assistente visual
- [ ] A sua próxima funcionalidade favorita

---

## Código

Inline: \`npm ci\` · \`git log --oneline\` · \`SELECT * FROM users;\`

\`\`\`javascript
// JavaScript — async/await + template literals
async function fetchUser(id) {
const res = await fetch(\`/api/users/\${id}\`);
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
return res.json();
}
fetchUser(42).then(console.log);
\`\`\`

\`\`\`python
# Python — função geradora
def fibonacci(n):
a, b = 0, 1
for _ in range(n):
    yield a
    a, b = b, a + b

print(list(fibonacci(10)))
# → [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

\`\`\`sql
-- SQL — agregação com JOIN
SELECT
u.name,
COUNT(o.id)   AS total_orders,
SUM(o.amount) AS revenue
FROM users AS u
LEFT JOIN orders AS o ON o.user_id = u.id
GROUP BY u.name
ORDER BY revenue DESC
LIMIT 10;
\`\`\`

\`\`\`bash
#!/bin/bash
# Script de deploy
set -e
echo "▶ A descarregar actualizações…"
git pull origin main
npm ci && npm run build
echo "✅ Deploy concluído com sucesso!"
\`\`\`

---

## Tabelas — Formatos de Exportação

| Formato              | Ideal para                          | Aplicações alvo               |
|----------------------|-------------------------------------|-------------------------------|
| **HTML Universal**   | Editores de texto rico              | Word · Notion · A maioria     |
| **HTML para Teams**  | Chat do Microsoft Teams             | Teams                         |
| **HTML para E-mail** | E-mail com estilos inline           | Outlook · Gmail               |
| **Slack mrkdwn**     | Formato nativo do Slack             | Slack                         |
| **Imprimir / PDF**   | Documentos em papel e arquivos      | Diálogo de impressão          |

---

## Citações

> "A simplicidade é a sofisticação suprema."
> — *Leonardo da Vinci*

> **Dica:** Largue um ficheiro \`.md\` ou uma **imagem** no editor — os ficheiros são carregados instantaneamente,
> as imagens são inseridas como Base64 inline (PNG, JPG, GIF, WebP).

---

## Ligações & Imagens

Ligue para qualquer sítio: [GitHub](https://github.com) · [MDN](https://developer.mozilla.org)

As imagens podem ser URLs externas ou Base64 via arrastar e largar:

![Exemplo de imagem](https://placehold.co/640x120/0f172a/94a3b8?text=Drop+image+%E2%86%92+Base64)

---

*Mude o idioma, o tema e o modo escuro no painel inferior do ecrã.*
`;
    }
    if (currentLang === 'pt-BR') {
        return `# Prisma.md ✨

Bem-vindo! Escreva **Markdown** no editor e veja o resultado renderizado no preview.  
Em telas largas ficam **lado a lado**; em telas verticais / pequenas ficam **em cima e em baixo**.  
O conteúdo é **salvo automaticamente** a cada 30 s — consulte o *Histórico* no painel inferior.

---

## Formatação de Texto

**Negrito** · *Itálico* · ***Negrito & Itálico*** · ~~Tachado~~

Código inline: \`const x = Math.PI * r ** 2;\`

---

## Listas

### Não ordenada — com aninhamento

- Item A
  - Sub-item A1
  - Sub-item A2
- Item profundo A2a
- Item B
- Item C

### Ordenada — com sub-passos

1. Primeiro passo
2. Segundo passo
   1. Sub-passo 2.1
   2. Sub-passo 2.2
3. Terceiro passo

### Lista de tarefas

- [x] Live preview em tempo real (debounce de 120 ms)
- [x] Syntax highlighting — 25+ linguagens
- [x] Copiar formatado — Teams, Outlook, Word, Notion…
- [x] Drag & Drop — carregue arquivos .md ou insira imagens como Base64
- [x] Histórico local — salvo automaticamente a cada 30 s
- [x] Múltiplos temas — GitHub · Moderno · Acadêmico · Minimalista
- [x] Modo escuro & efeito frosted glass
- [x] Colar HTML → convertido automaticamente para Markdown
- [x] Inserir tabela — escolha linhas e colunas no assistente visual
- [ ] Sua próxima grande ideia

---

## Código

Inline: \`npm ci\` · \`git log --oneline\` · \`SELECT * FROM users;\`

\`\`\`javascript
// JavaScript — async/await + template literals
async function fetchUser(id) {
const res = await fetch(\`/api/users/\${id}\`);
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
return res.json();
}
fetchUser(42).then(console.log);
\`\`\`

\`\`\`python
# Python — função geradora
def fibonacci(n):
a, b = 0, 1
for _ in range(n):
    yield a
    a, b = b, a + b

print(list(fibonacci(10)))
# → [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

\`\`\`sql
-- SQL — agregação com JOIN
SELECT
u.name,
COUNT(o.id)   AS total_orders,
SUM(o.amount) AS revenue
FROM users AS u
LEFT JOIN orders AS o ON o.user_id = u.id
GROUP BY u.name
ORDER BY revenue DESC
LIMIT 10;
\`\`\`

\`\`\`bash
#!/bin/bash
# Script de deploy
set -e
echo "▶ Atualizando repositório…"
git pull origin main
npm ci && npm run build
echo "✅ Deploy concluído com sucesso!"
\`\`\`

---

## Tabelas — Formatos de Exportação

| Formato              | Ideal para                           | Apps alvo                     |
|----------------------|--------------------------------------|-------------------------------|
| **HTML Universal**   | Editores de texto rico               | Word · Notion · A maioria     |
| **HTML para Teams**  | Chat do Microsoft Teams              | Teams                         |
| **HTML para E-mail** | E-mail com estilos inline            | Outlook · Gmail               |
| **Slack mrkdwn**     | Formato nativo do Slack              | Slack                         |
| **Imprimir / PDF**   | Documentos em papel e arquivos       | Diálogo de impressão          |

---

## Citações

> "A simplicidade é a sofisticação suprema."
> — *Leonardo da Vinci*

> **Dica:** Arraste um arquivo \`.md\` ou uma **imagem** para o editor — arquivos são carregados instantaneamente,
> imagens são inseridas como Base64 inline (PNG, JPG, GIF, WebP).

---

## Links & Imagens

Linke para qualquer lugar: [GitHub](https://github.com) · [MDN](https://developer.mozilla.org)

Imagens podem ser URLs externas ou Base64 via drag & drop:

![Exemplo de imagem](https://placehold.co/640x120/0f172a/94a3b8?text=Drop+image+%E2%86%92+Base64)

---

*Mude o idioma, o tema e o modo escuro no painel inferior da tela.*
`;
    }
    if (currentLang === 'es') {
        return `# Prisma.md ✨

¡Bienvenido! Escribe **Markdown** en el editor y ve el resultado renderizado en la vista previa.  
En pantallas anchas van **lado a lado**; en pantallas verticales / pequeñas van **arriba y abajo**.  
El contenido se **guarda automáticamente** cada 30 s — consulta el *Historial* en el panel inferior.

---

## Formato de Texto

**Negrita** · *Cursiva* · ***Negrita & Cursiva*** · ~~Tachado~~

Código inline: \`const x = Math.PI * r ** 2;\`

---

## Listas

### No ordenada — con anidamiento

- Elemento A
  - Sub-elemento A1
  - Sub-elemento A2
- Elemento profundo A2a
- Elemento B
- Elemento C

### Ordenada — con sub-pasos

1. Primer paso
2. Segundo paso
   1. Sub-paso 2.1
   2. Sub-paso 2.2
3. Tercer paso

### Lista de tareas

- [x] Vista previa en tiempo real (debounce de 120 ms)
- [x] Resaltado de sintaxis — 25+ lenguajes
- [x] Copiar formateado — Teams, Outlook, Word, Notion…
- [x] Arrastrar y Soltar — carga archivos .md o inserta imágenes como Base64
- [x] Historial local — guardado automáticamente cada 30 s
- [x] Múltiples temas — GitHub · Moderno · Académico · Minimalista
- [x] Modo oscuro & efecto cristal esmerilado
- [x] Pegar HTML → convertido automáticamente a Markdown
- [x] Insertar tabla — elige filas y columnas en el asistente visual
- [ ] Tu próxima gran idea

---

## Código

Inline: \`npm ci\` · \`git log --oneline\` · \`SELECT * FROM users;\`

\`\`\`javascript
// JavaScript — async/await + template literals
async function fetchUser(id) {
const res = await fetch(\`/api/users/\${id}\`);
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
return res.json();
}
fetchUser(42).then(console.log);
\`\`\`

\`\`\`python
# Python — función generadora
def fibonacci(n):
a, b = 0, 1
for _ in range(n):
    yield a
    a, b = b, a + b

print(list(fibonacci(10)))
# → [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

\`\`\`sql
-- SQL — agregación con JOIN
SELECT
u.name,
COUNT(o.id)   AS total_orders,
SUM(o.amount) AS revenue
FROM users AS u
LEFT JOIN orders AS o ON o.user_id = u.id
GROUP BY u.name
ORDER BY revenue DESC
LIMIT 10;
\`\`\`

\`\`\`bash
#!/bin/bash
# Script de despliegue
set -e
echo "▶ Descargando cambios…"
git pull origin main
npm ci && npm run build
echo "✅ ¡Despliegue completado!"
\`\`\`

---

## Tablas — Formatos de Exportación

| Formato              | Ideal para                           | Apps destino                  |
|----------------------|--------------------------------------|-------------------------------|
| **HTML Universal**   | Editores de texto enriquecido        | Word · Notion · La mayoría    |
| **HTML para Teams**  | Chat de Microsoft Teams              | Teams                         |
| **HTML para Email**  | Email con estilos inline             | Outlook · Gmail               |
| **Slack mrkdwn**     | Formato nativo de Slack              | Slack                         |
| **Imprimir / PDF**   | Documentos en papel y archivos       | Diálogo de impresión          |

---

## Citas

> "La simplicidad es la máxima sofisticación."
> — *Leonardo da Vinci*

> **Consejo:** Suelta un archivo \`.md\` o una **imagen** en el editor — los archivos se cargan al instante,
> las imágenes se insertan como Base64 inline (PNG, JPG, GIF, WebP).

---

## Enlaces & Imágenes

Enlaza a cualquier sitio: [GitHub](https://github.com) · [MDN](https://developer.mozilla.org)

Las imágenes pueden ser URLs externas o Base64 vía arrastrar y soltar:

![Imagen de ejemplo](https://placehold.co/640x120/0f172a/94a3b8?text=Drop+image+%E2%86%92+Base64)

---

*Cambia el idioma, el tema y el modo oscuro desde el panel inferior de la pantalla.*
`;
    }
    if (currentLang === 'fr') {
        return `# Prisma.md ✨

Bienvenue ! Rédigez votre **Markdown** dans l'éditeur et visualisez le rendu dans l'aperçu.  
Sur les écrans larges ils sont **côte à côte** ; sur les écrans verticaux / petits ils sont **l'un au-dessus de l'autre**.  
Le contenu est **sauvegardé automatiquement** toutes les 30 s — consultez l'*Historique* dans le panneau inférieur.

---

## Mise en forme du texte

**Gras** · *Italique* · ***Gras & Italique*** · ~~Barré~~

Code en ligne : \`const x = Math.PI * r ** 2;\`

---

## Listes

### Non ordonnée — avec imbrication

- Élément A
  - Sous-élément A1
  - Sous-élément A2
- Élément profond A2a
- Élément B
- Élément C

### Ordonnée — avec sous-étapes

1. Première étape
2. Deuxième étape
   1. Sous-étape 2.1
   2. Sous-étape 2.2
3. Troisième étape

### Liste de tâches

- [x] Aperçu en temps réel (debounce 120 ms)
- [x] Coloration syntaxique — 25+ langages
- [x] Copier formaté — Teams, Outlook, Word, Notion…
- [x] Glisser-Déposer — chargez des fichiers .md ou insérez des images en Base64
- [x] Historique local — sauvegardé automatiquement toutes les 30 s
- [x] Thèmes multiples — GitHub · Moderne · Académique · Minimaliste
- [x] Mode sombre & effet verre dépoli
- [x] Coller du HTML → converti automatiquement en Markdown
- [x] Insérer un tableau — choisissez lignes et colonnes dans l'assistant visuel
- [ ] Votre prochaine grande idée

---

## Code

En ligne : \`npm ci\` · \`git log --oneline\` · \`SELECT * FROM users;\`

\`\`\`javascript
// JavaScript — async/await + template literals
async function fetchUser(id) {
const res = await fetch(\`/api/users/\${id}\`);
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
return res.json();
}
fetchUser(42).then(console.log);
\`\`\`

\`\`\`python
# Python — fonction génératrice
def fibonacci(n):
a, b = 0, 1
for _ in range(n):
    yield a
    a, b = b, a + b

print(list(fibonacci(10)))
# → [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

\`\`\`sql
-- SQL — agrégation avec JOIN
SELECT
u.name,
COUNT(o.id)   AS total_orders,
SUM(o.amount) AS revenue
FROM users AS u
LEFT JOIN orders AS o ON o.user_id = u.id
GROUP BY u.name
ORDER BY revenue DESC
LIMIT 10;
\`\`\`

\`\`\`bash
#!/bin/bash
# Script de déploiement
set -e
echo "▶ Mise à jour du dépôt…"
git pull origin main
npm ci && npm run build
echo "✅ Déploiement réussi !"
\`\`\`

---

## Tableaux — Formats d'exportation

| Format               | Idéal pour                           | Applications cibles           |
|----------------------|--------------------------------------|-------------------------------|
| **HTML Universel**   | Éditeurs de texte enrichi            | Word · Notion · La plupart    |
| **HTML pour Teams**  | Chat Microsoft Teams                 | Teams                         |
| **HTML pour Email**  | Email avec styles inline             | Outlook · Gmail               |
| **Slack mrkdwn**     | Format natif Slack                   | Slack                         |
| **Imprimer / PDF**   | Documents papier et archives         | Dialogue d'impression         |

---

## Citations

> « La simplicité est la sophistication suprême. »
> — *Léonard de Vinci*

> **Astuce :** Déposez un fichier \`.md\` ou une **image** sur l'éditeur — les fichiers se chargent instantanément,
> les images sont insérées en Base64 inline (PNG, JPG, GIF, WebP).

---

## Liens & Images

Liez vers n’importe quel site : [GitHub](https://github.com) · [MDN](https://developer.mozilla.org)

Les images peuvent être des URL externes ou du Base64 via glisser-déposer :

![Image d’exemple](https://placehold.co/640x120/0f172a/94a3b8?text=Drop+image+%E2%86%92+Base64)

---

*Changez la langue, le thème et le mode sombre depuis le panneau inférieur de l'écran.*
`;
    }
    // Default: en
    return `# Prisma.md ✨

Welcome! Write **Markdown** in the editor and see the rendered result in the preview.  
On wide screens they sit **side by side**; on portrait / small screens they **stack top & bottom**.  
Content is **auto-saved** every 30 s — check *History* in the dock below.

---

## Text Formatting

**Bold** · *Italic* · ***Bold & Italic*** · ~~Strikethrough~~

Inline code: \`const x = Math.PI * r ** 2;\`

---

## Lists

### Unordered — with nesting

- Item A
  - Sub-item A1
  - Sub-item A2
- Deep item A2a
- Item B
- Item C

### Ordered — with sub-steps

1. First step
2. Second step
   1. Sub-step 2.1
   2. Sub-step 2.2
3. Third step

### Task list

- [x] Live preview (real-time, 120 ms debounce)
- [x] Syntax highlighting — 25+ languages
- [x] Copy formatted — Teams, Outlook, Word, Notion…
- [x] Drag & Drop — load .md files or insert images as Base64
- [x] Local history — auto-saved every 30 s
- [x] Multiple themes — GitHub · Modern · Academic · Minimal
- [x] Dark mode & frosted glass effect
- [x] Paste HTML → converted to Markdown automatically
- [x] Insert table — pick rows & columns in the visual assistant
- [ ] Your next great feature

---

## Code

Inline: \`npm ci\` · \`git log --oneline\` · \`SELECT * FROM users;\`

\`\`\`javascript
// JavaScript — async/await + template literals
async function fetchUser(id) {
const res = await fetch(\`/api/users/\${id}\`);
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
return res.json();
}
fetchUser(42).then(console.log);
\`\`\`

\`\`\`python
# Python — generator function
def fibonacci(n):
a, b = 0, 1
for _ in range(n):
    yield a
    a, b = b, a + b

print(list(fibonacci(10)))
# → [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

\`\`\`sql
-- SQL — aggregation with JOIN
SELECT
u.name,
COUNT(o.id)   AS total_orders,
SUM(o.amount) AS revenue
FROM users AS u
LEFT JOIN orders AS o ON o.user_id = u.id
GROUP BY u.name
ORDER BY revenue DESC
LIMIT 10;
\`\`\`

\`\`\`bash
#!/bin/bash
# Deploy script
set -e
echo "▶ Pulling latest…"
git pull origin main
npm ci && npm run build
echo "✅ Deployed successfully!"
\`\`\`

---

## Tables — Export Formats

| Format              | Best for                         | Target apps                  |
|---------------------|----------------------------------|------------------------------|
| **Universal HTML**  | Rich-text editors                | Word · Notion · Most apps    |
| **Teams HTML**      | Microsoft Teams chat             | Teams                        |
| **Email HTML**      | Inline-styled email              | Outlook · Gmail              |
| **Slack mrkdwn**    | Slack native format              | Slack                        |
| **Print / PDF**     | Paper documents & archives       | System print dialog          |

---

## Blockquotes

> "Simplicity is the ultimate sophistication."
> — *Leonardo da Vinci*

> **Tip:** Drop a \`.md\` file or an **image** onto the editor — files load instantly,
> images are inserted as inline Base64 (PNG, JPG, GIF, WebP).

---

## Links & Images

Link to anything: [GitHub](https://github.com) · [MDN](https://developer.mozilla.org)

Images can be external URLs or Base64 via drag & drop:

![Image example](https://placehold.co/640x120/0f172a/94a3b8?text=Drop+image+%E2%86%92+Base64)

---

*Switch language, theme and dark mode from the dock at the bottom of the screen.*
`;
}

// ════════════════════════════════════════
// js/lint.js
// ════════════════════════════════════════

// ── Markdown lint + grammar checker (pure functions) ──
function maskCodeContent(text) {
    // Fenced code blocks: keep newlines to preserve line numbers
    let masked = text.replace(/```[\s\S]*?```/g, (m) =>
        '\n'.repeat((m.match(/\n/g) || []).length),
    );
    // Inline code: replace with same-length spaces
    masked = masked.replace(/`[^`\n]+`/g, (m) => ' '.repeat(m.length));
    return masked;
}

function runMarkdownLint(text) {
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

function runGrammar(text) {
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

// ════════════════════════════════════════
// js/converter.js
// ════════════════════════════════════════

// ── Conversion utilities: HTML→Markdown, TSV→Markdown, Markdown→Slack ──
function convertToSlack(md) {
    let out = md;

    // Images (must come before links)
    out = out.replace(/!\[([^\]]*)\]\([^)]+\)/g, (_, alt) =>
        alt ? t('slack.image', alt) : t('slack.imagePlain'),
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
        '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
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
            c.textContent.trim().replace(/\|/g, '\\|'),
        ),
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

function htmlToMarkdown(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return walkNode(div)
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function isTsvData(text) {
    const lines = text.split('\n').filter((l) => l.trim());
    return lines.length >= 1 && lines[0].includes('\t');
}

function tsvToMarkdown(tsv) {
    const rows = tsv
        .split('\n')
        .filter((l) => l.trim())
        .map((r) =>
            r
                .replace(/\r$/, '')
                .split('\t')
                .map((c) => c.trim().replace(/\|/g, '\\|')),
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

// ════════════════════════════════════════
// js/export-builder.js
// ════════════════════════════════════════

// ── Inline-styled HTML builder (for Teams / email paste) ──

function buildInlineStyledHTML(markdownBodyEl, platform) {
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
                    `${f}font-size:24px;font-weight:700;color:${p.text};margin:0 0 16px;padding-bottom:8px;border-bottom:2px solid ${p.border};line-height:1.3;`,
                );
                break;
            case 'h2':
                el.setAttribute(
                    'style',
                    `${f}font-size:20px;font-weight:700;color:${p.text};margin:24px 0 12px;padding-bottom:6px;border-bottom:1px solid ${p.border};line-height:1.3;`,
                );
                break;
            case 'h3':
                el.setAttribute(
                    'style',
                    `${f}font-size:17px;font-weight:700;color:${p.text};margin:20px 0 8px;line-height:1.3;`,
                );
                break;
            case 'h4':
            case 'h5':
            case 'h6':
                el.setAttribute(
                    'style',
                    `${f}font-size:15px;font-weight:700;color:${p.text};margin:16px 0 8px;line-height:1.3;`,
                );
                break;
            case 'p':
                el.setAttribute(
                    'style',
                    `${f}font-size:15px;line-height:1.75;color:${p.text};margin:0 0 14px;`,
                );
                break;
            case 'ul':
            case 'ol':
                el.setAttribute(
                    'style',
                    `${f}font-size:15px;line-height:1.75;color:${p.text};margin:0 0 14px;padding-left:24px;`,
                );
                break;
            case 'li':
                el.setAttribute(
                    'style',
                    `${f}font-size:15px;line-height:1.75;color:${p.text};margin:0 0 4px;`,
                );
                break;
            case 'code':
                if (el.closest('pre')) {
                    el.setAttribute(
                        'style',
                        `font-family:'Courier New',Consolas,monospace;background:none;color:inherit;padding:0;font-size:13px;line-height:1.5;`,
                    );
                } else {
                    el.setAttribute(
                        'style',
                        `font-family:'Courier New',Consolas,monospace;background:${p.codeBg};color:${p.codeText};padding:2px 6px;border-radius:3px;font-size:87%;`,
                    );
                }
                break;
            case 'pre':
                el.setAttribute(
                    'style',
                    `background:${p.codeBg};padding:14px 18px;border-radius:${isTeams ? '6px' : '4px'};margin:0 0 16px;border:1px solid ${p.border};font-family:'Courier New',Consolas,monospace;font-size:13px;line-height:1.5;white-space:pre;overflow:auto;`,
                );
                break;
            case 'table':
                el.setAttribute(
                    'style',
                    `border-collapse:collapse;width:100%;margin:0 0 16px;font-size:14px;${f}`,
                );
                el.setAttribute('cellpadding', '0');
                el.setAttribute('cellspacing', '0');
                break;
            case 'th':
                el.setAttribute(
                    'style',
                    `border:1px solid ${p.border};padding:8px 14px;text-align:left;background:${p.thBg};font-weight:600;font-size:13px;color:${p.secondary};${f}`,
                );
                break;
            case 'td':
                el.setAttribute(
                    'style',
                    `border:1px solid ${p.border};padding:8px 14px;text-align:left;${f}color:${p.text};`,
                );
                break;
            case 'blockquote':
                el.setAttribute(
                    'style',
                    `${f}margin:0 0 16px;padding:10px 14px;border-left:4px solid ${p.quoteBorder};background:${p.quoteBg};font-style:italic;color:${p.quoteText};font-size:15px;line-height:1.75;`,
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
                    `color:${p.accent};text-decoration:none;`,
                );
                break;
            case 'img':
                el.setAttribute('style', 'max-width:100%;height:auto;');
                break;
            case 'hr':
                el.setAttribute(
                    'style',
                    `border:none;border-top:1px solid ${p.border};margin:24px 0;`,
                );
                break;
        }

        for (const child of el.children) styleEl(child);
    }

    for (const child of clone.children) styleEl(child);

    const wrap = document.createElement('div');
    wrap.setAttribute(
        'style',
        `font-family:${fontStack};font-size:15px;line-height:1.75;color:${p.text};max-width:720px;`,
    );
    wrap.innerHTML = clone.innerHTML;
    return wrap.outerHTML;
}

// ════════════════════════════════════════
// js/preview-themes.js
// ════════════════════════════════════════

// ── Preview theme CSS overrides (applied to #preview element) ──

const PREVIEW_THEMES = {
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
        [data-theme='dark'] #preview {
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
        [data-theme='dark'] #preview .markdown-body code { color: #f9a8d4; }
        [data-theme='dark'] #preview .markdown-body pre code { color: #e6edf3; }
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
        [data-theme='dark'] #preview {
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
        [data-theme='dark'] #preview .markdown-body h1 { color: #a5b4fc; }
        [data-theme='dark'] #preview .markdown-body h2 { color: #818cf8; }
        [data-theme='dark'] #preview .markdown-body code { color: #c7d2fe; }
        [data-theme='dark'] #preview .markdown-body pre code { color: #e0e7ff; }
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
        [data-theme='dark'] #preview {
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
        [data-theme='dark'] #preview .markdown-body code { color: #fcd34d; }
        [data-theme='dark'] #preview .markdown-body pre code { color: #e8dcc8; }
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
        [data-theme='dark'] #preview {
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
        [data-theme='dark'] #preview .markdown-body code { color: #d1d5db; }
        [data-theme='dark'] #preview .markdown-body pre code { color: #eeeeee; }
        [data-theme='dark'] #preview .markdown-body a { text-decoration: underline; }
        @media print {
            html[data-theme='dark'], html[data-theme='dark'] body {
                background: #111111 !important;
                -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
    `,
};

// ════════════════════════════════════════
// js/history-store.js
// ════════════════════════════════════════

// ── Local history — storage helpers ──
const HISTORY_KEY = 'prisma-md-history';
const HISTORY_MAX = 25;

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    } catch {
        return [];
    }
}

function saveSnapshot(content) {
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
function formatHistoryDate(ts) {
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

function clearHistory() {
    localStorage.removeItem(HISTORY_KEY);
}

// ════════════════════════════════════════
// js/glass-distortion.js
// ════════════════════════════════════════

// ── Physics-Based Liquid Glass Displacement Map ──
// Generates per-surface displacement maps based on Snell's-law refraction
// for a convex glass bezel, following the approach described in
// https://kube.io/blog/liquid-glass-css-svg/
//
// Two SVG filters are maintained:
//   #glass-distortion-dock  — pill-shaped floating dock (updated on resize)
//   #glass-distortion-panel — modals and menus (objectBoundingBox — scales to
//                             any panel size automatically)
//
// For Chromium browsers the filter is promoted into backdrop-filter via
// CSS @supports, applying refraction to the crisp background before
// blurring — matching how real glass works.

const GlassDistortion = {
    // Index of refraction of the glass (1.45 ≈ borosilicate / optical glass)
    IOR: 1.45,

    // Controls how steeply the convex surface rises from the outer edge.
    // Higher = more refraction.
    GLASS_THICKNESS: 0.72,

    // Bezel width relative to min(element_size) / 2.
    // Clamped against the corner radius so it never spills into the flat face.
    BEZEL_FRACTION: 0.38,

    // ── Signed-distance function for a rounded rectangle ──
    // Returns the distance from pixel (px,py) to the nearest boundary edge.
    // Positive  → pixel is inside the shape.
    // Negative  → pixel is outside.
    _innerDist(px, py, cx, cy, hw, hh, r) {
        const qx = Math.abs(px - cx) - (hw - r);
        const qy = Math.abs(py - cy) - (hh - r);
        const outer =
            Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) +
            Math.min(Math.max(qx, qy), 0) -
            r;
        return -outer; // positive inside
    },

    // ── Generate a 1×1 neutral displacement map data URL ──
    // Used as the placeholder until the first real map is computed,
    // so that SVG filters emit zero displacement instead of rendering
    // artefacts from an empty href.
    _neutralDataUrl() {
        const c = document.createElement('canvas');
        c.width = 2;
        c.height = 2;
        const ctx = c.getContext('2d');
        const id = ctx.createImageData(2, 2);
        for (let i = 0; i < 16; i += 4) {
            id.data[i] = id.data[i + 1] = id.data[i + 2] = 128;
            id.data[i + 3] = 255;
        }
        ctx.putImageData(id, 0, 0);
        return c.toDataURL('image/png');
    },

    // ── Build displacement map ──
    // Returns { dataUrl: string, scale: number (pixels), width, height }
    build(width, height, borderRadius) {
        const W = Math.max(Math.ceil(width), 2);
        const H = Math.max(Math.ceil(height), 2);
        const R = Math.min(borderRadius, Math.min(W, H) / 2);
        const cx = W / 2;
        const cy = H / 2;
        // Bezel width in pixels.
        // Upper bound R*0.85 ensures bezel never overshoots the corner curve.
        const bezelW = Math.min(
            Math.min(W, H) * this.BEZEL_FRACTION * 0.5,
            R * 0.85,
        );

        const canvas = document.createElement('canvas');
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext('2d', { willReadFrequently: false });
        const imgData = ctx.createImageData(W, H);
        const d = imgData.data;

        const mags = new Float32Array(W * H);
        const dxArr = new Float32Array(W * H);
        const dyArr = new Float32Array(W * H);
        let maxMag = 0;

        for (let y = 0; y < H; y++) {
            for (let x = 0; x < W; x++) {
                const px = x + 0.5;
                const py = y + 0.5;
                const dist = this._innerDist(px, py, cx, cy, W / 2, H / 2, R);
                const i = y * W + x;

                // Only pixels in the bezel ring [0, bezelW) refract.
                if (dist <= 0 || dist >= bezelW) continue;

                // t: 0 = outer boundary, 1 = inner bezel edge (start of flat face)
                const t = dist / bezelW;

                // Convex surface height function: h(t) = THICKNESS × √t
                // Derivative: h′(t) = THICKNESS × 0.5 / √(t + ε)
                // The square-root profile yields a steep slope at the very edge
                // (simulating a curved lens rim) that smoothly levels out.
                const slope =
                    (this.GLASS_THICKNESS * 0.5) / Math.sqrt(t + 0.001);

                // Angle of incidence θ₁ from the surface normal
                const sinT1 = slope / Math.sqrt(1 + slope * slope);
                const cosT1 = Math.sqrt(Math.max(0, 1 - sinT1 * sinT1));

                // Snell's law:  n₁·sin θ₁ = n₂·sin θ₂  (n₁ = 1 for air)
                const sinT2 = sinT1 / this.IOR;
                const cosT2 = Math.sqrt(Math.max(0, 1 - sinT2 * sinT2));

                // Lateral exit-point displacement for a ray crossing the glass layer
                const tanT1 = sinT1 / (cosT1 + 1e-9);
                const tanT2 = sinT2 / (cosT2 + 1e-9);
                const mag = Math.abs(tanT1 - tanT2) * bezelW;

                mags[i] = mag;
                if (mag > maxMag) maxMag = mag;

                // Displacement direction: toward the optical axis (element center).
                // A convex lens bends rays inward — the sampled background pixel
                // comes from slightly further toward the center.
                const nx = cx - px;
                const ny = cy - py;
                const len = Math.sqrt(nx * nx + ny * ny) + 1e-9;
                dxArr[i] = nx / len;
                dyArr[i] = ny / len;
            }
        }

        if (maxMag < 0.001) maxMag = 1;

        // Encode to R-G channels.
        // 128 = neutral (no displacement).
        // Pixel = 128 ± normalised_component × 127.
        for (let i = 0; i < W * H; i++) {
            const idx = i * 4;
            const mag = mags[i];
            if (mag > 0) {
                const n = mag / maxMag;
                d[idx] = Math.min(
                    255,
                    Math.max(0, (128 + dxArr[i] * n * 127 + 0.5) | 0),
                );
                d[idx + 1] = Math.min(
                    255,
                    Math.max(0, (128 + dyArr[i] * n * 127 + 0.5) | 0),
                );
            } else {
                d[idx] = 128;
                d[idx + 1] = 128;
            }
            d[idx + 2] = 128;
            d[idx + 3] = 255;
        }

        ctx.putImageData(imgData, 0, 0);
        return {
            dataUrl: canvas.toDataURL('image/png'),
            scale: maxMag,
            width: W,
            height: H,
        };
    },

    // ── Dock filter (pill) ──
    // Uses userSpaceOnUse pixel coordinates — updated to exact element size.
    _applyToDock(w, h) {
        const filter = document.getElementById('glass-distortion-dock');
        if (!filter) return;
        const feImg = filter.querySelector('feImage');
        const feDisp = filter.querySelector('feDisplacementMap');
        if (!feImg || !feDisp) return;

        const r = h / 2; // pill: border-radius = half height
        const { dataUrl, scale } = this.build(w, h, r);
        feImg.setAttribute('href', dataUrl);
        feImg.setAttribute('width', String(Math.ceil(w)));
        feImg.setAttribute('height', String(Math.ceil(h)));
        feDisp.setAttribute('scale', scale.toFixed(2));
    },

    // ── Panel filter (modals + menus) ──
    // Uses objectBoundingBox units so the image stretches to fill any element,
    // giving proportional edge-distortion regardless of panel dimensions.
    // The scale is expressed as a fraction of the reference image width.
    _applyToPanel() {
        const filter = document.getElementById('glass-distortion-panel');
        if (!filter) return;
        const feImg = filter.querySelector('feImage');
        const feDisp = filter.querySelector('feDisplacementMap');
        if (!feImg || !feDisp) return;

        const { dataUrl, scale, width } = this.build(580, 500, 20);
        feImg.setAttribute('href', dataUrl);
        // Scale as a bounding-box fraction: actual px = scale_bb × elementWidth
        feDisp.setAttribute('scale', (scale / width).toFixed(4));
    },

    // ── Init: dock ──
    initDock() {
        const dock = document.querySelector('.glass-dock');
        if (!dock) return;

        // Set neutral placeholder so the filter emits zero displacement immediately.
        const neutral = this._neutralDataUrl();
        const dockFilter = document.getElementById('glass-distortion-dock');
        if (dockFilter) {
            const fi = dockFilter.querySelector('feImage');
            const fd = dockFilter.querySelector('feDisplacementMap');
            if (fi) fi.setAttribute('href', neutral);
            if (fd) fd.setAttribute('scale', '0');
        }

        const refresh = (w, h) => {
            this._applyToDock(w, h);
        };

        const ro = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            if (width > 4 && height > 4) refresh(width, height);
        });
        ro.observe(dock);

        const rect = dock.getBoundingClientRect();
        if (rect.width > 4 && rect.height > 4) refresh(rect.width, rect.height);
    },

    // ── Init: panels ──
    initPanel() {
        // Set neutral placeholder first.
        const neutral = this._neutralDataUrl();
        const panelFilter = document.getElementById('glass-distortion-panel');
        if (panelFilter) {
            const fi = panelFilter.querySelector('feImage');
            const fd = panelFilter.querySelector('feDisplacementMap');
            if (fi) fi.setAttribute('href', neutral);
            if (fd) fd.setAttribute('scale', '0');
        }
        this._applyToPanel();
    },
};

GlassDistortion.initDock();
GlassDistortion.initPanel();

// ════════════════════════════════════════
// js/main.js
// ════════════════════════════════════════

// ── Prisma.md — main application module ──
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

})();
// ── i18n — translation data and lookup ──

export const LOCALES = {
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

export let currentLang = 'en';

export function setCurrentLang(lang) {
    currentLang = lang;
}

export function t(key, ...args) {
    const val = LOCALES[currentLang]?.[key] ?? LOCALES.en[key] ?? key;
    return typeof val === 'function' ? val(...args) : val;
}

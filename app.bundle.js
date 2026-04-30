(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/i18n.ts
  function setCurrentLang(lang) {
    currentLang = lang;
  }
  function t(key, ...args) {
    const val = LOCALES[currentLang]?.[key] ?? LOCALES.en[key] ?? key;
    return typeof val === "function" ? val(...args) : val;
  }
  var LOCALES, currentLang;
  var init_i18n = __esm({
    "src/i18n.ts"() {
      LOCALES = {
        en: {
          "settings.label": "Settings",
          "settings.syncName": "Sync scroll",
          "settings.syncDesc": "Syncs scroll between editor and preview",
          "settings.themeName": "Dark mode",
          "settings.themeDesc": "Toggle between light and dark mode",
          "settings.glassName": "Frosted glass",
          "settings.glassDesc": "Frosted glass effect across the UI",
          "settings.langName": "Language",
          "settings.langDesc": "Interface language",
          "dock.export": "Export",
          "dock.themes": "Themes",
          "dock.history": "History",
          "dock.table": "Table",
          "dock.clear": "Clear",
          "dock.settings": "Settings",
          "dock.more": "More",
          "drop.title": "Drop here",
          "drop.descMd": "to load the file",
          "drop.descImage": "to insert as Base64",
          "lint.title": "Warnings",
          "lint.close": "Close warnings",
          "lint.closeAria": "Close warnings panel",
          "export.label": "Copy as\u2026",
          "export.universalDesc": "Rich HTML \xB7 Word, Notion and other apps",
          "export.teamsDesc": "Inline HTML with Segoe UI styles \xB7 code preserved",
          "export.emailDesc": "Conservative inline CSS \xB7 tables and bold guaranteed",
          "export.slackDesc": "mrkdwn text \xB7 Slack native format",
          "export.whatsappDesc": "Text format \xB7 bold, italic, strikethrough",
          "export.telegramDesc": "HTML format \xB7 bold, italic, code, links",
          "export.printName": "Print / PDF",
          "export.printDesc": "Native preview \xB7 uses active theme",
          "history.title": "Local History",
          "history.clearBtn": "Clear all",
          "history.hint": "Auto-saved every 30\u202Fs and on editor blur. Click a version to restore.",
          "table.title": "Insert Table",
          "table.rows": "Rows",
          "table.cols": "Columns",
          "table.hint": "First row is the header \xB7 Tab to navigate",
          "table.cancel": "Cancel",
          "table.insert": "Insert Table",
          "themes.label": "Preview theme",
          "themes.githubDesc": "Classic \xB7 blue/green \xB7 light & dark",
          "themes.modern": "Modern",
          "themes.modernDesc": "Indigo \xB7 Helvetica \xB7 light & dark",
          "themes.academic": "Academic",
          "themes.academicDesc": "Serif Georgia \xB7 sepia \xB7 light & dark",
          "themes.minimal": "Minimal",
          "themes.minimalDesc": "Neutral \xB7 distraction-free \xB7 light & dark",
          "stats.word": "1 word",
          "stats.words": (n) => `${n.toLocaleString("en")} words`,
          "stats.chars": (n) => `${n.toLocaleString("en")} chars`,
          "stats.readTime": (m) => `~${m} min`,
          "lint.heading": (prev, cur) => `Heading hierarchy: H${prev} followed by H${cur} \u2014 intermediate level missing`,
          "lint.unclosedLink": "Unclosed link \u2014 missing closing `)`",
          "lint.imageAlt": "Image without alt text",
          "lint.multipleH1": (n) => `${n} H1 headings found \u2014 only one recommended per document`,
          "grammar.repeated": (word) => `Repeated word: "${word}"`,
          "grammar.doubleSpace": "Double space in the middle of the text",
          "issues.one": "1 warning",
          "issues.many": (n) => `${n} warnings`,
          "issues.overflow": (n) => `\u2026and ${n} more ${n === 1 ? "warning" : "warnings"}`,
          "toast.copied": "Copied! Paste with Ctrl+V",
          "toast.copiedPlain": "Copied as plain text",
          "toast.copyError": "Copy failed \u2014 try manually",
          "toast.copiedTeams": "Copied for Teams! Paste with Ctrl+V",
          "toast.copiedEmail": "Copied for email! Paste with Ctrl+V",
          "toast.copiedSlack": "Copied for Slack! Paste with Ctrl+V",
          "toast.copiedWhatsApp": "Copied for WhatsApp! Paste with Ctrl+V",
          "toast.copiedTelegram": "Copied for Telegram! Paste with Ctrl+V",
          "toast.fileLoaded": (name) => `"${name}" loaded`,
          "toast.imageInserted": (name) => `Image "${name}" inserted`,
          "toast.fileUnsupported": "Unsupported file \u2014 use .md or image",
          "toast.tablePasted": "Table pasted!",
          "toast.htmlConverted": "HTML converted to Markdown!",
          "toast.tableInserted": "Table inserted!",
          "toast.versionRestored": "Version restored!",
          "history.justNow": "Just now",
          "history.minsAgo": (m) => `${m} min ago`,
          "history.hoursAgo": (h) => `${h}h ago`,
          "history.empty": "No history saved yet. Editor auto-saves every 30\u202Fs.",
          "table.colPlaceholder": (c) => `Column ${c}`,
          "table.cellPlaceholder": (r, c) => `row ${r}, col ${c}`,
          "slack.image": (alt) => `[Image: ${alt}]`,
          "slack.imagePlain": "[Image]",
          "whatsapp.image": (alt) => `[\u{1F4F7} Image: ${alt}]`,
          "whatsapp.imagePlain": "[\u{1F4F7} Image]",
          "telegram.image": (alt) => `[\u{1F4F7} Image: ${alt}]`,
          "telegram.imagePlain": "[\u{1F4F7} Image]",
          "editor.placeholder": "Write your Markdown here\u2026",
          "pane.markdown": "Markdown",
          "pane.preview": "Preview",
          "help.btnName": "Help & Wiki",
          "help.btnDesc": "Features, Markdown guide & shortcuts",
          "help.title": "Help & Wiki",
          "help.s1": "Editor & Preview",
          "help.s1d1": "Write Markdown in the left pane \u2014 the preview updates in real time.",
          "help.s1d2": "Drag & drop a <strong>.md</strong> file onto the editor to load it.",
          "help.s1d3": "Drag & drop an <strong>image</strong> to embed it inline as Base64.",
          "help.s1d4": "The insights bar shows word count, reading time and lint warnings.",
          "help.s1d5": "Paste <strong>HTML</strong> directly into the editor \u2014 it is automatically converted to Markdown.",
          "help.s2": "Export",
          "help.s2intro": "Click <strong>Export</strong> in the dock to copy in one of these formats:",
          "help.s2d1": "<strong>Universal</strong> (HTML) for Word, Notion, etc. \u2022 <strong>Teams</strong> with Segoe UI styles \u2022 <strong>Email</strong> with safe inline CSS \u2022 <strong>Slack</strong> with mrkdwn format \u2022 <strong>WhatsApp</strong> with *bold*, _italic_, ~strikethrough~ \u2022 <strong>Telegram</strong> with HTML tags and links \u2022 <strong>PDF</strong> via print dialog.",
          "help.s3": "Local History",
          "help.s3d1": "Auto-saves every 30\u202Fs and on blur. Click any version in <strong>History</strong> to restore it.",
          "help.s4": "Table Generator",
          "help.s4d1": "Click <strong>Table</strong> to open the generator. Set rows & columns, fill in the cells and click Insert.",
          "help.s5": "Preview Themes",
          "help.s5d1": "Click <strong>Themes</strong> to switch: <em>GitHub</em>, <em>Modern</em>, <em>Academic</em> or <em>Minimal</em>.",
          "help.s6": "Settings",
          "help.s6d1": "Open <strong>Settings</strong> to toggle sync scroll, dark mode, frosted glass and to switch the interface language.",
          "help.s7": "Markdown Quick Reference",
          "help.s8": "Keyboard Shortcuts"
        },
        "pt-BR": {
          "settings.label": "Ajustes",
          "settings.syncName": "Scroll sincronizado",
          "settings.syncDesc": "Sincroniza scroll entre editor e preview",
          "settings.themeName": "Tema escuro",
          "settings.themeDesc": "Alterna entre modo claro e escuro",
          "settings.glassName": "Vidro fosco",
          "settings.glassDesc": "Efeito frosted glass em toda a UI",
          "settings.langName": "Idioma",
          "settings.langDesc": "Idioma da interface",
          "dock.export": "Exportar",
          "dock.themes": "Temas",
          "dock.history": "Hist\xF3rico",
          "dock.table": "Tabela",
          "dock.clear": "Limpar",
          "dock.settings": "Ajustes",
          "dock.more": "Mais",
          "drop.title": "Solte aqui",
          "drop.descMd": "para carregar o arquivo",
          "drop.descImage": "para inserir como Base64",
          "lint.title": "Avisos",
          "lint.close": "Fechar avisos",
          "lint.closeAria": "Fechar painel de avisos",
          "export.label": "Copiar como\u2026",
          "export.universalDesc": "HTML rico \xB7 Word, Notion e outras apps",
          "export.teamsDesc": "HTML inline com estilos Segoe UI \xB7 c\xF3digo preservado",
          "export.emailDesc": "CSS inline conservador \xB7 tabelas e negritos garantidos",
          "export.slackDesc": "Texto mrkdwn \xB7 formato nativo do Slack",
          "export.whatsappDesc": "Formato de texto \xB7 negrito, it\xE1lico, riscado",
          "export.telegramDesc": "Formato HTML \xB7 negrito, it\xE1lico, c\xF3digo, links",
          "export.printName": "Imprimir / PDF",
          "export.printDesc": "Preview nativo \xB7 usa o tema ativo",
          "history.title": "Hist\xF3rico Local",
          "history.clearBtn": "Apagar tudo",
          "history.hint": "Salvo automaticamente a cada 30\u202Fs e ao sair do editor. Clique em uma vers\xE3o para restaurar.",
          "table.title": "Inserir Tabela",
          "table.rows": "Linhas",
          "table.cols": "Colunas",
          "table.hint": "A primeira linha \xE9 o cabe\xE7alho \xB7 Tab para navegar",
          "table.cancel": "Cancelar",
          "table.insert": "Inserir Tabela",
          "themes.label": "Tema do preview",
          "themes.githubDesc": "Cl\xE1ssico \xB7 azul/verde \xB7 light & dark",
          "themes.modern": "Moderno",
          "themes.modernDesc": "\xCDndigo \xB7 Helvetica \xB7 light & dark",
          "themes.academic": "Acad\xEAmico",
          "themes.academicDesc": "Serifado Georgia \xB7 s\xE9pia \xB7 light & dark",
          "themes.minimal": "Minimalista",
          "themes.minimalDesc": "Neutro \xB7 sem distra\xE7\xE3o \xB7 light & dark",
          "stats.word": "1 palavra",
          "stats.words": (n) => `${n.toLocaleString("pt-BR")} palavras`,
          "stats.chars": (n) => `${n.toLocaleString("pt-BR")} chars`,
          "stats.readTime": (m) => `~${m} min`,
          "lint.heading": (prev, cur) => `Hierarquia de t\xEDtulos: H${prev} seguido de H${cur} \u2014 n\xEDvel intermedi\xE1rio ausente`,
          "lint.unclosedLink": "Link n\xE3o fechado \u2014 falta o `)` de encerramento",
          "lint.imageAlt": "Imagem sem texto alternativo (alt text)",
          "lint.multipleH1": (n) => `${n} t\xEDtulos H1 encontrados \u2014 recomenda-se apenas um por documento`,
          "grammar.repeated": (word) => `Palavra repetida: "${word}"`,
          "grammar.doubleSpace": "Espa\xE7o duplo no meio do texto",
          "issues.one": "1 aviso",
          "issues.many": (n) => `${n} avisos`,
          "issues.overflow": (n) => `\u2026e mais ${n} ${n === 1 ? "aviso" : "avisos"}`,
          "toast.copied": "Copiado! Cole com Ctrl+V",
          "toast.copiedPlain": "Copiado como texto simples",
          "toast.copyError": "Erro ao copiar \u2014 tente manualmente",
          "toast.copiedTeams": "Copiado para Teams! Cole com Ctrl+V",
          "toast.copiedEmail": "Copiado para e-mail! Cole com Ctrl+V",
          "toast.copiedSlack": "Copiado para Slack! Cole com Ctrl+V",
          "toast.copiedWhatsApp": "Copiado para WhatsApp! Cole com Ctrl+V",
          "toast.copiedTelegram": "Copiado para Telegram! Cole com Ctrl+V",
          "toast.fileLoaded": (name) => `"${name}" carregado`,
          "toast.imageInserted": (name) => `Imagem "${name}" inserida`,
          "toast.fileUnsupported": "Arquivo n\xE3o suportado \u2014 use .md ou imagem",
          "toast.tablePasted": "Tabela colada!",
          "toast.htmlConverted": "HTML convertido para Markdown!",
          "toast.tableInserted": "Tabela inserida!",
          "toast.versionRestored": "Vers\xE3o restaurada!",
          "history.justNow": "Agora mesmo",
          "history.minsAgo": (m) => `${m} min atr\xE1s`,
          "history.hoursAgo": (h) => `${h}h atr\xE1s`,
          "history.empty": "Sem hist\xF3rico salvo ainda. O editor salva automaticamente a cada 30\u202Fs.",
          "table.colPlaceholder": (c) => `Coluna ${c}`,
          "table.cellPlaceholder": (r, c) => `linha ${r}, col ${c}`,
          "slack.image": (alt) => `[Imagem: ${alt}]`,
          "slack.imagePlain": "[Imagem]",
          "whatsapp.image": (alt) => `[\u{1F4F7} Imagem: ${alt}]`,
          "whatsapp.imagePlain": "[\u{1F4F7} Imagem]",
          "telegram.image": (alt) => `[\u{1F4F7} Imagem: ${alt}]`,
          "telegram.imagePlain": "[\u{1F4F7} Imagem]",
          "editor.placeholder": "Escreva seu Markdown aqui\u2026",
          "pane.markdown": "Markdown",
          "pane.preview": "Preview",
          "help.btnName": "Ajuda & Wiki",
          "help.btnDesc": "Fun\xE7\xF5es, guia Markdown e atalhos",
          "help.title": "Ajuda & Wiki",
          "help.s1": "Editor & Preview",
          "help.s1d1": "Escreva Markdown no painel esquerdo \u2014 o preview atualiza em tempo real.",
          "help.s1d2": "Arraste e solte um arquivo <strong>.md</strong> no editor para careg\xE1-lo.",
          "help.s1d3": "Arraste e solte uma <strong>imagem</strong> para inseri-la inline como Base64.",
          "help.s1d4": "A barra de estat\xEDsticas mostra contagem de palavras, tempo de leitura e alertas.",
          "help.s1d5": "Cole <strong>HTML</strong> diretamente no editor \u2014 convertido automaticamente para Markdown.",
          "help.s2": "Exportar",
          "help.s2intro": "Clique em <strong>Exportar</strong> no dock para copiar em um desses formatos:",
          "help.s2d1": "<strong>Universal</strong> (HTML) para Word, Notion, etc. \u2022 <strong>Teams</strong> com estilos Segoe UI \u2022 <strong>Email</strong> com CSS inline seguro \u2022 <strong>Slack</strong> com formato mrkdwn \u2022 <strong>WhatsApp</strong> com *negrito*, _it\xE1lico_, ~riscado~ \u2022 <strong>Telegram</strong> com tags HTML e links \u2022 <strong>PDF</strong> via di\xE1logo de impress\xE3o.",
          "help.s3": "Hist\xF3rico Local",
          "help.s3d1": "Salva automaticamente a cada 30\u202Fs e ao sair do campo. Clique em uma vers\xE3o no <strong>Hist\xF3rico</strong> para restaur\xE1-la.",
          "help.s4": "Gerador de Tabela",
          "help.s4d1": "Clique em <strong>Tabela</strong> para abrir o gerador. Defina linhas e colunas, preencha as c\xE9lulas e clique em Inserir.",
          "help.s5": "Temas do Preview",
          "help.s5d1": "Clique em <strong>Temas</strong> para alternar: <em>GitHub</em>, <em>Moderno</em>, <em>Acad\xEAmico</em> ou <em>Minimalista</em>.",
          "help.s6": "Ajustes",
          "help.s6d1": "Abra <strong>Ajustes</strong> para ativar scroll sincronizado, modo escuro, vidro fosco e trocar idioma.",
          "help.s7": "Refer\xEAncia R\xE1pida Markdown",
          "help.s8": "Atalhos de Teclado"
        },
        es: {
          "settings.label": "Ajustes",
          "settings.syncName": "Scroll sincronizado",
          "settings.syncDesc": "Sincroniza el scroll entre editor y vista previa",
          "settings.themeName": "Modo oscuro",
          "settings.themeDesc": "Alterna entre modo claro y oscuro",
          "settings.glassName": "Cristal esmerilado",
          "settings.glassDesc": "Efecto de cristal esmerilado en toda la UI",
          "settings.langName": "Idioma",
          "settings.langDesc": "Idioma de la interfaz",
          "dock.export": "Exportar",
          "dock.themes": "Temas",
          "dock.history": "Historial",
          "dock.table": "Tabla",
          "dock.clear": "Limpiar",
          "dock.settings": "Ajustes",
          "dock.more": "M\xE1s",
          "drop.title": "Suelta aqu\xED",
          "drop.descMd": "para cargar el archivo",
          "drop.descImage": "para insertar como Base64",
          "lint.title": "Advertencias",
          "lint.close": "Cerrar advertencias",
          "lint.closeAria": "Cerrar panel de advertencias",
          "export.label": "Copiar como\u2026",
          "export.universalDesc": "HTML enriquecido \xB7 Word, Notion y otras apps",
          "export.teamsDesc": "HTML inline con estilos Segoe UI \xB7 c\xF3digo preservado",
          "export.emailDesc": "CSS inline conservador \xB7 tablas y negritas garantizadas",
          "export.slackDesc": "Texto mrkdwn \xB7 formato nativo de Slack",
          "export.whatsappDesc": "Formato de texto \xB7 negrita, it\xE1lica, tachado",
          "export.telegramDesc": "Formato HTML \xB7 negrita, it\xE1lica, c\xF3digo, enlaces",
          "export.printName": "Imprimir / PDF",
          "export.printDesc": "Vista previa nativa \xB7 usa el tema activo",
          "history.title": "Historial Local",
          "history.clearBtn": "Borrar todo",
          "history.hint": "Guardado autom\xE1ticamente cada 30\u202Fs y al salir del editor. Haz clic en una versi\xF3n para restaurar.",
          "table.title": "Insertar Tabla",
          "table.rows": "Filas",
          "table.cols": "Columnas",
          "table.hint": "La primera fila es el encabezado \xB7 Tab para navegar",
          "table.cancel": "Cancelar",
          "table.insert": "Insertar Tabla",
          "themes.label": "Tema del preview",
          "themes.githubDesc": "Cl\xE1sico \xB7 azul/verde \xB7 claro & oscuro",
          "themes.modern": "Moderno",
          "themes.modernDesc": "\xCDndigo \xB7 Helvetica \xB7 claro & oscuro",
          "themes.academic": "Acad\xE9mico",
          "themes.academicDesc": "Georgia serif \xB7 sepia \xB7 claro & oscuro",
          "themes.minimal": "Minimalista",
          "themes.minimalDesc": "Neutro \xB7 sin distracciones \xB7 claro & oscuro",
          "stats.word": "1 palabra",
          "stats.words": (n) => `${n.toLocaleString("es")} palabras`,
          "stats.chars": (n) => `${n.toLocaleString("es")} chars`,
          "stats.readTime": (m) => `~${m} min`,
          "lint.heading": (prev, cur) => `Jerarqu\xEDa de encabezados: H${prev} seguido de H${cur} \u2014 nivel intermedio faltante`,
          "lint.unclosedLink": "Enlace no cerrado \u2014 falta el `) de cierre",
          "lint.imageAlt": "Imagen sin texto alternativo (alt text)",
          "lint.multipleH1": (n) => `${n} encabezados H1 encontrados \u2014 se recomienda solo uno por documento`,
          "grammar.repeated": (word) => `Palabra repetida: "${word}"`,
          "grammar.doubleSpace": "Espacio doble en el medio del texto",
          "issues.one": "1 advertencia",
          "issues.many": (n) => `${n} advertencias`,
          "issues.overflow": (n) => `\u2026y ${n} m\xE1s ${n === 1 ? "advertencia" : "advertencias"}`,
          "toast.copied": "\xA1Copiado! Pega con Ctrl+V",
          "toast.copiedPlain": "Copiado como texto simple",
          "toast.copyError": "Error al copiar \u2014 intenta manualmente",
          "toast.copiedTeams": "\xA1Copiado para Teams! Pega con Ctrl+V",
          "toast.copiedEmail": "\xA1Copiado para email! Pega con Ctrl+V",
          "toast.copiedSlack": "\xA1Copiado para Slack! Pega con Ctrl+V",
          "toast.copiedWhatsApp": "\xA1Copiado para WhatsApp! Pega con Ctrl+V",
          "toast.copiedTelegram": "\xA1Copiado para Telegram! Pega con Ctrl+V",
          "toast.fileLoaded": (name) => `"${name}" cargado`,
          "toast.imageInserted": (name) => `Imagen "${name}" insertada`,
          "toast.fileUnsupported": "Archivo no soportado \u2014 usa .md o imagen",
          "toast.tablePasted": "\xA1Tabla pegada!",
          "toast.htmlConverted": "\xA1HTML convertido a Markdown!",
          "toast.tableInserted": "\xA1Tabla insertada!",
          "toast.versionRestored": "\xA1Versi\xF3n restaurada!",
          "history.justNow": "Ahora mismo",
          "history.minsAgo": (m) => `hace ${m} min`,
          "history.hoursAgo": (h) => `hace ${h}h`,
          "history.empty": "Sin historial guardado a\xFAn. El editor guarda autom\xE1ticamente cada 30\u202Fs.",
          "table.colPlaceholder": (c) => `Columna ${c}`,
          "table.cellPlaceholder": (r, c) => `fila ${r}, col ${c}`,
          "slack.image": (alt) => `[Imagen: ${alt}]`,
          "slack.imagePlain": "[Imagen]",
          "whatsapp.image": (alt) => `[\u{1F4F7} Imagen: ${alt}]`,
          "whatsapp.imagePlain": "[\u{1F4F7} Imagen]",
          "telegram.image": (alt) => `[\u{1F4F7} Imagen: ${alt}]`,
          "telegram.imagePlain": "[\u{1F4F7} Imagen]",
          "editor.placeholder": "Escribe tu Markdown aqu\xED\u2026",
          "pane.markdown": "Markdown",
          "pane.preview": "Vista previa",
          "help.btnName": "Ayuda & Wiki",
          "help.btnDesc": "Funciones, gu\xEDa Markdown y atajos",
          "help.title": "Ayuda & Wiki",
          "help.s1": "Editor & Vista Previa",
          "help.s1d1": "Escribe Markdown en el panel izquierdo \u2014 la vista previa se actualiza en tiempo real.",
          "help.s1d2": "Arrastra y suelta un archivo <strong>.md</strong> en el editor para cargarlo.",
          "help.s1d3": "Arrastra y suelta una <strong>imagen</strong> para insertarla inline como Base64.",
          "help.s1d4": "La barra de estad\xEDsticas muestra recuento de palabras, tiempo de lectura y advertencias.",
          "help.s1d5": "Pega <strong>HTML</strong> directamente en el editor \u2014 se convierte autom\xE1ticamente a Markdown.",
          "help.s2": "Exportar",
          "help.s2intro": "Haz clic en <strong>Exportar</strong> en el dock para copiar en uno de estos formatos:",
          "help.s2d1": "<strong>Universal</strong> (HTML) para Word, Notion, etc. \u2022 <strong>Teams</strong> con estilos Segoe UI \u2022 <strong>Email</strong> con CSS inline seguro \u2022 <strong>Slack</strong> con formato mrkdwn \u2022 <strong>WhatsApp</strong> con *negrita*, _it\xE1lica_, ~tachado~ \u2022 <strong>Telegram</strong> con etiquetas HTML y enlaces \u2022 <strong>PDF</strong> a trav\xE9s del di\xE1logo de impresi\xF3n.",
          "help.s3": "Historial Local",
          "help.s3d1": "Se guarda autom\xE1ticamente cada 30\u202Fs y al perder el foco. Haz clic en una versi\xF3n en <strong>Historial</strong> para restaurarla.",
          "help.s4": "Generador de Tablas",
          "help.s4d1": "Haz clic en <strong>Tabla</strong> para abrir el generador. Define filas y columnas, rellena las celdas y haz clic en Insertar.",
          "help.s5": "Temas del Preview",
          "help.s5d1": "Haz clic en <strong>Temas</strong> para cambiar: <em>GitHub</em>, <em>Moderno</em>, <em>Acad\xE9mico</em> o <em>Minimalista</em>.",
          "help.s6": "Ajustes",
          "help.s6d1": "Abre <strong>Ajustes</strong> para activar scroll sincronizado, modo oscuro, cristal esmerilado y cambiar el idioma.",
          "help.s7": "Referencia R\xE1pida de Markdown",
          "help.s8": "Atajos de Teclado"
        },
        fr: {
          "settings.label": "Param\xE8tres",
          "settings.syncName": "D\xE9filement synchronis\xE9",
          "settings.syncDesc": "Synchronise le d\xE9filement entre l\u2019\xE9diteur et l\u2019aper\xE7u",
          "settings.themeName": "Mode sombre",
          "settings.themeDesc": "Basculer entre mode clair et sombre",
          "settings.glassName": "Verre d\xE9poli",
          "settings.glassDesc": "Effet verre d\xE9poli sur toute l\u2019interface",
          "settings.langName": "Langue",
          "settings.langDesc": "Langue de l\u2019interface",
          "dock.export": "Exporter",
          "dock.themes": "Th\xE8mes",
          "dock.history": "Historique",
          "dock.table": "Tableau",
          "dock.clear": "Effacer",
          "dock.settings": "Param\xE8tres",
          "dock.more": "Plus",
          "drop.title": "D\xE9posez ici",
          "drop.descMd": "pour charger le fichier",
          "drop.descImage": "pour ins\xE9rer en Base64",
          "lint.title": "Avertissements",
          "lint.close": "Fermer les avertissements",
          "lint.closeAria": "Fermer le panneau d\u2019avertissements",
          "export.label": "Copier en\u2026",
          "export.universalDesc": "HTML enrichi \xB7 Word, Notion et autres apps",
          "export.teamsDesc": "HTML inline avec styles Segoe UI \xB7 code pr\xE9serv\xE9",
          "export.emailDesc": "CSS inline conservateur \xB7 tableaux et gras garantis",
          "export.slackDesc": "Texte mrkdwn \xB7 format natif Slack",
          "export.whatsappDesc": "Format texte \xB7 gras, italique, barr\xE9",
          "export.telegramDesc": "Format HTML \xB7 gras, italique, code, liens",
          "export.printName": "Imprimer / PDF",
          "export.printDesc": "Aper\xE7u natif \xB7 utilise le th\xE8me actif",
          "history.title": "Historique local",
          "history.clearBtn": "Tout effacer",
          "history.hint": "Sauvegard\xE9 automatiquement toutes les 30\u202Fs et \xE0 la sortie de l\u2019\xE9diteur. Cliquez sur une version pour la restaurer.",
          "table.title": "Ins\xE9rer un tableau",
          "table.rows": "Lignes",
          "table.cols": "Colonnes",
          "table.hint": "La premi\xE8re ligne est l\u2019en-t\xEAte \xB7 Tab pour naviguer",
          "table.cancel": "Annuler",
          "table.insert": "Ins\xE9rer le tableau",
          "themes.label": "Th\xE8me de l\u2019aper\xE7u",
          "themes.githubDesc": "Classique \xB7 bleu/vert \xB7 clair & sombre",
          "themes.modern": "Moderne",
          "themes.modernDesc": "Indigo \xB7 Helvetica \xB7 clair & sombre",
          "themes.academic": "Acad\xE9mique",
          "themes.academicDesc": "Georgia serif \xB7 s\xE9pia \xB7 clair & sombre",
          "themes.minimal": "Minimaliste",
          "themes.minimalDesc": "Neutre \xB7 sans distraction \xB7 clair & sombre",
          "stats.word": "1 mot",
          "stats.words": (n) => `${n.toLocaleString("fr")}\xA0mots`,
          "stats.chars": (n) => `${n.toLocaleString("fr")}\xA0chars`,
          "stats.readTime": (m) => `~${m}\xA0min`,
          "lint.heading": (prev, cur) => `Hi\xE9rarchie des titres\xA0: H${prev} suivi de H${cur} \u2014 niveau interm\xE9diaire manquant`,
          "lint.unclosedLink": "Lien non ferm\xE9 \u2014 la parenth\xE8se `)` de fermeture est manquante",
          "lint.imageAlt": "Image sans texte alternatif (alt text)",
          "lint.multipleH1": (n) => `${n} titres H1 trouv\xE9s \u2014 un seul est recommand\xE9 par document`,
          "grammar.repeated": (word) => `Mot r\xE9p\xE9t\xE9\xA0: \xAB\xA0${word}\xA0\xBB`,
          "grammar.doubleSpace": "Double espace au milieu du texte",
          "issues.one": "1 avertissement",
          "issues.many": (n) => `${n} avertissements`,
          "issues.overflow": (n) => `\u2026et ${n} de plus`,
          "toast.copied": "Copi\xE9\xA0! Collez avec Ctrl+V",
          "toast.copiedPlain": "Copi\xE9 en texte brut",
          "toast.copyError": "Erreur de copie \u2014 essayez manuellement",
          "toast.copiedTeams": "Copi\xE9 pour Teams\xA0! Collez avec Ctrl+V",
          "toast.copiedEmail": "Copi\xE9 pour e-mail\xA0! Collez avec Ctrl+V",
          "toast.copiedSlack": "Copi\xE9 pour Slack\xA0! Collez avec Ctrl+V",
          "toast.copiedWhatsApp": "Copi\xE9 pour WhatsApp\xA0! Collez avec Ctrl+V",
          "toast.copiedTelegram": "Copi\xE9 pour Telegram\xA0! Collez avec Ctrl+V",
          "toast.fileLoaded": (name) => `\xAB\xA0${name}\xA0\xBB charg\xE9`,
          "toast.imageInserted": (name) => `Image \xAB\xA0${name}\xA0\xBB ins\xE9r\xE9e`,
          "toast.fileUnsupported": "Fichier non support\xE9 \u2014 utilisez .md ou une image",
          "toast.tablePasted": "Tableau coll\xE9\xA0!",
          "toast.htmlConverted": "HTML converti en Markdown\xA0!",
          "toast.tableInserted": "Tableau ins\xE9r\xE9\xA0!",
          "toast.versionRestored": "Version restaur\xE9e\xA0!",
          "history.justNow": "\xC0 l\u2019instant",
          "history.minsAgo": (m) => `il y a ${m}\xA0min`,
          "history.hoursAgo": (h) => `il y a ${h}\xA0h`,
          "history.empty": "Aucun historique enregistr\xE9. L\u2019\xE9diteur sauvegarde automatiquement toutes les 30\u202Fs.",
          "table.colPlaceholder": (c) => `Colonne ${c}`,
          "table.cellPlaceholder": (r, c) => `ligne ${r}, col ${c}`,
          "slack.image": (alt) => `[Image\xA0: ${alt}]`,
          "slack.imagePlain": "[Image]",
          "whatsapp.image": (alt) => `[\u{1F4F7} Image\xA0: ${alt}]`,
          "whatsapp.imagePlain": "[\u{1F4F7} Image]",
          "telegram.image": (alt) => `[\u{1F4F7} Image\xA0: ${alt}]`,
          "telegram.imagePlain": "[\u{1F4F7} Image]",
          "editor.placeholder": "R\xE9digez votre Markdown ici\u2026",
          "pane.markdown": "Markdown",
          "pane.preview": "Aper\xE7u",
          "help.btnName": "Aide & Wiki",
          "help.btnDesc": "Fonctionnalit\xE9s, guide Markdown et raccourcis",
          "help.title": "Aide & Wiki",
          "help.s1": "\xC9diteur & Aper\xE7u",
          "help.s1d1": "R\xE9digez du Markdown dans le panneau gauche \u2014 l\u2019aper\xE7u se met \xE0 jour en temps r\xE9el.",
          "help.s1d2": "Glissez-d\xE9posez un fichier <strong>.md</strong> dans l\u2019\xE9diteur pour le charger.",
          "help.s1d3": "Glissez-d\xE9posez une <strong>image</strong> pour l\u2019ins\xE9rer en ligne en Base64.",
          "help.s1d4": "La barre de statistiques affiche le nombre de mots, le temps de lecture et les avertissements.",
          "help.s1d5": "Collez du <strong>HTML</strong> directement dans l\u2019\xE9diteur \u2014 il est automatiquement converti en Markdown.",
          "help.s2": "Exporter",
          "help.s2intro": "Cliquez sur <strong>Exporter</strong> dans le dock pour copier dans l\u2019un de ces formats\xA0:",
          "help.s2d1": "<strong>Universal</strong> (HTML) pour Word, Notion, etc. \u2022 <strong>Teams</strong> avec styles Segoe UI \u2022 <strong>Email</strong> avec CSS inline s\xE9curis\xE9 \u2022 <strong>Slack</strong> avec format mrkdwn \u2022 <strong>WhatsApp</strong> avec *gras*, _italique_, ~barr\xE9~ \u2022 <strong>Telegram</strong> avec \xE9tiquettes HTML et liens \u2022 <strong>PDF</strong> via dialogue d'impression.",
          "help.s3": "Historique local",
          "help.s3d1": "Sauvegarde automatiquement toutes les 30\u202Fs et \xE0 la perte du focus. Cliquez sur une version dans <strong>Historique</strong> pour la restaurer.",
          "help.s4": "G\xE9n\xE9rateur de tableaux",
          "help.s4d1": "Cliquez sur <strong>Tableau</strong> pour ouvrir le g\xE9n\xE9rateur. D\xE9finissez les lignes et colonnes, remplissez les cellules et cliquez sur Ins\xE9rer.",
          "help.s5": "Th\xE8mes de l\u2019aper\xE7u",
          "help.s5d1": "Cliquez sur <strong>Th\xE8mes</strong> pour choisir\xA0: <em>GitHub</em>, <em>Moderne</em>, <em>Acad\xE9mique</em> ou <em>Minimaliste</em>.",
          "help.s6": "Param\xE8tres",
          "help.s6d1": "Ouvrez les <strong>Param\xE8tres</strong> pour activer le d\xE9filement synchronis\xE9, le mode sombre, le verre d\xE9poli et changer la langue.",
          "help.s7": "R\xE9f\xE9rence Markdown rapide",
          "help.s8": "Raccourcis clavier"
        },
        "pt-PT": {
          "settings.label": "Defini\xE7\xF5es",
          "settings.syncName": "Scroll sincronizado",
          "settings.syncDesc": "Sincroniza o scroll entre o editor e a pr\xE9-visualiza\xE7\xE3o",
          "settings.themeName": "Modo escuro",
          "settings.themeDesc": "Alterna entre modo claro e escuro",
          "settings.glassName": "Vidro fosco",
          "settings.glassDesc": "Efeito frosted glass em toda a interface",
          "settings.langName": "Idioma",
          "settings.langDesc": "Idioma da interface",
          "dock.export": "Exportar",
          "dock.themes": "Temas",
          "dock.history": "Hist\xF3rico",
          "dock.table": "Tabela",
          "dock.clear": "Limpar",
          "dock.settings": "Defini\xE7\xF5es",
          "dock.more": "Mais",
          "drop.title": "Largue aqui",
          "drop.descMd": "para carregar o ficheiro",
          "drop.descImage": "para inserir como Base64",
          "lint.title": "Avisos",
          "lint.close": "Fechar avisos",
          "lint.closeAria": "Fechar painel de avisos",
          "export.label": "Copiar como\u2026",
          "export.universalDesc": "HTML rico \xB7 Word, Notion e outras aplica\xE7\xF5es",
          "export.teamsDesc": "HTML inline com estilos Segoe UI \xB7 c\xF3digo preservado",
          "export.emailDesc": "CSS inline conservador \xB7 tabelas e negritos garantidos",
          "export.slackDesc": "Texto mrkdwn \xB7 formato nativo do Slack",
          "export.whatsappDesc": "Formato de texto \xB7 negrito, it\xE1lico, riscado",
          "export.telegramDesc": "Formato HTML \xB7 negrito, it\xE1lico, c\xF3digo, liga\xE7\xF5es",
          "export.printName": "Imprimir / PDF",
          "export.printDesc": "Pr\xE9-visualiza\xE7\xE3o nativa \xB7 usa o tema ativo",
          "history.title": "Hist\xF3rico Local",
          "history.clearBtn": "Apagar tudo",
          "history.hint": "Guardado automaticamente a cada 30\u202Fs e ao sair do editor. Clique numa vers\xE3o para restaurar.",
          "table.title": "Inserir Tabela",
          "table.rows": "Linhas",
          "table.cols": "Colunas",
          "table.hint": "A primeira linha \xE9 o cabe\xE7alho \xB7 Tab para navegar",
          "table.cancel": "Cancelar",
          "table.insert": "Inserir Tabela",
          "themes.label": "Tema da pr\xE9-visualiza\xE7\xE3o",
          "themes.githubDesc": "Cl\xE1ssico \xB7 azul/verde \xB7 light & dark",
          "themes.modern": "Moderno",
          "themes.modernDesc": "\xCDndigo \xB7 Helvetica \xB7 light & dark",
          "themes.academic": "Acad\xE9mico",
          "themes.academicDesc": "Georgia serif \xB7 s\xE9pia \xB7 light & dark",
          "themes.minimal": "Minimalista",
          "themes.minimalDesc": "Neutro \xB7 sem distra\xE7\xE3o \xB7 light & dark",
          "stats.word": "1 palavra",
          "stats.words": (n) => `${n.toLocaleString("pt-PT")} palavras`,
          "stats.chars": (n) => `${n.toLocaleString("pt-PT")} chars`,
          "stats.readTime": (m) => `~${m} min`,
          "lint.heading": (prev, cur) => `Hierarquia de t\xEDtulos: H${prev} seguido de H${cur} \u2014 n\xEDvel intermedi\xE1rio em falta`,
          "lint.unclosedLink": "Liga\xE7\xE3o n\xE3o fechada \u2014 falta o `)` de encerramento",
          "lint.imageAlt": "Imagem sem texto alternativo (alt text)",
          "lint.multipleH1": (n) => `${n} t\xEDtulos H1 encontrados \u2014 recomenda-se apenas um por documento`,
          "grammar.repeated": (word) => `Palavra repetida: \u201C${word}\u201D`,
          "grammar.doubleSpace": "Espa\xE7o duplo no meio do texto",
          "issues.one": "1 aviso",
          "issues.many": (n) => `${n} avisos`,
          "issues.overflow": (n) => `\u2026e mais ${n} ${n === 1 ? "aviso" : "avisos"}`,
          "toast.copied": "Copiado! Cole com Ctrl+V",
          "toast.copiedPlain": "Copiado como texto simples",
          "toast.copyError": "Erro ao copiar \u2014 tente manualmente",
          "toast.copiedTeams": "Copiado para o Teams! Cole com Ctrl+V",
          "toast.copiedEmail": "Copiado para e-mail! Cole com Ctrl+V",
          "toast.copiedSlack": "Copiado para o Slack! Cole com Ctrl+V",
          "toast.copiedWhatsApp": "Copiado para o WhatsApp! Cole com Ctrl+V",
          "toast.copiedTelegram": "Copiado para o Telegram! Cole com Ctrl+V",
          "toast.fileLoaded": (name) => `\u201C${name}\u201D carregado`,
          "toast.imageInserted": (name) => `Imagem \u201C${name}\u201D inserida`,
          "toast.fileUnsupported": "Ficheiro n\xE3o suportado \u2014 utilize .md ou imagem",
          "toast.tablePasted": "Tabela colada!",
          "toast.htmlConverted": "HTML convertido para Markdown!",
          "toast.tableInserted": "Tabela inserida!",
          "toast.versionRestored": "Vers\xE3o restaurada!",
          "history.justNow": "Agora mesmo",
          "history.minsAgo": (m) => `h\xE1 ${m} min`,
          "history.hoursAgo": (h) => `h\xE1 ${h}h`,
          "history.empty": "Sem hist\xF3rico guardado ainda. O editor guarda automaticamente a cada 30\u202Fs.",
          "table.colPlaceholder": (c) => `Coluna ${c}`,
          "table.cellPlaceholder": (r, c) => `linha ${r}, col ${c}`,
          "slack.image": (alt) => `[Imagem: ${alt}]`,
          "slack.imagePlain": "[Imagem]",
          "whatsapp.image": (alt) => `[\u{1F4F7} Imagem: ${alt}]`,
          "whatsapp.imagePlain": "[\u{1F4F7} Imagem]",
          "telegram.image": (alt) => `[\u{1F4F7} Imagem: ${alt}]`,
          "telegram.imagePlain": "[\u{1F4F7} Imagem]",
          "editor.placeholder": "Escreva o seu Markdown aqui\u2026",
          "pane.markdown": "Markdown",
          "pane.preview": "Pr\xE9-visualiza\xE7\xE3o",
          "help.btnName": "Ajuda & Wiki",
          "help.btnDesc": "Funcionalidades, guia Markdown e atalhos",
          "help.title": "Ajuda & Wiki",
          "help.s1": "Editor & Pr\xE9-visualiza\xE7\xE3o",
          "help.s1d1": "Escreva Markdown no painel esquerdo \u2014 a pr\xE9-visualiza\xE7\xE3o atualiza em tempo real.",
          "help.s1d2": "Arraste e largue um ficheiro <strong>.md</strong> no editor para o carregar.",
          "help.s1d3": "Arraste e largue uma <strong>imagem</strong> para a inserir inline como Base64.",
          "help.s1d4": "A barra de estat\xEDsticas mostra contagem de palavras, tempo de leitura e avisos.",
          "help.s1d5": "Cole <strong>HTML</strong> diretamente no editor \u2014 convertido automaticamente para Markdown.",
          "help.s2": "Exportar",
          "help.s2intro": "Clique em <strong>Exportar</strong> no dock para copiar num destes formatos:",
          "help.s2d1": "<strong>Universal</strong> (HTML) para Word, Notion, etc. \u2022 <strong>Teams</strong> com estilos Segoe UI \u2022 <strong>Email</strong> com CSS inline seguro \u2022 <strong>Slack</strong> com formato mrkdwn \u2022 <strong>WhatsApp</strong> com *negrito*, _it\xE1lico_, ~riscado~ \u2022 <strong>Telegram</strong> com tags HTML e links \u2022 <strong>PDF</strong> via di\xE1logo de impress\xE3o.",
          "help.s3": "Hist\xF3rico Local",
          "help.s3d1": "Guarda automaticamente a cada 30\u202Fs e ao sair do campo. Clique numa vers\xE3o no <strong>Hist\xF3rico</strong> para a restaurar.",
          "help.s4": "Gerador de Tabela",
          "help.s4d1": "Clique em <strong>Tabela</strong> para abrir o gerador. Defina linhas e colunas, preencha as c\xE9lulas e clique em Inserir.",
          "help.s5": "Temas da Pr\xE9-visualiza\xE7\xE3o",
          "help.s5d1": "Clique em <strong>Temas</strong> para alternar: <em>GitHub</em>, <em>Moderno</em>, <em>Acad\xE9mico</em> ou <em>Minimalista</em>.",
          "help.s6": "Defini\xE7\xF5es",
          "help.s6d1": "Abra as <strong>Defini\xE7\xF5es</strong> para ativar scroll sincronizado, modo escuro, vidro fosco e mudar o idioma.",
          "help.s7": "Refer\xEAncia R\xE1pida Markdown",
          "help.s8": "Atalhos de Teclado"
        }
      };
      currentLang = "en";
    }
  });

  // src/converter.ts
  function convertToSlack(md) {
    let out = md;
    out = out.replace(
      /!\[([^\]]*)\]\([^)]+\)/g,
      (_, alt) => alt ? t("slack.image", alt) : t("slack.imagePlain")
    );
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<$2|$1>");
    out = out.replace(/^#{1,6}\s+(.+)$/gm, "*$1*");
    out = out.replace(/\*\*([^*\n]+)\*\*/g, "*$1*");
    out = out.replace(/__([^_\n]+)__/g, "*$1*");
    out = out.replace(/(?<![*_])\*([^*\n]+)\*(?![*_])/g, "_$1_");
    out = out.replace(/~~([^~\n]+)~~/g, "~$1~");
    out = out.replace(
      /^[-*_]{3,}$/gm,
      "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
    );
    out = out.replace(/^(\s*)-\s+\[x\]/gim, "$1\u2705");
    out = out.replace(/^(\s*)-\s+\[ \]/gim, "$1\u2610");
    out = out.replace(/^```[a-zA-Z0-9_+\-]*$/gm, "```");
    return out;
  }
  function convertToWhatsApp(md) {
    let out = md;
    out = out.replace(
      /!\[([^\]]*)\]\([^)]+\)/g,
      (_, alt) => alt ? t("whatsapp.image", alt) : t("whatsapp.imagePlain")
    );
    out = out.replace(/^#{1,6}\s+(.+)$/gm, "*$1*");
    out = out.replace(/\*\*([^*\n]+)\*\*/g, "*$1*");
    out = out.replace(/__([^_\n]+)__/g, "*$1*");
    out = out.replace(/(?<![*_])\*([^*\n]+)\*(?![*_])/g, "_$1_");
    out = out.replace(/~~([^~\n]+)~~/g, "~$1~");
    out = out.replace(/`([^`\n]+)`/g, "```$1```");
    out = out.replace(/^```[a-zA-Z0-9_+\-]*\n/gm, "```\n");
    out = out.replace(/^[-*_]{3,}$/gm, "\u2500".repeat(20));
    out = out.replace(/^(\s*)-\s+\[x\]/gim, "$1\u2713");
    out = out.replace(/^(\s*)-\s+\[ \]/gim, "$1\u2610");
    return out;
  }
  function convertToTelegram(md) {
    let out = md;
    out = out.replace(
      /!\[([^\]]*)\]\([^)]+\)/g,
      (_, alt) => alt ? t("telegram.image", alt) : t("telegram.imagePlain")
    );
    out = out.replace(/^# (.+)$/gm, "*$1*");
    out = out.replace(/^## (.+)$/gm, "*$1*");
    out = out.replace(/^### (.+)$/gm, "*$1*");
    out = out.replace(/^#### (.+)$/gm, "_$1_");
    out = out.replace(/^##### (.+)$/gm, "_$1_");
    out = out.replace(/^###### (.+)$/gm, "_$1_");
    out = out.replace(/\*\*([^*\n]+)\*\*/g, "*$1*");
    out = out.replace(/__([^_\n]+)__/g, "*$1*");
    out = out.replace(/(?<![*_])\*([^*\n]+)\*(?![*_])/g, "_$1_");
    out = out.replace(/~~([^~\n]+)~~/g, "~$1~");
    out = out.replace(/`([^`\n]+)`/g, "```$1```");
    out = out.replace(/^```[a-zA-Z0-9_+\-]*\n/gm, "```\n");
    out = out.replace(/^[-*_]{3,}$/gm, "\u2500".repeat(20));
    out = out.replace(/^(\s*)-\s+\[x\]/gim, "$1\u2713");
    out = out.replace(/^(\s*)-\s+\[ \]/gim, "$1\u2610");
    return out;
  }
  function walkNode(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent;
    if (node.nodeType !== Node.ELEMENT_NODE) return "";
    const tag = node.tagName.toLowerCase();
    const children = () => [...node.childNodes].map(walkNode).join("");
    switch (tag) {
      case "h1":
        return `
# ${children().trim()}

`;
      case "h2":
        return `
## ${children().trim()}

`;
      case "h3":
        return `
### ${children().trim()}

`;
      case "h4":
        return `
#### ${children().trim()}

`;
      case "h5":
        return `
##### ${children().trim()}

`;
      case "h6":
        return `
###### ${children().trim()}

`;
      case "p":
        return `
${children()}
`;
      case "br":
        return "\n";
      case "strong":
      case "b": {
        const ib = children().trim();
        return ib ? `**${ib}**` : "";
      }
      case "em":
      case "i": {
        const ii = children().trim();
        return ii ? `*${ii}*` : "";
      }
      case "del":
      case "s": {
        const id = children().trim();
        return id ? `~~${id}~~` : "";
      }
      case "code":
        if (node.closest("pre")) return children();
        return `\`${children()}\``;
      case "pre": {
        const codeEl = node.querySelector("code");
        const lang = codeEl?.className?.match(/language-(\S+)/)?.[1] ?? "";
        const text = (codeEl ? codeEl.textContent : node.textContent).trim();
        return `
\`\`\`${lang}
${text}
\`\`\`
`;
      }
      case "a": {
        const href = node.getAttribute("href") ?? "";
        const text = children().trim();
        if (!text) return href;
        if (!href || href === text) return text;
        return `[${text}](${href})`;
      }
      case "img": {
        const src = node.getAttribute("src") ?? "";
        const alt = node.getAttribute("alt") ?? "";
        return `![${alt}](${src})`;
      }
      case "ul":
        return "\n" + [...node.children].filter((c) => c.tagName === "LI").map((li) => `- ${walkNode(li).trim()}`).join("\n") + "\n";
      case "ol":
        return "\n" + [...node.children].filter((c) => c.tagName === "LI").map((li, i) => `${i + 1}. ${walkNode(li).trim()}`).join("\n") + "\n";
      case "li":
        return children();
      case "blockquote": {
        const bq = children().trim();
        return "\n" + bq.split("\n").map((l) => `> ${l}`).join("\n") + "\n";
      }
      case "hr":
        return "\n---\n";
      case "table":
        return tableNodeToMarkdown(node);
      case "thead":
      case "tbody":
      case "tfoot":
        return children();
      case "tr":
      case "th":
      case "td":
        return children();
      case "script":
      case "style":
      case "head":
      case "meta":
      case "link":
        return "";
      default:
        return children();
    }
  }
  function tableNodeToMarkdown(tableNode) {
    const rows = [...tableNode.querySelectorAll("tr")];
    if (!rows.length) return "";
    const allCells = rows.map(
      (row) => [...row.querySelectorAll("th, td")].map(
        (c) => c.textContent.trim().replace(/\|/g, "\\|")
      )
    );
    const colCount = Math.max(...allCells.map((r) => r.length));
    const padded = allCells.map((r) => {
      const copy = [...r];
      while (copy.length < colCount) copy.push("");
      return copy;
    });
    const header = "| " + padded[0].join(" | ") + " |";
    const sep = "| " + padded[0].map(() => "---").join(" | ") + " |";
    const body = padded.slice(1).map((r) => "| " + r.join(" | ") + " |").join("\n");
    return "\n" + header + "\n" + sep + (body ? "\n" + body : "") + "\n";
  }
  function htmlToMarkdown(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return walkNode(div).replace(/\n{3,}/g, "\n\n").trim();
  }
  function isTsvData(text) {
    const lines = text.split("\n").filter((l) => l.trim());
    return lines.length >= 1 && lines[0].includes("	");
  }
  function tsvToMarkdown(tsv) {
    const rows = tsv.split("\n").filter((l) => l.trim()).map(
      (r) => r.replace(/\r$/, "").split("	").map((c) => c.trim().replace(/\|/g, "\\|"))
    );
    if (!rows.length) return tsv;
    const colCount = Math.max(...rows.map((r) => r.length));
    const padded = rows.map((r) => {
      const copy = [...r];
      while (copy.length < colCount) copy.push("");
      return copy;
    });
    const header = "| " + padded[0].join(" | ") + " |";
    const sep = "| " + padded[0].map(() => "---").join(" | ") + " |";
    const body = padded.slice(1).map((r) => "| " + r.join(" | ") + " |").join("\n");
    return header + "\n" + sep + (body ? "\n" + body : "");
  }
  var init_converter = __esm({
    "src/converter.ts"() {
      init_i18n();
    }
  });

  // src/export-builder.ts
  function buildInlineStyledHTML(markdownBodyEl, platform) {
    const clone = markdownBodyEl.cloneNode(true);
    const isTeams = platform === "teams";
    const fontStack = isTeams ? "'Segoe UI','Helvetica Neue',Arial,sans-serif" : "Arial,'Helvetica Neue',Helvetica,sans-serif";
    const p = {
      text: "#1f2328",
      secondary: "#57606a",
      accent: "#0969da",
      border: "#d0d7de",
      codeBg: "#f6f8fa",
      codeText: "#cf222e",
      thBg: "#f6f8fa",
      quoteBg: "#f6f8fa",
      quoteBorder: "#d0d7de",
      quoteText: "#57606a"
    };
    function styleEl(el) {
      const tag = el.tagName.toLowerCase();
      const f = `font-family:${fontStack};`;
      switch (tag) {
        case "h1":
          el.setAttribute(
            "style",
            `${f}font-size:24px;font-weight:700;color:${p.text};margin:0 0 16px;padding-bottom:8px;border-bottom:2px solid ${p.border};line-height:1.3;`
          );
          break;
        case "h2":
          el.setAttribute(
            "style",
            `${f}font-size:20px;font-weight:700;color:${p.text};margin:24px 0 12px;padding-bottom:6px;border-bottom:1px solid ${p.border};line-height:1.3;`
          );
          break;
        case "h3":
          el.setAttribute(
            "style",
            `${f}font-size:17px;font-weight:700;color:${p.text};margin:20px 0 8px;line-height:1.3;`
          );
          break;
        case "h4":
        case "h5":
        case "h6":
          el.setAttribute(
            "style",
            `${f}font-size:15px;font-weight:700;color:${p.text};margin:16px 0 8px;line-height:1.3;`
          );
          break;
        case "p":
          el.setAttribute(
            "style",
            `${f}font-size:15px;line-height:1.75;color:${p.text};margin:0 0 14px;`
          );
          break;
        case "ul":
        case "ol":
          el.setAttribute(
            "style",
            `${f}font-size:15px;line-height:1.75;color:${p.text};margin:0 0 14px;padding-left:24px;`
          );
          break;
        case "li":
          el.setAttribute(
            "style",
            `${f}font-size:15px;line-height:1.75;color:${p.text};margin:0 0 4px;`
          );
          break;
        case "code":
          if (el.closest("pre")) {
            el.setAttribute(
              "style",
              `font-family:'Courier New',Consolas,monospace;background:none;color:inherit;padding:0;font-size:13px;line-height:1.5;`
            );
          } else {
            el.setAttribute(
              "style",
              `font-family:'Courier New',Consolas,monospace;background:${p.codeBg};color:${p.codeText};padding:2px 6px;border-radius:3px;font-size:87%;`
            );
          }
          break;
        case "pre":
          el.setAttribute(
            "style",
            `background:${p.codeBg};padding:14px 18px;border-radius:${isTeams ? "6px" : "4px"};margin:0 0 16px;border:1px solid ${p.border};font-family:'Courier New',Consolas,monospace;font-size:13px;line-height:1.5;white-space:pre;overflow:auto;`
          );
          break;
        case "table":
          el.setAttribute(
            "style",
            `border-collapse:collapse;width:100%;margin:0 0 16px;font-size:14px;${f}`
          );
          el.setAttribute("cellpadding", "0");
          el.setAttribute("cellspacing", "0");
          break;
        case "th":
          el.setAttribute(
            "style",
            `border:1px solid ${p.border};padding:8px 14px;text-align:left;background:${p.thBg};font-weight:600;font-size:13px;color:${p.secondary};${f}`
          );
          break;
        case "td":
          el.setAttribute(
            "style",
            `border:1px solid ${p.border};padding:8px 14px;text-align:left;${f}color:${p.text};`
          );
          break;
        case "blockquote":
          el.setAttribute(
            "style",
            `${f}margin:0 0 16px;padding:10px 14px;border-left:4px solid ${p.quoteBorder};background:${p.quoteBg};font-style:italic;color:${p.quoteText};font-size:15px;line-height:1.75;`
          );
          break;
        case "strong":
          el.setAttribute("style", "font-weight:700;");
          break;
        case "em":
          el.setAttribute("style", "font-style:italic;");
          break;
        case "del":
          el.setAttribute("style", "text-decoration:line-through;");
          break;
        case "a":
          el.setAttribute(
            "style",
            `color:${p.accent};text-decoration:none;`
          );
          break;
        case "img":
          el.setAttribute("style", "max-width:100%;height:auto;");
          break;
        case "hr":
          el.setAttribute(
            "style",
            `border:none;border-top:1px solid ${p.border};margin:24px 0;`
          );
          break;
      }
      for (const child of el.children) styleEl(child);
    }
    for (const child of clone.children) styleEl(child);
    const wrap = document.createElement("div");
    wrap.setAttribute(
      "style",
      `font-family:${fontStack};font-size:15px;line-height:1.75;color:${p.text};max-width:720px;`
    );
    wrap.innerHTML = clone.innerHTML;
    return wrap.outerHTML;
  }
  var init_export_builder = __esm({
    "src/export-builder.ts"() {
    }
  });

  // src/glass-distortion.ts
  var require_glass_distortion = __commonJS({
    "src/glass-distortion.ts"() {
      var GlassDistortion = {
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
          const outer = Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) + Math.min(Math.max(qx, qy), 0) - r;
          return -outer;
        },
        // ── Generate a 1×1 neutral displacement map data URL ──
        // Used as the placeholder until the first real map is computed,
        // so that SVG filters emit zero displacement instead of rendering
        // artefacts from an empty href.
        _neutralDataUrl() {
          const c = document.createElement("canvas");
          c.width = 2;
          c.height = 2;
          const ctx = c.getContext("2d");
          const id = ctx.createImageData(2, 2);
          for (let i = 0; i < 16; i += 4) {
            id.data[i] = id.data[i + 1] = id.data[i + 2] = 128;
            id.data[i + 3] = 255;
          }
          ctx.putImageData(id, 0, 0);
          return c.toDataURL("image/png");
        },
        // ── Build displacement map ──
        // Returns { dataUrl: string, scale: number (pixels), width, height }
        build(width, height, borderRadius) {
          const W = Math.max(Math.ceil(width), 2);
          const H = Math.max(Math.ceil(height), 2);
          const R = Math.min(borderRadius, Math.min(W, H) / 2);
          const cx = W / 2;
          const cy = H / 2;
          const bezelW = Math.min(
            Math.min(W, H) * this.BEZEL_FRACTION * 0.5,
            R * 0.85
          );
          const canvas = document.createElement("canvas");
          canvas.width = W;
          canvas.height = H;
          const ctx = canvas.getContext("2d", { willReadFrequently: false });
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
              if (dist <= 0 || dist >= bezelW) continue;
              const t2 = dist / bezelW;
              const slope = this.GLASS_THICKNESS * 0.5 / Math.sqrt(t2 + 1e-3);
              const sinT1 = slope / Math.sqrt(1 + slope * slope);
              const cosT1 = Math.sqrt(Math.max(0, 1 - sinT1 * sinT1));
              const sinT2 = sinT1 / this.IOR;
              const cosT2 = Math.sqrt(Math.max(0, 1 - sinT2 * sinT2));
              const tanT1 = sinT1 / (cosT1 + 1e-9);
              const tanT2 = sinT2 / (cosT2 + 1e-9);
              const mag = Math.abs(tanT1 - tanT2) * bezelW;
              mags[i] = mag;
              if (mag > maxMag) maxMag = mag;
              const nx = cx - px;
              const ny = cy - py;
              const len = Math.sqrt(nx * nx + ny * ny) + 1e-9;
              dxArr[i] = nx / len;
              dyArr[i] = ny / len;
            }
          }
          if (maxMag < 1e-3) maxMag = 1;
          for (let i = 0; i < W * H; i++) {
            const idx = i * 4;
            const mag = mags[i];
            if (mag > 0) {
              const n = mag / maxMag;
              d[idx] = Math.min(
                255,
                Math.max(0, 128 + dxArr[i] * n * 127 + 0.5 | 0)
              );
              d[idx + 1] = Math.min(
                255,
                Math.max(0, 128 + dyArr[i] * n * 127 + 0.5 | 0)
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
            dataUrl: canvas.toDataURL("image/png"),
            scale: maxMag,
            width: W,
            height: H
          };
        },
        // ── Dock filter (pill) ──
        // Uses userSpaceOnUse pixel coordinates — updated to exact element size.
        _applyToDock(w, h) {
          const filter = document.getElementById("glass-distortion-dock");
          if (!filter) return;
          const feImg = filter.querySelector("feImage");
          const feDisp = filter.querySelector("feDisplacementMap");
          if (!feImg || !feDisp) return;
          const r = h / 2;
          const { dataUrl, scale } = this.build(w, h, r);
          feImg.setAttribute("href", dataUrl);
          feImg.setAttribute("width", String(Math.ceil(w)));
          feImg.setAttribute("height", String(Math.ceil(h)));
          feDisp.setAttribute("scale", scale.toFixed(2));
        },
        // ── Panel filter (modals + menus) ──
        // Uses objectBoundingBox units so the image stretches to fill any element,
        // giving proportional edge-distortion regardless of panel dimensions.
        // The scale is expressed as a fraction of the reference image width.
        _applyToPanel() {
          const filter = document.getElementById("glass-distortion-panel");
          if (!filter) return;
          const feImg = filter.querySelector("feImage");
          const feDisp = filter.querySelector("feDisplacementMap");
          if (!feImg || !feDisp) return;
          const { dataUrl, scale, width } = this.build(580, 500, 20);
          feImg.setAttribute("href", dataUrl);
          feDisp.setAttribute("scale", (scale / width).toFixed(4));
        },
        // ── Init: dock ──
        initDock() {
          const dock = document.querySelector(".glass-dock");
          if (!dock) return;
          const neutral = this._neutralDataUrl();
          const dockFilter = document.getElementById("glass-distortion-dock");
          if (dockFilter) {
            const fi = dockFilter.querySelector("feImage");
            const fd = dockFilter.querySelector("feDisplacementMap");
            if (fi) fi.setAttribute("href", neutral);
            if (fd) fd.setAttribute("scale", "0");
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
          const neutral = this._neutralDataUrl();
          const panelFilter = document.getElementById("glass-distortion-panel");
          if (panelFilter) {
            const fi = panelFilter.querySelector("feImage");
            const fd = panelFilter.querySelector("feDisplacementMap");
            if (fi) fi.setAttribute("href", neutral);
            if (fd) fd.setAttribute("scale", "0");
          }
          this._applyToPanel();
        }
      };
      GlassDistortion.initDock();
      GlassDistortion.initPanel();
    }
  });

  // src/history-store.ts
  function getHistory() {
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
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
      preview: content.replace(/\s+/g, " ").slice(0, 80).trim(),
      content
    });
    if (history.length > HISTORY_MAX) history.length = HISTORY_MAX;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }
  function formatHistoryDate(ts) {
    const d = new Date(ts);
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 6e4);
    if (mins < 1) return t("history.justNow");
    if (mins < 60) return t("history.minsAgo", mins);
    const hours = Math.floor(mins / 60);
    if (hours < 24) return t("history.hoursAgo", hours);
    return d.toLocaleDateString(
      currentLang.startsWith("pt") ? currentLang : "en",
      {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }
    );
  }
  function clearHistory() {
    localStorage.removeItem(HISTORY_KEY);
  }
  var HISTORY_KEY, HISTORY_MAX;
  var init_history_store = __esm({
    "src/history-store.ts"() {
      init_i18n();
      HISTORY_KEY = "prisma-md-history";
      HISTORY_MAX = 25;
    }
  });

  // src/lint.ts
  function maskCodeContent(text) {
    let masked = text.replace(
      /```[\s\S]*?```/g,
      (m) => "\n".repeat((m.match(/\n/g) || []).length)
    );
    masked = masked.replace(/`[^`\n]+`/g, (m) => " ".repeat(m.length));
    return masked;
  }
  function runMarkdownLint(text) {
    const issues = [];
    const masked = maskCodeContent(text);
    const lines = masked.split("\n");
    let h1Count = 0;
    let lastHeadingLevel = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;
      const hm = line.match(/^(#{1,6})\s+\S/);
      if (hm) {
        const level = hm[1].length;
        if (level === 1) h1Count++;
        if (lastHeadingLevel > 0 && level > lastHeadingLevel + 1) {
          issues.push({
            line: lineNum,
            type: "lint",
            message: t("lint.heading", lastHeadingLevel, level)
          });
        }
        lastHeadingLevel = level;
      }
      if (/\[[^\]]+\]\([^)]*$/.test(line)) {
        issues.push({
          line: lineNum,
          type: "lint",
          message: t("lint.unclosedLink")
        });
      }
      if (/!\[\s*\]\(/.test(line)) {
        issues.push({
          line: lineNum,
          type: "lint",
          message: t("lint.imageAlt")
        });
      }
    }
    if (h1Count > 1) {
      issues.push({
        line: null,
        type: "lint",
        message: t("lint.multipleH1", h1Count)
      });
    }
    return issues;
  }
  function runGrammar(text) {
    const issues = [];
    const masked = maskCodeContent(text);
    const lines = masked.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line.trim()) continue;
      const lineNum = i + 1;
      for (const m of line.matchAll(/\b(\w{3,})\s+\1\b/gi)) {
        issues.push({
          line: lineNum,
          type: "grammar",
          message: t("grammar.repeated", m[1])
        });
      }
      if (/\S {2,}\S/.test(line)) {
        issues.push({
          line: lineNum,
          type: "grammar",
          message: t("grammar.doubleSpace")
        });
      }
    }
    return issues;
  }
  var init_lint = __esm({
    "src/lint.ts"() {
      init_i18n();
    }
  });

  // src/preview-themes.ts
  var PREVIEW_THEMES;
  var init_preview_themes = __esm({
    "src/preview-themes.ts"() {
      PREVIEW_THEMES = {
        github: `
        /* GitHub \xB7 light */
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
        /* GitHub \xB7 dark */
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
        /* Moderno \xB7 light */
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
        /* Moderno \xB7 dark */
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
        /* Acad\xEAmico \xB7 light */
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
        /* Acad\xEAmico \xB7 dark */
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
        /* Minimalista \xB7 light */
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
        /* Minimalista \xB7 dark */
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
    `
      };
    }
  });

  // src/samples.ts
  function getSampleMarkdown() {
    if (currentLang === "pt-PT") {
      return `# Prisma.md \u2728

Bem-vindo! Escreva **Markdown** no editor e veja o resultado renderizado na pr\xE9-visualiza\xE7\xE3o.  
Em ecr\xE3s largos ficam **lado a lado**; em ecr\xE3s verticais / pequenos ficam **em cima e em baixo**.  
O conte\xFAdo \xE9 **guardado automaticamente** a cada 30 s \u2014 consulte o *Hist\xF3rico* no painel inferior.

---

## Formata\xE7\xE3o de Texto

**Negrito** \xB7 *It\xE1lico* \xB7 ***Negrito & It\xE1lico*** \xB7 ~~Tachado~~

C\xF3digo inline: \`const x = Math.PI * r ** 2;\`

---

## Listas

### N\xE3o ordenada \u2014 com aninhamento

- Item A
  - Sub-item A1
  - Sub-item A2
- Item profundo A2a
- Item B
- Item C

### Ordenada \u2014 com sub-passos

1. Primeiro passo
2. Segundo passo
   1. Sub-passo 2.1
   2. Sub-passo 2.2
3. Terceiro passo

### Lista de verifica\xE7\xE3o

- [x] Pr\xE9-visualiza\xE7\xE3o em tempo real (debounce de 120 ms)
- [x] Realce de sintaxe \u2014 25+ linguagens
- [x] Copiar formatado \u2014 Teams, Outlook, Word, Notion\u2026
- [x] Arrastar e Largar \u2014 carregue ficheiros .md ou insira imagens como Base64
- [x] Hist\xF3rico local \u2014 guardado automaticamente a cada 30 s
- [x] M\xFAltiplos temas \u2014 GitHub \xB7 Moderno \xB7 Acad\xE9mico \xB7 Minimalista
- [x] Modo escuro & efeito vidro fosco
- [x] Colar HTML \u2192 convertido automaticamente para Markdown
- [x] Inserir tabela \u2014 escolha linhas e colunas no assistente visual
- [ ] A sua pr\xF3xima funcionalidade favorita

---

## C\xF3digo

Inline: \`npm ci\` \xB7 \`git log --oneline\` \xB7 \`SELECT * FROM users;\`

\`\`\`javascript
// JavaScript \u2014 async/await + template literals
async function fetchUser(id) {
const res = await fetch(\`/api/users/\${id}\`);
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
return res.json();
}
fetchUser(42).then(console.log);
\`\`\`

\`\`\`python
# Python \u2014 fun\xE7\xE3o geradora
def fibonacci(n):
a, b = 0, 1
for _ in range(n):
    yield a
    a, b = b, a + b

print(list(fibonacci(10)))
# \u2192 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

\`\`\`sql
-- SQL \u2014 agrega\xE7\xE3o com JOIN
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
echo "\u25B6 A descarregar actualiza\xE7\xF5es\u2026"
git pull origin main
npm ci && npm run build
echo "\u2705 Deploy conclu\xEDdo com sucesso!"
\`\`\`

---

## Tabelas \u2014 Formatos de Exporta\xE7\xE3o

| Formato              | Ideal para                          | Aplica\xE7\xF5es alvo               |
|----------------------|-------------------------------------|-------------------------------|
| **HTML Universal**   | Editores de texto rico              | Word \xB7 Notion \xB7 A maioria     |
| **HTML para Teams**  | Chat do Microsoft Teams             | Teams                         |
| **HTML para E-mail** | E-mail com estilos inline           | Outlook \xB7 Gmail               |
| **Slack mrkdwn**     | Formato nativo do Slack             | Slack                         |
| **Imprimir / PDF**   | Documentos em papel e arquivos      | Di\xE1logo de impress\xE3o          |

---

## Cita\xE7\xF5es

> "A simplicidade \xE9 a sofistica\xE7\xE3o suprema."
> \u2014 *Leonardo da Vinci*

> **Dica:** Largue um ficheiro \`.md\` ou uma **imagem** no editor \u2014 os ficheiros s\xE3o carregados instantaneamente,
> as imagens s\xE3o inseridas como Base64 inline (PNG, JPG, GIF, WebP).

---

## Liga\xE7\xF5es & Imagens

Ligue para qualquer s\xEDtio: [GitHub](https://github.com) \xB7 [MDN](https://developer.mozilla.org)

As imagens podem ser URLs externas ou Base64 via arrastar e largar:

![Exemplo de imagem](https://placehold.co/640x120/0f172a/94a3b8?text=Drop+image+%E2%86%92+Base64)

---

*Mude o idioma, o tema e o modo escuro no painel inferior do ecr\xE3.*
`;
    }
    if (currentLang === "pt-BR") {
      return `# Prisma.md \u2728

Bem-vindo! Escreva **Markdown** no editor e veja o resultado renderizado no preview.  
Em telas largas ficam **lado a lado**; em telas verticais / pequenas ficam **em cima e em baixo**.  
O conte\xFAdo \xE9 **salvo automaticamente** a cada 30 s \u2014 consulte o *Hist\xF3rico* no painel inferior.

---

## Formata\xE7\xE3o de Texto

**Negrito** \xB7 *It\xE1lico* \xB7 ***Negrito & It\xE1lico*** \xB7 ~~Tachado~~

C\xF3digo inline: \`const x = Math.PI * r ** 2;\`

---

## Listas

### N\xE3o ordenada \u2014 com aninhamento

- Item A
  - Sub-item A1
  - Sub-item A2
- Item profundo A2a
- Item B
- Item C

### Ordenada \u2014 com sub-passos

1. Primeiro passo
2. Segundo passo
   1. Sub-passo 2.1
   2. Sub-passo 2.2
3. Terceiro passo

### Lista de tarefas

- [x] Live preview em tempo real (debounce de 120 ms)
- [x] Syntax highlighting \u2014 25+ linguagens
- [x] Copiar formatado \u2014 Teams, Outlook, Word, Notion\u2026
- [x] Drag & Drop \u2014 carregue arquivos .md ou insira imagens como Base64
- [x] Hist\xF3rico local \u2014 salvo automaticamente a cada 30 s
- [x] M\xFAltiplos temas \u2014 GitHub \xB7 Moderno \xB7 Acad\xEAmico \xB7 Minimalista
- [x] Modo escuro & efeito frosted glass
- [x] Colar HTML \u2192 convertido automaticamente para Markdown
- [x] Inserir tabela \u2014 escolha linhas e colunas no assistente visual
- [ ] Sua pr\xF3xima grande ideia

---

## C\xF3digo

Inline: \`npm ci\` \xB7 \`git log --oneline\` \xB7 \`SELECT * FROM users;\`

\`\`\`javascript
// JavaScript \u2014 async/await + template literals
async function fetchUser(id) {
const res = await fetch(\`/api/users/\${id}\`);
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
return res.json();
}
fetchUser(42).then(console.log);
\`\`\`

\`\`\`python
# Python \u2014 fun\xE7\xE3o geradora
def fibonacci(n):
a, b = 0, 1
for _ in range(n):
    yield a
    a, b = b, a + b

print(list(fibonacci(10)))
# \u2192 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

\`\`\`sql
-- SQL \u2014 agrega\xE7\xE3o com JOIN
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
echo "\u25B6 Atualizando reposit\xF3rio\u2026"
git pull origin main
npm ci && npm run build
echo "\u2705 Deploy conclu\xEDdo com sucesso!"
\`\`\`

---

## Tabelas \u2014 Formatos de Exporta\xE7\xE3o

| Formato              | Ideal para                           | Apps alvo                     |
|----------------------|--------------------------------------|-------------------------------|
| **HTML Universal**   | Editores de texto rico               | Word \xB7 Notion \xB7 A maioria     |
| **HTML para Teams**  | Chat do Microsoft Teams              | Teams                         |
| **HTML para E-mail** | E-mail com estilos inline            | Outlook \xB7 Gmail               |
| **Slack mrkdwn**     | Formato nativo do Slack              | Slack                         |
| **Imprimir / PDF**   | Documentos em papel e arquivos       | Di\xE1logo de impress\xE3o          |

---

## Cita\xE7\xF5es

> "A simplicidade \xE9 a sofistica\xE7\xE3o suprema."
> \u2014 *Leonardo da Vinci*

> **Dica:** Arraste um arquivo \`.md\` ou uma **imagem** para o editor \u2014 arquivos s\xE3o carregados instantaneamente,
> imagens s\xE3o inseridas como Base64 inline (PNG, JPG, GIF, WebP).

---

## Links & Imagens

Linke para qualquer lugar: [GitHub](https://github.com) \xB7 [MDN](https://developer.mozilla.org)

Imagens podem ser URLs externas ou Base64 via drag & drop:

![Exemplo de imagem](https://placehold.co/640x120/0f172a/94a3b8?text=Drop+image+%E2%86%92+Base64)

---

*Mude o idioma, o tema e o modo escuro no painel inferior da tela.*
`;
    }
    if (currentLang === "es") {
      return `# Prisma.md \u2728

\xA1Bienvenido! Escribe **Markdown** en el editor y ve el resultado renderizado en la vista previa.  
En pantallas anchas van **lado a lado**; en pantallas verticales / peque\xF1as van **arriba y abajo**.  
El contenido se **guarda autom\xE1ticamente** cada 30 s \u2014 consulta el *Historial* en el panel inferior.

---

## Formato de Texto

**Negrita** \xB7 *Cursiva* \xB7 ***Negrita & Cursiva*** \xB7 ~~Tachado~~

C\xF3digo inline: \`const x = Math.PI * r ** 2;\`

---

## Listas

### No ordenada \u2014 con anidamiento

- Elemento A
  - Sub-elemento A1
  - Sub-elemento A2
- Elemento profundo A2a
- Elemento B
- Elemento C

### Ordenada \u2014 con sub-pasos

1. Primer paso
2. Segundo paso
   1. Sub-paso 2.1
   2. Sub-paso 2.2
3. Tercer paso

### Lista de tareas

- [x] Vista previa en tiempo real (debounce de 120 ms)
- [x] Resaltado de sintaxis \u2014 25+ lenguajes
- [x] Copiar formateado \u2014 Teams, Outlook, Word, Notion\u2026
- [x] Arrastrar y Soltar \u2014 carga archivos .md o inserta im\xE1genes como Base64
- [x] Historial local \u2014 guardado autom\xE1ticamente cada 30 s
- [x] M\xFAltiples temas \u2014 GitHub \xB7 Moderno \xB7 Acad\xE9mico \xB7 Minimalista
- [x] Modo oscuro & efecto cristal esmerilado
- [x] Pegar HTML \u2192 convertido autom\xE1ticamente a Markdown
- [x] Insertar tabla \u2014 elige filas y columnas en el asistente visual
- [ ] Tu pr\xF3xima gran idea

---

## C\xF3digo

Inline: \`npm ci\` \xB7 \`git log --oneline\` \xB7 \`SELECT * FROM users;\`

\`\`\`javascript
// JavaScript \u2014 async/await + template literals
async function fetchUser(id) {
const res = await fetch(\`/api/users/\${id}\`);
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
return res.json();
}
fetchUser(42).then(console.log);
\`\`\`

\`\`\`python
# Python \u2014 funci\xF3n generadora
def fibonacci(n):
a, b = 0, 1
for _ in range(n):
    yield a
    a, b = b, a + b

print(list(fibonacci(10)))
# \u2192 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

\`\`\`sql
-- SQL \u2014 agregaci\xF3n con JOIN
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
echo "\u25B6 Descargando cambios\u2026"
git pull origin main
npm ci && npm run build
echo "\u2705 \xA1Despliegue completado!"
\`\`\`

---

## Tablas \u2014 Formatos de Exportaci\xF3n

| Formato              | Ideal para                           | Apps destino                  |
|----------------------|--------------------------------------|-------------------------------|
| **HTML Universal**   | Editores de texto enriquecido        | Word \xB7 Notion \xB7 La mayor\xEDa    |
| **HTML para Teams**  | Chat de Microsoft Teams              | Teams                         |
| **HTML para Email**  | Email con estilos inline             | Outlook \xB7 Gmail               |
| **Slack mrkdwn**     | Formato nativo de Slack              | Slack                         |
| **Imprimir / PDF**   | Documentos en papel y archivos       | Di\xE1logo de impresi\xF3n          |

---

## Citas

> "La simplicidad es la m\xE1xima sofisticaci\xF3n."
> \u2014 *Leonardo da Vinci*

> **Consejo:** Suelta un archivo \`.md\` o una **imagen** en el editor \u2014 los archivos se cargan al instante,
> las im\xE1genes se insertan como Base64 inline (PNG, JPG, GIF, WebP).

---

## Enlaces & Im\xE1genes

Enlaza a cualquier sitio: [GitHub](https://github.com) \xB7 [MDN](https://developer.mozilla.org)

Las im\xE1genes pueden ser URLs externas o Base64 v\xEDa arrastrar y soltar:

![Imagen de ejemplo](https://placehold.co/640x120/0f172a/94a3b8?text=Drop+image+%E2%86%92+Base64)

---

*Cambia el idioma, el tema y el modo oscuro desde el panel inferior de la pantalla.*
`;
    }
    if (currentLang === "fr") {
      return `# Prisma.md \u2728

Bienvenue ! R\xE9digez votre **Markdown** dans l'\xE9diteur et visualisez le rendu dans l'aper\xE7u.  
Sur les \xE9crans larges ils sont **c\xF4te \xE0 c\xF4te** ; sur les \xE9crans verticaux / petits ils sont **l'un au-dessus de l'autre**.  
Le contenu est **sauvegard\xE9 automatiquement** toutes les 30 s \u2014 consultez l'*Historique* dans le panneau inf\xE9rieur.

---

## Mise en forme du texte

**Gras** \xB7 *Italique* \xB7 ***Gras & Italique*** \xB7 ~~Barr\xE9~~

Code en ligne : \`const x = Math.PI * r ** 2;\`

---

## Listes

### Non ordonn\xE9e \u2014 avec imbrication

- \xC9l\xE9ment A
  - Sous-\xE9l\xE9ment A1
  - Sous-\xE9l\xE9ment A2
- \xC9l\xE9ment profond A2a
- \xC9l\xE9ment B
- \xC9l\xE9ment C

### Ordonn\xE9e \u2014 avec sous-\xE9tapes

1. Premi\xE8re \xE9tape
2. Deuxi\xE8me \xE9tape
   1. Sous-\xE9tape 2.1
   2. Sous-\xE9tape 2.2
3. Troisi\xE8me \xE9tape

### Liste de t\xE2ches

- [x] Aper\xE7u en temps r\xE9el (debounce 120 ms)
- [x] Coloration syntaxique \u2014 25+ langages
- [x] Copier format\xE9 \u2014 Teams, Outlook, Word, Notion\u2026
- [x] Glisser-D\xE9poser \u2014 chargez des fichiers .md ou ins\xE9rez des images en Base64
- [x] Historique local \u2014 sauvegard\xE9 automatiquement toutes les 30 s
- [x] Th\xE8mes multiples \u2014 GitHub \xB7 Moderne \xB7 Acad\xE9mique \xB7 Minimaliste
- [x] Mode sombre & effet verre d\xE9poli
- [x] Coller du HTML \u2192 converti automatiquement en Markdown
- [x] Ins\xE9rer un tableau \u2014 choisissez lignes et colonnes dans l'assistant visuel
- [ ] Votre prochaine grande id\xE9e

---

## Code

En ligne : \`npm ci\` \xB7 \`git log --oneline\` \xB7 \`SELECT * FROM users;\`

\`\`\`javascript
// JavaScript \u2014 async/await + template literals
async function fetchUser(id) {
const res = await fetch(\`/api/users/\${id}\`);
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
return res.json();
}
fetchUser(42).then(console.log);
\`\`\`

\`\`\`python
# Python \u2014 fonction g\xE9n\xE9ratrice
def fibonacci(n):
a, b = 0, 1
for _ in range(n):
    yield a
    a, b = b, a + b

print(list(fibonacci(10)))
# \u2192 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

\`\`\`sql
-- SQL \u2014 agr\xE9gation avec JOIN
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
# Script de d\xE9ploiement
set -e
echo "\u25B6 Mise \xE0 jour du d\xE9p\xF4t\u2026"
git pull origin main
npm ci && npm run build
echo "\u2705 D\xE9ploiement r\xE9ussi !"
\`\`\`

---

## Tableaux \u2014 Formats d'exportation

| Format               | Id\xE9al pour                           | Applications cibles           |
|----------------------|--------------------------------------|-------------------------------|
| **HTML Universel**   | \xC9diteurs de texte enrichi            | Word \xB7 Notion \xB7 La plupart    |
| **HTML pour Teams**  | Chat Microsoft Teams                 | Teams                         |
| **HTML pour Email**  | Email avec styles inline             | Outlook \xB7 Gmail               |
| **Slack mrkdwn**     | Format natif Slack                   | Slack                         |
| **Imprimer / PDF**   | Documents papier et archives         | Dialogue d'impression         |

---

## Citations

> \xAB La simplicit\xE9 est la sophistication supr\xEAme. \xBB
> \u2014 *L\xE9onard de Vinci*

> **Astuce :** D\xE9posez un fichier \`.md\` ou une **image** sur l'\xE9diteur \u2014 les fichiers se chargent instantan\xE9ment,
> les images sont ins\xE9r\xE9es en Base64 inline (PNG, JPG, GIF, WebP).

---

## Liens & Images

Liez vers n\u2019importe quel site : [GitHub](https://github.com) \xB7 [MDN](https://developer.mozilla.org)

Les images peuvent \xEAtre des URL externes ou du Base64 via glisser-d\xE9poser :

![Image d\u2019exemple](https://placehold.co/640x120/0f172a/94a3b8?text=Drop+image+%E2%86%92+Base64)

---

*Changez la langue, le th\xE8me et le mode sombre depuis le panneau inf\xE9rieur de l'\xE9cran.*
`;
    }
    return `# Prisma.md \u2728

Welcome! Write **Markdown** in the editor and see the rendered result in the preview.  
On wide screens they sit **side by side**; on portrait / small screens they **stack top & bottom**.  
Content is **auto-saved** every 30 s \u2014 check *History* in the dock below.

---

## Text Formatting

**Bold** \xB7 *Italic* \xB7 ***Bold & Italic*** \xB7 ~~Strikethrough~~

Inline code: \`const x = Math.PI * r ** 2;\`

---

## Lists

### Unordered \u2014 with nesting

- Item A
  - Sub-item A1
  - Sub-item A2
- Deep item A2a
- Item B
- Item C

### Ordered \u2014 with sub-steps

1. First step
2. Second step
   1. Sub-step 2.1
   2. Sub-step 2.2
3. Third step

### Task list

- [x] Live preview (real-time, 120 ms debounce)
- [x] Syntax highlighting \u2014 25+ languages
- [x] Copy formatted \u2014 Teams, Outlook, Word, Notion\u2026
- [x] Drag & Drop \u2014 load .md files or insert images as Base64
- [x] Local history \u2014 auto-saved every 30 s
- [x] Multiple themes \u2014 GitHub \xB7 Modern \xB7 Academic \xB7 Minimal
- [x] Dark mode & frosted glass effect
- [x] Paste HTML \u2192 converted to Markdown automatically
- [x] Insert table \u2014 pick rows & columns in the visual assistant
- [ ] Your next great feature

---

## Code

Inline: \`npm ci\` \xB7 \`git log --oneline\` \xB7 \`SELECT * FROM users;\`

\`\`\`javascript
// JavaScript \u2014 async/await + template literals
async function fetchUser(id) {
const res = await fetch(\`/api/users/\${id}\`);
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
return res.json();
}
fetchUser(42).then(console.log);
\`\`\`

\`\`\`python
# Python \u2014 generator function
def fibonacci(n):
a, b = 0, 1
for _ in range(n):
    yield a
    a, b = b, a + b

print(list(fibonacci(10)))
# \u2192 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

\`\`\`sql
-- SQL \u2014 aggregation with JOIN
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
echo "\u25B6 Pulling latest\u2026"
git pull origin main
npm ci && npm run build
echo "\u2705 Deployed successfully!"
\`\`\`

---

## Tables \u2014 Export Formats

| Format              | Best for                         | Target apps                  |
|---------------------|----------------------------------|------------------------------|
| **Universal HTML**  | Rich-text editors                | Word \xB7 Notion \xB7 Most apps    |
| **Teams HTML**      | Microsoft Teams chat             | Teams                        |
| **Email HTML**      | Inline-styled email              | Outlook \xB7 Gmail              |
| **Slack mrkdwn**    | Slack native format              | Slack                        |
| **Print / PDF**     | Paper documents & archives       | System print dialog          |

---

## Blockquotes

> "Simplicity is the ultimate sophistication."
> \u2014 *Leonardo da Vinci*

> **Tip:** Drop a \`.md\` file or an **image** onto the editor \u2014 files load instantly,
> images are inserted as inline Base64 (PNG, JPG, GIF, WebP).

---

## Links & Images

Link to anything: [GitHub](https://github.com) \xB7 [MDN](https://developer.mozilla.org)

Images can be external URLs or Base64 via drag & drop:

![Image example](https://placehold.co/640x120/0f172a/94a3b8?text=Drop+image+%E2%86%92+Base64)

---

*Switch language, theme and dark mode from the dock at the bottom of the screen.*
`;
  }
  var init_samples = __esm({
    "src/samples.ts"() {
      init_i18n();
    }
  });

  // src/main.ts
  var require_main = __commonJS({
    "src/main.ts"() {
      init_converter();
      init_export_builder();
      var import_glass_distortion = __toESM(require_glass_distortion());
      init_history_store();
      init_i18n();
      init_lint();
      init_preview_themes();
      init_samples();
      var SVG_LOCK_CLOSED = '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>';
      var SVG_LOCK_OPEN = '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>';
      var SVG_MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
      var SVG_SUN = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
      function applyLanguage(lang) {
        setCurrentLang(lang);
        document.documentElement.lang = lang;
        for (const el of document.querySelectorAll("[data-i18n]")) {
          el.textContent = t(el.dataset.i18n);
        }
        for (const el of document.querySelectorAll(
          "[data-i18n-title]"
        )) {
          el.title = t(el.dataset.i18nTitle);
        }
        for (const el of document.querySelectorAll(
          "[data-i18n-aria-label]"
        )) {
          el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel));
        }
        for (const el of document.querySelectorAll(
          "[data-i18n-placeholder]"
        )) {
          el.placeholder = t(el.dataset.i18nPlaceholder);
        }
        const langContainer = document.getElementById("lang-select");
        if (langContainer) {
          langContainer.querySelectorAll(".lang-option").forEach(
            (el) => el.classList.toggle(
              "selected",
              el.dataset.lang === lang
            )
          );
          const triggerLabel = langContainer.querySelector(".lang-trigger-label");
          if (triggerLabel) triggerLabel.textContent = langTriggerLabel(lang);
        }
        localStorage.setItem("prisma-lang", lang);
        if (isSampleContent) setSampleContent();
      }
      var editor = document.getElementById("editor");
      var preview = document.getElementById("preview");
      var btnExport = document.getElementById("btn-export");
      var btnThemes = document.getElementById("btn-themes");
      var btnClear = document.getElementById("btn-clear");
      var btnSettings = document.getElementById("btn-settings");
      var divider = document.getElementById("divider");
      var toast = document.getElementById("toast");
      var hljsLight = document.getElementById("hljs-light");
      var hljsDark = document.getElementById("hljs-dark");
      var cmThemeDark = document.getElementById("cm-theme-dark");
      var exportMenu = document.getElementById("export-menu");
      var settingsMenu = document.getElementById("settings-menu");
      var btnCopyUniversal = document.getElementById("btn-copy-universal");
      var btnCopyTeams = document.getElementById("btn-copy-teams");
      var btnCopyEmail = document.getElementById("btn-copy-email");
      var btnCopySlack = document.getElementById("btn-copy-slack");
      var btnCopyWhatsApp = document.getElementById("btn-copy-whatsapp");
      var btnCopyTelegram = document.getElementById("btn-copy-telegram");
      var btnPrintPdf = document.getElementById("btn-print-pdf");
      var toggleSync = document.getElementById("toggle-sync");
      var toggleTheme = document.getElementById("toggle-theme");
      var toggleGlass = document.getElementById("toggle-glass");
      var iconSync = document.getElementById("icon-sync");
      var iconTheme = document.getElementById("icon-theme");
      var themesMenu = document.getElementById("themes-menu");
      var btnHamburger = document.getElementById("btn-hamburger");
      var hamburgerPanel = document.getElementById("hamburger-panel");
      var btnTable = document.getElementById("btn-table");
      var tableModal = document.getElementById("table-modal");
      var tableModalBackdrop = document.getElementById("table-modal-backdrop");
      var tblRows = document.getElementById("tbl-rows");
      var tblCols = document.getElementById("tbl-cols");
      var tblGrid = document.getElementById("tbl-grid");
      var btnCloseTable = document.getElementById("btn-close-table");
      var btnInsertTable = document.getElementById("btn-insert-table");
      var statWords = document.getElementById("stat-words");
      var statReadTime = document.getElementById("stat-read-time");
      var statChars = document.getElementById("stat-chars");
      var btnIssuesToggle = document.getElementById("btn-issues-toggle");
      var statIssuesCount = document.getElementById("stat-issues-count");
      var lintPanel = document.getElementById("lint-panel");
      var lintList = document.getElementById("lint-list");
      var btnLintClose = document.getElementById("btn-lint-close");
      var EXTRA_MODES = [
        { name: "java", mime: "text/x-java", mode: "clike" },
        { name: "c", mime: "text/x-csrc", mode: "clike" },
        { name: "cpp", mime: "text/x-c++src", mode: "clike" },
        { name: "c++", mime: "text/x-c++src", mode: "clike" },
        { name: "cs", mime: "text/x-csharp", mode: "clike" },
        { name: "csharp", mime: "text/x-csharp", mode: "clike" },
        { name: "kotlin", mime: "text/x-kotlin", mode: "clike" },
        { name: "scala", mime: "text/x-scala", mode: "clike" },
        { name: "bash", mime: "application/x-sh", mode: "shell" },
        { name: "sh", mime: "application/x-sh", mode: "shell" },
        { name: "zsh", mime: "application/x-sh", mode: "shell" },
        { name: "ps1", mime: "application/x-powershell", mode: "powershell" },
        { name: "pwsh", mime: "application/x-powershell", mode: "powershell" },
        { name: "ts", mime: "application/typescript", mode: "javascript" },
        {
          name: "typescript",
          mime: "application/typescript",
          mode: "javascript"
        },
        { name: "tsx", mime: "text/typescript-jsx", mode: "javascript" },
        { name: "jsx", mime: "text/jsx", mode: "javascript" },
        { name: "html", mime: "text/html", mode: "xml" },
        { name: "yml", mime: "text/x-yaml", mode: "yaml" },
        { name: "mysql", mime: "text/x-mysql", mode: "sql" },
        { name: "postgres", mime: "text/x-pgsql", mode: "sql" },
        { name: "sqlite", mime: "text/x-sqlite", mode: "sql" },
        { name: "docker", mime: "text/x-dockerfile", mode: "dockerfile" },
        { name: "rb", mime: "text/x-ruby", mode: "ruby" },
        { name: "py", mime: "text/x-python", mode: "python" }
      ];
      if (!CodeMirror.modeInfo) CodeMirror.modeInfo = [];
      var existingNames = new Set(
        CodeMirror.modeInfo.map((m) => m.name.toLowerCase())
      );
      for (const entry of EXTRA_MODES) {
        if (!existingNames.has(entry.name.toLowerCase())) {
          CodeMirror.modeInfo.push(entry);
          existingNames.add(entry.name.toLowerCase());
        }
      }
      var _fencedSimple = {
        js: "javascript",
        json: "javascript",
        bash: "shell",
        sh: "shell",
        zsh: "shell",
        py: "python",
        rb: "ruby",
        rs: "rust",
        yml: "yaml",
        ps1: "powershell",
        pwsh: "powershell",
        mysql: "sql",
        postgres: "sql",
        postgresql: "sql",
        sqlite: "sql"
      };
      for (const [a, m] of Object.entries(_fencedSimple)) CodeMirror.defineMIME(a, m);
      CodeMirror.defineMIME("ts", { name: "javascript", typescript: true });
      CodeMirror.defineMIME("typescript", {
        name: "javascript",
        typescript: true
      });
      CodeMirror.defineMIME("jsx", { name: "javascript", jsx: true });
      CodeMirror.defineMIME("tsx", {
        name: "javascript",
        typescript: true,
        jsx: true
      });
      var _fencedWrapped = {
        java: "text/x-java",
        c: "text/x-csrc",
        cpp: "text/x-c++src",
        "c++": "text/x-c++src",
        csharp: "text/x-csharp",
        cs: "text/x-csharp",
        kotlin: "text/x-kotlin",
        scala: "text/x-scala",
        html: "text/html",
        docker: "text/x-dockerfile"
      };
      for (const [alias, mime] of Object.entries(_fencedWrapped)) {
        if (!CodeMirror.modes[alias]) {
          CodeMirror.defineMode(alias, function(config) {
            return CodeMirror.getMode(config, mime);
          });
        }
      }
      var cm = CodeMirror.fromTextArea(editor, {
        mode: {
          name: "markdown",
          fencedCodeBlockHighlighting: true,
          highlightFormatting: true,
          strikethrough: true,
          taskLists: true
        },
        theme: "default",
        lineWrapping: true,
        tabSize: 4,
        indentWithTabs: false,
        autofocus: true,
        extraKeys: {
          Enter: "newlineAndIndentContinueMarkdownList",
          Tab: (c) => c.execCommand("indentMore"),
          "Shift-Tab": (c) => c.execCommand("indentLess")
        }
      });
      cm.setSize("100%", "100%");
      marked.setOptions({
        breaks: true,
        gfm: true,
        highlight: (code, lang) => {
          if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
          }
          return hljs.highlightAuto(code).value;
        }
      });
      var STORAGE_KEY = "prisma-md-content";
      var isSampleContent = false;
      var settingSample = false;
      function setSampleContent() {
        settingSample = true;
        cm.setValue(getSampleMarkdown());
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
      function render() {
        preview.querySelector(".markdown-body").innerHTML = marked.parse(
          cm.getValue()
        );
      }
      function updateStats(text) {
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const chars = text.length;
        const minutes = Math.max(1, Math.ceil(words / 200));
        statWords.textContent = words === 1 ? t("stats.word") : t("stats.words", words);
        statReadTime.textContent = t("stats.readTime", minutes);
        statChars.textContent = t("stats.chars", chars);
      }
      function renderIssues(issues) {
        lintList.innerHTML = "";
        if (issues.length === 0) {
          btnIssuesToggle.hidden = true;
          btnIssuesToggle.setAttribute("aria-expanded", "false");
          lintPanel.classList.remove("visible");
          lintPanel.setAttribute("aria-hidden", "true");
          return;
        }
        btnIssuesToggle.hidden = false;
        statIssuesCount.textContent = issues.length === 1 ? t("issues.one") : t("issues.many", issues.length);
        const MAX_DISPLAY = 20;
        const displayed = issues.slice(0, MAX_DISPLAY);
        const overflow = issues.length - MAX_DISPLAY;
        for (const issue of displayed) {
          const li = document.createElement("li");
          li.className = "lint-item";
          if (issue.line) li.dataset.line = issue.line;
          const badge = document.createElement("span");
          badge.className = `lint-item-badge lint-item-badge--${issue.type}`;
          badge.textContent = issue.type === "lint" ? "MD" : "Gram.";
          li.appendChild(badge);
          if (issue.line) {
            const lineSpan = document.createElement("span");
            lineSpan.className = "lint-item-line";
            lineSpan.textContent = `L${issue.line}`;
            li.appendChild(lineSpan);
          }
          const msg = document.createElement("span");
          msg.className = "lint-item-msg";
          msg.textContent = issue.message;
          li.appendChild(msg);
          if (issue.line) {
            li.addEventListener("click", () => {
              cm.setCursor({ line: issue.line - 1, ch: 0 });
              cm.scrollIntoView({ line: issue.line - 1, ch: 0 }, 80);
              cm.focus();
            });
          }
          lintList.appendChild(li);
        }
        if (overflow > 0) {
          const li = document.createElement("li");
          li.className = "lint-item";
          li.style.opacity = "0.55";
          li.style.fontStyle = "italic";
          const msg = document.createElement("span");
          msg.className = "lint-item-msg";
          msg.textContent = t("issues.overflow", overflow);
          li.appendChild(msg);
          lintList.appendChild(li);
        }
      }
      btnIssuesToggle.addEventListener("click", () => {
        const open = !lintPanel.classList.contains("visible");
        lintPanel.classList.toggle("visible", open);
        lintPanel.setAttribute("aria-hidden", String(!open));
        btnIssuesToggle.setAttribute("aria-expanded", String(open));
      });
      btnLintClose.addEventListener("click", () => {
        lintPanel.classList.remove("visible");
        lintPanel.setAttribute("aria-hidden", "true");
        btnIssuesToggle.setAttribute("aria-expanded", "false");
      });
      var debounceTimer;
      cm.on("change", () => {
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
      var allMenus = [exportMenu, settingsMenu, themesMenu, hamburgerPanel];
      function closeAllMenus() {
        for (const m of allMenus) {
          m.classList.remove("visible");
          m.setAttribute("inert", "");
        }
      }
      function toggleMenu(menu, open) {
        for (const m of allMenus) {
          if (m !== menu) {
            m.classList.remove("visible");
            m.setAttribute("inert", "");
          }
        }
        menu.classList.toggle("visible", open);
        if (open) {
          menu.removeAttribute("inert");
        } else {
          menu.setAttribute("inert", "");
        }
      }
      btnExport.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu(exportMenu, !exportMenu.classList.contains("visible"));
      });
      btnThemes.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu(themesMenu, !themesMenu.classList.contains("visible"));
      });
      btnSettings.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu(settingsMenu, !settingsMenu.classList.contains("visible"));
      });
      btnHamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = !hamburgerPanel.classList.contains("visible");
        toggleMenu(hamburgerPanel, open);
        btnHamburger.setAttribute("aria-expanded", String(open));
      });
      hamburgerPanel.querySelectorAll("[data-delegates]").forEach((btn) => {
        btn.addEventListener("click", () => {
          document.getElementById(btn.dataset.delegates).click();
        });
      });
      document.addEventListener("click", (e) => {
        const target = e.target;
        if (!allMenus.some((m) => m.contains(target)) && !target.closest(
          "#btn-export, #btn-settings, #btn-themes, #btn-hamburger"
        )) {
          closeAllMenus();
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeAllMenus();
      });
      btnCopyUniversal.addEventListener("click", async () => {
        closeAllMenus();
        const body = preview.querySelector(".markdown-body");
        const html = body.innerHTML;
        const plain = body.innerText;
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              "text/html": new Blob([html], { type: "text/html" }),
              "text/plain": new Blob([plain], { type: "text/plain" })
            })
          ]);
          showToast(t("toast.copied"));
        } catch {
          try {
            await navigator.clipboard.writeText(plain);
            showToast(t("toast.copiedPlain"));
          } catch {
            showToast(t("toast.copyError"));
          }
        }
      });
      btnClear.addEventListener("click", () => {
        cm.setValue("");
        render();
        saveContent();
        cm.focus();
      });
      function showToast(message) {
        toast.textContent = message;
        toast.classList.remove("hidden");
        setTimeout(() => toast.classList.add("hidden"), 2200);
      }
      var isDragging = false;
      divider.addEventListener("mousedown", (e) => {
        if (window.matchMedia("(max-width: 768px), (orientation: portrait)").matches)
          return;
        isDragging = true;
        divider.classList.add("active");
        e.preventDefault();
      });
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const container = document.querySelector("main");
        const rect = container.getBoundingClientRect();
        const offset = e.clientX - rect.left;
        const total = rect.width;
        const pct = Math.min(Math.max(offset / total * 100, 15), 85);
        document.querySelector(".editor-pane").style.flex = `0 0 ${pct}%`;
        document.querySelector(".preview-pane").style.flex = `0 0 ${100 - pct}%`;
        cm.refresh();
      });
      document.addEventListener("mouseup", () => {
        if (isDragging) {
          isDragging = false;
          divider.classList.remove("active");
        }
      });
      function syncLiquidToggle(el, state) {
        el.setAttribute("aria-checked", String(state));
        el.style.setProperty("--complete", state ? "100" : "0");
      }
      function animateLiquidToggle(el, toState) {
        el.dataset.active = "true";
        gsap.to(el, {
          "--complete": toState ? 100 : 0,
          duration: 0.14,
          delay: 0.18,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.delayedCall(0.05, () => {
              delete el.dataset.active;
              el.setAttribute("aria-checked", String(toState));
            });
          }
        });
      }
      var syncScrollEnabled = true;
      var scrolling = null;
      var scrollingTimer = null;
      function clearScrollingLock() {
        clearTimeout(scrollingTimer);
        scrollingTimer = setTimeout(() => {
          scrolling = null;
        }, 80);
      }
      function syncEditorToPreview() {
        if (!syncScrollEnabled || scrolling === "preview") return;
        scrolling = "editor";
        const info = cm.getScrollInfo();
        const pct = info.top / Math.max(info.height - info.clientHeight, 1);
        preview.scrollTop = pct * (preview.scrollHeight - preview.clientHeight);
        clearScrollingLock();
      }
      function syncPreviewToEditor() {
        if (!syncScrollEnabled || scrolling === "editor") return;
        scrolling = "preview";
        const pct = preview.scrollTop / Math.max(preview.scrollHeight - preview.clientHeight, 1);
        const info = cm.getScrollInfo();
        cm.scrollTo(null, pct * (info.height - info.clientHeight));
        clearScrollingLock();
      }
      cm.on("scroll", syncEditorToPreview);
      preview.addEventListener("scroll", syncPreviewToEditor);
      function updateSyncToggle() {
        syncLiquidToggle(toggleSync, syncScrollEnabled);
        iconSync.innerHTML = syncScrollEnabled ? SVG_LOCK_CLOSED : SVG_LOCK_OPEN;
      }
      toggleSync.addEventListener("click", () => {
        syncScrollEnabled = !syncScrollEnabled;
        animateLiquidToggle(toggleSync, syncScrollEnabled);
        iconSync.innerHTML = syncScrollEnabled ? SVG_LOCK_CLOSED : SVG_LOCK_OPEN;
        localStorage.setItem(
          "markdown-preview-sync",
          syncScrollEnabled ? "1" : "0"
        );
      });
      var savedSync = localStorage.getItem("markdown-preview-sync");
      if (savedSync === "0") {
        syncScrollEnabled = false;
      }
      updateSyncToggle();
      function applyTheme(dark, animate = false) {
        document.documentElement.dataset.theme = dark ? "dark" : "light";
        preview.dataset.theme = dark ? "dark" : "light";
        iconTheme.innerHTML = dark ? SVG_SUN : SVG_MOON;
        if (animate) {
          animateLiquidToggle(toggleTheme, dark);
        } else {
          syncLiquidToggle(toggleTheme, dark);
        }
        hljsLight.disabled = dark;
        hljsDark.disabled = !dark;
        cmThemeDark.disabled = !dark;
        cm.setOption("theme", dark ? "dracula" : "default");
        localStorage.setItem("markdown-preview-theme", dark ? "dark" : "light");
      }
      toggleTheme.addEventListener("click", () => {
        const isDark = document.documentElement.dataset.theme === "dark";
        applyTheme(!isDark, true);
      });
      var savedTheme = localStorage.getItem("markdown-preview-theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(
        savedTheme !== null ? savedTheme === "dark" : prefersDark.matches,
        false
      );
      prefersDark.addEventListener("change", (e) => {
        if (localStorage.getItem("markdown-preview-theme") === null) {
          applyTheme(e.matches, false);
        }
      });
      btnCopyTeams.addEventListener("click", async () => {
        closeAllMenus();
        const html = buildInlineStyledHTML(
          preview.querySelector(".markdown-body"),
          "teams"
        );
        const plain = preview.querySelector(".markdown-body").innerText;
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              "text/html": new Blob([html], { type: "text/html" }),
              "text/plain": new Blob([plain], { type: "text/plain" })
            })
          ]);
          showToast(t("toast.copiedTeams"));
        } catch {
          try {
            await navigator.clipboard.writeText(plain);
            showToast(t("toast.copiedPlain"));
          } catch {
            showToast(t("toast.copyError"));
          }
        }
      });
      btnCopyEmail.addEventListener("click", async () => {
        closeAllMenus();
        const html = buildInlineStyledHTML(
          preview.querySelector(".markdown-body"),
          "email"
        );
        const plain = preview.querySelector(".markdown-body").innerText;
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              "text/html": new Blob([html], { type: "text/html" }),
              "text/plain": new Blob([plain], { type: "text/plain" })
            })
          ]);
          showToast(t("toast.copiedEmail"));
        } catch {
          try {
            await navigator.clipboard.writeText(plain);
            showToast(t("toast.copiedPlain"));
          } catch {
            showToast(t("toast.copyError"));
          }
        }
      });
      btnCopySlack.addEventListener("click", async () => {
        closeAllMenus();
        const mrkdwn = convertToSlack(cm.getValue());
        try {
          await navigator.clipboard.writeText(mrkdwn);
          showToast(t("toast.copiedSlack"));
        } catch {
          showToast(t("toast.copyError"));
        }
      });
      btnCopyWhatsApp.addEventListener("click", async () => {
        closeAllMenus();
        const whatsappText = convertToWhatsApp(cm.getValue());
        try {
          await navigator.clipboard.writeText(whatsappText);
          showToast(t("toast.copiedWhatsApp"));
        } catch {
          showToast(t("toast.copyError"));
        }
      });
      btnCopyTelegram.addEventListener("click", async () => {
        closeAllMenus();
        const telegramText = convertToTelegram(cm.getValue());
        try {
          await navigator.clipboard.writeText(telegramText);
          showToast(t("toast.copiedTelegram"));
        } catch {
          showToast(t("toast.copyError"));
        }
      });
      function applyGlassStyle(frosted, animate = false) {
        document.documentElement.dataset.glass = frosted ? "frosted" : "clear";
        if (animate) {
          animateLiquidToggle(toggleGlass, frosted);
        } else {
          syncLiquidToggle(toggleGlass, frosted);
        }
        localStorage.setItem("prisma-glass", frosted ? "frosted" : "clear");
      }
      toggleGlass.addEventListener("click", () => {
        applyGlassStyle(document.documentElement.dataset.glass !== "frosted", true);
      });
      var savedGlass = localStorage.getItem("prisma-glass");
      applyGlassStyle(savedGlass === "frosted", false);
      var dropOverlay = document.getElementById("drop-overlay");
      var editorPane = document.querySelector(".editor-pane");
      function isFileDrag(e) {
        return e.dataTransfer?.types && Array.from(e.dataTransfer.types).includes("Files");
      }
      function showDragUI() {
        editorPane.classList.add("drag-active");
        dropOverlay.classList.add("visible");
        dropOverlay.removeAttribute("aria-hidden");
      }
      function hideDragUI() {
        editorPane.classList.remove("drag-active");
        dropOverlay.classList.remove("visible");
        dropOverlay.setAttribute("aria-hidden", "true");
      }
      document.addEventListener("dragenter", (e) => {
        if (!isFileDrag(e)) return;
        e.preventDefault();
        showDragUI();
      });
      document.addEventListener("dragover", (e) => {
        if (!isFileDrag(e)) return;
        e.preventDefault();
        const rect = editorPane.getBoundingClientRect();
        const overEditor = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
        e.dataTransfer.dropEffect = overEditor ? "copy" : "none";
      });
      document.addEventListener("dragleave", (e) => {
        if (e.relatedTarget !== null) return;
        hideDragUI();
      });
      document.addEventListener("drop", (e) => {
        if (!isFileDrag(e)) return;
        e.preventDefault();
        hideDragUI();
      });
      editorPane.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        hideDragUI();
        const files = e.dataTransfer?.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        const nameLower = file.name.toLowerCase();
        const isMd = nameLower.endsWith(".md") || nameLower.endsWith(".markdown") || file.type === "text/markdown";
        const isImage = file.type.startsWith("image/");
        if (isMd) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            cm.setValue(ev.target.result);
            render();
            saveContent();
            showToast(t("toast.fileLoaded", file.name));
          };
          reader.readAsText(file, "UTF-8");
        } else if (isImage) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            const dataUrl = ev.target.result;
            const altText = file.name.replace(/\.[^.]+$/, "");
            const cursor = cm.getCursor();
            const lineContent = cm.getLine(cursor.line);
            const prefix = lineContent.trim() ? "\n" : "";
            cm.replaceRange(`${prefix}![${altText}](${dataUrl})
`, cursor);
            render();
            saveContent();
            showToast(t("toast.imageInserted", file.name));
          };
          reader.readAsDataURL(file);
        } else {
          showToast(t("toast.fileUnsupported"));
        }
      });
      function applyPreviewTheme(name) {
        let el = document.getElementById("preview-theme");
        if (!el) {
          el = document.createElement("style");
          el.id = "preview-theme";
          document.head.appendChild(el);
        }
        el.textContent = PREVIEW_THEMES[name] ?? PREVIEW_THEMES.github;
        for (const row of document.querySelectorAll(
          ".pdf-theme-row"
        )) {
          row.classList.toggle("active", row.dataset.pdfTheme === name);
        }
        localStorage.setItem("prisma-preview-theme", name);
      }
      for (const row of document.querySelectorAll(".pdf-theme-row")) {
        row.addEventListener("click", () => {
          applyPreviewTheme(row.dataset.pdfTheme);
        });
      }
      btnPrintPdf.addEventListener("click", () => {
        closeAllMenus();
        globalThis.print();
      });
      cm.on("paste", (_, e) => {
        const cd = e.clipboardData;
        if (!cd) return;
        const plain = cd.getData("text/plain");
        const html = cd.getData("text/html");
        if (isTsvData(plain)) {
          e.preventDefault();
          const md = tsvToMarkdown(plain);
          if (cm.somethingSelected()) {
            cm.replaceSelection(md + "\n");
          } else {
            const cursor = cm.getCursor();
            const line = cm.getLine(cursor.line);
            const prefix = line.trim() ? "\n" : "";
            cm.replaceRange(prefix + md + "\n", cursor);
          }
          render();
          saveContent();
          showToast(t("toast.tablePasted"));
          return;
        }
        if (html) {
          const hasMarkup = /<(h[1-6]|p|ul|ol|li|table|blockquote|pre|strong|em|br)\b/i.test(
            html
          );
          if (hasMarkup) {
            e.preventDefault();
            const md = htmlToMarkdown(html);
            if (cm.somethingSelected()) {
              cm.replaceSelection(md + "\n");
            } else {
              const cursor = cm.getCursor();
              const line = cm.getLine(cursor.line);
              const prefix = line.trim() ? "\n" : "";
              cm.replaceRange(prefix + md + "\n", cursor);
            }
            render();
            saveContent();
            showToast(t("toast.htmlConverted"));
          }
        }
      });
      var _lastSnapshotContent = "";
      setInterval(() => {
        const cur = cm.getValue();
        if (cur !== _lastSnapshotContent && cur.trim()) {
          saveSnapshot(cur);
          _lastSnapshotContent = cur;
        }
      }, 3e4);
      cm.on("blur", () => {
        const cur = cm.getValue();
        if (cur !== _lastSnapshotContent && cur.trim()) {
          saveSnapshot(cur);
          _lastSnapshotContent = cur;
        }
      });
      var historyModal = document.getElementById("history-modal");
      var historyModalBackdrop = document.getElementById("history-modal-backdrop");
      var btnCloseHistory = document.getElementById("btn-close-history");
      var historyList = document.getElementById("history-list");
      var btnClearHistory = document.getElementById("btn-clear-history");
      function renderHistoryList() {
        const history = getHistory();
        historyList.innerHTML = "";
        if (!history.length) {
          const empty = document.createElement("div");
          empty.className = "history-empty";
          empty.textContent = t("history.empty");
          historyList.appendChild(empty);
          return;
        }
        for (const item of history) {
          const el = document.createElement("button");
          el.className = "history-item";
          el.type = "button";
          el.innerHTML = `<span class="history-item-time">${formatHistoryDate(item.ts)}</span><span class="history-item-preview">${item.preview.replace(/</g, "&lt;")}</span>`;
          el.addEventListener("click", () => {
            cm.setValue(item.content);
            render();
            saveContent();
            closeHistoryModal();
            cm.focus();
            showToast(t("toast.versionRestored"));
          });
          historyList.appendChild(el);
        }
      }
      function openHistoryModal() {
        renderHistoryList();
        historyModal.classList.add("visible");
        historyModal.removeAttribute("inert");
        btnCloseHistory.focus();
      }
      function closeHistoryModal() {
        historyModal.classList.remove("visible");
        historyModal.setAttribute("inert", "");
        document.getElementById("btn-history").focus();
      }
      document.getElementById("btn-history").addEventListener("click", (e) => {
        e.stopPropagation();
        closeAllMenus();
        openHistoryModal();
      });
      historyModalBackdrop.addEventListener("click", closeHistoryModal);
      btnCloseHistory.addEventListener("click", closeHistoryModal);
      btnClearHistory.addEventListener("click", () => {
        clearHistory();
        renderHistoryList();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && historyModal.classList.contains("visible"))
          closeHistoryModal();
      });
      function buildTableGrid() {
        const rows = Math.max(2, Number.parseInt(tblRows.value, 10) || 3);
        const cols = Math.max(1, Number.parseInt(tblCols.value, 10) || 3);
        tblGrid.style.gridTemplateColumns = `repeat(${cols}, minmax(110px, 1fr))`;
        tblGrid.innerHTML = "";
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const inp = document.createElement("input");
            inp.type = "text";
            inp.className = "tbl-cell" + (r === 0 ? " tbl-header-cell" : "");
            inp.placeholder = r === 0 ? t("table.colPlaceholder", c + 1) : t("table.cellPlaceholder", r, c + 1);
            inp.dataset.row = String(r);
            inp.dataset.col = String(c);
            const isFirstRow = r === 0;
            const isLastRow = r === rows - 1;
            const isFirstCol = c === 0;
            const isLastCol = c === cols - 1;
            const R = "9px";
            inp.style.borderTopLeftRadius = isFirstRow && isFirstCol ? R : "";
            inp.style.borderTopRightRadius = isFirstRow && isLastCol ? R : "";
            inp.style.borderBottomLeftRadius = isLastRow && isFirstCol ? R : "";
            inp.style.borderBottomRightRadius = isLastRow && isLastCol ? R : "";
            inp.addEventListener("keydown", (e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const nextR = r + 1 < rows ? r + 1 : r;
                const next = tblGrid.querySelector(
                  `[data-row='${nextR}'][data-col='${c}']`
                );
                if (next) next.focus();
              }
            });
            tblGrid.appendChild(inp);
          }
        }
        const first = tblGrid.querySelector(".tbl-cell");
        if (first) requestAnimationFrame(() => first.focus());
      }
      function openTableModal() {
        tableModal.classList.add("visible");
        tableModal.removeAttribute("inert");
        buildTableGrid();
      }
      function closeTableModal() {
        tableModal.classList.remove("visible");
        tableModal.setAttribute("inert", "");
      }
      function generateMarkdownTable() {
        const rows = Math.max(2, Number.parseInt(tblRows.value, 10) || 3);
        const cols = Math.max(1, Number.parseInt(tblCols.value, 10) || 3);
        const cells = [...tblGrid.querySelectorAll(".tbl-cell")];
        let md = "\n";
        const headerCells = cells.slice(0, cols).map((i) => i.value.trim() || " ");
        md += "| " + headerCells.join(" | ") + " |\n";
        md += "| " + headerCells.map(() => "---").join(" | ") + " |\n";
        for (let r = 1; r < rows; r++) {
          const rowCells = cells.slice(r * cols, (r + 1) * cols).map((i) => i.value.trim() || " ");
          md += "| " + rowCells.join(" | ") + " |\n";
        }
        return md + "\n";
      }
      btnTable.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAllMenus();
        openTableModal();
      });
      tableModalBackdrop.addEventListener("click", closeTableModal);
      btnCloseTable.addEventListener("click", closeTableModal);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && tableModal.classList.contains("visible")) {
          closeTableModal();
        }
      });
      btnInsertTable.addEventListener("click", () => {
        const md = generateMarkdownTable();
        const cursor = cm.getCursor();
        const lineContent = cm.getLine(cursor.line);
        const insertion = lineContent.trim() === "" ? md : "\n" + md;
        cm.replaceRange(insertion, cursor);
        render();
        saveContent();
        closeTableModal();
        cm.focus();
        showToast(t("toast.tableInserted"));
      });
      document.getElementById("tbl-rows-dec").addEventListener("click", () => {
        tblRows.value = String(Math.max(2, Number.parseInt(tblRows.value, 10) - 1));
        buildTableGrid();
      });
      document.getElementById("tbl-rows-inc").addEventListener("click", () => {
        tblRows.value = String(
          Math.min(30, Number.parseInt(tblRows.value, 10) + 1)
        );
        buildTableGrid();
      });
      document.getElementById("tbl-cols-dec").addEventListener("click", () => {
        tblCols.value = String(Math.max(1, Number.parseInt(tblCols.value, 10) - 1));
        buildTableGrid();
      });
      document.getElementById("tbl-cols-inc").addEventListener("click", () => {
        tblCols.value = String(
          Math.min(12, Number.parseInt(tblCols.value, 10) + 1)
        );
        buildTableGrid();
      });
      tblRows.addEventListener("change", buildTableGrid);
      tblCols.addEventListener("change", buildTableGrid);
      applyPreviewTheme(localStorage.getItem("prisma-preview-theme") || "github");
      var LANG_LABELS = {
        en: "EN (UK)",
        "pt-BR": "PT (BR)",
        "pt-PT": "PT (PT)",
        es: "ES (ES)",
        fr: "FR (FR)"
      };
      function langTriggerLabel(lang) {
        return LANG_LABELS[lang] || lang.toUpperCase();
      }
      {
        let openDropdown = function() {
          selector.classList.add("open");
          trigger.setAttribute("aria-expanded", "true");
        }, closeDropdown = function() {
          selector.classList.remove("open");
          trigger.setAttribute("aria-expanded", "false");
        };
        const selector = document.getElementById("lang-select");
        const trigger = selector.querySelector(".lang-trigger");
        const options = [...selector.querySelectorAll(".lang-option")];
        trigger.addEventListener("click", () => {
          if (selector.classList.contains("open")) closeDropdown();
          else openDropdown();
        });
        document.addEventListener("click", (e) => {
          if (!selector.contains(e.target)) closeDropdown();
        });
        options.forEach((opt) => {
          opt.addEventListener("click", () => {
            const lang = opt.dataset.lang;
            options.forEach((o) => o.classList.toggle("selected", o === opt));
            const triggerLabel = selector.querySelector(".lang-trigger-label");
            if (triggerLabel) triggerLabel.textContent = langTriggerLabel(lang);
            closeDropdown();
            applyLanguage(lang);
            const text = cm.getValue();
            updateStats(text);
            renderIssues([...runMarkdownLint(text), ...runGrammar(text)]);
          });
        });
      }
      applyLanguage(localStorage.getItem("prisma-lang") || "en");
      loadContent();
      render();
      var _initText = cm.getValue();
      updateStats(_initText);
      renderIssues([...runMarkdownLint(_initText), ...runGrammar(_initText)]);
      requestAnimationFrame(() => cm.refresh());
      var portraitQuery = window.matchMedia(
        "(max-width: 768px), (orientation: portrait)"
      );
      var paneHeaderEditor = document.getElementById("pane-header-editor");
      var paneHeaderPreview = document.getElementById("pane-header-preview");
      var editorPaneEl = document.querySelector(".editor-pane");
      var previewPaneEl = document.querySelector(".preview-pane");
      function isPortrait() {
        return portraitQuery.matches;
      }
      var mainEl = document.querySelector("main");
      function setPaneCollapsed(pane, header, collapsed) {
        pane.classList.toggle("pane--collapsed", collapsed);
        header.setAttribute("aria-expanded", String(!collapsed));
        if (pane === previewPaneEl) {
          mainEl.classList.toggle("main--preview-collapsed", collapsed);
        }
      }
      function togglePane(pane, header) {
        if (!isPortrait()) return;
        const willCollapse = !pane.classList.contains("pane--collapsed");
        setPaneCollapsed(pane, header, willCollapse);
        if (!willCollapse && pane === editorPaneEl) {
          requestAnimationFrame(() => cm.refresh());
        }
      }
      paneHeaderEditor.addEventListener(
        "click",
        () => togglePane(editorPaneEl, paneHeaderEditor)
      );
      paneHeaderPreview.addEventListener(
        "click",
        () => togglePane(previewPaneEl, paneHeaderPreview)
      );
      portraitQuery.addEventListener("change", (e) => {
        if (!e.matches) {
          setPaneCollapsed(editorPaneEl, paneHeaderEditor, false);
          setPaneCollapsed(previewPaneEl, paneHeaderPreview, false);
        }
        requestAnimationFrame(() => cm.refresh());
      });
      var helpModal = document.getElementById("help-modal");
      var helpModalBackdrop = document.getElementById("help-modal-backdrop");
      var btnCloseHelp = document.getElementById("btn-close-help");
      var btnHelp = document.getElementById("btn-help");
      var helpBody = document.getElementById("help-body");
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
          ["Universal", t("export.universalDesc")],
          ["Microsoft Teams", t("export.teamsDesc")],
          ["Outlook / Gmail", t("export.emailDesc")],
          ["Slack", t("export.slackDesc")],
          [t("export.printName"), t("export.printDesc")]
        ].map(
          ([name, desc]) => `<div class="help-export-item">
        <span class="help-export-name">${name}</span>
        <span class="help-export-desc">${desc}</span>
    </div>`
        ).join("");
        const mdRows = [
          ["# Heading 1", "H1 \u2014 largest heading"],
          ["## Heading 2", "H2 \u2014 sub-heading"],
          ["**bold**", "Bold text"],
          ["*italic*", "Italic text"],
          ["~~strikethrough~~", "Strikethrough"],
          ["`inline code`", "Inline code"],
          ["```lang\\n\u2026\\n```", "Fenced code block"],
          ["[text](url)", "Hyperlink"],
          ["![alt](url)", "Image"],
          ["> quote", "Blockquote"],
          ["- item", "Unordered list"],
          ["1. item", "Ordered list"],
          ["- [ ] task", "Task list (unchecked)"],
          ["- [x] task", "Task list (checked)"],
          ["---", "Horizontal rule"],
          ["| A | B |\\n|---|---|\\n| 1 | 2 |", "Table"]
        ].map(([syn, desc]) => `<tr><td>${syn}</td><td>${desc}</td></tr>`).join("");
        const kbdRows = [
          [["Tab"], "Indent line / list item"],
          [["Shift", "Tab"], "Unindent line / list item"],
          [["Enter"], "Continue list \u2014 auto-inserts next bullet or number"],
          [["Esc"], "Close open modal or menu"]
        ].map(([keys, desc]) => {
          const kbds = keys.map((k) => `<kbd>${k}</kbd>`).join(" + ");
          return `<div class="help-shortcut-row">
            <span class="help-shortcut-keys">${kbds}</span>
            <span class="help-shortcut-desc">${desc}</span>
        </div>`;
        }).join("");
        return [
          section(
            iconEdit,
            t("help.s1"),
            `<ul class="help-list">
            <li>${t("help.s1d1")}</li>
            <li>${t("help.s1d2")}</li>
            <li>${t("help.s1d3")}</li>
            <li>${t("help.s1d4")}</li>
            <li>${t("help.s1d5")}</li>
        </ul>`
          ),
          section(
            iconExport,
            t("help.s2"),
            `<p class="help-p">${t("help.s2intro")}</p>
            <div class="help-export-grid">${exportRows}</div>`
          ),
          section(
            iconHistory,
            t("help.s3"),
            `<p class="help-p">${t("help.s3d1")}</p>`
          ),
          section(
            iconTable,
            t("help.s4"),
            `<p class="help-p">${t("help.s4d1")}</p>`
          ),
          section(
            iconThemes,
            t("help.s5"),
            `<p class="help-p">${t("help.s5d1")}</p>`
          ),
          section(
            iconSettings,
            t("help.s6"),
            `<p class="help-p">${t("help.s6d1")}</p>`
          ),
          section(
            iconMd,
            t("help.s7"),
            `<table class="help-md-table">
            <thead><tr><th>Syntax</th><th>Output</th></tr></thead>
            <tbody>${mdRows}</tbody>
        </table>`
          ),
          section(
            iconKbd,
            t("help.s8"),
            `<div class="help-shortcuts-grid">${kbdRows}</div>`
          )
        ].join("");
      }
      function openHelpModal() {
        helpBody.innerHTML = buildHelpBody();
        closeAllMenus();
        helpModal.classList.add("visible");
        helpModal.removeAttribute("inert");
        btnCloseHelp.focus();
      }
      function closeHelpModal() {
        helpModal.classList.remove("visible");
        helpModal.setAttribute("inert", "");
      }
      btnHelp.addEventListener("click", (e) => {
        e.stopPropagation();
        openHelpModal();
      });
      helpModalBackdrop.addEventListener("click", closeHelpModal);
      btnCloseHelp.addEventListener("click", closeHelpModal);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && helpModal.classList.contains("visible"))
          closeHelpModal();
      });
    }
  });
  require_main();
})();

// ── Sample Markdown content (one per supported language) ──
import { currentLang } from './i18n';

export function getSampleMarkdown() {
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

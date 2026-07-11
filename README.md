# ☕ Stack & Café — Linktree

Página de links (estilo linktree) de **Dalton Neres**, desenvolvedor Full Stack e criador do projeto *Stack & Café*.

🔗 [Ver demo](./index.html)

---

## 📁 Estrutura do projeto

```
.
├── index.html   # Estrutura da página
├── style.css    # Estilos (tema escuro + azul, cards, animações)
├── script.js    # Animação de reveal ao rolar a página
└── README.md
```

Os três arquivos precisam ficar **na mesma pasta** — o `index.html` referencia `style.css` e `script.js` por caminho relativo.

## 🚀 Como usar

Basta abrir o `index.html` no navegador. Não há build, dependências ou servidor necessários — é HTML, CSS e JS puros.

Se quiser publicar online, algumas opções gratuitas:

- **GitHub Pages** — suba os 3 arquivos num repositório e ative o Pages nas configurações.
- **Netlify / Vercel** — arraste a pasta do projeto direto no painel.

## ✏️ Como personalizar

### Trocar os links
No `index.html`, procure pela seção `<!-- ─── LINKS ──── -->` e edite o `href` de cada `<a class="link-btn">`:

```html
<a class="link-btn" href="SEU_LINK_AQUI" target="_blank" rel="noopener">
```

| Link | Status |
|---|---|
| 📷 Minha Jornada (Instagram pessoal) | ✅ `instagram.com/dalton_neres` |
| ☕ Stack & Café (Instagram) | ⚠️ placeholder — adicionar URL |
| 🎥 TikTok | ⚠️ placeholder — adicionar URL |
| 💻 GitHub | ✅ `github.com/daltonneres` |
| 🌐 Portfólio Completo | ✅ `potfolio-neres.vercel.app` |
| 🚀 Contrate um Projeto | ✅ `linkneres.vercel.app` |
| 💼 LinkedIn | ✅ `linkedin.com/in/dalton-josé-neres` |
| 📩 Contato | ✅ `mailto:dev.neresdalton@gmail.com` |

### Trocar textos e bio
Os textos (bio, formação, stack de tecnologias, filosofia) estão direto no `index.html`, dentro das seções `.hero-top` e `.info-grid`.

### Trocar cores
As cores ficam centralizadas em variáveis CSS no topo do `style.css`:

```css
:root {
  --blue: #2563eb;       /* cor de destaque */
  --blue-dark: #1e40af;  /* hover do destaque */
  --green: #00d97e;      /* status "online" */
  --bg: #000;             /* fundo da página */
  --bg-card: #0a0a0a;     /* fundo dos cards */
  --border: #1a1a1a;      /* bordas */
  --text: #fff;           /* texto principal */
  --muted: #9a9a9a;       /* texto secundário */
}
```

## 🛠️ Tecnologias

- HTML5
- CSS3 (variáveis, grid, animações)
- JavaScript (Intersection Observer para reveal ao scroll)
- Fontes: [Inter](https://fonts.google.com/specimen/Inter) e [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts

## 📌 Pendências

- [ ] Adicionar URL do Instagram do Stack & Café.
- [ ] Adicionar URL do TikTok.

---

**Dalton Neres** — Desenvolvedor Full Stack • Paraná, Brasil
© 2026 Stack & Café

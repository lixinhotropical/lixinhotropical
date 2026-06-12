# Lixinho Tropical — Site Oficial

**Música Safada Brasileira · São Paulo, SP**

Site completo da banda Lixinho Tropical. Desenvolvido com HTML, CSS e JavaScript vanilla — sem dependências de build, sem frameworks.

---

## Estrutura do Projeto

```
lixinho-tropical/
├── index.html                  ← Home
├── css/
│   └── global.css              ← Design system completo
├── js/
│   └── global.js               ← Nav, cookies, animações, lightbox
├── pages/
│   ├── sobre.html              ← A Banda & Integrantes
│   ├── show.html               ← O Show (experiência ao vivo)
│   ├── agenda.html             ← Agenda (próximos + passados)
│   ├── fotos.html              ← Galeria com filtros + lightbox
│   ├── videos.html             ← Vídeos com modal YouTube
│   ├── clipping.html           ← Palcos & Colaborações
│   ├── loja.html               ← Lojinha (compra via WhatsApp)
│   ├── musicas.html            ← Download + links streaming
│   ├── contato.html            ← Formulário + canais diretos
│   ├── rider.html              ← ⚠ OCULTO — Rider técnico (noindex)
│   ├── cookies.html            ← Política de Cookies
│   ├── termos.html             ← Termos de Uso
│   └── suporte.html            ← Ajuda & FAQ
├── assets/
│   ├── img/                    ← Todas as imagens (ver mapeamento abaixo)
│   ├── pdf/                    ← rider-tecnico.pdf, press-kit.pdf
│   └── components.html         ← Snippets reutilizáveis (nav, footer, ticker)
└── README.md
```

---

## Design System

| Token | Valor |
|---|---|
| `--red` | `#E8001C` |
| `--cyan` | `#00C8E8` |
| `--black` | `#080808` |
| `--white` | `#F5F0E8` |
| Display | Bebas Neue (Google Fonts) |
| Script | Caveat (Google Fonts) |
| Body | Space Grotesk (Google Fonts) |

---

## Mapeamento de Imagens

Todas as imagens ficam em `assets/img/`. Nomes esperados:

| Arquivo | Conteúdo |
|---|---|
| `logo.png` | Logo oficial |
| `hero-bg.jpg` | Foto hero da home |
| `banda-01.jpg` | Trio — divulgação principal |
| `banda-02.jpg` | Trio — divulgação secundária |
| `banda-brinde.jpg` | Trio — brindando |
| `deborah-solo.jpg` | Déborah Costa — retrato 1 |
| `deborah-solo-02.jpg` | Déborah Costa — retrato 2 |
| `deborah-solo-03.jpg` | Déborah Costa — retrato 3 |
| `aragao-solo.jpg` | Edézio Aragão — retrato 1 |
| `aragao-solo-02.jpg` | Edézio Aragão — retrato 2 |
| `magrao-solo.jpg` | Filipe Magrão — retrato 1 |
| `magrao-solo-02.jpg` | Filipe Magrão — retrato 2 |
| `foto-trio-01..04.jpg` | Trios — divulgação |
| `bastidores-01..03.jpg` | Bastidores |
| `show-01.jpg` | Show ao vivo 1 |
| `show-02.jpg` | Show ao vivo 2 |
| `video-thumb-01..05.jpg` | Thumbnails de vídeo |

**Créditos fotográficos:** Kehl Cabral Fotografia

---

## PDFs

Colocar em `assets/pdf/`:
- `rider-tecnico.pdf` — Rider técnico completo
- `press-kit.pdf` — Press kit da banda

---

## Funcionalidades

- **Nav fixo** com efeito scroll + hamburger mobile
- **Cookie banner** com localStorage (aceitar/recusar)
- **Ticker animado** com loop infinito
- **Efeito glitch** no título hero (hover)
- **Fade-up reveal** via IntersectionObserver em todos os `[data-reveal]`
- **Lightbox** para fotos (teclado + setas + fechar clicando fora)
- **Modal de vídeo** YouTube com autoplay
- **Filtros de foto** por categoria (JS vanilla)
- **Tabs** na agenda (próximos/passados)
- **Formulário de contato** com validação + success state
- **Página rider oculta** (`noindex, nofollow`) — acessível apenas por link direto
- **Responsivo** — breakpoints: 1024px, 768px, 480px
- **Reduced motion** respeitado

---

## Página Rider (Oculta)

URL: `/pages/rider.html`

Esta página **NÃO aparece** na navegação nem em mecanismos de busca (meta noindex). Compartilhe o link apenas com produtores e contratantes.

Contém:
- Rider técnico resumido
- Backline e camarim
- Logística e tempo de montagem
- Formatos de show e valores (referência)
- Downloads: rider PDF, press kit PDF, logo, fotos

---

## Como usar

1. Extraia a pasta `lixinho-tropical/`
2. Substitua as imagens placeholder pelos arquivos reais (ver mapeamento acima)
3. Coloque os PDFs em `assets/pdf/`
4. Atualize os links de streaming em `pages/musicas.html`
5. Atualize os links do YouTube em `pages/videos.html`
6. Atualize as datas em `pages/agenda.html`
7. Faça o deploy em qualquer servidor de arquivos estáticos (Vercel, Netlify, Hostinger, GitHub Pages etc.)

---

## Contato da Banda

- **E-mail:** lixinhotropical@gmail.com
- **WhatsApp:** (11) 98421-4384
- **Instagram:** @lixinhotropical

---

*Site desenvolvido em 2025. Design system: Bebas Neue + Caveat + Space Grotesk. Paleta: vermelho #E8001C + ciano #00C8E8 + preto #080808.*

---

## Deploy no GitHub Pages

1. Crie um repositório no GitHub (ex: `lixinho-tropical`)
2. Faça upload de todos os arquivos desta pasta para a branch `main`
3. Vá em **Settings → Pages → Source: Deploy from branch → main / root**
4. Seu site estará em `https://SEU-USUARIO.github.io/lixinho-tropical/`

> **Dica:** O arquivo `rider.html` é oculto dos mecanismos de busca (noindex), mas qualquer pessoa com o link consegue acessar. Para segurança extra, adicione uma senha via JavaScript ou hospede em domínio privado.

---

## Links das Redes Sociais (configurados)

| Rede | URL |
|---|---|
| Instagram | https://instagram.com/lixinhotropical |
| Spotify | https://open.spotify.com/intl-pt/artist/3noX4LW5rgdaEjRDBNDcei |
| SoundCloud | https://soundcloud.com/lixinho-tropical |
| YouTube | https://youtube.com/@lixinhotropical |
| TikTok | https://tiktok.com/@lixinhotropical |

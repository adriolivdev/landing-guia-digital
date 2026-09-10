# Documentação — Empresa no Digital

Manual completo do site **Empresa no Digital** (uma solução da **Aura Growth Tecnologia**).
Aqui está tudo que você pode alterar, onde alterar e como fazer sem quebrar nada.

Feito em **HTML + CSS + JavaScript puro**. Sem React, sem build, sem npm.

> Índice rápido: [Rodar](#1-como-rodar) · [Estrutura](#2-estrutura-de-pastas) · [Configuração central](#3-configuração-central-o-mais-importante) · [Cores e fontes](#4-cores-e-tipografia) · [Portfólio + imagens](#5-portfólio--como-adicionar-imagens-dos-sites) · [Depoimentos](#6-depoimentos--feedbacks) · [Páginas de segmento](#7-páginas-de-segmento) · [Blog](#8-blog) · [Fundo animado da hero](#9-fundo-animado-da-hero-efeito-tech) · [SEO](#10-seo) · [Formulário](#11-formulário-de-contato) · [Rastreamento/GTM](#12-rastreamento-e-google-tag-manager) · [Responsivo](#13-responsividade) · [Deploy](#14-publicar-na-vercel--domínio) · [Onde muda o quê](#15-tabela-onde-muda-o-quê) · [Problemas](#16-solução-de-problemas)

---

## 1. Como rodar

1. Abra a pasta `empresa-no-digital` no **VS Code**.
2. Instale a extensão **Live Server** (se ainda não tiver).
3. Abra o `index.html` e clique em **"Open with Live Server"** (canto inferior direito).

O site abre no navegador e funciona na hora: CSS, JS, animações, menu, formulário e WhatsApp. Nenhum comando de terminal é necessário.

---

## 2. Estrutura de pastas

```
empresa-no-digital/
├── index.html                 → Home (todas as seções)
├── 404.html                   → Página de erro
├── favicon.svg                → Ícone da aba
├── site.webmanifest           → Nome/ícones do app
├── robots.txt                 → Regras para buscadores
├── sitemap.xml                → Lista de URLs (para o Google)
├── vercel.json                → Config de deploy (URLs sem .html)
├── README.md                  → Início rápido
├── DOCUMENTACAO.md            → Este manual
├── css/
│   ├── style.css              → Cores, tipografia, layout, componentes
│   ├── responsive.css         → Breakpoints (celular/tablet)
│   └── animations.css         → Animações de entrada (reveal)
├── js/
│   ├── main.js                → CONFIG central, menu, FAQ, WhatsApp, formulário
│   ├── animations.js          → Revela elementos ao rolar a página
│   ├── tracking.js            → dataLayer / eventos / GTM (opcional)
│   └── hero-bg.js             → Fundo animado "tech" da hero + tilt do mockup
├── assets/
│   ├── images/
│   │   └── portfolio/         → Prints dos sites do portfólio (+ _placeholder.svg)
│   ├── icons/
│   └── logo/logo.svg
├── pages/
│   ├── criacao-de-sites-para-empresas.html
│   ├── sites-para-clinicas.html
│   ├── sites-para-prestadores-de-servicos.html
│   ├── sites-para-serralherias.html
│   ├── sites-para-oficinas-mecanicas.html
│   ├── sites-para-empresas-b2b.html
│   ├── portfolio.html
│   ├── sobre.html
│   └── contato.html
└── blog/
    ├── index.html
    └── (7 artigos .html)
```

### Regra de caminhos (importante ao editar links)
- Arquivos na **raiz** (`index.html`, `404.html`): usam `css/…`, `js/…`, `pages/…`, `assets/…`.
- Arquivos em **`pages/`** e **`blog/`**: usam `../css/…`, `../js/…`, `../assets/…`, `../index.html`.
- Links entre páginas da **mesma pasta**: só o nome do arquivo (ex.: em `blog/`, `outro-artigo.html`).

---

## 3. Configuração central (o mais importante)

Arquivo: **`js/main.js`**, no topo, objeto **`CONFIG`**:

```js
const CONFIG = {
  whatsapp: "5547988393646",   // JÁ CONFIGURADO (55 + DDD 47 + número). Só dígitos.
  whatsappMsg: "Olá! Encontrei a Empresa no Digital e gostaria de solicitar um orçamento...",
  email: "contato@empresanodigital.com.br",
  gtmId: ""                     // ex.: "GTM-XXXXXXX" (deixe vazio se não usar)
};
```

- **`whatsapp`** → o número que recebe os leads. **Trocando aqui, muda em TODOS os 78 botões do site** (home, páginas, blog, formulário e botão flutuante). Formato: DDI + DDD + número, só dígitos (`55` + `47` + `988393646`).
- **`whatsappMsg`** → mensagem que já vem escrita quando o cliente abre o WhatsApp.
- **Mensagem diferente em um botão específico:** adicione `data-wa-msg="Sua mensagem"` naquele link no HTML.
- Enquanto o número estiver vazio, os botões caem na seção de contato (segurança).

---

## 4. Cores e tipografia

Arquivo: **`css/style.css`**, bloco **`:root`** (no topo). Trocando a variável, muda no site inteiro.

**Cores da marca (as que você mais vai querer mexer):**
```css
--brand:        #5a45e0;   /* cor principal (botões, links, destaques) */
--brand-strong: #4a37c4;   /* hover / ênfase */
--brand-deep:   #2f2280;   /* fundos escuros da marca (rodapé) */
--brand-tint:   #efebfd;   /* fundo clarinho da marca */
--ok:           #129e63;   /* verde do WhatsApp */
```
Neutros de texto: `--ink`, `--ink-2`, `--muted`. Fundos: `--bg`, `--bg-soft`. Bordas: `--line`.

**Fontes:** `--font-display` (Sora, títulos) e `--font-body` (Inter, texto). As fontes vêm do Google Fonts pelo `<link>` no `<head>` de cada página. Para trocar, altere esse `<link>` e as duas variáveis.

**Tamanhos de fonte** são fluidos (`--step-0` a `--step-4`) e se adaptam à tela sozinhos.

---

## 5. Portfólio — como adicionar imagens dos sites

Os cards usam uma caixa de imagem com **tamanho fixo (proporção 16:10)** e `object-fit: cover`. Ou seja: **qualquer print que você colocar fica no mesmo tamanho e alinhado** com os outros — a imagem é recortada automaticamente para preencher a caixa, sem distorcer.

### Especificação da imagem
- **Tamanho recomendado:** `1600 × 1000 px` (proporção **16:10**).
- Formato: `.jpg` (ou `.webp`, mais leve). Peso ideal: abaixo de ~300 KB.
- Dica: tire o print da **parte de cima** do site (o corte prioriza o topo).

### Onde colocar
Coloque os arquivos em **`assets/images/portfolio/`**.

### Como o card busca a imagem
Cada card já aponta para um arquivo e, **se ele não existir, mostra o placeholder automaticamente** (nunca aparece imagem quebrada):

```html
<div class="project__thumb">
  <img class="project__img"
       src="../assets/images/portfolio/oliveira-servicos.jpg"
       alt="Print do site da Oliveira Serviços"
       loading="lazy" decoding="async" width="1600" height="1000"
       onerror="this.onerror=null;this.src='../assets/images/portfolio/_placeholder.svg'">
</div>
```

Arquivos que os cards já procuram:
- `assets/images/portfolio/oliveira-servicos.jpg` (Oliveira)
- `assets/images/portfolio/projeto-02.jpg` … `projeto-06.jpg` (modelos)

**Para adicionar o print:** basta salvar a imagem com esse nome na pasta. Não precisa mexer no HTML. (Na home o caminho é `assets/...`; nas páginas é `../assets/...`.)

### Adicionar/editar um card
Os cards ficam em **`pages/portfolio.html`** (versão completa) e na seção `#portfolio` da **`index.html`** (prévia da home). Cada card é um `<article class="project">`:

```html
<article class="project reveal">
  <div class="project__thumb">
    <img class="project__img" src="../assets/images/portfolio/NOME.jpg"
         alt="Print do site da Empresa X" loading="lazy" decoding="async"
         width="1600" height="1000"
         onerror="this.onerror=null;this.src='../assets/images/portfolio/_placeholder.svg'">
  </div>
  <div class="project__body">
    <span class="project__seg">Segmento</span>
    <span class="project__title">Nome da empresa</span>
    <p class="project__desc">Breve descrição do projeto.</p>
    <a class="project__link" href="https://site-do-cliente.com.br" target="_blank" rel="noopener">
      Ver site ao vivo →
    </a>
  </div>
</article>
```

> **Card Oliveira Serviços:** já é um caso real. Falta só (a) salvar o print como `oliveira-servicos.jpg` e (b) trocar `[INSERIR LINK DO PROJETO]` pelo link do site.

> **Política da agência:** o portfólio lista **apenas projetos reais**. Enquanto não houver um case, deixe o card modelo — ele mostra o placeholder "Adicionar print do site".

---

## 6. Depoimentos / feedbacks

Seção `#depoimentos` na **`index.html`**. Os cards estão como **modelo honesto** (`is-empty`), com marcações `[INSERIR DEPOIMENTO REAL DO CLIENTE]`, `[Nome do cliente]` e `[Empresa · Cidade]`.

Para publicar, substitua por **depoimentos reais e autorizados**.

> **Importante (política + CDC art. 37):** não usamos avaliações/depoimentos inventados. Se ainda não houver depoimentos aprovados, mantenha os modelos ou remova a seção inteira (apague o bloco `<section ... id="depoimentos"> … </section>`).

---

## 7. Páginas de segmento

Uma página por segmento em `pages/` (clínicas, prestadores, serralherias, oficinas, B2B, e a visão geral "criação de sites"). Cada uma tem título, descrição, H1, dores, o que entregamos, processo e FAQ **próprios**.

**Editar conteúdo:** abra o `.html` e altere os textos. Mantenha **um único `<h1>` por página**.

**Criar um novo segmento:**
1. Duplique um arquivo parecido (ex.: `pages/sites-para-clinicas.html`).
2. Renomeie (ex.: `pages/sites-para-restaurantes.html`).
3. Troque no `<head>`: `<title>`, `<meta name="description">`, `<link rel="canonical">` (aponte para `/pages/sites-para-restaurantes`).
4. Ajuste o H1, os textos e as perguntas do FAQ.
5. Atualize os blocos **JSON-LD** no fim do `<head>` (nome do serviço, breadcrumb e as perguntas do FAQ — veja a regra do FAQ na seção [SEO](#10-seo)).
6. Adicione o link no menu e na seção "Segmentos" da home, e a URL no `sitemap.xml`.

---

## 8. Blog

Índice em `blog/index.html` e 7 artigos em `blog/`.

**Adicionar um artigo:**
1. Duplique um artigo existente (ex.: `blog/como-aparecer-no-google.html`).
2. Renomeie para o slug novo (ex.: `blog/meu-artigo.html`).
3. No `<head>`: troque `<title>`, `<meta name="description">` e `<link rel="canonical">`.
4. Troque o `<h1>`, o sumário (âncoras), os `<h2>`/`<h3>` e o conteúdo.
5. Atualize o JSON-LD `Article` (headline, description, `datePublished`, `dateModified`) e o `FAQPage`.
6. Adicione o card do artigo no `blog/index.html` e a URL no `sitemap.xml`.

> Os links entre artigos (mesma pasta `blog/`) usam só o nome do arquivo, ex.: `href="site-ou-landing-page.html"`.

---

## 9. Fundo animado da hero (efeito "tech")

Arquivo: **`js/hero-bg.js`**. É uma **rede de partículas em `<canvas>`** desenhada atrás da hero: pontos que se movem, se conectam por linhas e **reagem ao mouse**. É leve, **pausa quando sai da tela** e respeita `prefers-reduced-motion` (quem prefere menos animação vê um quadro estático).

**Ajustes rápidos** (no topo do arquivo / nas constantes):
- **Densidade de partículas:** função `buildNodes()`, valor `Math.min(72, …/16000)`. Aumente o `72` para mais pontos; aumente o divisor `16000` para menos.
- **Velocidade:** em `buildNodes()`, o `* 0.28` nas velocidades (`vx`/`vy`). Menor = mais lento.
- **Distância das linhas:** constante `LINK` (padrão `132`). Maior = mais conexões.
- **Cor:** usa a variável `--brand` do CSS automaticamente. Mudou a cor da marca, muda a animação.
- **Intensidade das linhas/pontos:** os valores de `alpha` (`0.16`, `0.55`, etc.).

**Tilt do mockup:** o mesmo arquivo dá um leve efeito 3D no mockup do navegador ao mover o mouse (desligado no celular e no modo "menos animação").

### Trocar a animação por um VÍDEO real
1. Coloque o vídeo em `assets/video/hero.mp4` (e, se puder, `.webm`).
2. Na `index.html`, troque a linha `<canvas class="hero__canvas" …>` por:
   ```html
   <video class="hero__canvas" autoplay muted loop playsinline
          poster="assets/images/hero-poster.jpg">
     <source src="assets/video/hero.webm" type="video/webm">
     <source src="assets/video/hero.mp4"  type="video/mp4">
   </video>
   ```
3. (Opcional) Remova a linha `<script src="js/hero-bg.js" defer></script>` do rodapé.

O CSS `.hero__canvas` já cobre a área e aplica a máscara que protege a leitura do texto. (As mesmas instruções estão comentadas no fim do `hero-bg.js`.)

---

## 10. SEO

Em cada página, no `<head>`:
- **`<title>`** e **`<meta name="description">`** — únicos por página.
- **`<link rel="canonical">`** — a URL oficial daquela página.
- **Open Graph / Twitter** — usados quando o link é compartilhado.
- **Um único `<h1>`** por página.
- **JSON-LD** (dados estruturados) no fim do `<head>`: Organization, WebSite, Service, Article, BreadcrumbList e FAQPage.

> **Regra do FAQ:** o texto das perguntas/respostas **visíveis** na página deve ser **idêntico** ao do bloco `FAQPage` (JSON-LD). Se editar uma, edite a outra igual. É exigência do Google para o rich result de FAQ.

Domínio canônico usado em todo o site: `https://empresanodigital.com.br`. Se mudar o domínio, atualize os `canonical`, o `sitemap.xml`, o `robots.txt` e as URLs dentro dos JSON-LD.

---

## 11. Formulário de contato

Arquivo: **`pages/contato.html`** + lógica em **`js/main.js`** (função `initForm`).
- Validação no navegador (nome, empresa, WhatsApp, tipo de site).
- **Sem servidor:** ao enviar, o site abre o WhatsApp já com os dados preenchidos.
- **Para enviar por servidor** (e-mail/CRM): conecte um endpoint (ex.: Formspree, n8n, API própria). Há um comentário `TODO` em `initForm()` marcando o ponto exato onde plugar o envio.

Campos do formulário podem ser editados direto no HTML (`pages/contato.html`), inclusive as opções do "Qual site você precisa?".

---

## 12. Rastreamento e Google Tag Manager

Arquivo: **`js/tracking.js`**. Ele cria o `dataLayer` e dispara eventos. O **GTM só é injetado se você preencher `gtmId`** no CONFIG (`js/main.js`).

**Eventos já preparados:** `whatsapp_click`, `cta_click`, `form_start`, `form_submit`, `generate_lead`, `portfolio_view`.

**Como marcar novos cliques:** adicione atributos no elemento:
- `data-cta="whatsapp"` / `data-track="cta_click"` — dispara evento no clique.
- `data-location="hero"` — identifica de onde veio o clique.

Ative o GTM em 3 passos:
1. `CONFIG.gtmId = "GTM-XXXXXXX"` em `js/main.js`.
2. O `tracking.js` injeta o script sozinho.
3. Para navegadores sem JS, cole o `<noscript>` do GTM logo após `<body>` (código que o próprio GTM fornece).

---

## 13. Responsividade

Arquivo: **`css/responsive.css`**. O site é **mobile-first** (pensado primeiro no celular). Breakpoints principais: `1280`, `1024`, `860`, `640`, `380` px. O menu vira "hambúrguer" no celular automaticamente (lógica em `js/main.js`).

Para ajustar algo só no celular, edite dentro do `@media (max-width: …)` correspondente.

---

## 14. Publicar na Vercel + domínio

1. Suba a pasta para um repositório no GitHub (ou use o Vercel CLI / arrastar-e-soltar).
2. Na Vercel: **New Project** → importe o repositório. Framework: **Other** (não há build).
3. **Deploy**. O `vercel.json` já ativa URLs limpas (sem `.html`).

**Apontar `empresanodigital.com.br`:**
1. Projeto na Vercel → **Settings → Domains → Add** → `empresanodigital.com.br`.
2. No provedor do domínio (ex.: Registro.br), configure o A/CNAME que a Vercel indicar.
3. Aguarde a propagação de DNS. O HTTPS é emitido automaticamente.

---

## 15. Tabela: onde muda o quê

| Quero mudar… | Arquivo | Onde |
|---|---|---|
| Número do WhatsApp | `js/main.js` | `CONFIG.whatsapp` |
| Mensagem padrão do WhatsApp | `js/main.js` | `CONFIG.whatsappMsg` |
| Cor principal / da marca | `css/style.css` | `:root` (`--brand`…) |
| Logo | `assets/logo/logo.svg` + `favicon.svg` | substituir arquivo |
| Print de um projeto | `assets/images/portfolio/` | salvar `.jpg` com o nome certo |
| Adicionar/editar card do portfólio | `pages/portfolio.html` e `index.html` | bloco `<article class="project">` |
| Depoimentos | `index.html` | seção `#depoimentos` |
| Texto de um segmento | `pages/…​.html` | conteúdo da página |
| Novo artigo do blog | `blog/` + `blog/index.html` + `sitemap.xml` | ver seção 8 |
| Título/descrição (SEO) | cada `.html` | `<head>` |
| Fundo animado da hero | `js/hero-bg.js` | constantes no topo |
| Trocar animação por vídeo | `index.html` + `assets/video/` | ver seção 9 |
| Formulário / envio | `pages/contato.html` + `js/main.js` | `initForm()` |
| Ativar GTM/Analytics | `js/main.js` | `CONFIG.gtmId` |

---

## 16. Solução de problemas

- **A imagem do portfólio não aparece / aparece o placeholder.** O arquivo não está na pasta certa ou o nome não bate. Confira `assets/images/portfolio/` e o nome no `src` (ex.: `oliveira-servicos.jpg`). Lembre: em `pages/` o caminho começa com `../`.
- **Imagens com tamanhos diferentes.** Não acontece com o card padrão (a caixa tem tamanho fixo e recorta a imagem). Se editou o HTML, garanta que a imagem está com `class="project__img"` **dentro** de `<div class="project__thumb">`.
- **O WhatsApp não abre.** Verifique `CONFIG.whatsapp` (só dígitos, com `55` na frente). Vazio = cai no contato de propósito.
- **A animação da hero está pesada em um PC fraco.** Reduza a densidade em `hero-bg.js` (aumente o divisor `16000`) ou diminua `LINK`.
- **As fontes parecem "erradas" no Live Server.** Se estiver sem internet, o Google Fonts não carrega e entra a fonte de sistema. Com internet, carrega normal.
- **Rich result de FAQ não aparece no Google.** O texto visível do FAQ precisa ser idêntico ao do JSON-LD `FAQPage`. Reveja a seção 10.
- **URL com `.html` na Vercel.** O `vercel.json` já remove. Se aparecer, confirme que o arquivo foi enviado no deploy.

---

*Empresa no Digital — uma solução da Aura Growth Tecnologia.*

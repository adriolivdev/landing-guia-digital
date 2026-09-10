# Empresa no Digital

Site institucional da marca **Empresa no Digital** — uma solução da **Aura Growth Tecnologia** — para venda de criação de sites profissionais.

Feito em **HTML, CSS e JavaScript puro**. Sem React, sem build, sem npm.

> 📘 **Manual completo de alterações:** veja **[`DOCUMENTACAO.md`](DOCUMENTACAO.md)** — cobre tudo (WhatsApp, cores, imagens do portfólio, depoimentos, blog, SEO, fundo animado da hero, formulário, GTM, deploy e solução de problemas).

---

## Como abrir (Live Server)

1. Abra a pasta `empresa-no-digital` no VS Code.
2. Instale a extensão **Live Server** (caso ainda não tenha).
3. Abra o arquivo `index.html`.
4. Clique em **"Open with Live Server"** (canto inferior direito do VS Code).

O site abre no navegador e funciona imediatamente: CSS, JavaScript, animações, menu, formulário e botão de WhatsApp.

> Não é necessário instalar nada além da extensão. Nenhum comando de terminal é preciso.

---

## Estrutura de pastas

```
empresa-no-digital/
├── index.html
├── 404.html
├── favicon.svg
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── vercel.json
├── README.md
├── css/
│   ├── style.css        (layout, cores, tipografia, componentes)
│   ├── responsive.css   (breakpoints / mobile)
│   └── animations.css   (reveal ao scroll + prefers-reduced-motion)
├── js/
│   ├── main.js          (CONFIG, menu, FAQ, WhatsApp, formulário)
│   ├── animations.js    (IntersectionObserver)
│   └── tracking.js      (dataLayer / eventos / GTM opcional)
├── assets/
│   ├── images/
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
    ├── quanto-custa-criar-um-site-profissional.html
    ├── como-criar-um-site-para-empresa.html
    ├── site-ou-landing-page.html
    ├── como-aparecer-no-google.html
    ├── seo-local-para-empresas.html
    ├── como-aparecer-no-google-maps.html
    └── como-rastrear-conversoes-do-site.html
```

---

## Onde alterar cada coisa

### Telefone do WhatsApp  ← comece por aqui
Arquivo: **`js/main.js`**, objeto **`CONFIG`** (no topo).
```js
const CONFIG = {
  whatsapp: "5547988393646",   // JÁ CONFIGURADO (55 + 47 + 988393646). Troque aqui se mudar o número.
  whatsappMsg: "Olá! Encontrei a Empresa no Digital...",
  ...
};
```
Todos os botões de WhatsApp do site usam esse número automaticamente. **Só é preciso trocar em um lugar.**
O número dos leads já está configurado. Se precisar trocar, altere só aqui — os 78 botões de WhatsApp do site usam este valor.

### Logo
Arquivo: **`assets/logo/logo.svg`** (e `favicon.svg` na raiz). Substitua pelos seus arquivos mantendo os mesmos nomes, ou ajuste o caminho no header/footer.

### Cores
Arquivo: **`css/style.css`**, bloco **`:root`** (topo). Altere as variáveis, principalmente:
```css
--brand: #5a45e0;         /* cor principal */
--brand-strong: #4a37c4;  /* hover / ênfase */
--brand-deep: #2f2280;    /* fundos escuros da marca */
--brand-tint: #efebfd;    /* fundo claro da marca */
```

### Imagens
Coloque as imagens em **`assets/images/`** e referencie com caminho relativo.
- Na raiz (index): `assets/images/arquivo.webp`
- Em `pages/` e `blog/`: `../assets/images/arquivo.webp`
Sempre inclua `width`, `height`, `alt`, `loading="lazy"` e `decoding="async"` (exceto na imagem principal do topo, se ela for o maior elemento visível).

### Portfólio
Arquivo: **`pages/portfolio.html`** (e a seção `#portfolio` em `index.html`).
Cada projeto é um `<article class="project">`. Para adicionar um case real, substitua um card modelo (`is-placeholder`) por: imagem, nome da empresa, segmento e link.
> Mantemos apenas projetos reais. O card **Oliveira Serviços** já é um caso real (falta apenas inserir o link).

### Depoimentos / feedbacks
Seção `#depoimentos` em **`index.html`**. Os cards estão como modelo (`is-empty`).
Substitua `[INSERIR DEPOIMENTO REAL DO CLIENTE]`, `[Nome do cliente]` e `[Empresa · Cidade]` por depoimentos **reais e autorizados**.
> Política da agência: nada de avaliações inventadas (Código de Defesa do Consumidor, art. 37). Se ainda não houver depoimentos aprovados, mantenha os modelos ou remova a seção inteira.

### Adicionar um novo artigo no blog
1. Duplique um arquivo de `blog/` (ex.: `blog/como-aparecer-no-google.html`).
2. Renomeie para o novo slug (ex.: `blog/meu-novo-artigo.html`).
3. Altere `<title>`, `<meta name="description">`, `<link rel="canonical">`, o `<h1>` e o conteúdo.
4. Atualize o JSON-LD `Article` (headline, description, datas) e o `FAQPage` (o texto do FAQ visível deve bater 1:1 com o JSON-LD).
5. Adicione o card em `blog/index.html` e a URL em `sitemap.xml`.

### Trocar títulos e descrições (SEO)
Em cada `.html`, no `<head>`: `<title>`, `<meta name="description">` e `<link rel="canonical">`. Mantenha **um único `<h1>` por página**.

### Alterar links
Links internos usam caminhos relativos:
- Na raiz: `pages/arquivo.html`, `blog/arquivo.html`
- Em `pages/` e `blog/`: `../css/...`, `../js/...`, `../pages/...`, `../index.html`

---

## Google Tag Manager (opcional)

1. Em **`js/main.js`**, no `CONFIG`, preencha `gtmId: "GTM-XXXXXXX"`.
2. O `js/tracking.js` injeta o GTM automaticamente quando há um ID válido.
3. Para o fallback sem JavaScript, adicione o `<noscript>` do GTM logo após a abertura do `<body>` de cada página (código fornecido pelo próprio GTM).

Eventos já preparados no `dataLayer`: `whatsapp_click`, `cta_click`, `form_start`, `form_submit`, `generate_lead`, `portfolio_view`.
Os CTAs já têm `data-cta`, `data-location` e `data-track` para você mapear no GTM.

---

## Formulário

Arquivo: **`pages/contato.html`** + lógica em **`js/main.js`** (`initForm`).
- Validação acontece no frontend (nome, empresa, WhatsApp, tipo de site).
- **Sem backend:** ao enviar, o site abre o WhatsApp com os dados preenchidos.
- Para envio por servidor, conecte um endpoint (ex.: Formspree, n8n, API própria) e ajuste `initForm()`. Há um comentário `TODO` no arquivo indicando o ponto.

---

## Publicar na Vercel

1. Envie a pasta para um repositório no GitHub (ou faça deploy direto pelo Vercel CLI / drag-and-drop).
2. No painel da Vercel: **New Project** → importe o repositório.
3. Framework preset: **Other** (não há build). Output = a própria raiz.
4. Deploy. O `vercel.json` já ativa `cleanUrls` (URLs sem `.html`).

### Apontar o domínio empresanodigital.com.br
1. No projeto da Vercel: **Settings → Domains → Add** → digite `empresanodigital.com.br`.
2. No seu provedor de domínio (Registro.br ou onde o domínio está), aponte conforme a Vercel indicar (registro A / CNAME).
3. Aguarde a propagação de DNS. A Vercel emite o certificado HTTPS automaticamente.
4. Confirme que o `<link rel="canonical">` e o `sitemap.xml` usam `https://empresanodigital.com.br`.

---

## Checklist de qualidade (o que já está pronto)

- HTML semântico, um `<h1>` por página, `lang="pt-BR"`.
- Title, description, canonical, Open Graph e Twitter Card em todas as páginas.
- JSON-LD: Organization, WebSite, Service, WebPage, BreadcrumbList, Article e FAQPage (texto batendo 1:1 com o visível).
- robots.txt + sitemap.xml.
- Mobile-first, sem overflow horizontal, menu mobile funcional.
- Animações leves via IntersectionObserver, respeitando `prefers-reduced-motion`.
- Botão flutuante de WhatsApp com `aria-label`, sem animação chamativa.
- Zero dependências, zero build, zero npm.

*Empresa no Digital — uma solução da Aura Growth Tecnologia.*

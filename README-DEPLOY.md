# 🚀 Adriane Oliveira — Empresa no Digital
## Site v8 — Gestão de Anúncios e Sites para Clínicas

[![Deploy Status](https://img.shields.io/badge/Status-Ready%20to%20Deploy-brightgreen?style=flat-square)](https://empresanodigital.com.br)
[![SEO Status](https://img.shields.io/badge/SEO-Local%20Optimized-blue?style=flat-square)](./SEO-LOCAL-GUIDE.md)
[![HTTPS](https://img.shields.io/badge/HTTPS-Ready-green?style=flat-square)](#)

---

## 📍 Informações Principais

| Item | Valor |
|------|-------|
| **Domínio** | `empresanodigital.com.br` |
| **Cliente** | Adriane Oliveira |
| **Nicho** | Gestão de Anúncios e Sites para Clínicas |
| **Atuação** | Santa Catarina (Joinville, Blumenau, Itajaí, etc) |
| **CNPJ** | 65.890.603/0001-51 |
| **WhatsApp** | (47) 98839-3646 |
| **Email** | adriane@empresanodigital.com.br |

---

## 🎯 O Que Está Incluído

### ✅ Frontend
- [x] Design responsivo (mobile-first)
- [x] CSS moderno com variáveis de tema
- [x] JavaScript vanilla (sem dependências)
- [x] Hero com carrossel de 4 slides
- [x] 10 seções principais
- [x] FAQ com accordion
- [x] Formulário de contato
- [x] Footer sticky com WhatsApp

### ✅ SEO Local
- [x] Meta tags otimizadas com keywords locais
- [x] Geo tags (Santa Catarina, Joinville, Blumenau, Itajaí)
- [x] Schema JSON-LD (LocalBusiness, Organization, Service)
- [x] Open Graph + Twitter Card
- [x] robots.txt completo
- [x] sitemap.xml com todas as páginas
- [x] .htaccess (GZIP, cache, HTTPS)

### ✅ Performance
- [x] Compressão GZIP
- [x] Cache de navegador
- [x] Imagens otimizadas (comentários para placeholder)
- [x] CSS inline crítico
- [x] Lazy loading pronto
- [x] Minificação pronta

### ✅ Segurança
- [x] HTTPS ready (.htaccess forçando)
- [x] Headers de segurança
- [x] Proteção de arquivo .htaccess
- [x] Sem dados sensíveis no código

---

## 📁 Estrutura de Arquivos

```
adriane-site-v8/
├── index.html                  # Página principal
├── styles.css                  # CSS completo (variáveis de tema)
├── script.js                   # JavaScript (WhatsApp, eventos)
├── robots.txt                  # SEO - Crawlers
├── sitemap.xml                 # SEO - Mapa do site
├── .htaccess                   # Apache configs (HTTPS, cache, gzip)
├── package.json                # Dependências (vazio/opcional)
├── .gitignore                  # Git ignore
├── README-v8-ATUALIZADO.md    # Documentação anterior
├── README-DEPLOY.md            # Este arquivo
├── SEO-LOCAL-GUIDE.md          # Guia completo de SEO
├── DEPLOY-INSTRUCTIONS.md      # Como fazer deploy
└── 📁 images/                  # Placeholder para imagens (não incluídas)
    ├── logo.png               # Logo "AO" em dourado
    ├── hero-*.jpg             # 4 slides do hero
    ├── modelo-*.jpg           # 6 modelos de sites
    └── ...
```

---

## 🎨 Design System

```css
--primary:     #8A7562   /* Marrom/Bege */
--accent:      #D4AF37   /* Dourado */
--white:       #FFFFFF   
--light-bg:    #F9F7F3   
--text-dark:   #1A1A1A   
--text-gray:   #666666   
--border:      #E8DCC6   
--success:     #25d366   /* WhatsApp */
```

### Tipografia
- **Headings:** System fonts (Segoe UI, Helvetica, Arial)
- **Body:** System fonts (defaut sans-serif)
- **Logo:** "AO" em dourado

---

## 🚀 Como Fazer Deploy

### Opção 1: Manual (FTP)
```bash
1. Conectar via FTP ao servidor
2. Upload de todos os arquivos
3. Configurar permissões (644 para arquivos, 755 para pastas)
4. Ativar HTTPS via Let's Encrypt
5. Testar em https://empresanodigital.com.br
```

### Opção 2: Automático (Git)
```bash
git clone https://repo.com/adriane-site-v8.git
cd adriane-site-v8
# Deploy automation...
```

### Pré-requisitos
- [ ] Hosting com suporte Apache + mod_rewrite
- [ ] Domínio `empresanodigital.com.br` apontando
- [ ] HTTPS (Let's Encrypt gratuito)
- [ ] PHP 7.4+ (opcional, para formulário)

**→ Ver detalhes em [DEPLOY-INSTRUCTIONS.md](./DEPLOY-INSTRUCTIONS.md)**

---

## 🔍 SEO Local Implementado

### Keywords Alvo
```
Nivel 1: "anúncios para clínicas", "sites para consultório", "Google Ads"
Nivel 2: "gestão de tráfego", "posicionamento digital", "Meta Ads"
Nivel 3: "Joinville", "Blumenau", "Itajaí", "Santa Catarina"
```

### Estratégia
- ✅ Geo tags no `<head>`
- ✅ Schema LocalBusiness JSON-LD
- ✅ Conteúdo com keywords locais naturais
- ✅ Cidades mencionadas no H1, About, Footer
- ✅ Sitemap com prioridades
- ✅ Google Business Profile ready

**→ Leia mais em [SEO-LOCAL-GUIDE.md](./SEO-LOCAL-GUIDE.md)**

---

## 📊 Seções do Site

1. **Header Sticky** — Logo + Nav + CTA "Conversar Agora"
2. **Hero** — H1 com destaque dourado + Subtítulo + 2 CTAs + Carrossel 4 slides
3. **Sobre** — "2 anos ajudando clínicas" + 5 bullets + CTA
4. **Por Que Site + Anúncios** — 6 cards didáticos
5. **Nossos Serviços** — "Sites" + "Anúncios" + 3 extras
6. **Problemas que Resolvemos** — 4 cards com frases diretas
7. **Modelos de Sites** — 6 especialidades (Odonto, Medicina, Estética, Fisio, Psico, Nutri)
8. **Especialista** — Foto + Bio + 8 badges + Certificações
9. **Área de Atuação** — Joinville, Blumenau, Itajaí, + 3 cidades + Brasil
10. **FAQ** — 6 perguntas accordion
11. **Contato** — Form 5 campos + Info + Redes Sociais
12. **Footer** — 3 colunas + Sticky WhatsApp 60px pulse verde

---

## 🔗 Links Importantes

| Link | Descrição |
|------|-----------|
| [empresanodigital.com.br](https://empresanodigital.com.br) | Site ao vivo |
| [Search Console](https://search.google.com/search-console) | Monitorar indexação |
| [Business Profile](https://business.google.com) | Perfil local no Google |
| [Analytics](https://analytics.google.com) | Tráfego e conversões |
| [Google Tag Manager](https://tagmanager.google.com) | Rastreamento avançado |

---

## 📱 Mensagens WhatsApp Pré-configuradas

Sistema de mensagens dinâmicas por seção:

```javascript
MESSAGES = {
    hero: 'Oi Adriane! Gostaria de conversar sobre site e anúncios para minha clínica.',
    about: 'Como funciona exatamente esse trabalho de site + anúncios?',
    traffic: 'Tenho interesse em saber mais sobre anúncios no Google e Instagram.',
    site: 'Preciso de um site para minha clínica.',
    seo: 'Como faço para minha clínica aparecer no Google?',
    cro: 'Meu site recebe visitas mas ninguém agenda.',
    analytics: 'Como vocês acompanham os resultados?',
    equipe: 'Gostaria de conhecer mais sobre seu trabalho.',
    modelo_odonto: 'Achei legal esse modelo de site para dentista.',
    // ... mais modelos
}
```

---

## 🎬 Eventos Rastreados (GTM)

```javascript
// CTAs por seção
cta_whatsapp_hero
cta_whatsapp_about
cta_whatsapp_traffic
// ... total de 14 eventos diferentes

// Scroll tracking
scroll_50
scroll_75

// Engajamento
faq_open
form_submit
page_view
```

---

## ✨ Diferenciais

1. **100% Local SEO** — Otimizado para buscas locais em Santa Catarina
2. **Schema Markup Completo** — LocalBusiness, Organization, Service
3. **Performance Ready** — GZIP, cache, HTTPS
4. **Mobile First** — Responsivo em todos os dispositivos
5. **Sem Dependências** — CSS + JS vanilla (rápido)
6. **Escalável** — Fácil adicionar novas seções/cidades
7. **Acessível** — WCAG 2.1 AA compliant (preparado)

---

## 🚨 Próximos Passos

### Imediato (Antes do Deploy)
- [ ] Gerar imagens reais (substituir comentários `<!-- [IMAGEM: ...] -->`)
- [ ] Gerar ícones SVG (substituir comentários `<!-- [ÍCONE] -->`)
- [ ] Configurar GTM ID real no `<head>`
- [ ] Configurar Google Analytics 4 ID

### Deploy
- [ ] Upload dos arquivos via FTP
- [ ] Configurar domínio + DNS
- [ ] Instalar certificado SSL (Let's Encrypt)
- [ ] Testar HTTPS
- [ ] **Ver [DEPLOY-INSTRUCTIONS.md](./DEPLOY-INSTRUCTIONS.md)**

### Pós-Deploy
- [ ] Enviar sitemap no Google Search Console
- [ ] Criar Google Business Profile
- [ ] Verificar indexação (GSC)
- [ ] Monitorar rankings no Google
- [ ] Coletar reviews

---

## 📞 Suporte

- **Contato:** adriane@empresanodigital.com.br
- **WhatsApp:** (47) 98839-3646
- **Instagram:** @adriolivdev

---

## 📄 Licença

**Uso Exclusivo:** Este site foi desenvolvido especificamente para Adriane Oliveira.  
© 2026 Empresa no Digital

---

## 📝 Changelog

### v8 - 30/09/2026
✅ Domínio alterado para `empresanodigital.com.br`  
✅ SEO Local implementado (meta tags, geo tags, schema)  
✅ robots.txt e sitemap.xml adicionados  
✅ .htaccess com HTTPS, GZIP, cache  
✅ Conteúdo otimizado com keywords locais  
✅ SEO-LOCAL-GUIDE.md criado  
✅ DEPLOY-INSTRUCTIONS.md criado  

### v8 - Anterior
✅ Seção "Casos" substituída por "Modelos"  
✅ Linguagem reformulada (especialista)  
✅ Emojis removidos  
✅ H1 com destaque dourado  

---

**Status:** 🟢 **PRONTO PARA DEPLOY**  
**Última atualização:** 30/09/2026

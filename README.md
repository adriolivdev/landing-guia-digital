# Adriane Oliveira v8 - Tráfego Pago e Sites para Clínicas

## 📋 O que é este site?

Site profissional estruturado na **mesma arquitetura da Odontoclean** (estilo, layout, fluxo), mas **100% adaptado para Adriane Oliveira** — sem jargão genérico de "marketing digital", focado em:

- **Tráfego pago** (Google Ads + Meta Ads)
- **Desenvolvimento de sites** para clínicas
- **SEO Local** em Santa Catarina
- **CRO e Análise de Dados**

**Diferença de versões:** Estrutura idêntica à Odontoclean (adaptada para serviço B2B de tráfego pago/sites), clean e profissional.

---

## 🎯 Estrutura do Site (Seções)

1. **Header** → Logo (AO) + Nav + CTA
2. **Hero** → "Especialista em anúncios e sites..." + Carrossel 4 slides
3. **Sobre** → "2 anos em SC" + Sites + Anúncios juntos
4. **Por que contratar** → 6 razões do combo sites + anúncios
5. **O que vendemos** → Sites + Anúncios (lado a lado)
6. **O que solucionamos** → 4 problemas reais + soluções
7. **Modelos de Sites** ⭐ → 6 modelos (Odonto, Medicina, Estética, Fisio, Psico, Nutri)
8. **Especialista** → Foto + Bio + Ferramentas + Certificações
9. **Área de Atuação** → Cidades SC + Brasil
10. **FAQ** → 6 perguntas
11. **Contato** → Form + Info
12. **Footer** → Links + Redes

---

## 🚀 Como Usar

### 1. Baixar e Abrir
```bash
cd adriane-site-v8
# Opção 1: Live Server (VS Code)
# Clique direito em index.html → "Open with Live Server"

# Opção 2: Terminal
python -m http.server 8000
# ou
npx http-server
```

### 2. Customizar

**WhatsApp:** `script.js` linha 2
```javascript
const PHONE = '5547988393646'; // JÁ ESTÁ CORRETO
```

**Cores:** `styles.css` linha 2-10
```css
--primary: #8A7562;     /* Marrom */
--accent: #D4AF37;      /* Dourado */
--white: #FFFFFF;
--text-dark: #1A1A1A;
--text-gray: #666666;
--border: #E8DCC6;
--success: #25d366;     /* WhatsApp */
```

**Textos:** `index.html` → Ctrl+H Find&Replace

**Imagens:** Substitua placeholders
```html
<!-- De: -->
<p>[FOTO...]</p>

<!-- Para: -->
<img src="images/sua-foto.jpg" alt="Descrição">
```

**Links Redes Sociais:** Já configurados no `index.html`
- Instagram: @adriolivdev
- LinkedIn: @adriane-souza-369841247
- WhatsApp: 5547988393646

---

## 🎨 Paleta de Cores v8

| Uso | Hex | Nome |
|-----|-----|------|
| Primário | #8A7562 | Marrom/Bege |
| Accent | #D4AF37 | Dourado |
| Background | #F9F7F3 | Light Bg |
| Texto Dark | #1A1A1A | Texto Escuro |
| Texto Gray | #666666 | Texto Claro |
| Border | #E8DCC6 | Bordas |
| WhatsApp | #25d366 | Verde |

---

## 📱 Responsividade

✅ Mobile (< 480px)
✅ Tablet (480-1024px)
✅ Desktop (> 1024px)
✅ Menu hambúrguer automático
✅ Botão WhatsApp sticky mobile 60px
✅ Carousel responsivo
✅ Formulário adaptativo

---

## 🔍 SEO

**Title:** "Tráfego Pago e Sites para Clínicas em SC | Adriane Oliveira"

**Description:** "Tráfego pago e sites para clínicas em Santa Catarina. Google Ads, Meta Ads, SEO, CRO para Joinville, Blumenau, Itajaí. Adriane Oliveira."

**H1 único:** "Sua clínica precisa aparecer no Google e converter pacientes"

**Foco geográfico:** Joinville, Blumenau, Itajaí, SC

**Meta tags inclusos:**
- geo.region: BR-SC
- geo.placename: Santa Catarina
- Open Graph tags
- Twitter Card tags
- Canonical URL

---

## 🔗 Seções & Links

| Seção | ID | Link Âncora |
|-------|----|----|
| Hero | #inicio | / |
| Sobre | #sobre | /sobre |
| Serviços | #servicos | /servicos |
| Modelos | #models | /models |
| Especialista | #equipe | /equipe |
| Contato | #localizacao | /contato |

---

## 📊 Eventos Rastreados (GTM)

- `cta_whatsapp_hero` — Hero CTA
- `cta_whatsapp_traffic` — Tráfego Pago CTA
- `cta_whatsapp_site` — Sites CTA
- `cta_whatsapp_seo` — SEO CTA
- `cta_whatsapp_cro` — CRO CTA
- `cta_whatsapp_analytics` — Dados CTA
- `cta_whatsapp_equipe` — Conversar com Adriane
- `cta_whatsapp_modelo_odonto` — Modelo Odontologia
- `cta_whatsapp_modelo_medicina` — Modelo Medicina
- `cta_whatsapp_modelo_estetica` — Modelo Estética
- `cta_whatsapp_modelo_fisio` — Modelo Fisioterapia
- `cta_whatsapp_modelo_psico` — Modelo Psicologia
- `cta_whatsapp_modelo_nutri` — Modelo Nutrição
- `scroll_50` — 50% da página
- `scroll_75` — 75% da página
- `faq_open` — FAQ aberta
- `form_submit` — Formulário enviado
- `page_view` — Carregamento da página

---

## 📝 Seções Detalhadas

### Header
- Logo "AO" (dourado) + "Adriane" (marrom)
- Menu de navegação sticky
- CTA principal: "CONVERSAR AGORA"
- Menu hambúrguer automático mobile

### Hero
- Headline claro e direto
- 2 CTAs (primário + secundário)
- Carrossel 4 slides com dots
- Auto-rotação a cada 5 segundos

### Sobre
- 2 colunas (desktop), 1 coluna (mobile)
- Lista de diferenciais com checkmarks
- CTA para contato

### Por que contratar
- 6 cards com ícones
- Hover effect com elevação
- Sem emojis, design clean

### Serviços
- 1 card destacado (Tráfego Pago) com border dourado
- 4 cards secundários
- CTAs para cada serviço

### Casos
- ~~Seção removida~~ — Substituída por "Modelos de Sites"

### Modelos de Sites
- 6 modelos prontos: Odontologia, Medicina, Estética, Fisioterapia, Psicologia, Nutrição
- Cada modelo com: Imagem placeholder + Título + Foco + Descrição + CTA "Quero esse modelo"
- Responsivo: 3 colunas (desktop), 2 colunas (tablet), 1 coluna (mobile)
- CTA secundária: "Conversar sobre seu modelo" para especialidades não listadas

### Especialista
- Foto profissional + bio
- 8 badges de ferramentas
- Certificações
- CTA primária

### FAQ
- 6 perguntas + respostas
- Accordion com `<details>` HTML5
- Sem JavaScript necessário

### Contato
- Formulário 2 colunas
- Informações de contato à direita
- Links redes sociais

### Footer
- 3 colunas (brand + links + contato)
- Links rápidos
- Redes sociais
- Copyright

---

## 🔧 Customizações Rápidas

### Adicionar Imagem
```html
<!-- Remover placeholder: -->
<p>[FOTO ADRIANE / DASHBOARD]</p>

<!-- Adicionar imagem: -->
<img src="images/foto-adriane.jpg" alt="Adriane Oliveira" loading="lazy">
```

### Adicionar Imagem
```html
<!-- Remover placeholder: -->
<p>[MODELO ODONTOLOGIA]</p>

<!-- Adicionar imagem: -->
<img src="images/modelo-odonto.jpg" alt="Modelo Site Odontologia" loading="lazy">
```

### Mudar Cores Globais
```css
/* styles.css */
:root {
    --primary: #SEU_COR;
    --accent: #SEU_COR;
    --success: #25d366;
}
```

### Adicionar Novo Modelo
```html
<!-- Duplicar .model-card -->
<div class="model-card">
    <div class="model-image"><p>[MODELO NOVO]</p></div>
    <h3>Nova Especialidade</h3>
    <p class="model-focus">Descrição breve</p>
    <p>Descrição completa do modelo.</p>
    <button class="cta-button cta-primary" onclick="openWhatsapp('modelo_novo')">
        Quero esse modelo
    </button>
</div>

<!-- Adicionar mensagem em script.js -->
modelo_novo: 'Quero o modelo de site para [especialidade].',
```
```html
<!-- Duplicar .service-card -->
<div class="service-card">
    <h4>Novo Serviço</h4>
    <p>Descrição aqui</p>
    <a href="#" onclick="openWhatsapp('novo'); return false;">Saber mais →</a>
</div>

<!-- Adicionar mensagem em script.js -->
novo: 'Tenho interesse em [seu serviço].',
```

---

## 📞 Contato e Links

- **WhatsApp:** (47) 98839-3646
- **E-mail:** adriane@empresanodigital.com.br
- **Instagram:** @adriolivdev
- **LinkedIn:** @adriane-souza-369841247
- **Website:** empresanodigital.com.br (quando publicado)

---

## ✅ Checklist para Deploy

- [ ] Fotos profissionais adicionadas
- [ ] WhatsApp testado e funcional
- [ ] Textos revisados (sem erros de digitação)
- [ ] Cores e layout verificados
- [ ] Todos os links funcionando
- [ ] Mobile testado no F12 (Chrome DevTools)
- [ ] Performance checada (Lighthouse)
- [ ] Meta tags corretas
- [ ] GTM ID configurado (se usar)
- [ ] Google Analytics 4 conectado
- [ ] Google Search Console vinculado
- [ ] SSL/HTTPS ativado
- [ ] Deploy em produção realizado

---

## 🎯 Próximas Etapas

1. **Fotos reais:**
   - Foto profissional Adriane (hero + equipe)
   - 3 fotos de casos/clínicas
   - Fotos do ambiente de trabalho

2. **Analytics:**
   - Configurar GTM ID no `<head>`
   - Setup Google Analytics 4
   - Microsoft Clarity (opcional)

3. **SEO:**
   - Google Search Console
   - Envio do sitemap
   - Teste Core Web Vitals

4. **Domínio:**
   - Apontar DNS para `empresanodigital.com.br`
   - SSL/HTTPS ativo
   - Certificado válido

---

## 📂 Estrutura de Arquivos

```
adriane-site-v8/
├── index.html       (HTML completo)
├── styles.css       (CSS completo)
├── script.js        (JavaScript)
├── README.md        (Este arquivo)
└── package.json     (Metadados npm)
```

---

## 🚀 Deploy

### Local (desenvolvimento)
```bash
cd adriane-site-v8
python -m http.server 8000
# ou
npx http-server
```

### Vercel
```bash
vercel
# ou arrastar pasta
```

### Netlify
```bash
netlify deploy --prod --dir .
```

### Hosting Tradicional (FTP)
1. Compactar pasta
2. Upload via FTP
3. Configurar índice em `index.html`
4. Ativar HTTPS
5. Apontar DNS

---

## 💡 Dicas & Boas Práticas

✅ **Compressão de imagens:** Use TinyPNG/ImageOptim
✅ **Testes mobile:** Use Chrome DevTools F12
✅ **Performance:** Executar Lighthouse regularmente
✅ **SEO:** Verificar posições no Google Search Console
✅ **Backups:** Manter backup dos arquivos
✅ **Atualizações:** Revisar conteúdo a cada 3 meses

---

## ⚖️ Licença

Todos os direitos reservados © 2026 Adriane Oliveira

---

**Versão:** 8.0 (Baseada em Odontoclean)
**Status:** ✅ Production Ready
**Última atualização:** 2026-09-30
**Para:** Adriane Oliveira
**WhatsApp:** 5547988393646

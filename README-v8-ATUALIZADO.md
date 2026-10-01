# Adriane Oliveira — Especialista em Posicionamento Digital

## 📋 Sobre Este Site (v8 Reformulado)

Site profissional para Adriane Oliveira, especialista em **posicionamento digital integrado** para clínicas e consultórios.

### Foco Principal
- **Gestão estratégica de tráfego** (Google Ads + Meta Ads)
- **Desenvolvimento de sites** com arquitetura UX/UI para conversão
- **Análise de dados** e otimização contínua
- **Posicionamento Local** em Santa Catarina

### Abordagem
- ✅ **Linguagem de especialista** — não "venda"
- ✅ **Sem emojis** — espaço reservado para ícones/imagens
- ✅ **Foco em posicionamento digital** — estrutura, UX/UI, dados
- ✅ **Sem palavra "venda"** — conversa estratégica
- ✅ **Integrado** — site + tráfego + dados como um sistema

---

## 🎯 Estrutura do Site (Seções Atualizadas)

1. **Header** → Logo AO + Nav + CTA "Conversar Agora"
2. **Hero** → "Posicionamento digital integrado para clínicas" + Carrossel 4 slides
3. **Sobre** → "2 anos estruturando presença digital" + Abordagem integrada
4. **Por que estrutura integrada funciona** → 6 razões
5. **Estrutura de atendimento** → Sites + Gestão de Tráfego (lado a lado)
6. **Cenários e arquitetura** → 4 situações + estruturas de solução
7. **Arquitetura por especialidade** ⭐ → 6 modelos de sites (Odonto, Medicina, Estética, Fisio, Psico, Nutri)
8. **Especialista** → Adriane + Competências + Certificações
9. **Área de Atuação** → Cidades SC + Brasil
10. **FAQ** → 6 perguntas
11. **Contato** → Form + Informações
12. **Footer** → Links + Redes

---

## 🎨 Mudanças Principais (v8)

### Linguagem
- ❌ **Antes:** "Quero mais pacientes", "Quero um site profissional", "Vendemos"
- ✅ **Agora:** "Conversar sobre posicionamento", "Estrutura de site", "Oferecemos"

### Seções Renomeadas
- ❌ "Por que contratar" → ✅ "Por que estrutura integrada funciona"
- ❌ "O que vendemos" → ✅ "Estrutura de atendimento"
- ❌ "O que solucionamos" → ✅ "Cenários e arquitetura"
- ❌ "Casos de sucesso" → ✅ "Arquitetura por especialidade"

### Emojis → Comentários para Ícones
- Removidos todos os emojis: 🔗 💰 📱 🔍 📊 ✅ 📉 💰 🤔 🎯
- Deixados comentários: `<!-- [ÍCONE] -->` para adicionar ícones/imagens depois

### Imagens Marcadas para Adicionar
- `<!-- [IMAGEM: ...] -->` em todos os locais de placeholder
- Carrossel hero
- Foto da Adriane
- Modelos de sites (6 cards)

---

## 🔗 CTAs e Mensagens WhatsApp

### Estrutura de Mensagens
Cada CTA tem mensagem personalizada em `script.js`:

```javascript
modelo_odonto: 'Gostaria de conversar sobre a arquitetura de site para odontologia.',
modelo_medicina: 'Achei interessante a estrutura de site para medicina.',
// etc...
```

### Padrão de Linguagem
- ✅ "Conversar sobre..." 
- ✅ "Gostaria de..." 
- ✅ "Interessado em..."
- ❌ "Quero comprar", "Contratar", "Vender"

---

## 📁 Arquivos do Projeto

```
adriane-site-v8/
├── index.html          # HTML principal (reformulado)
├── styles.css          # CSS (comentários para ícones)
├── script.js           # JS com mensagens atualizadas
├── package.json        # Meta do projeto
├── .gitignore          # Arquivos ignorados
├── README.md           # Documentação (versão anterior)
└── README-v8-ATUALIZADO.md  # Este arquivo (novo)
```

---

## 🚀 Como Usar

### 1. Abrir Localmente
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

#### Adicionar Imagem nos Placeholders
```html
<!-- Remove: -->
<!-- [IMAGEM: ADRIANE TRABALHANDO] -->

<!-- Adiciona: -->
<img src="images/adriane-trabalhando.jpg" alt="Adriane Oliveira trabalhando" loading="lazy">
```

#### Adicionar Ícones
```html
<!-- Muda: -->
<!-- [ÍCONE] -->

<!-- Para: -->
<svg class="icon"><!-- seu ícone SVG --></svg>
<!-- ou: -->
<i class="icon-class"></i>
<!-- ou: -->
<img src="icons/icon.svg" alt="Ícone" class="icon">
```

#### Mudar Telefone WhatsApp
Em `script.js` linha 2:
```javascript
const PHONE = '5547988393646'; // Seu número aqui
```

#### Mudar Cores Globais
Em `styles.css`:
```css
:root {
    --primary: #8A7562;    /* Cor principal */
    --accent: #D4AF37;     /* Cor destaque */
    /* ... etc */
}
```

#### Adicionar Nova Especialidade
1. Duplicar um `.model-card` na seção "Arquitetura por especialidade"
2. Adicionar mensagem em `script.js`:
```javascript
modelo_novo: 'Gostaria de conversar sobre a arquitetura de site para [especialidade].',
```

---

## 📊 Eventos Rastreados (GTM)

Todos os CTAs disparam eventos para Google Tag Manager:

- `cta_whatsapp_hero`
- `cta_whatsapp_traffic`
- `cta_whatsapp_site`
- `cta_whatsapp_seo`
- `cta_whatsapp_cro`
- `cta_whatsapp_analytics`
- `cta_whatsapp_equipe`
- `cta_whatsapp_modelo_odonto` (e outras especialidades)
- `scroll_50`, `scroll_75`
- `faq_open`, `form_submit`, `page_view`

---

## 🔍 SEO

- **Title:** Adriane Oliveira | Gestora de Tráfego e Sites para Clínicas e Consultórios
- **H1 único:** Posicionamento digital integrado para clínicas e consultórios
- **Meta geo:** BR-SC, Santa Catarina
- **Keywords:** Posicionamento digital, tráfego pago, sites para clínicas, Google Ads, Meta Ads, SEO local

---

## ✅ Checklist de Implantação

- [ ] Adicionar imagens (carousel, Adriane, modelos de sites)
- [ ] Adicionar ícones (nas seções "Por que", "Cenários")
- [ ] Configurar GTM ID real em `<head>`
- [ ] Setup Google Analytics 4
- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Deploy em domínio (empresanodigital.com.br)
- [ ] Configurar SSL/HTTPS
- [ ] Google Search Console
- [ ] Microsoft Clarity
- [ ] Testar WhatsApp de todos os CTAs

---

## 📝 Notas de Desenvolvimento

### Responsividade
- ✅ Desktop: 3 colunas (modelos)
- ✅ Tablet: 2 colunas
- ✅ Mobile: 1 coluna + CTA inteira

### Performance
- Imagens com `loading="lazy"`
- CSS minificado para produção
- JS sem dependências externas (vanilla)

### Acessibilidade
- Semântica HTML clara
- ARIA labels em botões
- Contraste de cores conforme WCAG

---

## 🎓 Estrutura de Dados — Seção "Cenários"

Cada card descreve uma situação + estrutura de solução:

| Situação | Estrutura |
|----------|-----------|
| Sem presença digital | Site + SEO Local + Tráfego |
| Tráfego ineficiente | Reestruturação + Site + Análise |
| Presença fragmentada | CRO + Tráfego + Dados |
| Crescimento escalável | Sistema integrado completo |

---

## 📧 Contato & Support

**Adriane Oliveira**
- WhatsApp: (47) 98839-3646
- E-mail: adriane@empresanodigital.com.br
- Instagram: @adriolivdev
- LinkedIn: linkedin.com/in/adriane-souza-369841247

---

**Última atualização:** 2026-09-30
**Versão:** v8 Reformulado (Posicionamento Digital)

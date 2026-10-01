# 📦 Assets Ajustados — Imagens e Ícones
**Site Adriane Oliveira v8 — empresanodigital.com.br**

---

## ✅ Status: TODOS OS ASSETS AJUSTADOS

### 🖼️ Imagens (12 total)

#### Hero Carousel (4 slides)
| # | Nome do Arquivo | Alt Text | Localização |
|---|---|---|---|
| 1 | `hero-01-dashboard.jpg` | Adriane trabalhando com dashboard de anúncios | Hero, carrossel slide 1 |
| 2 | `hero-02-estrutura.jpg` | Estrutura de site profissional para clínica | Hero, carrossel slide 2 |
| 3 | `hero-03-trafico.jpg` | Gestão de tráfego pago Google Ads e Meta Ads | Hero, carrossel slide 3 |
| 4 | `hero-04-dados.jpg` | Análise e dados de performance de campanhas | Hero, carrossel slide 4 |

#### Seção Sobre (1 imagem)
| # | Nome do Arquivo | Alt Text | Localização |
|---|---|---|---|
| 5 | `adriane-foto-profissional.jpg` | Adriane Oliveira - Especialista em Gestão de Anúncios e Sites | Seção Sobre, lado esquerdo |

#### Modelos de Sites (6 especialidades)
| # | Nome do Arquivo | Alt Text | Localização |
|---|---|---|---|
| 6 | `modelo-odontologia.jpg` | Modelo de site para clínica odontológica - Dentista | Card Odontologia |
| 7 | `modelo-medicina.jpg` | Modelo de site para consultório médico - Clínica médica | Card Medicina |
| 8 | `modelo-estetica.jpg` | Modelo de site para clínica de estética - Spa e procedimentos | Card Estética |
| 9 | `modelo-fisioterapia.jpg` | Modelo de site para clínica de fisioterapia - Reabilitação | Card Fisioterapia |
| 10 | `modelo-psicologia.jpg` | Modelo de site para psicólogo - Terapia e coaching | Card Psicologia |
| 11 | `modelo-nutricao.jpg` | Modelo de site para nutricionista - Nutrição e saúde | Card Nutrição |

#### Seção Especialista (1 imagem)
| # | Nome do Arquivo | Alt Text | Localização |
|---|---|---|---|
| 12 | `adriane-foto-especialista.jpg` | Adriane Oliveira - Gestora de Tráfego e Sites para Clínicas | Seção Especialista, foto profissional |

---

### 🎨 Ícones SVG (10 total)

#### Seção "Por Que Site + Anúncios Juntos" (6 ícones)
| # | Card | Ícone | Cor | Descrição |
|---|---|---|---|---|
| 1 | Anúncio sem site não funciona | ⭕ com X | Dourado | Círculo com X (não funciona) |
| 2 | Site sem anúncio fica sozinho | 📱 isolado | Dourado | Página web com pontos isolados |
| 3 | Juntos geram resultado real | 🔗 conexão | Dourado | Dois círculos conectados |
| 4 | Você sabe exatamente o que gasta | 📊 gráfico | Dourado | Gráfico de barras crescentes |
| 5 | Previsível e repetível | ↩️ loop | Dourado | Setas de repetição/ciclo |
| 6 | Cresce conforme você precisa | 📈 crescimento | Dourado | Gráfico com linha crescente |

#### Seção "Problemas que Resolvemos" (4 ícones)
| # | Card | Ícone | Cor | Descrição |
|---|---|---|---|---|
| 7 | Ninguém encontra minha clínica | 🔍 busca | Dourado | Lupa/busca |
| 8 | Gasto com anúncios mas não vem | 💰 perda | Dourado | Cifrão com X |
| 9 | Tenho site mas ninguém agenda | 🔻 funnel | Dourado | Funil de conversão |
| 10 | Quero crescer mês a mês | 🎯 alvo | Dourado | Alvo com círculos |

---

## 📂 Estrutura de Pastas Necessária

```
/adriane-site-v8/
├── index.html
├── styles.css
├── script.js
└── 📁 images/ ← Criar essa pasta
    ├── hero-01-dashboard.jpg
    ├── hero-02-estrutura.jpg
    ├── hero-03-trafico.jpg
    ├── hero-04-dados.jpg
    ├── adriane-foto-profissional.jpg
    ├── modelo-odontologia.jpg
    ├── modelo-medicina.jpg
    ├── modelo-estetica.jpg
    ├── modelo-fisioterapia.jpg
    ├── modelo-psicologia.jpg
    ├── modelo-nutricao.jpg
    └── adriane-foto-especialista.jpg
```

---

## 🔍 Verificação No Código

### Imagens
```html
<img src="/images/hero-01-dashboard.jpg" alt="..." class="carousel-image">
<img src="/images/modelo-odontologia.jpg" alt="..." class="model-image">
<img src="/images/adriane-foto-especialista.jpg" alt="...">
```

### Ícones SVG Inline
```html
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="card-icon">
    <!-- SVG paths com stroke="var(--accent)" (#D4AF37) -->
</svg>
```

### Classes CSS Adicionadas
```css
.card-icon {
    display: block;
    margin: 0 auto 1rem;
    width: 32px;
    height: 32px;
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.model-image {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
}

.team-photo img {
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}
```

---

## 📏 Recomendações de Dimensões

### Hero Carousel
- **Recomendado:** 1200 x 600px (ou maior)
- **Formato:** JPG/WebP
- **Compressão:** Otimizado para web
- **Descrição:** Imagens claras mostrando dashboard, site, tráfego e dados

### Modelos de Sites
- **Recomendado:** 400 x 280px (aparece em cards)
- **Formato:** JPG/WebP
- **Compressão:** Otimizado
- **Descrição:** Screenshot ou mockup de cada tipo de site

### Fotos de Adriane
- **Profissional grande:** 800 x 800px (seção Sobre)
- **Profissional especialista:** 600 x 600px (seção Especialista)
- **Formato:** JPG/WebP
- **Estilo:** Fotografia profissional, aparência confiável

### Ícones SVG
- ✅ **Já inclusos:** SVG inline 32x32px
- ✅ **Cor:** Dourado (#D4AF37)
- ✅ **Sem personalização:** Prontos para usar

---

## 🚀 Próximas Ações

### 1. Criar a Pasta `/images/`
```bash
mkdir -p /mnt/user-data/outputs/adriane-site-v8/images
```

### 2. Adicionar as 12 Imagens
- Adicionar arquivo JPG/WebP em cada um
- Garantir nomes exatamente como listado acima
- Otimizar para web (máx 200-300 KB cada)

### 3. Testar Localmente
```bash
# Abrir em navegador
open /mnt/user-data/outputs/adriane-site-v8/index.html
```

### 4. Deploy
- Upload dos arquivos para servidor
- Verificar que `/images/` foi sincronizada
- Testar imagens carregando em produção

---

## 📸 Especificações de Imagem

### Otimização
- **Formato:** JPG (compatibilidade) ou WebP (melhor compressão)
- **Qualidade:** 80-85% (boa qualidade, arquivo pequeno)
- **Tamanho máximo:** 300 KB por imagem
- **DPI:** 72 DPI (web)

### SEO
- ✅ Alt text configurado (importante para acessibilidade)
- ✅ Filename em português descritivo
- ✅ Responsive (CSS está pronto com media queries)

### Performance
- ✅ GZIP habilitado no .htaccess
- ✅ Cache de navegador: 1 mês (imagens)
- ✅ CSS lazy-loading pronto se necessário

---

## ✨ Resumo Visual

### O Que Foi Mudado

**ANTES (Comentários):**
```html
<!-- [IMAGEM: MODELO ODONTOLOGIA] -->
<!-- [ÍCONE] -->
```

**DEPOIS (Tags HTML + SVG):**
```html
<img src="/images/modelo-odontologia.jpg" alt="Modelo de site para clínica odontológica - Dentista" class="model-image">

<svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="card-icon">
    <circle cx="16" cy="16" r="14" stroke="var(--accent)" stroke-width="2"/>
    <!-- ... paths do ícone ... -->
</svg>
```

---

## 📝 Checklist

- [x] 12 tags `<img>` adicionadas com `src` correto
- [x] 10 ícones SVG inline criados com cor dourada
- [x] Estrutura CSS pronta (`.card-icon`, `.carousel-image`, etc)
- [x] Alt text descritivo em todas as imagens
- [x] Responsividade CSS implementada
- [ ] Imagens reais adicionadas à pasta `/images/`
- [ ] Testar carregamento localmente
- [ ] Deploy em produção
- [ ] Monitorar performance (PageSpeed Insights)

---

**Status:** ✅ Código 100% Pronto | ⏳ Aguardando Assets

**Próximo Passo:** Adicionar as 12 imagens à pasta `/images/`


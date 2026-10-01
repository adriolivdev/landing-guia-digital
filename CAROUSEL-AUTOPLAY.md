# 🎬 Carousel Autoplay — Documentação

**Site Adriane Oliveira v8 — empresanodigital.com.br**

---

## ✅ Implementado

### 🔄 Autoplay Contínuo
- ✅ Slides passam **automaticamente** a cada **4 segundos**
- ✅ Loop infinito (ao terminar, volta pro primeiro slide)
- ✅ Navegação por clique nos dots reinicia o timer
- ✅ Transição suave com fade (opacity 0.6s)

---

## 📝 Código JavaScript

```javascript
// Intervalo: 4 segundos
carouselTimer = setInterval(() => {
    showSlide(currentSlide + 1);
}, 4000);

// Inicializa automaticamente ao carregar a página
if (slides.length > 0) {
    showSlide(0);
    autoPlayCarousel();
}
```

---

## 🎨 Efeito Visual

### Transição Entre Slides
- **Tipo:** Fade (opacity)
- **Duração:** 0.6 segundos (ease-in-out)
- **Efeito:** Suave desaparecimento + aparecimento

### Indicadores (Dots)
- **Inativo:** Cinza (#E8DCC6) · 12px · cursor pointer
- **Ativo:** Dourado (#D4AF37) · scale 1.4 · box-shadow

---

## 🎯 Comportamento

| Ação | Comportamento |
|------|---------------|
| **Carregar página** | Slide 0 exibido · autoplay inicia |
| **Slide mudando** | Fade suave · dot atualiza |
| **Clicar dot** | Vai pro slide · reinicia timer |
| **Fim dos slides** | Loop infinito (volta ao slide 0) |

---

## ⏱️ Timeline

```
0s   → Slide 0 ativa
4s   → Slide 1 ativa
8s   → Slide 2 ativa
12s  → Slide 3 ativa
16s  → Slide 0 ativa (loop)
20s  → Slide 1 ativa
...  (repetição infinita)
```

---

## 🔧 Customização

### Mudar velocidade (em script.js)
```javascript
// Atual: 4000ms (4 segundos)
}, 4000);

// Mais rápido (3 segundos):
}, 3000);

// Mais lento (6 segundos):
}, 6000);
```

### Mudar transição (em styles.css)
```css
/* Atual: 0.6 segundos */
transition: opacity 0.6s ease-in-out;

/* Mais rápido (0.3s) */
transition: opacity 0.3s ease-in-out;

/* Mais lento (1s) */
transition: opacity 1s ease-in-out;
```

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Slides não mudam | Verificar se `slides.length > 0` |
| Dots não atualizam | Verificar classe `.active` |
| Transição não funciona | Verificar CSS `transition` property |
| Loop não volta | Verificar módulo `(i + slides.length) % slides.length` |

---

## 📊 Estrutura HTML

```html
<div class="hero-carousel">
    <div class="carousel-wrapper">
        <div class="carousel-slide active">
            <img src="/images/hero-01-dashboard.jpg">
        </div>
        <div class="carousel-slide">
            <img src="/images/hero-02-estrutura.jpg">
        </div>
        <!-- ... mais slides ... -->
    </div>
    
    <div class="carousel-controls">
        <button class="carousel-dot active" onclick="goToSlide(0)"></button>
        <button class="carousel-dot" onclick="goToSlide(1)"></button>
        <!-- ... mais dots ... -->
    </div>
</div>
```

---

## ✨ Resumo

✅ **4 segundos entre slides**  
✅ **Loop infinito automático**  
✅ **Fade suave (0.6s)**  
✅ **Dots com indicação visual**  
✅ **Reinicia timer ao clicar**  

---

**Status:** ✅ Fully Functional | Ready for Deploy

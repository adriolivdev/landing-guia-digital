// ========== CONFIG ==========
const PHONE = '5547988393646';
const MESSAGES = {
    hero: 'Oi Adriane! Gostaria de conversar sobre site e anúncios para minha clínica.',
    about: 'Oi! Como funciona exatamente esse trabalho de site + anúncios?',
    traffic: 'Tenho interesse em saber mais sobre anúncios no Google e Instagram.',
    site: 'Preciso de um site para minha clínica. Vocês fazem?',
    seo: 'Como faço para minha clínica aparecer no Google?',
    cro: 'Meu site recebe visitas mas ninguém agenda. Como resolver isso?',
    analytics: 'Como vocês acompanham os resultados dos anúncios?',
    equipe: 'Gostaria de conhecer mais sobre seu trabalho.',
    modelo_odonto: 'Achei legal esse modelo de site para dentista. Como funciona?',
    modelo_medicina: 'Gostei do modelo para médico. Posso personalizar?',
    modelo_estetica: 'Tenho interesse no modelo de site para clínica de estética.',
    modelo_fisio: 'Quero saber sobre o modelo de site para fisioterapia.',
    modelo_psico: 'Como funciona o site para psicólogo?',
    modelo_nutri: 'Tenho interesse no modelo de site para nutricionista.',
    default: 'Oi Adriane! Gostaria de conversar sobre minha clínica.'
};

// ========== WHATSAPP ==========
function openWhatsapp(type = 'default') {
    const msg = MESSAGES[type] || MESSAGES.default;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${PHONE}?text=${encoded}`, '_blank');
    trackEvent(`cta_whatsapp_${type}`);
}

// ========== CAROUSEL ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
let carouselTimer;

function showSlide(i) {
    if (!slides.length) return;
    currentSlide = (i + slides.length) % slides.length;
    
    slides.forEach((s, idx) => {
        s.classList.remove('active');
        if (idx === currentSlide) s.classList.add('active');
    });
    
    dots.forEach((d, idx) => {
        d.classList.remove('active');
        if (idx === currentSlide) d.classList.add('active');
    });
}

function goToSlide(i) {
    showSlide(i);
    resetCarousel();
}

function autoPlayCarousel() {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4000); // Muda a cada 4 segundos
}

function resetCarousel() {
    autoPlayCarousel();
}

// Iniciar carousel automaticamente ao carregar
if (slides.length > 0) {
    showSlide(0);
    autoPlayCarousel();
}

// ========== SCROLL SUAVE ==========
function scrollToElement(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== MENU MOBILE ==========
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// ========== FAQ ==========
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const summary = item.querySelector('summary');
        if (summary) trackEvent('faq_open');
    });
});

// ========== FORM SUBMIT ==========
function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    const nome = formData.get('nome') || '';
    const clinica = formData.get('clinica') || '';
    const whatsapp = formData.get('whatsapp') || '';
    const servico = formData.get('servico') || '';
    const mensagem = formData.get('mensagem') || '';
    
    let msg = `*NOVO CONTATO DO SITE*\n\n`;
    msg += `*Nome:* ${nome}\n`;
    msg += `*Clínica/Profissional:* ${clinica}\n`;
    msg += `*WhatsApp:* ${whatsapp}\n`;
    msg += `*Serviço de interesse:* ${servico}\n`;
    if (mensagem) msg += `*Mensagem:* ${mensagem}\n`;
    
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${PHONE}?text=${encoded}`, '_blank');
    form.reset();
    trackEvent('form_submit');
}

// ========== EVENTOS ==========
window.dataLayer = window.dataLayer || [];

function trackEvent(name, data = {}) {
    if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({ event: name, ...data });
    }
    console.log('Event:', name);
}

// Scroll tracking
let scroll50 = false, scroll75 = false;
window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (pct >= 50 && !scroll50) { trackEvent('scroll_50'); scroll50 = true; }
    if (pct >= 75 && !scroll75) { trackEvent('scroll_75'); scroll75 = true; }
});

// CTA tracking
document.querySelectorAll('[data-event]').forEach(btn => {
    btn.addEventListener('click', () => trackEvent(btn.dataset.event));
});

// Page view tracking
trackEvent('page_view');

// Init
console.log('✓ Adriane Oliveira v8 - Carregado com sucesso');

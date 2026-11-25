{
/* ===== Configuração: número da twomind, só dígitos com DDI e DDD. Ex.: 5547999998888 ===== */
const WHATS = '';
const root = document.documentElement;
const EN = root.lang.startsWith('en'), PT = root.lang === 'pt-PT';
const S = EN ? {
  def: 'Hi twomind! I’d like to book my free assessment.', fill: 'Please fill in ', and: ', ',
  need: [['nome','your name'],['fone','your WhatsApp'],['empresa','your company']],
  intro: 'Hi twomind! I’d like to book my free assessment.', name: 'Name', company: 'Company', city: 'City', phone: 'WhatsApp', svc: 'Interested in', about: 'About the business', copied: 'Message copied', nocopy: 'Couldn’t copy'
} : {
  def: 'Olá, twomind! Quero ' + (PT ? 'marcar' : 'agendar') + ' meu diagnóstico gratuito.', fill: 'Preencha ', and: ', ',
  need: [['nome','seu nome'],['fone','seu WhatsApp'],['empresa','o nome da empresa']],
  intro: 'Olá, twomind! Quero ' + (PT ? 'marcar' : 'agendar') + ' meu diagnóstico gratuito.', name: 'Nome', company: 'Empresa', city: 'Cidade', phone: 'WhatsApp', svc: 'Interesse', about: 'Sobre a empresa', copied: 'Mensagem copiada', nocopy: 'Não foi possível copiar'
};
const wa = t => 'https://wa.me/' + WHATS + '?text=' + encodeURIComponent(t);
for (const a of document.querySelectorAll('a.wa')) a.href = wa(S.def);

/* ===== Medição de conversão (GA4 / GTM via dataLayer, se instalado) ===== */
window.dataLayer = window.dataLayer || [];
const track = (event, extra) => { try { window.dataLayer.push(Object.assign({ event, page: location.pathname, lang: root.lang }, extra || {})); } catch (e) {} };
document.addEventListener('click', e => {
  const a = e.target.closest('[data-cta], a.wa');
  if (!a) return;
  track(a.classList.contains('wa') ? 'whatsapp_click' : 'cta_click', { cta: a.dataset.cta || 'whatsapp' });
});

/* ===== Formulário -> WhatsApp ===== */
const f = document.getElementById('f');
if (f) {
  const err = document.getElementById('err'), ok = document.getElementById('ok');
  let last = '';
  const v = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
  f.addEventListener('submit', e => {
    e.preventDefault();
    const miss = S.need.filter(([id]) => !v(id));
    if (miss.length) { err.textContent = S.fill + miss.map(m => m[1]).join(S.and) + '.'; document.getElementById(miss[0][0]).focus(); return; }
    err.textContent = '';
    last = `${S.intro}\n\n${S.name}: ${v('nome')}\n${S.company}: ${v('empresa')}` + (v('cidade') ? `\n${S.city}: ${v('cidade')}` : '') + `\n${S.phone}: ${v('fone')}\n${S.svc}: ${v('servico')}` + (v('msg') ? `\n\n${S.about}: ${v('msg')}` : '');
    document.getElementById('okl').href = wa(last);
    ok.classList.add('show');
    track('generate_lead', { service: v('servico') });
    ok.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  document.getElementById('copy').addEventListener('click', async e => {
    try { await navigator.clipboard.writeText(last); e.target.textContent = S.copied; }
    catch (x) { e.target.textContent = S.nocopy; }
  });
}

/* ===== Balão do WhatsApp ===== */
const wf = document.getElementById('wa-float');
if (wf) {
  try { if (sessionStorage.getItem('waX')) wf.classList.add('closed'); } catch (e) {}
  wf.querySelector('.wa-x').addEventListener('click', () => { wf.classList.add('closed'); try { sessionStorage.setItem('waX', '1'); } catch (e) {} });
}

/* ===== Movimento ao rolar ===== */
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
const items = document.querySelectorAll('[data-r]');
if (!still && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => { for (const x of es) if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(el => io.observe(el));
} else items.forEach(el => el.classList.add('in'));

const prog = document.querySelector('.prog'), top = document.querySelector('.top'), mbar = document.querySelector('.mbar');
const bars = [...document.querySelectorAll('.hero .ruler .bar')], report = document.querySelector('.hero .report');
const cycles = [...document.querySelectorAll('.cycle')];
let ticking = false;
const frame = () => {
  ticking = false;
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  if (prog) prog.style.setProperty('--p', h > 0 ? (y / h).toFixed(4) : 0);
  if (top) top.classList.toggle('scrolled', y > 24);
  if (mbar) mbar.classList.toggle('show', y > 420);
  if (!still) {
    if (y < innerHeight * 1.2 && innerWidth > 760) {
      for (const b of bars) b.style.transform = `translateY(${(-y * +b.dataset.k).toFixed(1)}px)`;
      if (report) report.style.transform = `translateY(${(y * 0.06).toFixed(1)}px)`;
    }
    for (const c of cycles) {
      const r = c.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.3)));
      c.style.setProperty('--c', p.toFixed(3));
    }
  }
};
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
addEventListener('resize', frame);
frame();
}

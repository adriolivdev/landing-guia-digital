/* =========================================================
   EMPRESA NO DIGITAL — main.js
   Interações principais: configuração central, menu, FAQ,
   WhatsApp, header ao rolar e formulário (frontend).
   ========================================================= */

/* ----------------------------------------------------------
   1) CONFIGURAÇÃO CENTRAL
   Altere aqui e o valor se propaga para todo o site.
   >>> Troque SEU_NUMERO_WHATSAPP pelo número real (DDI+DDD+número),
       somente dígitos. Ex.: 5547999999999
---------------------------------------------------------- */
const CONFIG = {
  whatsapp: "5547988393646",                 // DDI 55 + DDD 47 + número
  whatsappMsg: "Olá! Encontrei a Empresa no Digital e gostaria de solicitar um orçamento para criação de um site profissional.",
  email: "contato@empresanodigital.com.br",  // opcional
  gtmId: ""                                  // ex.: "GTM-XXXXXXX" (deixe vazio se ainda não tiver)
};

/* Expõe globalmente para tracking.js e demais scripts */
window.EMPRESA_CONFIG = CONFIG;

/* ----------------------------------------------------------
   2) Monta os links de WhatsApp a partir do CONFIG
   Qualquer elemento com [data-wa] recebe o href correto.
   Use data-wa-msg="..." para mensagem específica por botão.
---------------------------------------------------------- */
function buildWhatsAppLinks() {
  const number = (CONFIG.whatsapp || "").replace(/\D/g, "");
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    const msg = el.getAttribute("data-wa-msg") || CONFIG.whatsappMsg;
    const href = number
      ? "https://wa.me/" + number + "?text=" + encodeURIComponent(msg)
      : "#contato"; // fallback enquanto o número não é configurado
    el.setAttribute("href", href);
    if (number) { el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
  });
}

/* ----------------------------------------------------------
   3) Header — adiciona sombra ao rolar
---------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = function () {
    header.classList.toggle("is-stuck", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ----------------------------------------------------------
   4) Menu mobile
---------------------------------------------------------- */
function initMenu() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  if (!nav || !toggle) return;

  const close = function () {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", function () {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  // Fecha ao clicar num link do menu
  nav.querySelectorAll(".nav__menu a").forEach(function (a) {
    a.addEventListener("click", close);
  });
  // Fecha com ESC
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
}

/* ----------------------------------------------------------
   5) FAQ (acordeão acessível)
---------------------------------------------------------- */
function initFAQ() {
  document.querySelectorAll(".faq__item").forEach(function (item) {
    const btn = item.querySelector(".faq__q");
    const ans = item.querySelector(".faq__a");
    if (!btn || !ans) return;
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", function () {
      const open = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
}

/* ----------------------------------------------------------
   6) Formulário — validação frontend + fallback WhatsApp
   Sem backend: se não houver endpoint, monta a mensagem e
   abre o WhatsApp com os dados preenchidos.
   >>> TODO: para envio por servidor, conecte um endpoint em
       CONFIG.formEndpoint e ajuste submitForm().
---------------------------------------------------------- */
function initForm() {
  const form = document.querySelector("[data-lead-form]");
  if (!form) return;
  const status = form.querySelector(".form-status");

  const setError = function (field, msg) {
    const wrap = field.closest(".field");
    if (!wrap) return;
    wrap.classList.add("has-error");
    const err = wrap.querySelector(".field__err");
    if (err) err.textContent = msg;
  };
  const clearError = function (field) {
    const wrap = field.closest(".field");
    if (wrap) { wrap.classList.remove("has-error"); const e = wrap.querySelector(".field__err"); if (e) e.textContent = ""; }
  };

  form.querySelectorAll("input, select, textarea").forEach(function (f) {
    f.addEventListener("input", function () { clearError(f); });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let ok = true;

    const nome = form.querySelector("#f-nome");
    const empresa = form.querySelector("#f-empresa");
    const zap = form.querySelector("#f-whatsapp");
    const tipo = form.querySelector("#f-tipo");

    if (nome && !nome.value.trim()) { setError(nome, "Informe seu nome."); ok = false; }
    if (empresa && !empresa.value.trim()) { setError(empresa, "Informe o nome da empresa."); ok = false; }
    if (zap) {
      const digits = zap.value.replace(/\D/g, "");
      if (digits.length < 10) { setError(zap, "Informe um WhatsApp válido com DDD."); ok = false; }
    }
    if (tipo && !tipo.value) { setError(tipo, "Selecione uma opção."); ok = false; }

    if (!ok) return;

    // Evento de rastreamento (definido em tracking.js)
    if (window.trackEvent) window.trackEvent("generate_lead", { location: "form" });

    // Monta a mensagem e abre o WhatsApp com os dados preenchidos
    const number = (CONFIG.whatsapp || "").replace(/\D/g, "");
    const texto =
      "Olá! Sou " + (nome ? nome.value.trim() : "") +
      " da empresa " + (empresa ? empresa.value.trim() : "") +
      ". Preciso de: " + (tipo ? tipo.options[tipo.selectedIndex].text : "") +
      ". Meu WhatsApp: " + (zap ? zap.value.trim() : "") + ".";

    if (status) { status.textContent = "Tudo certo! Abrindo o WhatsApp com seus dados…"; status.classList.add("is-ok"); }

    if (number) {
      const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(texto);
      window.open(url, "_blank", "noopener");
    } else {
      // Sem número configurado ainda
      if (status) status.textContent = "Recebemos seus dados. Configure o número de WhatsApp em js/main.js (CONFIG.whatsapp) para ativar o envio.";
      console.warn("[Empresa no Digital] TODO: configure CONFIG.whatsapp ou conecte um endpoint de formulário.");
    }
    form.reset();
  });
}

/* ----------------------------------------------------------
   Inicialização
---------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  buildWhatsAppLinks();
  initHeader();
  initMenu();
  initFAQ();
  initForm();
  document.documentElement.classList.add("js-ready");
});

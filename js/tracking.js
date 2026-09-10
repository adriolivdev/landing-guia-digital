/* =========================================================
   EMPRESA NO DIGITAL — tracking.js
   Camada de mensuração pronta para o Google Tag Manager.
   Nenhum ID fictício é inserido. Configure CONFIG.gtmId em
   js/main.js para ativar o GTM automaticamente.
   ========================================================= */

/* dataLayer sempre disponível (mesmo sem GTM ainda) */
window.dataLayer = window.dataLayer || [];

/* ----------------------------------------------------------
   Helper global de eventos.
   Empurra para o dataLayer (consumido pelo GTM) e loga no
   console durante o desenvolvimento.
   Eventos previstos:
   whatsapp_click | cta_click | form_start | form_submit
   generate_lead  | portfolio_view
---------------------------------------------------------- */
window.trackEvent = function (event, params) {
  var payload = Object.assign({ event: event }, params || {});
  window.dataLayer.push(payload);
  if (window.console && console.debug) console.debug("[track]", event, params || {});
};

(function () {
  var cfg = window.EMPRESA_CONFIG || {};

  /* --------------------------------------------------------
     1) Injeta o GTM SOMENTE se houver um ID configurado.
     Substitua CONFIG.gtmId em js/main.js por "GTM-XXXXXXX".
     (Lembre de adicionar também o <noscript> do GTM no <body>
      de cada página — instruções no README.)
  -------------------------------------------------------- */
  if (cfg.gtmId && /^GTM-[A-Z0-9]+$/.test(cfg.gtmId)) {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", cfg.gtmId);
  }

  /* --------------------------------------------------------
     2) Liga automaticamente os data-attributes dos CTAs.
     Ex.: <a data-wa data-cta="whatsapp" data-location="hero">
          <a data-track="cta_click" data-location="pricing">
  -------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    // Cliques em WhatsApp
    document.querySelectorAll("[data-cta='whatsapp'], [data-wa]").forEach(function (el) {
      el.addEventListener("click", function () {
        window.trackEvent("whatsapp_click", { location: el.getAttribute("data-location") || "n/d" });
      });
    });

    // Cliques em CTAs genéricos
    document.querySelectorAll("[data-track]").forEach(function (el) {
      var ev = el.getAttribute("data-track");
      el.addEventListener("click", function () {
        window.trackEvent(ev, { location: el.getAttribute("data-location") || "n/d" });
      });
    });

    // form_start no primeiro foco de um campo do formulário
    var form = document.querySelector("[data-lead-form]");
    if (form) {
      var started = false;
      form.addEventListener("focusin", function () {
        if (!started) { started = true; window.trackEvent("form_start", { location: "form" }); }
      });
    }

    // portfolio_view quando a seção de portfólio entra na tela
    var pf = document.querySelector("#portfolio");
    if (pf && "IntersectionObserver" in window) {
      var seen = false;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !seen) { seen = true; window.trackEvent("portfolio_view", { location: "home" }); io.disconnect(); }
        });
      }, { threshold: 0.4 });
      io.observe(pf);
    }
  });
})();

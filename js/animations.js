/* =========================================================
   EMPRESA NO DIGITAL — animations.js
   Revela elementos ao entrar na viewport (IntersectionObserver).
   Leve, sem dependências e sem layout shift.
   ========================================================= */

(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  // Se o usuário prefere menos movimento, mostra tudo imediatamente.
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  // Aplica atraso escalonado opcional via data-delay
  items.forEach(function (el) {
    var d = el.getAttribute("data-delay");
    if (d) el.style.setProperty("--reveal-delay", d + "ms");
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  items.forEach(function (el) { io.observe(el); });
})();

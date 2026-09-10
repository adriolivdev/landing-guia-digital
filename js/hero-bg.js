/* =========================================================
   EMPRESA NO DIGITAL — hero-bg.js
   Fundo "tech" da hero: rede de partículas em <canvas>.
   Leve, reage ao mouse, pausa fora da tela e respeita
   prefers-reduced-motion. Sem dependências.

   Quer trocar por um VÍDEO real? Veja o comentário no fim
   do arquivo (basta um <video> no lugar do <canvas>).
   ========================================================= */
(function () {
  "use strict";

  var hero = document.getElementById("hero");
  var canvas = hero && hero.querySelector(".hero__canvas");
  if (!canvas) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ctx = canvas.getContext("2d", { alpha: true });
  var DPR = Math.min(window.devicePixelRatio || 1, 2);

  // cor da marca vinda do CSS (fallback violeta)
  var css = getComputedStyle(document.documentElement);
  var brand = (css.getPropertyValue("--brand") || "#5a45e0").trim();
  var rgb = hexToRgb(brand) || { r: 90, g: 69, b: 224 };

  var W = 0, H = 0, nodes = [], raf = null, visible = true;
  var mouse = { x: -9999, y: -9999, active: false };

  function hexToRgb(h) {
    var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
    return m ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) } : null;
  }
  function rgba(a) { return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + a + ")"; }

  function resize() {
    var r = hero.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildNodes();
  }

  function buildNodes() {
    // densidade proporcional à área, com teto para performance
    var target = Math.min(72, Math.round((W * H) / 16000));
    nodes = [];
    for (var i = 0; i < target; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.8
      });
    }
  }

  var LINK = 132;      // distância máxima p/ ligar dois nós
  var LINK2 = LINK * LINK;

  function frame() {
    ctx.clearRect(0, 0, W, H);

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x += n.vx; n.y += n.vy;

      // leve atração pelo cursor (interação)
      if (mouse.active) {
        var dxm = mouse.x - n.x, dym = mouse.y - n.y;
        var dm = dxm * dxm + dym * dym;
        if (dm < 26000 && dm > 1) {
          var f = 0.9 / Math.sqrt(dm);
          n.vx += dxm * f * 0.012;
          n.vy += dym * f * 0.012;
        }
      }
      // amortecimento p/ não acelerar demais
      n.vx *= 0.995; n.vy *= 0.995;

      // bordas: quica suave
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      n.x = Math.max(0, Math.min(W, n.x));
      n.y = Math.max(0, Math.min(H, n.y));
    }

    // linhas entre nós próximos
    for (var a = 0; a < nodes.length; a++) {
      for (var b = a + 1; b < nodes.length; b++) {
        var dx = nodes[a].x - nodes[b].x, dy = nodes[a].y - nodes[b].y;
        var d2 = dx * dx + dy * dy;
        if (d2 < LINK2) {
          var alpha = (1 - d2 / LINK2) * 0.16;
          ctx.strokeStyle = rgba(alpha);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[a].x, nodes[a].y);
          ctx.lineTo(nodes[b].x, nodes[b].y);
          ctx.stroke();
        }
      }
    }
    // linha até o cursor + nós
    for (var k = 0; k < nodes.length; k++) {
      var p = nodes[k];
      if (mouse.active) {
        var mx = mouse.x - p.x, my = mouse.y - p.y, md = mx * mx + my * my;
        if (md < LINK2 * 1.7) {
          ctx.strokeStyle = rgba((1 - md / (LINK2 * 1.7)) * 0.28);
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      ctx.fillStyle = rgba(0.55);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(frame);
  }

  function start() { if (!raf && visible && !reduce) raf = requestAnimationFrame(frame); }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  // Interação do mouse (coordenadas relativas à hero)
  hero.addEventListener("pointermove", function (e) {
    var r = hero.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
    mouse.active = true;
  });
  hero.addEventListener("pointerleave", function () { mouse.active = false; mouse.x = mouse.y = -9999; });

  // Pausa quando a hero sai da viewport (economia de CPU/bateria)
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) start(); else stop();
    }, { threshold: 0.02 }).observe(hero);
  }

  // Pausa se a aba perde o foco
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop(); else start();
  });

  var rt;
  window.addEventListener("resize", function () {
    clearTimeout(rt); rt = setTimeout(resize, 150);
  });

  resize();
  if (reduce) { frame(); stop(); }  // desenha 1 quadro estático e para
  else start();

  /* -----------------------------------------------------------
     TILT do mockup (parallax sutil ao mover o mouse na hero)
  ----------------------------------------------------------- */
  var media = hero.querySelector(".hero__media");
  if (media && !reduce && window.matchMedia("(pointer:fine)").matches) {
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      media.style.transform =
        "perspective(900px) rotateY(" + (px * 5).toFixed(2) + "deg) rotateX(" +
        (-py * 5).toFixed(2) + "deg) translateY(" + (py * -6).toFixed(1) + "px)";
    });
    hero.addEventListener("pointerleave", function () { media.style.transform = ""; });
  }

  /* ===========================================================
     COMO USAR UM VÍDEO REAL NO LUGAR DA ANIMAÇÃO
     -----------------------------------------------------------
     1) Coloque o arquivo em assets/video/hero.mp4 (e .webm).
     2) No index.html, troque o <canvas class="hero__canvas">
        por:
          <video class="hero__canvas" autoplay muted loop playsinline
                 poster="assets/images/hero-poster.jpg">
            <source src="assets/video/hero.webm" type="video/webm">
            <source src="assets/video/hero.mp4"  type="video/mp4">
          </video>
     3) Pode remover a inclusão deste script no rodapé.
     O CSS .hero__canvas já cobre a área e aplica a máscara.
     =========================================================== */
})();

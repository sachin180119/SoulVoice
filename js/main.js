/* SoulVoice — main.js */
(function () {
  "use strict";

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion:reduce)").matches;

  /* ---- hero waveform (voice -> data) ---- */
  function buildWave() {
    var svg = document.getElementById("wave");
    if (!svg) return;
    var N = 60, W = 1000, gap = 3, bw = (W - (N - 1) * gap) / N, H = 120, mid = H / 2;
    var NS = "http://www.w3.org/2000/svg";
    for (var i = 0; i < N; i++) {
      var t = i / (N - 1);
      var env = Math.sin(Math.PI * t);
      var syl = 0.5 + 0.5 * Math.sin(t * 20 + 1);
      var micro = 0.7 + 0.3 * Math.sin(t * 53);
      var h = Math.max(4, env * syl * micro * H * 0.9);
      var r = document.createElementNS(NS, "rect");
      r.setAttribute("x", (i * (bw + gap)).toFixed(1));
      r.setAttribute("y", (mid - h / 2).toFixed(1));
      r.setAttribute("width", bw.toFixed(1));
      r.setAttribute("height", h.toFixed(1));
      r.setAttribute("rx", (bw / 2).toFixed(1));
      if (!reduce) {
        r.style.animation = "rise .6s cubic-bezier(.2,.8,.2,1) both";
        r.style.animationDelay = (i * 10) + "ms";
      }
      svg.appendChild(r);
    }
  }

  /* ---- mobile menu ---- */
  function initMenu() {
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    function close() {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
    function open() {
      menu.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }
    toggle.addEventListener("click", function () {
      menu.classList.contains("open") ? close() : open();
    });
    // close after tapping a link
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") close();
    });
    // close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---- FAQ accordion ---- */
  function initFaq() {
    document.querySelectorAll(".qa button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var qa = btn.parentElement;
        var ans = qa.querySelector(".ans");
        var isOpen = qa.hasAttribute("open");
        if (isOpen) {
          qa.removeAttribute("open");
          ans.style.maxHeight = null;
          btn.setAttribute("aria-expanded", "false");
        } else {
          qa.setAttribute("open", "");
          ans.style.maxHeight = ans.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ---- current year ---- */
  function initYear() {
    var el = document.getElementById("yr");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildWave();
    initMenu();
    initFaq();
    initYear();
  });
})();

/* ========================================================
   El plan que elegís — v3
   Lógica del juego + animación de apertura del comecocos
   ======================================================== */

// Captura cualquier error de JS y lo logguea (útil para debug en mobile)
window.addEventListener("error", function (e) {
  try { console.error("[EPQE]", e.message, "@", e.filename, ":", e.lineno); } catch (_) {}
});

function __initElPlanQueElegis() {
  "use strict";

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  // Refs
  const game        = $("#game");
  const btnStart    = $("#btnStart");
  const btnReset    = $("#btnReset");
  const stageClosed = $("#stageClosed");
  const stageOpen   = $("#stageOpen");
  const stageAnswer = $("#stageAnswer");
  const stepEl      = $("#gameStep");
  const closedBox   = $("#comecocosClosed");

  const branchBanner = $("#branchBanner");
  const branchTitle  = $("#branchTitle");
  const branchSub    = $("#branchSub");
  const gajosWrap    = $("#gajos");

  const answerCard  = $("#answerCard");
  const answerPill  = $("#answerPill");
  const answerTitle = $("#answerTitle");
  const answerQuote = $("#answerQuote");
  const answerText  = $("#answerText");
  const answerMeta  = $("#answerMeta");
  const answerLink  = $("#answerLink");
  const answerBack  = $("#answerBack");
  const answerSwitch= $("#answerSwitch");

  const ddTitle      = $("#ddTitle");
  const ddQuote      = $("#ddQuote");
  const ddHighlights = $("#ddHighlights");
  const ddSteps      = $("#ddSteps");
  const ddGotcha     = $("#ddGotcha");

  const ROMAN = ["I","II","III","IV","V","VI","VII","VIII"];

  let currentBranch = null;
  let currentGajo   = null;
  let cocoRot       = 0; // grados de rotación del comecocos abierto

  // ======== UTIL ========
  const show = el => el && (el.hidden = false);
  const hide = el => el && (el.hidden = true);
  const setStep = txt => { stepEl.textContent = txt; };
  const smoothScrollTo = (el, offset = 70) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // ======== START / RESET ========
  function startGame() {
    show(game);
    hide(stageOpen);
    hide(stageAnswer);
    show(stageClosed);
    show(btnReset);
    if (closedBox) closedBox.classList.remove("is-opening");
    setStep("Paso 1 — Elegí con cuál rama jugar");
    smoothScrollTo(game, 24);
  }

  function resetGame() {
    currentBranch = null;
    currentGajo = null;
    hide(stageOpen);
    hide(stageAnswer);
    show(stageClosed);
    if (closedBox) closedBox.classList.remove("is-opening");
    setStep("Paso 1 — Elegí con cuál rama jugar");
    smoothScrollTo(game, 24);
  }

  btnStart && btnStart.addEventListener("click", startGame);
  btnReset && btnReset.addEventListener("click", resetGame);

  // Comecocos del hero también dispara el juego
  const heroComecocos = $("#heroComecocos");
  heroComecocos && heroComecocos.addEventListener("click", startGame);

  // ======== STAGE 1 → 2 (apertura animada del comecocos) ========
  $$(".quad", closedBox).forEach(q => {
    q.addEventListener("click", () => openBranch(q.dataset.branch));
  });

  function openBranch(branchId) {
    currentBranch = branchId;
    const data = window.PLAN_DATA[branchId];
    if (!data || !closedBox) return;

    // Disparar animación
    closedBox.classList.add("is-opening");

    // Esperar a que la animación termine (tiempo total ≈ 350 + 720 = 1070ms)
    const ANIM_TOTAL = 1100;

    setTimeout(() => {
      hide(stageClosed);
      closedBox.classList.remove("is-opening");

      // Banner
      branchBanner.classList.remove("is-blue", "is-orange");
      branchBanner.classList.add(branchId === "blue" ? "is-blue" : "is-orange");
      branchTitle.textContent = data.title;
      branchSub.textContent   = data.sub;

      // Render 4 gajos triangulares (comecocos abierto)
      // Limpiar gajos previos pero conservar la cruz y el nudo central
      $$(".gajo-tri", gajosWrap).forEach(n => n.remove());
      const ROT = [0, 90, 180, 270]; // top, right, bottom, left
      const branchClass = branchId === "blue" ? "is-blue" : "is-orange";
      data.gajos.forEach((g, i) => {
        const tri = document.createElement("button");
        tri.type = "button";
        tri.className = `gajo-tri ${branchClass}`;
        tri.style.setProperty("--rot", ROT[i]);
        tri.style.animationDelay = `${i * 60}ms`;
        tri.setAttribute("aria-label", `Gajo ${ROMAN[g.n - 1]}: ${g.titular}`);
        tri.innerHTML = `
          <span class="gajo-tri__num">${ROMAN[g.n - 1]}</span>
          <span class="gajo-tri__title">${g.titular}</span>
          <span class="gajo-tri__cta">Ver herramienta</span>
        `;
        tri.addEventListener("click", () => openAnswer(branchId, i));
        // Insertar antes de la cruz
        const cross = $(".gajos-comecocos__cross", gajosWrap);
        gajosWrap.insertBefore(tri, cross);
      });

      // Reset rotación
      cocoRot = 0;
      gajosWrap.style.setProperty("--cc-rot", `${cocoRot}deg`);

      show(stageOpen);
      setStep(`Paso 2 — Rama ${data.title.toLowerCase()} · elegí el titular`);
      smoothScrollTo(game, 24);
    }, ANIM_TOTAL);
  }

  // ======== Rotación del comecocos abierto ========
  $$(".rot-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const delta = parseInt(btn.dataset.rot, 10) || 0;
      cocoRot += delta;
      if (gajosWrap) gajosWrap.style.setProperty("--cc-rot", `${cocoRot}deg`);
    });
  });

  // ======== STAGE 2 → 3 (mostrar respuesta + deep dive) ========
  function openAnswer(branchId, idx) {
    const data = window.PLAN_DATA[branchId];
    const g = data.gajos[idx];
    currentGajo = g;

    // Card base
    answerCard.classList.remove("is-blue", "is-orange");
    answerCard.classList.add(branchId === "blue" ? "is-blue" : "is-orange");

    answerPill.textContent = g.pill;
    answerTitle.textContent = g.h3;
    answerQuote.textContent = `“${g.titular}”`;
    answerText.textContent = g.body;

    answerMeta.innerHTML = "";
    g.meta.forEach(m => {
      const li = document.createElement("li");
      li.textContent = m;
      answerMeta.appendChild(li);
    });

    answerLink.href = g.url;
    answerLink.innerHTML = `${g.cta} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    // Deep dive
    const dd = g.deepDive;
    if (dd) {
      ddTitle.textContent  = `Más sobre ${g.pill.toLowerCase()}`;
      ddQuote.textContent  = dd.quote || "";
      ddQuote.style.display = dd.quote ? "" : "none";

      ddHighlights.innerHTML = "";
      (dd.highlights || []).forEach(h => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="k">${h.k}</span><span class="v">${h.v}</span>`;
        ddHighlights.appendChild(li);
      });

      ddSteps.innerHTML = "";
      (dd.steps || []).forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        ddSteps.appendChild(li);
      });

      if (dd.gotcha) {
        ddGotcha.textContent = dd.gotcha;
        ddGotcha.style.display = "";
      } else {
        ddGotcha.style.display = "none";
      }
    }

    hide(stageOpen);
    show(stageAnswer);
    setStep(`Paso 3 — Tu herramienta · ${g.pill}`);
    smoothScrollTo(game, 24);
  }

  // ======== Botones ========
  answerBack && answerBack.addEventListener("click", () => {
    if (!currentBranch) { resetGame(); return; }
    hide(stageAnswer);
    show(stageOpen);
    const data = window.PLAN_DATA[currentBranch];
    setStep(`Paso 2 — Rama ${data.title.toLowerCase()} · elegí el titular`);
    smoothScrollTo(game, 24);
  });

  answerSwitch && answerSwitch.addEventListener("click", resetGame);

  // ======== Compartir ========
  function buildShareText() {
    const base = "El plan que elegís — alivio fiscal en Santa Fe.";
    if (currentGajo) return `${base}\n\n"${currentGajo.titular}" → ${currentGajo.h3}\n\nProbalo vos:`;
    return `${base} Un juego de 2 minutos que capaz te ahorra plata.`;
  }
  $$(".share__btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.share;
      const text = buildShareText();
      const url  = window.location.href.split("#")[0];
      if (mode === "wa") {
        window.open(`https://wa.me/?text=${encodeURIComponent(text + "\n" + url)}`, "_blank", "noopener");
      } else if (mode === "copy") {
        const payload = `${text}\n${url}`;
        const flash = (m) => { const old = btn.textContent; btn.textContent = m; setTimeout(() => btn.textContent = old, 1500); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(payload).then(() => flash("¡Copiado!"));
        } else {
          const ta = document.createElement("textarea");
          ta.value = payload; document.body.appendChild(ta); ta.select();
          try { document.execCommand("copy"); flash("¡Copiado!"); } catch (_) {}
          document.body.removeChild(ta);
        }
      }
    });
  });

  // ======== Atajos ========
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !stageAnswer.hidden) answerBack && answerBack.click();
    else if (e.key === "Escape" && !stageOpen.hidden) resetGame();
  });

  // ======== Smooth scroll para anchors ========
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); smoothScrollTo(target, 70); }
      }
    });
  });

}

// Iniciar cuando el DOM está listo (defensivo para webviews que ejecutan
// scripts antes de que termine el parse del documento, ej. WhatsApp/iOS).
function __safeInit() {
  try { __initElPlanQueElegis(); }
  catch (err) { try { console.error("[EPQE init]", err); } catch (_) {} }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", __safeInit);
} else {
  __safeInit();
}

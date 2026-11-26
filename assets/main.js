// Contact popover
const btn = document.getElementById("contactBtn");
const card = document.getElementById("contactCard");
function setContact(open) {
  card.hidden = !open;
  btn.setAttribute("aria-expanded", String(open));
}
btn.addEventListener("click", (ev) => { ev.stopPropagation(); setContact(card.hidden); });
document.addEventListener("click", (ev) => { if (!card.contains(ev.target)) setContact(false); });
document.addEventListener("keydown", (ev) => { if (ev.key === "Escape") setContact(false); });

// Mobile menu
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Site-only opt-in for people who use Reduce Motion but still want the decorative butterfly.
// The system preference remains the default, and this choice affects only this website.
const butterflyWrap = document.querySelector(".butterfly-wrap");
if (butterflyWrap) {
  const motionKey = "aisha-butterfly-motion";
  const motionToggle = document.createElement("button");
  motionToggle.type = "button";
  motionToggle.className = "butterfly-motion-toggle";
  butterflyWrap.appendChild(motionToggle);

  function storedButterflyMotion() {
    try { return localStorage.getItem(motionKey) === "on"; }
    catch { return false; }
  }

  function setButterflyMotion(enabled, remember = true) {
    document.documentElement.classList.toggle("butterfly-motion-enabled", enabled);
    motionToggle.setAttribute("aria-pressed", String(enabled));
    motionToggle.textContent = enabled ? "Pause butterfly" : "Animate butterfly";
    if (remember) {
      try { localStorage.setItem(motionKey, enabled ? "on" : "off"); }
      catch { /* The control still works for this page when storage is unavailable. */ }
    }
  }

  setButterflyMotion(storedButterflyMotion(), false);
  motionToggle.addEventListener("click", () => {
    setButterflyMotion(motionToggle.getAttribute("aria-pressed") !== "true");
  });
}

// Project filters
const filters = document.querySelectorAll(".filter");
filters.forEach((f) => f.addEventListener("click", () => {
  filters.forEach((x) => x.setAttribute("aria-pressed", String(x === f)));
  document.querySelectorAll(".project").forEach((p) => {
    p.hidden = !(f.dataset.f === "all" || p.dataset.cat === f.dataset.f);
  });
}));

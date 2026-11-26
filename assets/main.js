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

// Project filters
const filters = document.querySelectorAll(".filter");
filters.forEach((f) => f.addEventListener("click", () => {
  filters.forEach((x) => x.setAttribute("aria-pressed", String(x === f)));
  document.querySelectorAll(".project").forEach((p) => {
    p.hidden = !(f.dataset.f === "all" || p.dataset.cat === f.dataset.f);
  });
}));


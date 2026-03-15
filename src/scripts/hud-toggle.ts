const toggle = document.getElementById("hud-toggle");
const panel = document.getElementById("hud-panel");

function toggleHud() {
  panel?.classList.toggle("collapsed");

  if (panel?.classList.contains("collapsed")) {
    toggle!.textContent = "⮞";
  } else {
    toggle!.textContent = "⮜";
  }
}

toggle?.addEventListener("click", toggleHud);

window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "h") {
    toggleHud();
  }
});

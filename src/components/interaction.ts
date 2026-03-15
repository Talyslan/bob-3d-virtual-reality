AFRAME.registerComponent("interaction", {
  init() {
    this.el.addEventListener("click", () => {
      console.log("Interaction activated");

      this.el.sceneEl?.emit("activated");
    });
  },
});

document.querySelector("a-scene")?.addEventListener("activated", () => {
  const magic = document.querySelector("#magic") as typeof AFRAME.AEntity | null;

  magic?.setAttribute("particle-system", { enabled: true });

  setTimeout(() => {
    magic?.setAttribute("particle-system", { enabled: false });
  }, 2000);
});

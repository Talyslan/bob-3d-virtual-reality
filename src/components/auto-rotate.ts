AFRAME.registerComponent("auto-rotate", {
  schema: {
    speed: { type: "number", default: 0.6 },
  },

  tick(_time: number, delta: number) {
    const rotation = this.el.object3D.rotation;
    rotation.y += (delta / 1000) * this.data.speed;
  },
});

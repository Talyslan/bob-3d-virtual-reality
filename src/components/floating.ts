AFRAME.registerComponent("floating", {
  schema: {
    amplitude: { default: 0.2 },
    speed: { default: 2 },
  },

  tick(time: number) {
    const y = Math.sin((time / 1000) * this.data.speed) * this.data.amplitude + 0.5;
    this.el.object3D.position.y = y;
  },
});

import { Text } from "./text.js";
import { Particle } from "./particle.js";

export class Visual {
  constructor() {
    this.text = new Text();

    this.particles = [];

    this.mouse = {
      x: 0,
      y: 0,
      radius: 0,
    };

    document.addEventListener("pointermove", this.onMove.bind(this), false);
  }

  show(stageWidth, stageHeight) {
    this.pos = this.text.setText("W", 20, stageWidth, stageHeight);
    this.posTotal = this.pos.length - 1;
  }

  onmove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }
}

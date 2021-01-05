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
}

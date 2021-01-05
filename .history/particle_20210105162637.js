const FRICTION = 0.98;
const MOVE_SPEED = 0.88;

export class Particle {
  constructor(pos, color) {
    this.color = color;
    this.maxRadius = Math.random() * (50 - 20) + 20;
  }
}

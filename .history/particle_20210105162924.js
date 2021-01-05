const FRICTION = 0.98;
const MOVE_SPEED = 0.88;

export class Particle {
  constructor(pos, color) {
    this.color = color;
    this.maxRadius = Math.random() * (50 - 20) + 20;

    this.savedX = pos.x;
    this.savedY = pos.y;
    this.x = pos.x;
    this.y = pos.y;

    this.progress = 0;
    this.radius = 0;
    this.vr = 0;
    this.vx = 0;
    this.vy = 0;

    this.fps = 30;
    this.fpsTime = 1000 / this.fps;
  }

  draw(ctx) {
    if (process < 100) {
      this.vr += (this.maxRadius - this.radius) / this.fpsTime;
      this.vr *= MOVE_SPEED;
    } else {
      this.vr -= 2;
    }
  }
}

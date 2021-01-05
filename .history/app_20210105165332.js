import { Text } from "./text.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fontactive: () => {
        this.text = new Text();
        this.text.setText(
          "A",
          2,
          document.body.clientWidth,
          document.body.clientHeight
        );
      },
    });
  }
}

window.onload = () => {
  new App();
};

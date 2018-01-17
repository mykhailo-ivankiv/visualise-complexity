import { getRandom, sleepFor } from "./utils";

export const K = 0.5;
export const MARGIN_FROM_SIDES = 10;

class AlgorithmVisualiser {
  constructor(data, width, height) {
    this.data = data.map(n => new Number(n));
    this.objects = new Map();

    this.data.map(d => {
      const point = [
        getRandom(MARGIN_FROM_SIDES, width - MARGIN_FROM_SIDES), //x
        getRandom(MARGIN_FROM_SIDES, height - MARGIN_FROM_SIDES) //y
      ];

      this.objects.set(d, point);
    });
  }

  async interrupter() {
    await sleepFor(K);
  }

  getShape(x, y) {
    const path = new Path2D();
    path.arc(x, y, 7.5 * 2, 0, Math.PI * 2, true); // Outer circle
    return path;
  }

  drawDataOn(ctx) {
    this.data.forEach(number => this.add(ctx, number));
    return this;
  }

  add(ctx, number) {
    const [x, y] = this.objects.get(number);

    ctx
      .append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 10);

    ctx
      .append("text")
      .attr("x", x)
      .attr("y", y)
      .attr("dx", -5)
      .attr("dy", 3)
      .text(number);
  }

  remove(ctx, number) {
    const [x, y] = this.objects.get(number);
    ctx.select(`circle[cx="${x}"][cy="${y}"]`).remove();
  }

  performOn(fn, ctx) {
    return new Promise((res, rej) => {
      fn(this.data.slice(), {
        interrupter: this.interrupter.bind(this),
        remove: this.remove.bind(this, ctx),
        done: res,
        error: rej
      });
    });
  }
}

export default AlgorithmVisualiser;

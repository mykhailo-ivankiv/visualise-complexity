import { K, MARGIN_FROM_SIDES, NUMBER_OF_NUMBERS } from "./consts";
import { getRandom, sleepFor } from "./utils";

function* id() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const getId = id();

class NumberWrapper extends Number {
  constructor(n) {
    super(n);
    this.id = getId.next().value;
  }
}

class AlgoVisualiser {
  constructor(el, data) {
    const context = el.getContext("2d");
    const { height, width } = el.getBoundingClientRect();

    el.height = height;
    el.width = width;

    Object.assign(this, { context, el, height, width });


    this.data = data.map(n => new NumberWrapper(n));

    this.objects = new Map();

    this.data.map(d => {
      const point = [
        getRandom(MARGIN_FROM_SIDES, this.width - MARGIN_FROM_SIDES), //x
        getRandom(MARGIN_FROM_SIDES, this.height - MARGIN_FROM_SIDES) //y
      ];

      this.objects.set(d, point);
    });
  }

  async interrupter() {
    await sleepFor(K);
  }

  getShape (x, y)  {
      const path = new Path2D();
      path.arc(x, y, 7.5*2, 0, Math.PI * 2, true); // Outer circle
      return path;
  }

  draw() {


      for (let number of this.objects.keys() ) {
          this.add(number);
      }
  }

  add( number) {
      const [x,y] = this.objects.get(number);
      const ctx = this.context;

      ctx.save();
      ctx.fillStyle = `#2980b9`;
      ctx.fill(this.getShape(x,y));
      ctx.fillStyle = "#ecf0f1";
      ctx.fillText( number, x - 6, y + 3);
      ctx.restore();
  }

  remove(d) {
    const ctx = this.context;
    const [x,y] = this.objects.get(d);
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = `black`;
      ctx.fill(this.getShape(x, y));
      ctx.fillText(d, x - 6, y + 3);
      ctx.restore();
  }

  perform(fn) {
    fn(this.data, {
      interrupter: this.interrupter,
      remove: this.remove.bind(this)
    });
  }
}

const numbers = new Array(NUMBER_OF_NUMBERS)
  .fill()
  .map(() => getRandom(1, NUMBER_OF_NUMBERS + 1));

const a = new AlgoVisualiser(document.getElementById("test"), numbers);

a.draw();
a.perform(async (numbers, { interrupter, remove }) => {
  let missingNumbers = [];

  for (let i = 1; i <= NUMBER_OF_NUMBERS; ++i) {
    let exist = false;

    for (let j = 0; j < NUMBER_OF_NUMBERS; ++j) {
      await interrupter();

      if (i == numbers[j]) {
        //Important! leave `==` for Type conversion
        remove(numbers[j]);
        exist = true;
      }
    }

    if (!exist) {
      missingNumbers.push(i);
    }
  }
  console.log("missingNumbers", numbers, missingNumbers);
  return missingNumbers;
});

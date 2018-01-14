/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const NUMBER_OF_NUMBERS = 50;
/* harmony export (immutable) */ __webpack_exports__["a"] = NUMBER_OF_NUMBERS;

const K = 0.5;
/* harmony export (immutable) */ __webpack_exports__["c"] = K;

const MARGIN_FROM_SIDES = 10;
/* harmony export (immutable) */ __webpack_exports__["b"] = MARGIN_FROM_SIDES;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandom;



const sleepFor = (sleepDuration) => new Promise((res, rej) => setTimeout(res, sleepDuration));
/* harmony export (immutable) */ __webpack_exports__["b"] = sleepFor;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Algo__ = __webpack_require__(5);




class BadAlgo extends __WEBPACK_IMPORTED_MODULE_2__Algo__["a" /* default */] {
    async perform(numbers) { // numbers instanceof Numbers
        let missingNumbers = [];

        for (let i = 1; i <= __WEBPACK_IMPORTED_MODULE_1__consts__["a" /* NUMBER_OF_NUMBERS */]; ++i) {
            let exist = false;

            for (let j = 0; j < __WEBPACK_IMPORTED_MODULE_1__consts__["a" /* NUMBER_OF_NUMBERS */]; ++j) {
                await __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* sleepFor */])(__WEBPACK_IMPORTED_MODULE_1__consts__["c" /* K */]);
                if (i === numbers[j].number) {
                    numbers[j].undraw(this.context);
                    exist = true;
                }
            }

            if (!exist) {
                missingNumbers.push(i);
            }
        }
        return missingNumbers;
    };

}


/* harmony default export */ __webpack_exports__["a"] = (BadAlgo);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Algo__ = __webpack_require__(5);




class GoodAlgo extends __WEBPACK_IMPORTED_MODULE_2__Algo__["a" /* default */] {
    async perform(numbers) {
        let missingNumbers = [];
        const countNumbers = new Array(__WEBPACK_IMPORTED_MODULE_1__consts__["a" /* NUMBER_OF_NUMBERS */] + 1).fill(0);
        const indexNumbers = new Array(__WEBPACK_IMPORTED_MODULE_1__consts__["a" /* NUMBER_OF_NUMBERS */] + 1).fill().map(() => new Array(__WEBPACK_IMPORTED_MODULE_1__consts__["a" /* NUMBER_OF_NUMBERS */] + 1));
        for (let i = 0; i < numbers.length; ++i) {
            await __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* sleepFor */])(__WEBPACK_IMPORTED_MODULE_1__consts__["c" /* K */]);
            countNumbers[numbers[i].number]++;
            indexNumbers[numbers[i].number].push(i);
        }
        for (let i = 1; i < countNumbers.length; ++i) {
            await __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* sleepFor */])(__WEBPACK_IMPORTED_MODULE_1__consts__["c" /* K */]);
            if (countNumbers[i] === 0) {
                missingNumbers.push(i);
            }
            else {
                indexNumbers[i].map((el) => {
                    numbers[el].undraw(this.context);
                });
            }
        }
        return missingNumbers;
    };

}


/* harmony default export */ __webpack_exports__["a"] = (GoodAlgo);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class MyNumber {
    // TODO: make good undraw function
    constructor(x, y, number) {
        Object.assign(this, {x, y, number});
    }

    getPath() {
        const path = new Path2D();
        path.arc(this.x, this.y, 7.5*2, 0, Math.PI * 2, true); // Outer circle
        return path;
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = `#2980b9`;
        ctx.fill(this.getPath());
        ctx.fillStyle = "#ecf0f1";
        ctx.fillText(this.number, this.x - 6, this.y + 3);
        ctx.restore();
    }

    undraw(ctx) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = `black`;
        ctx.fill(this.getPath());
        ctx.fillText(this.number, this.x - 6, this.y + 3);
        ctx.restore();
    }
}


/* harmony default export */ __webpack_exports__["a"] = (MyNumber);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Algo {
    constructor( rect) {
        const context = rect.getContext('2d');
        const {height, width} = rect.getBoundingClientRect();

        rect.height = height;
        rect.width = width;

        Object.assign(this, {context, rect, height, width})
    }

    async perform(numbers) {
        console.log("Please implement your own perform method");
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Algo);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__consts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);



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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getRandom */])(__WEBPACK_IMPORTED_MODULE_0__consts__["b" /* MARGIN_FROM_SIDES */], this.width - __WEBPACK_IMPORTED_MODULE_0__consts__["b" /* MARGIN_FROM_SIDES */]), //x
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getRandom */])(__WEBPACK_IMPORTED_MODULE_0__consts__["b" /* MARGIN_FROM_SIDES */], this.height - __WEBPACK_IMPORTED_MODULE_0__consts__["b" /* MARGIN_FROM_SIDES */]) //y
      ];

      this.objects.set(d, point);
    });
  }

  async interrupter() {
    await __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* sleepFor */])(__WEBPACK_IMPORTED_MODULE_0__consts__["c" /* K */]);
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

const numbers = new Array(__WEBPACK_IMPORTED_MODULE_0__consts__["a" /* NUMBER_OF_NUMBERS */])
  .fill()
  .map(() => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getRandom */])(1, __WEBPACK_IMPORTED_MODULE_0__consts__["a" /* NUMBER_OF_NUMBERS */] + 1));

const a = new AlgoVisualiser(document.getElementById("test"), numbers);

a.draw();
a.perform(async (numbers, { interrupter, remove }) => {
  let missingNumbers = [];

  for (let i = 1; i <= __WEBPACK_IMPORTED_MODULE_0__consts__["a" /* NUMBER_OF_NUMBERS */]; ++i) {
    let exist = false;

    for (let j = 0; j < __WEBPACK_IMPORTED_MODULE_0__consts__["a" /* NUMBER_OF_NUMBERS */]; ++j) {
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


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Number__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GoodAlgo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BadAlgo__ = __webpack_require__(2);






//TODO: add good delay between deleting symbols
class Complexity {
    constructor(algo, numbers) {
        this.algo = algo;
        this.numbers = numbers;
        this.generatePoints()
    }

    generatePoints() {
        this.numbers.map((el) => {
            el.draw(this.algo.context);
        });
        return this;
    };

    renderNumber(number, modifier) {
        let nd = document.createElement("span");
        nd.textContent = number;
        nd.classList.add("result__missing-numbers");
        nd.classList.add(modifier);
        return nd;
    }


    action() {
        return this.algo.perform(this.numbers);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Complexity);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Complexity__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GoodAlgo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BadAlgo__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__consts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Number__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AlgoVisualiser__ = __webpack_require__(6);









const elForGoodAlgo = document.querySelector(".content__algo_good");
const elBadAlgo = document.querySelector(".content__algo_bad");

const goodAlgo = new __WEBPACK_IMPORTED_MODULE_1__GoodAlgo__["a" /* default */]( elForGoodAlgo);
const badAlgo = new __WEBPACK_IMPORTED_MODULE_2__BadAlgo__["a" /* default */]( elBadAlgo);

const numbers = new Array(__WEBPACK_IMPORTED_MODULE_4__consts__["a" /* NUMBER_OF_NUMBERS */])
    .fill()
    .map(() =>
        new __WEBPACK_IMPORTED_MODULE_5__Number__["a" /* default */](
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* getRandom */])(__WEBPACK_IMPORTED_MODULE_4__consts__["b" /* MARGIN_FROM_SIDES */], goodAlgo.width - __WEBPACK_IMPORTED_MODULE_4__consts__["b" /* MARGIN_FROM_SIDES */]), //x
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* getRandom */])(__WEBPACK_IMPORTED_MODULE_4__consts__["b" /* MARGIN_FROM_SIDES */], goodAlgo.height - __WEBPACK_IMPORTED_MODULE_4__consts__["b" /* MARGIN_FROM_SIDES */]), //y
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* getRandom */])(1, __WEBPACK_IMPORTED_MODULE_4__consts__["a" /* NUMBER_OF_NUMBERS */] + 1) //number
        ));

const a = new __WEBPACK_IMPORTED_MODULE_0__Complexity__["a" /* default */](goodAlgo, numbers)
a
    .action()
    .then( value => {
        let elem = document.querySelector(".result__good");
        value.map((el) => elem.appendChild(a.renderNumber(el, "result__missing-numbers_good")));
    });



const b = new __WEBPACK_IMPORTED_MODULE_0__Complexity__["a" /* default */](badAlgo, numbers)

b.action()
    .then( value => {
        let elem = document.querySelector(".result__bad");
        value.map((el) => elem.appendChild(b.renderNumber(el, "result__missing-numbers_bad")));
    });


/***/ })
/******/ ]);
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
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(10);


const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getRandom;


const sleepFor = sleepDuration =>
  new Promise((res, rej) => setTimeout(res, sleepDuration));
/* harmony export (immutable) */ __webpack_exports__["c"] = sleepFor;


const range = (n, fn) => new Array(n).fill().map(fn);
/* harmony export (immutable) */ __webpack_exports__["a"] = range;



/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AlgorithmVisualiser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Canvas__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__badAlgorithm__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__goodAlgorithm__ = __webpack_require__(14);








const numbers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* range */])(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* NUMBER_OF_NUMBERS */], () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* getRandom */])(1, __WEBPACK_IMPORTED_MODULE_3__config__["a" /* NUMBER_OF_NUMBERS */] + 1))

const badCanvas = new __WEBPACK_IMPORTED_MODULE_1__Canvas__["a" /* default */] (".content__algo_bad");
const goodCanvas = new __WEBPACK_IMPORTED_MODULE_1__Canvas__["a" /* default */] (".content__algo_good");
const {width, height} = badCanvas;
const a = new __WEBPACK_IMPORTED_MODULE_0__AlgorithmVisualiser__["a" /* default */](numbers, width, height);

a.drawOn(badCanvas.ctx)
 .drawOn(goodCanvas.ctx);

a.performOn(badCanvas.ctx, __WEBPACK_IMPORTED_MODULE_4__badAlgorithm__["a" /* default */])
    .then ( value => {
        document.querySelector(".result__bad").innerHTML =
        value.map( el => `<span class="result__missing-numbers result__missing-numbers_bad">${el}</span>`).join("")
    })

a.performOn(goodCanvas.ctx, __WEBPACK_IMPORTED_MODULE_5__goodAlgorithm__["a" /* default */])
    .then ( value => {
        document.querySelector(".result__good").innerHTML =
            value.map( el => `<span class="result__missing-numbers result__missing-numbers_good">${el}</span>`).join("")
    })

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Canvas {
    constructor (query) {
        const el = document.querySelector(query);
        const ctx = el.getContext("2d");
        const { height, width } = el.getBoundingClientRect();

        el.height = height;
        el.width = width;

        Object.assign(this, { ctx, el, height, width });
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Canvas);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const NUMBER_OF_NUMBERS = 50;
/* harmony export (immutable) */ __webpack_exports__["a"] = NUMBER_OF_NUMBERS;


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = (async (numbers, { interrupter, remove, done }) => {
    let missingNumbers = [];
    for (let i = 1; i <= __WEBPACK_IMPORTED_MODULE_0__config__["a" /* NUMBER_OF_NUMBERS */]; ++i) {
        let exist = false;

        for (let j = 0; j < __WEBPACK_IMPORTED_MODULE_0__config__["a" /* NUMBER_OF_NUMBERS */]; ++j) {
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

    done(missingNumbers);
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = (async (numbers, { interrupter, remove, done}) => {
    let missingNumbers = [];
    const countNumbers = new Array(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* NUMBER_OF_NUMBERS */] + 1).fill(0);
    const indexNumbers = new Array(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* NUMBER_OF_NUMBERS */] + 1).fill().map(() => new Array(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* NUMBER_OF_NUMBERS */] + 1));
    for (let i = 0; i < numbers.length; ++i) {
        await interrupter();
        countNumbers[numbers[i]]++;
        indexNumbers[numbers[i]].push(i);
    }
    for (let i = 1; i < countNumbers.length; ++i) {
        await interrupter();
        if (countNumbers[i] === 0) {
            missingNumbers.push(i);
        }
        else {
            indexNumbers[i].map((el) => {
                remove(numbers[el]);
            });
        }
    }

    done(missingNumbers);
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);


const K = 0.5;
/* unused harmony export K */

const MARGIN_FROM_SIDES = 10;
/* unused harmony export MARGIN_FROM_SIDES */


class AlgorithmVisualiser {
  constructor(data, width, height) {
    this.data = data.map(n => new Number(n));
    this.objects = new Map();

    this.data.map(d => {
      const point = [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getRandom */])(MARGIN_FROM_SIDES, width - MARGIN_FROM_SIDES), //x
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getRandom */])(MARGIN_FROM_SIDES, height - MARGIN_FROM_SIDES) //y
      ];

      this.objects.set(d, point);
    });
  }

  async interrupter() {
    await __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* sleepFor */])(K);
  }

  getShape(x, y) {
    const path = new Path2D();
    path.arc(x, y, 7.5 * 2, 0, Math.PI * 2, true); // Outer circle
    return path;
  }

  drawOn(ctx) {
    this.data.forEach( number => this.add(ctx, number))
    return this;
  }

  add(ctx, number) {
    const [x, y] = this.objects.get(number);

    ctx.save();
    ctx.fillStyle = `#2980b9`;
    ctx.fill(this.getShape(x, y));
    ctx.fillStyle = "#ecf0f1";
    ctx.fillText(number, x - 6, y + 3);
    ctx.restore();
  }

  remove(ctx, number) {
    const [x, y] = this.objects.get(number);
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = `black`;
    ctx.fill(this.getShape(x, y));
    ctx.restore();

    ctx.save();
    ctx.fillStyle = `#2980b9`;
    ctx.fillText(number, x - 6, y + 3);
    ctx.restore();
  }

  performOn(ctx, fn) {
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

/* harmony default export */ __webpack_exports__["a"] = (AlgorithmVisualiser);


/***/ })
/******/ ]);
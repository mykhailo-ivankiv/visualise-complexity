import AlgorithmVisualiser from "./AlgorithmVisualiser"
import Canvas from "./Canvas";

import {getRandom, range} from "./utils";
import {NUMBER_OF_NUMBERS} from "./config";
import badAlgorithm from "./_badAlgorithm";
import goodAlgorithm from "./_goodAlgorithm";

const numbers = range(NUMBER_OF_NUMBERS, () => getRandom(1, NUMBER_OF_NUMBERS + 1))

const badCanvas = new Canvas (".content__algo_bad");
const goodCanvas = new Canvas (".content__algo_good");
const {width, height} = badCanvas;

const a = new AlgorithmVisualiser(numbers, width, height);

a.drawDataOn(badCanvas.ctx)
 .drawDataOn(goodCanvas.ctx);

a.performOn(badAlgorithm, badCanvas.ctx)
    .then ( value => {
        document.querySelector(".result__bad").innerHTML =
        value.map( el => `<span class="result__missing-numbers result__missing-numbers_bad">${el}</span>`).join("")
    });

a.performOn(goodAlgorithm, goodCanvas.ctx)
    .then ( value => {
        document.querySelector(".result__good").innerHTML =
            value.map( el => `<span class="result__missing-numbers result__missing-numbers_good">${el}</span>`).join("")
    });
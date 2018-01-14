import Complexity from "./Complexity"
import GoodAlgo from "./GoodAlgo";
import BadAlgo from "./BadAlgo";
import {getRandom} from "./utils";
import {MARGIN_FROM_SIDES, NUMBER_OF_NUMBERS} from "./consts";
import MyNumber from "./Number";

import AlgoVisualiser from "./AlgoVisualiser"

const elForGoodAlgo = document.querySelector(".content__algo_good");
const elBadAlgo = document.querySelector(".content__algo_bad");

const goodAlgo = new GoodAlgo( elForGoodAlgo);
const badAlgo = new BadAlgo( elBadAlgo);

const numbers = new Array(NUMBER_OF_NUMBERS)
    .fill()
    .map(() =>
        new MyNumber(
            getRandom(MARGIN_FROM_SIDES, goodAlgo.width - MARGIN_FROM_SIDES), //x
            getRandom(MARGIN_FROM_SIDES, goodAlgo.height - MARGIN_FROM_SIDES), //y
            getRandom(1, NUMBER_OF_NUMBERS + 1) //number
        ));

const a = new Complexity(goodAlgo, numbers)
a
    .action()
    .then( value => {
        let elem = document.querySelector(".result__good");
        value.map((el) => elem.appendChild(a.renderNumber(el, "result__missing-numbers_good")));
    });



const b = new Complexity(badAlgo, numbers)

b.action()
    .then( value => {
        let elem = document.querySelector(".result__bad");
        value.map((el) => elem.appendChild(b.renderNumber(el, "result__missing-numbers_bad")));
    });

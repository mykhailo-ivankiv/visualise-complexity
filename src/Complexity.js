import MyNumber from "./Number";
import {getRandom} from "./utils";
import GoodAlgo from './GoodAlgo';
import {K, MARGIN_FROM_SIDES, NUMBER_OF_NUMBERS} from './consts';
import BadAlgo from "./BadAlgo";

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

export default Complexity
import {sleepFor} from "./utils";
import {K, NUMBER_OF_NUMBERS} from './consts';
import Algo from './Algo';

class BadAlgo extends Algo {
    async perform(numbers) { // numbers instanceof Numbers
        let missingNumbers = [];

        for (let i = 1; i <= NUMBER_OF_NUMBERS; ++i) {
            let exist = false;

            for (let j = 0; j < NUMBER_OF_NUMBERS; ++j) {
                await sleepFor(K);
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


export default BadAlgo;
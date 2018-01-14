import {sleepFor} from "./utils";
import {K, NUMBER_OF_NUMBERS} from './consts';
import Algo from "./Algo";

class GoodAlgo extends Algo {
    async perform(numbers) {
        let missingNumbers = [];
        const countNumbers = new Array(NUMBER_OF_NUMBERS + 1).fill(0);
        const indexNumbers = new Array(NUMBER_OF_NUMBERS + 1).fill().map(() => new Array(NUMBER_OF_NUMBERS + 1));
        for (let i = 0; i < numbers.length; ++i) {
            await sleepFor(K);
            countNumbers[numbers[i].number]++;
            indexNumbers[numbers[i].number].push(i);
        }
        for (let i = 1; i < countNumbers.length; ++i) {
            await sleepFor(K);
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


export default GoodAlgo;
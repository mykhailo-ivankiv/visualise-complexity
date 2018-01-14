import {NUMBER_OF_NUMBERS} from "./config";

export default async (numbers, { interrupter, remove, done }) => {
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

    done(missingNumbers);
}

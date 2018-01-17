import { NUMBER_OF_NUMBERS } from "./config";

export default async (numbers, { interrupter, remove, done }) => {
  let missingNumbers = [];
  const countNumbers = new Array(NUMBER_OF_NUMBERS + 1).fill(0);
  const indexNumbers = new Array(NUMBER_OF_NUMBERS + 1)
    .fill()
    .map(() => new Array(NUMBER_OF_NUMBERS + 1));
  for (let i = 0; i < numbers.length; ++i) {
    await interrupter();
    countNumbers[numbers[i]]++;
    indexNumbers[numbers[i]].push(i);
  }
  for (let i = 1; i < countNumbers.length; ++i) {
    await interrupter();
    if (countNumbers[i] === 0) {
      missingNumbers.push(i);
    } else {
      indexNumbers[i].map(el => {
        remove(numbers[el]);
      });
    }
  }

  done(missingNumbers);
};

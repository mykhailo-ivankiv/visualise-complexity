import * as d3 from "d3";
import AlgorithmVisualiser from "./AlgorithmVisualiser";

import { getRandom, range } from "./utils";
import { NUMBER_OF_NUMBERS } from "./config";
import badAlgorithm from "./_badAlgorithm";
import goodAlgorithm from "./_goodAlgorithm";

const numbers = range(NUMBER_OF_NUMBERS, () =>
  getRandom(1, NUMBER_OF_NUMBERS + 1)
);

const a = new AlgorithmVisualiser(numbers, 300, 300);

const bad = d3
  .select(".page__content")
  .append("svg")
  .attr("class", "content__algo content__algo_bad")
  .attr("preserveAspectRatio", "xMidYMid")
  .attr("viewBox", "0 0 300 300")
  .attr("height", "100%")
  .attr("width", "100%");

const good = d3
  .select(".page__content")
  .append("svg")
  .attr("class", "content__algo content__algo_good")
  .attr("preserveAspectRatio", "xMidYMid")
  .attr("viewBox", "0 0 300 300")
  .attr("height", "100%")
  .attr("width", "100%");

a.drawDataOn(bad).drawDataOn(good);

a.performOn(badAlgorithm, bad).then(value => {
  document.querySelector(".result__bad").innerHTML = value
    .map(
      el =>
        `<span class="result__missing-numbers result__missing-numbers_bad">${el}</span>`
    )
    .join("");
});

a.performOn(goodAlgorithm, good).then(value => {
  document.querySelector(".result__good").innerHTML = value
    .map(
      el =>
        `<span class="result__missing-numbers result__missing-numbers_good">${el}</span>`
    )
    .join("");
});

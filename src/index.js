import "./index.scss";
import pairsFrame from "./pairsFrame.png";

const PairsGame = require("./pairsGame");
const PairsLocation = require("./pairsLocation");

document.addEventListener("DOMContentLoaded", () => {
  const size = 8;
  const game = new PairsGame(size);
  const rootElement = document.getElementById("pairs");
  const container = document.createElement("div");
  container.id = "pairsContainer";
  rootElement.appendChild(container);
  for (let x = 0; x < size; x++) {
    const xElement = document.createElement("div");
    xElement.classList.add("pairsRow");
    for (let y = 0; y < size; y++) {
      const yElement = document.createElement("div");
      const cardElement = new Image();
      cardElement.id = "pairsCard-" + x + "-" + y;
      cardElement.src = pairsFrame;
      yElement.appendChild(cardElement);
      yElement.classList.add("pairsCard");
      yElement.addEventListener("click", () => {
        const result = game.select(new PairsLocation(x, y));
        if (result.image > 0) {
          cardElement.classList.add("image-" + result.image);
        }
        if (result.toRemove.length > 0) {
          for (const toRemove of result.toRemove) {
            const card = document.getElementById(
              "pairsCard-" + toRemove.x + "-" + toRemove.y
            );
            const classes = [];
            for (const c of card.classList) {
              if (c.startsWith("image")) {
                classes.push(c);
              }
            }
            for (const c of classes) {
              card.classList.remove(c);
            }
          }
        }
      });
      xElement.appendChild(yElement);
    }
    container.appendChild(xElement);
  }
});

"use strict";

const PairsBoard = require("./pairsBoard");

class SelectResult {
  constructor(image = 0, toRemove = []) {
    this.image = image;
    this.toRemove = toRemove;
  }
}

class PairsGame {
  constructor(size) {
    this.board = new PairsBoard(size);
    this.board.init();
    this.move = 0;
    this.selectedLocation = null;
    this.selectedLocationSecond = null;
    this.selectedImage = -1;
    this.points = 0;
    this.maxPoints = Math.pow(size, 2);
  }

  select(location) {
    const card = this.board.getCard(location.x, location.y);
    if (card.open) {
      return new SelectResult(-1);
    } else {
      if (this.move === 0) {
        this.selectedLocation = location;
        this.selectedImage = card.image;
        this.move = 1;
        return new SelectResult(card.image);
      }
      if (this.move === 1) {
        // check for different card
        if (
          this.selectedLocation.x === location.x &&
          this.selectedLocation.y === location.y
        ) {
          return new SelectResult(-1);
        }
        const oldCard = this.board.getCard(
          this.selectedLocation.x,
          this.selectedLocation.y
        );
        if (card.image === oldCard.image) {
          // treffer
          this.board.open(
            location.x,
            location.y,
            this.selectedLocation.x,
            this.selectedLocation.y
          );
          this.points++;
          if (this.points === this.maxPoints) {
            // complete !
          }
          this.move = 0;
        } else {
          this.selectedLocationSecond = location;
          this.move = 2;
        }
        return new SelectResult(card.image);
      }
      if (this.move === 2) {
        const toRemove = [];
        if (this.selectedLocation !== null) {
          toRemove.push(this.selectedLocation);
          this.selectedLocation = null;
        }
        if (this.selectedLocationSecond !== null) {
          toRemove.push(this.selectedLocationSecond);
          this.selectedLocationSecond = null;
        }
        this.selectedImage = -1;
        this.move = 0;
        return new SelectResult(0, toRemove);
      }
      return new SelectResult(-1);
    }
  }
}

module.exports = PairsGame;

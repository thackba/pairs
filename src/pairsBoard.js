"use strict";

function PairsCard(image) {
  Object.defineProperties(this, {
    image: { value: image, enumerable: true },
    open: { value: false, enumerable: true, writable: true }
  });
}

class PairsBoard {
  constructor(size) {
    if (size % 2 !== 0) {
      throw new Error("Could not create a board with odd size!");
    }
    Object.defineProperties(this, {
      size: { value: size, enumerable: true },
      numberOfFields: { value: Math.pow(size, 2), enumerable: true },
      initialized: { value: false, enumerable: true, writable: true },
      board: { value: [], enumerable: true, writable: true }
    });
  }

  init(values = this.randomList()) {
    if (values.length !== this.numberOfFields) {
      throw new Error(
        "Could not init the board. Use a list with " +
          this.numberOfFields +
          " entries."
      );
    }
    let valueCounter = 0;
    this.board = [];
    for (let xAxis = 0; xAxis < this.size; xAxis++) {
      const subAxis = [];
      for (let yAxis = 0; yAxis < this.size; yAxis++) {
        subAxis.push(new PairsCard(values[valueCounter++]));
      }
      this.board.push(subAxis);
    }
    this.initialized = true;
  }

  getCard(x, y) {
    if (!this.initialized) {
      return null;
    }
    return this.board[x][y];
  }

  open(x1, y1, x2, y2) {
    const card1 = this.getCard(x1, y1);
    const card2 = this.getCard(x2, y2);
    if (card1.image === card2.image) {
      card1.open = true;
      card2.open = true;
    }
  }

  randomList() {
    const shuffle = list => {
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
      return list;
    };

    const randomList = [];
    const imageNumber = this.numberOfFields / 2;
    for (let counter = 0; counter < imageNumber; counter++) {
      // Add every image twice (image from 1 to 32)
      randomList.push(counter + 1);
      randomList.push(counter + 1);
    }
    // Shuffle twice
    shuffle(randomList);
    shuffle(randomList);
    return randomList;
  }
}

module.exports = PairsBoard;

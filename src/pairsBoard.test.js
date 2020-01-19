const PairsBoard = require("./pairsBoard");

const range = function(end) {
  return new Array(end).fill(undefined).map((_, i) => i);
};

describe("PairsBoard", () => {
  let board;
  beforeEach(() => {
    board = new PairsBoard(8);
  });

  describe("The constructor", () => {
    test("should be created with even size", () => {
      expect(board.size).toBe(8);
    });

    test("should not be created it the size is odd", () => {
      expect(() => {
        new PairsBoard(7);
      }).toThrow("Could not create a board with odd size!");
    });
  });

  describe("The getCardValue method", () => {
    test("should return -1 if board is not initialized", () => {
      expect(board.getCard(7, 7)).toBe(null);
    });

    test("should load correct value after init", () => {
      const numberedList = range(64);
      board.init(numberedList);
      expect(board.getCard(7, 7).image).toBe(63);
      expect(board.getCard(2, 4).image).toBe(20);
    });
  });

  describe("The init method", () => {
    test("should init the board with the default parameter", () => {
      board.init();
      expect(board.getCard(5, 5).image).toBeGreaterThanOrEqual(0);
    });

    test("should throw an error if the parameter have not enough entries", () => {
      expect(() => {
        board.init([]);
      }).toThrow("Could not init the board. Use a list with 64 entries.");
    });
  });

  describe("The randomList method", () => {
    test("should return a list of size * size items", () => {
      const randomList = board.randomList();
      expect(randomList.length).toBe(64);
    });

    test("should be randomized and not increasing", () => {
      const randomList = board.randomList();
      let lastValue = -1;
      let randomized = false;
      for (value of randomList) {
        if (lastValue !== -1 && value < lastValue) {
          randomized = true;
        }
        lastValue = value;
      }
      expect(randomized).toBe(true);
    });
  });
});

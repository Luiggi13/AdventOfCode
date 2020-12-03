const fs = require("fs");

fs.readFile("input.txt", "utf-8", (error, data) => {
  const input = data.split("\n").map((line) => line.split(""));

  /**
   * Checks the requested coordinates for trees
   */
  function partOne() {
    const gridObject = new Grid(input);
    return checkCoords(gridObject, 3, 1);
  }

  /**
   * This method loops through a list of directions and runs the coordinates loop method
   */
  function partTwo() {
    const gridObject = new Grid(input);
    return [
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2],
    ]
      .map(([directionX, directionY]) => {
        return checkCoords(gridObject, directionX, directionY);
      })
      .reduce((a, b) => a * b);
  }

  console.log(`Tree Count for part one: ${partOne()}`);
  console.log(`Tree Count for part two: ${partTwo()}`);
});

/**
 * 
 * @param {Grid} gridObject - Checks the given grid and coordinates path for trees
 * @param {Number} directionX - The X coordinate to check against
 * @param {Number} directionY - The Y coordinate to check against
 */
function checkCoords(gridObject, directionX, directionY) {
  for (let trees = 0, x = 0, y = 0; ; x += directionX, y += directionY) {
    const cell = gridObject.check(x, y);
    if (cell === undefined) return trees;
    if (cell === "#") trees++;
  }
}

/**
 * The Grid object to include the check method in
 */
class Grid {
  constructor(gridInput) {
    this.grid = gridInput;
    this.gridWidth = this.grid[0].length;
  }

  check(x, y) {
    return this.grid[y] && this.grid[y][x % this.gridWidth];
  }
}

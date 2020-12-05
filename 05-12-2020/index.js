const fs = require("fs");

fs.readFile("input.txt", "utf-8", (error, data) => {
  const input = data;

  /**
   * This method runs the logic for part one of the puzzla
   */
  function partOne() {
    return Math.max(...input.split('\n').map((line) => {
        return parseInt(line.replace(/B|R/g, 1).replace(/F|L/g, 0), 2);
      }));
  }

  /**
   * This method runs the logic for part two of the puzzla
   */
  function partTwo() {
    const boardingPassList = new Set([...input.split('\n').map((line) => {
        return parseInt(line.replace(/B|R/g, 1).replace(/F|L/g, 0), 2);
    })])

    for(const seat of boardingPassList.values()) {
        if(!boardingPassList.has(seat - 1) && boardingPassList.has(seat - 2)) {
            return seat - 1;
        }
    }
  }

  console.log(`Part One: ${partOne()}`);
  console.log(`Part Two: ${partTwo()}`);
});

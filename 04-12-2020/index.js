const fs = require("fs");

fs.readFile("input.txt", "utf-8", (error, data) => {
  const input = data.split("\n\n");

  /**
   * Checks the passports to see whether they have the required fields or not
   */
  function partOne() {
    const validPassports = [];
    input.forEach((passport) => {
      if (
        ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].every((item) =>
          passport.includes(item)
        )
      ) {
        validPassports.push(passport);
      }
    });
    return validPassports;
  }

  /**
   * This method loops through a list of valid passports from part one and runs validation against them
   */
  function partTwo() {
    const validPassports = partOne();
    const newValidPassports = [];

    const validation = [
        {key: "byr", validate: (v) => v >= 1920 && v <= 2002},
        {key: "iyr", validate: (v) => v >= 2010 && v <= 2020},
        {key: "eyr", validate: (v) => v >= 2020 && v <= 2030},
        {key: "hgt", validate: (v) => {
            const num = v.replace(/\D/g,'');
            return v.match(new RegExp('cm|in')) && (v.includes('cm') ? num >= 150 && num <= 193 : num >= 59 && num <= 76);
        }},
        {key: "hcl", validate: (v) => v.match(/^#[0-9A-F]{6}$/i)},
        {key: "ecl", validate: (v) => v.match(new RegExp(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].join('|'), 'g'))},
        {key: "pid", validate: (v) => !isNaN(v) && v.split('').length === 9},
        {key: 'cid', validate: (v) =>  false}
    ]

    validPassports.forEach(passport => {
        let validItems = 0;
        const passportItems = passport.split(new RegExp(['\n', ' '].join('|'), 'g'));
        passportItems.forEach(passportItem => {
            const values = passportItem.split(':');
            if (validation.filter(val => val.key === values[0])[0].validate(values[1])) {
                validItems += 1;
            }
        });
        if(validItems === 7) {
            newValidPassports.push(passport);
        }
    });

    return newValidPassports;
  }

  console.log(`Count for part one: ${partOne().length}`);
  console.log(`Count for part two: ${partTwo().length}`);
});

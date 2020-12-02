const fs = require('fs');

fs.readFile('passwords.txt', "utf-8", (error, data) => {
    const splitData = data.split("\n");
    
    const validPasswordsPartOne = [];
    const validPasswordsPartTwo = [];

    splitData.forEach(passObject => {
        const args = passObject.split(" ");
        const minAmount = parseInt(args[0].split("-")[0]);
        const maxAmount = parseInt(args[0].split("-")[1]);
        const letter = args[1].replace(":", "");
        const pass = args[2];
        const regex = new RegExp(letter, 'g');

        const passLetters = pass.split('');

        const letterCount = pass.match(regex)?.length;

        if(letterCount <= maxAmount && letterCount >= minAmount) validPasswordsPartOne.push(pass);
        console.log(passLetters)
        if((passLetters[minAmount - 1] === letter && passLetters[maxAmount - 1] !== letter) || (passLetters[minAmount - 1] !== letter && passLetters[maxAmount - 1] === letter)) validPasswordsPartTwo.push(pass);
    });
    console.log(`Valid Passwords for part one: ${validPasswordsPartOne.length}`);
    console.log(`Valid Passwords for part two: ${validPasswordsPartTwo.length}`);

});
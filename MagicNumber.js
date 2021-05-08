const prompt = require('prompt-sync')();
let max = 100
let number = 1
let magic = 0;

while (number != 2) {
    console.log("Enter '1' to choose  n/2 \n: '2' to choose greater the n \n '3' to choose  n: \n");
    number = parseInt(prompt());
    switch (number) {
        case 1:
            max = max / 2;
            break;
        case 2:
            magic = max;
            break;
        case 3:
            max = max * 2;
            break;
        default:
            console.log("You have entered wrong input\n");
    }
}

console.log("magic number is " + magic);
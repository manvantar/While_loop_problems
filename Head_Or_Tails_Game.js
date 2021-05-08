let Heads = 0
let tails = 0
let H_count = 0
let T_count = 0
const prompt = require('prompt-sync')();

while (H_count != 11 && T_count != 11) {
    let bet = (prompt('Press any key to flip a coin'));
    toss = Math.floor((Math.random() * 2));
    if (toss == 0) {
        console.log("Toss=Heads");
        H_count++;
    }
    else {
        console.log("Toss=Tails");
        T_count++
    }
}
if (H_count > T_count) {
    console.log("game over Heads own");
}
else {
    console.log("game over tails own");
}



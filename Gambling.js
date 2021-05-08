let money = 100;
let count = 0;
let bet=0;
const prompt = require('prompt-sync')();

while ((money < 200 || money == 0) && bet < money) {
    let bet = parseInt(prompt('Please enter the betting amount, you have ' + money+' in your wallet :'));
    while (bet > money) {
        bet = parseInt(prompt("Enter the betting amount less than " + money+" :"));
    }
    var res = Math.floor((Math.random() * 2));
    if (res == 0) {
        money = money - bet
    }
    else {
        money = money + bet
    }
    count++;
}
if (money == 0) {
    console.log("lost, you have "+money+" in your wallet");
}
else {
    console.log("own, you have "+ money +"in your wallet");
}

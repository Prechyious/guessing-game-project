// Declaring variables
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Secret number and number of attempts variable
let secretNumber;
let numAttempts;

// Asking User for a guess
function askGuess() {
    rl.question("Enter a Guess: ",  answer => {
        numAttempts--;
        answer = Number(answer);
        if (checkGuess(answer)) {
            console.log("You win");
            rl.close();
        } else if (numAttempts === 0) {
            console.log("You Lost");
            rl.close();
        }
        else {
            askGuess();
        }
    });
}

// Asking User for a number range and invoking the ask guess function
function askRange() {
    rl.question("Enter a min number: ", min => {
        rl.question("Enter a max number: ", max => {
            min = Number(min);
            max = Number(max);
            secretNumber = randomInRange(min, max);
            console.log(`I'm thinking of a number between ${min} and ${max}...`)
            askGuess();
        });
    });
}


// Asking user for number of tries and invoking askRange function
function askLimit() {
    rl.question("Please enter the number of attempts: ", (attempts) => {
      numAttempts = Number(attempts);
      askRange();
    });
}
askLimit();

// Picking a random number
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Checking the user's guess
function checkGuess(num) {
    if (num > secretNumber) {
        console.log("Too High");
        return false;
    } else if (num < secretNumber) {
        console.log("Too Low");
        return false;
    } else {
        console.log("Correct");
        return true;
    }
}

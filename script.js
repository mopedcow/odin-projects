let computerScore = 0;
let humanScore = 0;
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
        return "ROCK";
    }
    else if (choice === 2) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}
function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors?" , "Type your response").toUpperCase();

    while (choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS") {
        choice = prompt("What? Try again please: ","Rock, Paper, Scissors?").toUpperCase();
    }
   return choice;
}
function playRound(computerChoice, humanChoice) {
    console.log(`Computer says: ${computerChoice}`);
    console.log(`You say: ${humanChoice}`);
    if (computerChoice == humanChoice) {
        console.log(`It's a tie! No points awarded. Computer score = ${computerScore} Your score = ${humanScore}`);
    }
    else if (computerChoice == "ROCK" && humanChoice != "PAPER") {
        computerScore++;
        console.log(`You lose! Computer score = ${computerScore} Your score = ${humanScore}`);
    }
    else if (computerChoice == "PAPER" && humanChoice != "SCISSORS") {
        computerScore++;
        console.log(`You lose! Computer score = ${computerScore} Your score = ${humanScore}`);
    }
    else if (computerChoice == "SCISSORS" && humanChoice != "ROCK") {
        computerScore++;
        console.log(`You lose! Computer score = ${computerScore} Your score = ${humanScore}`);
    }
    else {
        humanScore++;
        console.log(`You win! Computer score = ${computerScore} Your score = ${humanScore}`);
    }    
}

function playGame() {
    let play = 5;
    let i = 0;
    while (i < play) {
        playRound(getComputerChoice(), getHumanChoice());
        i++;
    }
    console.log(`***Game Over***`);
    if (computerScore === humanScore) {
        console.log(`It's a tie! Computer score = ${computerScore} Your score = ${humanScore}`);
    }
    else if (computerScore > humanScore) {
        console.log(`You lose! Computer score = ${computerScore} Your score = ${humanScore}`);
    }
    else {
        console.log(`You win! Computer score = ${computerScore} Your score = ${humanScore}`);
    }
}

playGame();

let wins = 0;
let ties = 0;
let loses = 0;

function computerPlay(){
    let num = Math.floor((Math.random()*3)+1);
    switch(num){
        case 1: return "ROCK";
        case 2: return "PAPER";
        case 3: return "SCISSORS";
    }
}
function playRound(playerSelection, computerSelection) {
    switch(playerSelection){
        case "ROCK"    : return rockAgainst(computerSelection);
        case "PAPER"   : return paperAgainst(computerSelection);
        case "SCISSORS": return scissorsAgainst(computerSelection);
    }
}
function rockAgainst(computerSelection){
    switch(computerSelection){
        case "ROCK"     : ties++; return "Tie: Rock vs Rock";
        case "PAPER"    : loses++; return "Lose: Rock vs Paper";
        case "SCISSORS" : wins++; return "Win: Rock vs Scissors";
    }
}
function paperAgainst(computerSelection){
    switch(computerSelection){
        case "ROCK"     : wins++; return "Win: Paper vs Rock";
        case "PAPER"    : ties++; return "Tie: Paper vs Paper";
        case "SCISSORS" : loses++; return "Lose: Paper vs Scissors";
    }
}
function scissorsAgainst(computerSelection){
    switch(computerSelection){
        case "ROCK"     : loses++; return "Lose: Scissors vs Rock";
        case "PAPER"    : wins++; return "Win: Scissors vs Paper";
        case "SCISSORS" : ties++; return "Tie: Scissors vs Scissors";
    }
}

//----------------------------------------------------------------------

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

const winsTag = document.querySelector(".wins");
const tiesTag = document.querySelector(".ties");
const losesTag = document.querySelector(".loses");

const round = document.querySelector(".round");

function showResults(r){
    console.log("Wins: " + wins);
    console.log("Ties: " + ties);
    console.log("Loses: " + loses);
    console.log(" ");

    winsTag.textContent = wins;
    tiesTag.textContent = ties;
    losesTag.textContent = loses;

    round.textContent = r;
}

rockBtn.addEventListener('click', () => {
    const r = playRound("ROCK", computerPlay());
    console.log(r);
    showResults(r);
});
paperBtn.addEventListener('click', () => {
    const r = playRound("PAPER", computerPlay());
    console.log(r);
    showResults(r);
});
scissorsBtn.addEventListener('click', () => {
    const r = playRound("SCISSORS", computerPlay());
    console.log(r);
    showResults(r);
});
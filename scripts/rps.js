// Standard Variables
let userScore = 0;
let computerScore = 0;

// DOM variables
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const reset_div = document.getElementById("reset")

const scissors_div = document.getElementById("s");
const win_lose_span = document.getElementById("w-l");


function getComputerChoice() {
  const compChoice = ['r','p','s'];
  return compChoice[Math.floor(Math.random()*3)];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  win_lose_span.innerHTML = wordConverter(userChoice) + " beats " + wordConverter(computerChoice) + ". You Win!";
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  win_lose_span.innerHTML = wordConverter(computerChoice) + " beats " + wordConverter(userChoice) + ". You Lose!";
}

function tie(userChoice, computerChoice) {
  win_lose_span.innerHTML = wordConverter(userChoice) + " is the same as " + wordConverter(computerChoice) + ". Its a Tie!";
}

function wordConverter(word) {
  if (word == "r") 
    return "Rock";

  else if (word == "p") 
    return "Paper";

  else 
    return "Scissors";
}



function resetter () {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    
    case "rr":
    case "ss":
    case "pp":
      tie(userChoice, computerChoice);
      break;
  }
}


function main(){

  reset_div.addEventListener('click', function() {
    resetter();
  })

  rock_div.addEventListener('click', function() {
    game('r');
  })
  
  paper_div.addEventListener('click', function() {
    game('p');
  })

  scissors_div.addEventListener('click', function() {
    game('s');
  })

  
}


main()
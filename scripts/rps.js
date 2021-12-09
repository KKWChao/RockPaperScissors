// Standard Variables
let userScore = 0;
let computerScore = 0;

// DOM variables
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const reset_div = document.getElementById("reset")
const win_lose_span = document.getElementById("w-l");

const userDisplay_span = document.getElementById("user-choice");
const compDisplay_span = document.getElementById("comp-choice");

let w_l_gif_img = document.getElementById("w-l-gif");


// display user and computer choices
function choiceDisplay (userChoice, computerChoice) {
  userDisplay_span.innerHTML = wordConverter(userChoice);
  compDisplay_span.innerHTML = wordConverter(computerChoice);
} 

// random number generator to get computer choice
function getComputerChoice() {
  const compChoice = ['r','p','s'];
  return compChoice[Math.floor(Math.random()*3)];
}

// rps winner
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  win_lose_span.innerHTML = `${wordConverter(userChoice)} beats ${wordConverter(computerChoice)}. You Win!`;
  choiceDisplay(userChoice, computerChoice)
  w_l_gif_img.src = "../RockPaperScissors/images/winner.gif";
}

// rps loser
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  win_lose_span.innerHTML = `${wordConverter(computerChoice)} beats ${wordConverter(userChoice)}. You Lose!`;
  choiceDisplay(userChoice, computerChoice)
  w_l_gif_img.src = "../RockPaperScissors/images/loser.gif";
}

// rps tie
function tie(userChoice, computerChoice) {
  win_lose_span.innerHTML = `${wordConverter(userChoice)} is the same as ${wordConverter(computerChoice)}. Its a Tie!`;
  choiceDisplay(userChoice, computerChoice);
  w_l_gif_img.src = "../RockPaperScissors/images/thinking.gif";
}



// convert single letter choice to word
function wordConverter(word) {
  if (word == "r") 
    return "Rock";

  else if (word == "p") 
    return "Paper";

  else 
    return "Scissors";
}

// reset score button
function resetter () {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  userDisplay_span.innerHTML = " ";
  compDisplay_span.innerHTML = " ";
  win_lose_span.innerHTML = " ";
}

// game logic
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
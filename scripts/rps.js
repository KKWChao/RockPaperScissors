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

const game_announce_p = document.getElementById('game-announce');

const userDisplay_img = document.getElementById("user-choice");
const compDisplay_img = document.getElementById("comp-choice");

const w_l_gif_img = document.getElementById("w-l-gif");


// Need to figure out way for image transition without directly changing src?

// small functions to update userChoice with image
function userRock() {
  userDisplay_img.src = "./images/rock.png";
}

function userPaper() {
  userDisplay_img.src = "./images/paper.png";
}

function userScissors() {
  userDisplay_img.src = "./images/scissors.png";
}



// random number generator to get computer choice
function getComputerChoice() {
  const compChoice = ['r','p','s'];
  let x = compChoice[Math.floor(Math.random()*3)];

  if (x==="r") {
    compDisplay_img.src = "./images/rock.png";
  } else if (x==="p") {
    compDisplay_img.src = "./images/paper.png";
  } else if (x==="s") {
    compDisplay_img.src = "./images/scissors.png";
  }
  return x
};


// rps winner
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  win_lose_span.innerHTML = `${wordConverter(userChoice)} beats ${wordConverter(computerChoice)}.<br> You Win!`;
  w_l_gif_img.src = "../RockPaperScissors/images/winner.gif";
};

// rps loser
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  win_lose_span.innerHTML = `${wordConverter(computerChoice)} beats ${wordConverter(userChoice)}.<br> You Lose!`;
  w_l_gif_img.src = "../RockPaperScissors/images/loser.gif";
};

// rps tie
function tie(userChoice, computerChoice) {
  win_lose_span.innerHTML = `${wordConverter(userChoice)} is the same as ${wordConverter(computerChoice)}.<br> Its a Tie!`;
  w_l_gif_img.src = "../RockPaperScissors/images/thinking.gif";
};



// convert single letter choice to word
function wordConverter(word) {
  if (word == "r") 
    return "Rock";

  else if (word == "p") 
    return "Paper";

  else 
    return "Scissors";
};

// reset score button
function resetter () {
  // userScore = 0;
  // computerScore = 0;
  // userScore_span.innerHTML = userScore;
  // computerScore_span.innerHTML = computerScore;
  // userDisplay_span.innerHTML = " ";
  // compDisplay_span.innerHTML = " ";
  // win_lose_span.innerHTML = " ";
  // w_l_gif_img.src = "";

  window.location.reload()
};

// score of 5 = endgame + reset
function endGame(userScore, computerScore) {
  if (userScore >= 5) {
    win_lose_span
    window.alert("\tYou Win!\n\tGame Over!");
    resetter();
  } else if (computerScore >= 5) {
    window.alert("You Lose!\nGame Over!");
    resetter();
  }
}


// game logic
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      endGame(userScore_span.innerText, computerScore_span.innerText);
      break;
    
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      endGame(userScore_span.innerText, computerScore_span.innerText)
      break;
    
    case "rr":
    case "ss":
    case "pp":
      tie(userChoice, computerChoice);
      endGame(userScore_span.innerText, computerScore_span.innerText)
      break;
  };
};

// Transitions






// Main Function
function main(){

  reset_div.addEventListener('click', () => {
    resetter();
  })

  rock_div.addEventListener('click', () => {
    game('r');
    userRock();
  })
  
  paper_div.addEventListener('click', () => {
    game('p');
    userPaper();
  })

  scissors_div.addEventListener('click', () => {
    game('s');
    userScissors();
  })
}


main();
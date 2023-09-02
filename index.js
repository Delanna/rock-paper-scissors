
// CLICKING THE ROCK PAPER OR SCISSORS BUTTON CHOOSES PLAYER MOVE, TRIGGERS COMPUTER MOVE
// AND TRIGGERS PLAY-ROUND (THIS EVALUATES WINNER AND PRINTS SCORE)

const rockBtn = document.querySelector("#rock"); //GET ROCK BUTTON
rockBtn.addEventListener("click",()=>{           //ADD CLICK EVENT LISTENER
  const playerSelection = "rock";                //CHOOSE ROCK AS PLAYER SELECTION
  const computerSelection = getCompMove();       //TRIGGER FUNCTION TO GET COMPUTER MOVE 
  playRound(computerSelection,playerSelection);  //PLAYROUND WITH THE TWO MOVES 
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click",()=>{
  const playerSelection = "paper";
  const computerSelection = getCompMove(); 
  playRound(computerSelection,playerSelection);
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click",()=>{
  const playerSelection = "scissors";
  const computerSelection = getCompMove(); 
  playRound(computerSelection,playerSelection);
});


let cPoint=0;    //Computer point    
let pPoint=0;    //Player point
// PLAYROUND FUNCTION:
// (THIS EVALUATES WINNER AND PRINTS SCORE)
function playRound(computerSelection,playerSelection){

  const roundResult = document.getElementById("roundResult");
  const score = document.getElementById("score");
  // WHAT HAPPENS IF GAME IS A TIE

  if(playerSelection === computerSelection){
    roundResult.textContent = `You tie! you both chose ${playerSelection}`
    score.textContent = `Score: Player: ${pPoint}  Computer: ${cPoint}`;
    
// WHAT HAPPENS IF YOU WIN

  }else if (playerSelection === "rock" && computerSelection === "scissors" || 
           playerSelection === "paper" && computerSelection === "rock" ||
           playerSelection === "scissors" && computerSelection === "paper"){
    pPoint = pPoint + 1;       
    roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
    score.textContent = `Score: Player: ${pPoint}  Computer: ${cPoint}`;

    // WHAT HAPPENS IF YOU LOSE

  }else if (playerSelection === "rock" && computerSelection === "paper" ||
           playerSelection === "paper" && computerSelection === "scissors" ||
           playerSelection === "scissors" && computerSelection === "rock"  ){
    cPoint = cPoint + 1;   
    roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
    score.textContent = `Score: Player: ${pPoint}  Computer: ${cPoint}`;
  }
  if (pPoint===5 || cPoint===5) {
    announceWinner(cPoint,pPoint);
  }
}


//FUNCTION THAT GETS THE COMPUTER MOVE
function getCompMove(){
  let options = ["rock", "paper", "scissors"];
  return cChoice = options[Math.floor(Math.random() * options.length)];
}

//THE FUNCTION THAT TELLS ANNOUNCES OVERALL WINNER
function announceWinner(cPoint,pPoint){

  const winner = document.getElementById ("winner");

  if (cPoint=5) {
    winner.textContent = `Computer Wins! - 
    Reload to restart the game`;
    cPoint = 0;
    pPoint = 0;
  } else if(pPoint=5){
    winner.textContent = `Player Wins! - 
    Reload to restart the game`
    cPoint = 0;
    pPoint = 0;
  }
}
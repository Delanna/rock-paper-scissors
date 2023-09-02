let cPoint = 0;
let pPoint = 0;

game();

function game(){
  for (let i = 0; i < 5; i++) {
    const computerSelection = getCompMove();
    const playerSelection = getPlayerMove(); 
    const roundResult = playRound(computerSelection,playerSelection);
    console.log (roundResult);
  }
  const winner=getWinner();
  console.log(winner);
  cPoint = 0;
  pPoint = 0;
}


function playRound(computerSelection,playerSelection){
  
  let result = "";

  if(playerSelection === computerSelection){
    result = (`You tie! you both chose ${playerSelection}
    Score: Player: ${pPoint}  Computer: ${cPoint}`);

  }else if (playerSelection === "rock" && computerSelection == "scissors" || 
           playerSelection === "paper" && computerSelection == "rock" ||
           playerSelection === "scissors" && computerSelection == "paper"){
    pPoint = pPoint + 1;       
    result = `You win! ${playerSelection} beats ${computerSelection}.
    Score: Player: ${pPoint}  Computer: ${cPoint}`;

  }else if (playerSelection === "rock" && computerSelection == "paper" ||
           playerSelection === "paper" && computerSelection == "scissors" ||
           playerSelection === "scissors" && computerSelection == "rock"  ){
    cPoint = cPoint + 1;   
    result = `You lose! ${computerSelection} beats ${playerSelection}.
    Score: Player: ${pPoint}  Computer: ${cPoint}`;
  }
  return result;
}


function getCompMove(){
  let options = ["rock", "paper", "scissors"];
  return cChoice = options[Math.floor(Math.random() * options.length)];
}


function getPlayerMove(){
  let pChoice = prompt ("Type rock, paper or scissors");
  pChoice = pChoice.toLowerCase();
  return pChoice;
}


function getWinner(){
  let result = "";

  if (pPoint === cPoint){
    result = `You Tie! ${pPoint} - ${cPoint}}`;
  } else if (pPoint > cPoint){
    result = `Player wins! ${pPoint} - ${cPoint}`;
  } else{
    result = `Computer wins! ${cPoint} - ${pPoint}`;
  }
  return result;
}
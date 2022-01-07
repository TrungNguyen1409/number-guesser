let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*10);
}

const compareGuesses = (humGuess, comGuess, target) => {
    let humInprecision = Math.abs(target - humGuess);
    let comInprecision = Math.abs(target - comGuess);
  
    if(humInprecision > comInprecision){
      return false;
    }else if(humInprecision < comInprecision){
      return true;
    }else{
      return true;
    }
  }

  function updateScore(winner){
    if(winner === 'human'){
      humanScore += 1;
    }else{
      computerScore = computerScore + 1;
    }
  }

  function advanceRound(){
    return currentRoundNumber += 1;
  }
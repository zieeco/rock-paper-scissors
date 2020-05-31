let computer = 0;
let player = 0;
const weaponButtons = document.querySelectorAll('button');
let computerSelection;
const reset = document.getElementById('reset');


function game(){
  
  weaponButtons.forEach((button) => {
    button.addEventListener('click',  );    
  })
}

function increaseScore(){
  const updateComputer = document.querySelector('#computer-score p');
  const updatePlayer = document.querySelector('#player-score p');
  updateComputer.textContent = computer;
  updatePlayer.textContent = player;
}

function computerPlay(){
  let computerChoice = Math.floor(Math.random()*3) +1;
    if (computerChoice === 1 ) {
      return computerChoice = 'rock';
    }else if ( computerChoice === 2) {
      return computerChoice = 'paper';
    } else if (computerChoice === 3) {
      return computerChoice = 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  
  const winner = document.querySelector('.instruction-text');

if ((playerSelection) === (computerSelection)) {
     winner.textContent = 'Draw!';
     return;
  }
   else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
    winner.textContent = 'Computer wins! Paper beats rock.';
    computer++;
    increaseScore();
    return;
  }
  else if ((playerSelection === 'rock') && (computerSelection === 'scisors')) {  
    winner.textContent = 'You win! Rock beats scissors.';
    player++;
    increaseScore();
    return;
  }
  else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
    winner.textContent = 'Computer wins! Scissors beats paper.';
    computer++;
    increaseScore();
    return;
  }
  else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
    winner.textContent = 'You win! Paper beats rock.';
    player++;
    increaseScore();
    return;
  }
  else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
    winner.textContent = 'Computer wins! Rock beats scissors.';
    computer++;
    increaseScore();
    return;
  }
  else if ((playerSelection === 'scissors ') && (computerSelection === 'paper')) {
    winner.textContent = 'You win! Scissors beats paper.';
    player++;
    increaseScore();
    return;
 }
 
}
console.log(game());





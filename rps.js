let computer = 0;
let player = 0;
const weaponButtons = document.querySelectorAll('button');
const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');
const updateComputer = document.querySelector('#computer-score p');
const updatePlayer = document.querySelector('#player-score p');
const reset = document.getElementById('reset');
const winner = document.querySelector('.instruction-text');

rockButton.addEventListener('click', ()=>{
  playRound('rock', computerPlay());
});

paperButton.addEventListener('click', ()=>{
  playRound('paper', computerPlay());
});

scissorsButton.addEventListener('click', ()=>{
  playRound('scissors', computerPlay());
});
  
 reset.onclick = () => {
  winner.textContent = 'choose one of this options to play!';
  const updateComputer = document.querySelector('#computer-score p');
  const updatePlayer = document.querySelector('#player-score p');
  updateComputer.textContent = 0;
  updatePlayer.textContent = 0;
  player = 0;
  computer = 0;
};

function game(){ 
  weaponButtons.forEach((button) => {
    button.addEventListener('click', playRound());    
  });
}

function increaseScore(){
  const updateComputer = document.querySelector('#computer-score p');
  const updatePlayer = document.querySelector('#player-score p');
  updateComputer.textContent = computer;
  updatePlayer.textContent = player;
}

function computerPlay(){
  let computerSelection = Math.floor(Math.random()*3) +1;
    if (computerSelection === 1 ) 
      return computerSelection = 'rock';
    else if ( computerSelection === 2) 
      return computerSelection = 'paper';
     else if (computerSelection === 3)  
      return computerSelection = 'scissors';
  }

function playRound(playerSelection, computerSelection) {
  
  const winner = document.querySelector('.instruction-text');

if ((playerSelection) === (computerSelection)) {
     winner.textContent = 'Draw!';
     return;
  }
  else if ((playerSelection === 'rock') && (computerSelection === 'scissors')){
    winner.textContent = 'You win! Rock beats scissors.';
    player++;
    increaseScore();
    return;
  }
  else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {  
    winner.textContent = 'Computer wins! Paper beats rock.';
    computer++;
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
  else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
    winner.textContent = 'You win! Scissors beats paper.';
    player++;
    increaseScore();
    return;
 }
}
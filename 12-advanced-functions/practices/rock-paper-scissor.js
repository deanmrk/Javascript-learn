let gameScore = document.querySelector('.scores');

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

const autoPlayBtn = document.querySelector('.btnAuto');
let autoPlaying = false;
let id; //set the variable outside the function to not bug
function autoPlay() {
  if (!autoPlaying) {
    id = setInterval(function() {
      const playerMove = computerMove();
      playGame(playerMove);
      updateScore()
    }, 1000);
    autoPlaying = true;
    autoPlayBtn.innerHTML = 'Stop'
    autoPlayBtn.classList.add('stop') //css
  } else {
    autoPlayBtn.innerHTML = 'Auto Play'
    autoPlayBtn.classList.remove('stop') //remove the css
    clearInterval(id);
    autoPlaying = false;
  }
}

updateScore()

function playGame(playerMove) {
  const pickComputer = computerMove();
  let result = "";

  if (playerMove === "rock") {
    if (pickComputer === "rock") {
      result = "Tie";
    } 
    else if (pickComputer === "paper") {
      result = "You lose";
    } 
    else if (pickComputer === "scissors") {
      result = "You win";
    }
  } else if (playerMove === "paper") {
    if (pickComputer === "rock") {
      result = "You win";
    } 
    else if (pickComputer === "paper") {
      result = "Tie";
    } 
    else if (pickComputer === "scissors") {
      result = "You lose";
    }
  } else if (playerMove === "scissors") {
    if (pickComputer === "rock") {
      result = "You lose";
    } 
    else if (pickComputer === "paper") {
      result = "You win";
    }
    else if (pickComputer === "scissors") {
      result = "Tie";
    }
  }

  if (result === 'You win') {
    score.wins++;
  }
  else if (result === 'You lose') {
    score.losses++
  }
  else if (result === 'Tie') {
    score.ties++
  }


  localStorage.setItem('score', JSON.stringify(score));

  updateScore()
  document.querySelector('.result').innerHTML = result; 
  document.querySelector('.moves').innerHTML = `You: <img class="movesImg" src="../../images/${playerMove}-emoji.png">
      Computer: <img class="movesImg" src="../../images/${pickComputer}-emoji.png">`;
}

function updateScore() {
    gameScore.innerHTML = `Score: Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}


function computerMove() {
  const randomNumber = Math.random();
  let pickMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    pickMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    pickMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    pickMove = "scissors";
  }
  updateScore();
  return pickMove;
}

function reset() {
    score.wins = 0
    score.losses = 0
    score.ties = 0
    localStorage.removeItem('score')
    updateScore()
    alert('Score reset!')
    //window.location.reload();
}


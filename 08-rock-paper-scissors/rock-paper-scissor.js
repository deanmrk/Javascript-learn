let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

function playGame(playerMove) {
  const pickComputer = computerMove();
  let result = "";

  if (playerMove === "Rock") {
    if (pickComputer === "rock") {
      result = "Tie";
    } 
    else if (pickComputer === "paper") {
      result = "You lose";
    } 
    else if (pickComputer === "scissors") {
      result = "You win";
    }
  } else if (playerMove === "Paper") {
    if (pickComputer === "rock") {
      result = "You win";
    } 
    else if (pickComputer === "paper") {
      result = "Tie";
    } 
    else if (pickComputer === "scissors") {
      result = "You lose";
    }
  } else if (playerMove === "Scissors") {
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
    score.wins++
  }
  else if (result === 'You lose') {
    score.losses++
  }
  else if (result === 'Tie') {
    score.ties++
  }

  localStorage.setItem('score', JSON.stringify(score))
  alert(`You picked: ${playerMove}. Computer picked: ${pickComputer}. Result: ${result}. Score: ${JSON.stringify(score)}`)
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

  return pickMove;
}

function reset() {
    score.wins = 0
    score.losses = 0
    score.ties = 0
    localStorage.removeItem('score')

    alert('Score reset!')
}
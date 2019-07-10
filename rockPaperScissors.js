const getUserChoice = userInput => {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log(`Error`);
  }
}

function getComputerChoice () {
  let number = Math.floor(Math.random()*3);
  switch (number) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice){
    return `The game was a tie.`;
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return `Computer won`;
    } else {
      return `Human won`;
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return `Computer won`;
    } else {
      return `Human won`;
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return `Computer won`;
    } else {
      return `Human won`;
    }
  }
}

function playGame () {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log('Human: ' + userChoice);
	console.log('Computer: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
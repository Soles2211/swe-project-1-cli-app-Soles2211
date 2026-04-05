//Game Functionality
const prompt = require("prompt-sync")({ sigint: true });

const computerChoice = () => {
  let computer = Math.floor(Math.random() * 3) + 1;
  if (computer === 1) {
    return 'rock';
  } else if (computer === 2) {
    return 'paper';
  } else if (computer === 3) {
    return 'scissors';
  }
}

const result = () => {
  if (computerChoice === menuChoice) {
    return "It's a tie.";
  } else if (computerChoice === 1 && menuChoice) {

  }
}

const playGame = (menuChoice) => {
  let computer = console.log(`Computer chose: ${computerChoice()} `);
  if (menuChoice === "1") {
    console.log('You chose: rock');
    computer;
    result();

  } else if (menuChoice === "2") {
    console.log('You chose: paper');
    computer;

  } else if (menuChoice === "3") {
    console.log('You chose: scissors');
    computer;

  } else {
    console.log("Invalid option, try again."); 
  }

  prompt("\nPress Enter to continue...");
  console.clear();
};

const stats = {
  "Wins": 0,
  "Losses": 0,
  "Ties": 0
}

const statsDisplay = () => {
  console.log(stats);
};

module.exports = {  playGame, statsDisplay };

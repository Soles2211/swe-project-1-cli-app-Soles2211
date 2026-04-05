//Menu Display

const prompt = require("prompt-sync")({ sigint: true });
const { playGame, statsDisplay } = require('./game.js');

const showMenu = () => {
  let isRunning = true;

  while (isRunning) {
    console.log("Menu:");
    console.log("1. Play Round");
    console.log("2. View Stats");
    console.log("3. Exit Game\n");

    const menuChoice = prompt("Choose an option (1-3): ").trim();
    if (menuChoice === "1") {
      prompt("Choose a move (rock (1), paper (2), or scissors (3)): ".trim());
      playGame(userChoice);
    } else if (menuChoice === "2") {
      statsDisplay();
    } else if (menuChoice === "3") {
      isRunning = false;
    } else {
      console.log("Invalid option, try again.");
    }

    prompt("\nPress Enter to continue...");
    console.clear();
  }
};

module.exports = { showMenu };
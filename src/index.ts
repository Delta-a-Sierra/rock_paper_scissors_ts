const choices = ["Rock", "Paper", "Scissors"];
const Prompt = require("prompt-sync")();

const getValidChoice = (choices: string[], message?: string): number => {
  const userInput = parseInt(Prompt(message || "Please Select a Number: "));
  const options = choices.map((_, i) => i);
  return isNaN(userInput) || !options.includes(userInput)
    ? getValidChoice(choices, "\nInvalid Choice Please Try Again: ")
    : userInput;
};

const getRand = (max: number) => {
  return Math.floor(Math.random() * max);
};

const menu = choices
  .map((choice, index) => `${index}) ${choice}\n`)
  .reduce((fullMenu, option) => fullMenu + option, "");

const game = () => {
  console.clear();
  console.log(menu);

  const cpuChoice = choices[getRand(choices.length)];
  const playerChoice = choices[getValidChoice(choices)];

  switch (`${playerChoice}${cpuChoice}`) {
    case "ScissorsPaper":
    case "PaperRock":
    case "RockeScissors":
      console.log("\nYou Win\n");
      break;
    case "PaperScissors":
    case "RockPaper":
    case "ScissorsRock":
      console.log("\nYou lose\n");
      break;
    default:
      console.log("\nDraw\n");
  }
  if (Prompt("continue game (y/N): ") === "y") {
    game();
  }
};
game();

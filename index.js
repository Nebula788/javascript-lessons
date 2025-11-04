const option = ["rock", "paper", "scissors"];

let playerWincount = 0;
let ComputerWincount = 0;

while (playerWincount <= 3 && ComputerWincount <= 3) {
  const player = prompt(
    `Let's play the game..
  PLayer:  rock? paper? scissors?`);
  const Computer = option[Math.floor(Math.random() * option.length)];
  console.log(player, Computer);

console.log("Player: " + player);
console.log("Computer: " + Computer);

if (player === Computer) {
  console.log("Tie");
} else if (player === "rock" && Computer === "paper") {
  console.log("Computer won!");
  ComputerWincount++;
} else if (player === "rock" && Computer === "scissors") {
  console.log("Player won!");
  playerWincount++;
} else if (player === "paper" && Computer === "rock") {
  console.log("Player won!");
  playerWincount++;
} else if (player === "paper" && Computer === "scissors") {
  console.log("Computer won!");
  ComputerWincount++;
} else if (player === "scissors" && Computer === "rock") {
  console.log("Computer won!");
  ComputerWincount++;
} else if (player1 === "scissors" && Computer === "paper") {
  console.log("Player won!");
  playerWincount++;
}
console.log("Player: " + player);
console.log("Computer: " + Computer);
}


if( playerWincount === 3){
  console.log("Player the final winner")
} else( ComputerWincount === 3){
  console.log("Computer the finel winner")
}


// const names = [
//   "Traveller",
//   "Yelan",
//   "Yoimiya",
//   "Noelle",
//   "Fischl",
//   "Jean",
//   "Raiden",
//   "Rosaria",
//   "Layla",
//   "Keqing",
// ];
// const name1 = names[Math.floor(Math.random() * names.length)];
// names.splice(names.indexOf(name1), 1);
// const name2 = names[Math.floor(Math.random() * names.length)];
// console.log(name1, name2);

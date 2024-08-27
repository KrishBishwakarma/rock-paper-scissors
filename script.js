const GetComputerChoice = () => {
  let array = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return array[randomNumber];
};
const evaluate = (userInput) => {
  let userChoice = userInput;
  document.getElementById("uc").innerText = "👨‍🦱Your choice : " + userChoice;
  let ComputerChoice = GetComputerChoice();
  console.log(ComputerChoice);
  document.getElementById("cc").innerText =
    "🤖Computer choice : " + ComputerChoice;
  let winner = "";
  if (userChoice == ComputerChoice) {
    winner = "No winner, It's  draw!";
  } else if (userChoice == "rock" && ComputerChoice == "scissors") {
    winner = "You win!";
  } else if (userChoice == "scissors" && ComputerChoice == "paper") {
    winner = "You win!";
  } else if (userChoice == "paper" && ComputerChoice == "rock") {
    winner = "You win!";
  } else {
    winner = "Computer win!";
  }
  return winner;
};

let UchoiceArray = document.querySelectorAll(".cbtn");
let urscore = 0;
let compscore = 0;
let playaudio = 1;
UchoiceArray.forEach((element) => {
  element.onclick = () => {
    let winner = evaluate(element.value);
    document.getElementById("win").innerText = "Winner : " + winner;
    if (winner == "You win!") {
      urscore++;
      if (playaudio == "1") {
        var audio = new Audio("/01. Ground Theme.mp3");
        audio.play();
        playaudio = 0;
      }
      document.getElementById("win").style.color = "green";
    } else if (winner == "Computer win!") {
      document.getElementById("win").style.color = "red";
      compscore++;
    } else {
      document.getElementById("win").style.color = "white";
    }
    document.getElementById("score").innerText = "Your score : " + urscore;
    document.getElementById("cscore").innerText =
      "Computer score : " + compscore;
  };
});

document.getElementById("reset").onclick = () => {
  let textArray = document.querySelectorAll(".info");
  textArray.forEach((text) => {
    text.innerText = "";
  });
  urscore = 0;
  compscore = 0;
};

// playing bgm

// Set the buttons variables
let rock = document.getElementById("1");
let paper = document.getElementById("2");
let scissor = document.getElementById("3");
let lizard = document.getElementById("4");
let spock = document.getElementById("5");

// Set header variables
let gamesLeft = document.querySelector(".games");
gamesLeft.textContent = 5;

let wonGames = document.querySelector(".won");
wonGames.textContent = 0;

let lostGames = document.querySelector(".lost");
lostGames.textContent = 0;

// Get some div.
let resultDiv = document.querySelector(".result");
let computerChoiceDiv = document.querySelector(".computer-choice");
let arenaDiv = document.querySelector("#arena");

// Set the images
rockImg = `<i class="fa-solid fa-hand-back-fist"></i>`;
paperImg = `<i class="fa-solid fa-toilet-paper"></i>`;
scissorImg = `<i class="fa-solid fa-scissors"></i></i>`;
lizardImg = `<i class="fa-solid fa-dragon"></i>`;
spockImg = `<i class="fa-solid fa-hand-spock"></i>`;

let choiceArrayImg = [rockImg, paperImg, scissorImg, lizardImg, spockImg];

// Set the user answers
let userChoice = "";

function userChoiceAddHTML(img) {
  let userChoiceDiv = document.querySelector(".user-choice");
  userChoiceDiv.innerHTML = "";
  computerChoiceDiv.textContent = "";
  resultDiv.textContent = "";
  userChoiceDiv.insertAdjacentHTML("beforeend", img);
}

rock.addEventListener("click", () => {
  userChoice = "rock";
  userChoiceAddHTML(rockImg);
});

paper.addEventListener("click", () => {
  userChoice = "paper";
  userChoiceAddHTML(paperImg);
});

scissor.addEventListener("click", () => {
  userChoice = "scissor";
  userChoiceAddHTML(scissorImg);
});
lizard.addEventListener("click", () => {
  userChoice = "spock";
  userChoiceAddHTML(lizardImg);
});
spock.addEventListener("click", () => {
  userChoice = "spock";
  userChoiceAddHTML(spockImg);
});

// Result matrix and the main function
resultMatrix = {
  rock: [null, 0, 1, 1, 0],
  paper: [1, null, 0, 0, 1],
  scissor: [0, 1, null, 1, 0],
  lizard: [0, 1, 0, null, 1],
  spock: [1, 0, 1, 0, null],
};

// Button to call the main function
let battleButton = document.querySelector(".battle-button");
battleButton.textContent = "Battle";
battleButton.addEventListener("click", () => rockScissorPaperLizardSpockEngine(userChoice));

function rockScissorPaperLizardSpockEngine(userChoice) {
  resultDiv.textContent = "";
  if (userChoice === "") return (resultDiv.innerHTML = "Pick something!");

  if (gamesLeft.textContent <= 1) {
    if (wonGames.textContent > lostGames.textContent) {
      resultDiv.innerHTML = "You have won the mighty battle!";
      battleButton.textContent = "New Game";
      gamesLeft.textContent = 0;
      battleButton.addEventListener("click", () => location.reload());

      return;
    } else if (wonGames.textContent < lostGames.textContent) {
      resultDiv.innerHTML = "You have lost the mighty battle!";
      battleButton.textContent = "New Game";
      gamesLeft.textContent = 0;
      battleButton.addEventListener("click", () => location.reload());
      return;
    }
  } else {
    gamesLeft.textContent--;
  }

  // Iterate from the matrix according to the random computer choice
  let array = resultMatrix[userChoice];
  let computerGuess = Math.floor(Math.random() * 5);
  let result = array[computerGuess];

  // Computer Choice Render
  computerChoiceDiv.innerHTML = "";
  computerChoiceDiv.insertAdjacentHTML("beforeend", choiceArrayImg[computerGuess]);

  // Make the impact of the result
  if (result === 1) {
    wonGames.textContent++;
    resultDiv.insertAdjacentText("beforeend", "You have won!");
  } else if (result === 0) {
    lostGames.textContent++;
    resultDiv.insertAdjacentText("beforeend", "You have lost!");
  } else {
    resultDiv.insertAdjacentText("beforeend", "It's a draw.");
  }
}

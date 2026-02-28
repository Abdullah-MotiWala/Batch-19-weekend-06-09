// Hoisting

let userName = "";
let selectedTeam = "";
let selectedCoin = "";

const nameWrapper = document.getElementById("name-wrapper");
const nameNextButton = nameWrapper.querySelector("button");
const nameInput = nameWrapper.querySelector("input");

const teamWrapper = document.getElementById("team-wrapper");
const teams = teamWrapper.getElementsByClassName("team");

const tossWrapper = document.getElementById("toss-wrapper");
const coins = tossWrapper.getElementsByClassName("coin");

function getUserName() {
  const value = nameInput.value;
  userName = value;
  nameWrapper.remove();
  teamWrapper.classList.replace("none", "flex");
}
nameNextButton.addEventListener("click", getUserName);

for (let i = 0; i < teams.length; i++) {
  const team = teams[i];
  team.addEventListener("click", selectTeam);
}

function selectTeam(event) {
  selectedTeam = event.target.innerText;
  const isConfirm = confirm(`Are you sure, You want to select ${selectedTeam}`);
  if (isConfirm) proceedToNextPageThenSelecTeam();
}

function proceedToNextPageThenSelecTeam() {
  teamWrapper.remove();
  tossWrapper.classList.replace("none", "flex");
}

for (let i = 0; i < coins.length; i++) {
  const coin = coins[i];
  coin.addEventListener("click", selectCoin);
}

function selectCoin(event) {
  selectedCoin = event.target.innerText;
  const isConfirm = confirm(`Are you sure, You want to select ${selectedCoin}`);
  if (isConfirm) proceedToNextPageThenSelectCoin();
}

function proceedToNextPageThenSelectCoin() {


  
  tossWrapper.remove();
  // tossWrapper.classList.replace("none", "flex");
}

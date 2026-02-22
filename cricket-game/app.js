let userName = "";

const nameWrapper = document.getElementById("name-wrapper");
const nameInput = nameWrapper.querySelector("input");
const nameNextButton = nameWrapper.querySelector("button");

function getUserName() {
  const value = nameInput.value;
  console.log("===run");
  userName = value;
  console.log(userName);
}

nameNextButton.addEventListener("click", getUserName);

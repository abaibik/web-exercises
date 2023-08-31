const card = document.querySelector("#cardId");
const bookmarkButton = card.querySelector("#bookmarkButton");
const icon = card.querySelector("#bookmarkIcon");
const answerButton = card.querySelector("#answerButton");

bookmarkButton.addEventListener("click", () => {
  //const fillIcon = '"FILL" 1, "wght" 700, "GRAD" 200, "opsz" 48;';
  if (icon.style.fontVariationSettings === '"FILL" 0') {
    icon.style.fontVariationSettings = '"FILL" 1';
  } else {
    icon.style.fontVariationSettings = '"FILL" 0';
  }
});

function changeButtonName() {
  let buttonName = answerButton.textContent;
  console.log(buttonName);

  if (buttonName === "Show Answer") {
    answerButton.textContent = "Show Question";
  } else {
    answerButton.textContent = "Show Answer";
  }
}

answerButton.addEventListener("click", changeButtonName);

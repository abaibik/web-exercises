const card = document.querySelector("#cardId");
const bookmarkButton = card.querySelector("#bookmarkButton");
const icon = card.querySelector("#bookmarkIcon");
const answerButton = card.querySelector("#answerButton");
const questionElement = card.querySelector("#question");
const answerElement = card.querySelector("#answer");

bookmarkButton.addEventListener("click", () => {
  //const fillIcon = '"FILL" 1, "wght" 700, "GRAD" 200, "opsz" 48;';
  if (icon.style.fontVariationSettings === '"FILL" 0') {
    icon.style.fontVariationSettings = '"FILL" 1';
  } else {
    icon.style.fontVariationSettings = '"FILL" 0';
  }
});

function changeButtonName() {
  if (answerButton.textContent === "Show Answer") {
    answerButton.textContent = "Show Question";
  } else {
    answerButton.textContent = "Show Answer";
  }
}

function showContent() {
  questionElement.textContent = quizData[1].question;
  answerElement.textContent = quizData[1].answer;
}

function toggleContent() {
  answerElement.classList.toggle("hidden");
  questionElement.classList.toggle("hidden");
}

showContent();

answerButton.addEventListener("click", () => {
  changeButtonName();
  toggleContent();
});

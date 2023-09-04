const card = document.querySelector("#cardId");
const bookmarkButton = card.querySelector("#bookmarkButton");
const icon = card.querySelector("#bookmarkIcon");
const answerButton = card.querySelector("#answerButton");
const questionElement = card.querySelector("#question");
const answerElement = card.querySelector("#answer");
const body = document.querySelector("body");
const nextButton = card.querySelector("#nextButton");

let bookmarked = false;

bookmarkButton.addEventListener("click", () => {
  if (bookmarked) {
    icon.style.fontVariationSettings = '"FILL" 0';
    bookmarked = false;
  } else {
    icon.style.fontVariationSettings = '"FILL" 1';
    bookmarked = true;
  }
});

function changeButtonName() {
  if (answerButton.textContent === "Show Answer") {
    answerButton.textContent = "Show Question";
  } else {
    answerButton.textContent = "Show Answer";
  }
}

function showContent(i) {
  questionElement.textContent = quizData[i].question;
  answerElement.textContent = quizData[i].answer;
}

let index = 0;

nextButton.addEventListener("click", () => {
  questionElement.classList.remove("hidden");
  answerElement.classList.add("hidden");
  index++;
  if (index === quizData.length) {
    index = 0;
  }
  showContent(index);
});

showContent(0);

function toggleContent() {
  answerElement.classList.toggle("hidden");
  questionElement.classList.toggle("hidden");
}

answerButton.addEventListener("click", () => {
  changeButtonName();
  toggleContent();
});

let i = 1;
const imageCount = 5;
let slideTime = 5000; // 3 seconds

function changePicture() {
  body.classList.remove(`background-${i}`);
  if (i < imageCount) {
    i++;
  } else {
    i = 1;
  }
  body.classList.add(`background-${i}`);
  setTimeout(changePicture, slideTime);
}

window.onload = changePicture;

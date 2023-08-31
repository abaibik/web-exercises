const form = document.querySelector("#form");
const formContainer = document.querySelector("#formContainer");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  const data = {
    question: formElements.question.value,
    answer: formElements.answer.value,
    tag: formElements.tag.value,
  };

  const newCard = document.createElement("article");
  newCard.classList.add("card");
  formContainer.append(newCard);

  newCard.innerHTML = `
        <a id="bookmarkButton" class="bookmark-button"
            ><span id="bookmarkIcon" class="material-symbols-outlined icon">
            bookmark
            </span>
        </a>
        <div>
            <p id="question">${data.question}</p>
            <p id="answer" class="hidden">${data.answer}</p>
        </div>

        <a id="answerButton" class="answer-button" role="button">Show Answer</a>

        <div class="tags">
            <a class="tag">${data.tag}</a>
        </div>`;
});

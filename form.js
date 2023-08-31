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
  newCard.classList.add("small-card");
  formContainer.append(newCard);

  newCard.innerHTML = `
        <a id="bookmarkButton" class="bookmark-button small-card-bookmark"
            ><span id="bookmarkIcon" class="material-symbols-outlined icon">
            bookmark
            </span>
        </a>
        <div>
            <p id="question">Question: ${data.question}</p>
            <p id="answer" >Answer: ${data.answer}</p>
        </div>
        <div class="tags">
            <a class="tag">#${data.tag}</a>
        </div>`;

  document.body.classList.add("body-fresh");
  formContainer.classList.add("container-fresh");
});

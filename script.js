let destination = document.querySelectorAll(".card");
let counter = document.querySelector(".counter");

function countVisibleCards() {
  let count = 0;

  for (let i = 0; i < destination.length; i++) {
    if (!destination[i].closest(".container").classList.contains('d-none')) {
      count++;
    }
  }

  counter.innerHTML = `All destinations: ${count}`;
}

countVisibleCards();


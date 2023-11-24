//Esercizio EXTRA 2
let destination = document.querySelectorAll(".card");
let counter = document.querySelector(".counter");

function countVisibleCards() {
  let count = 0;

  for (let i = 0; i < destination.length; i++) {
    if (destination) {
      count++;
    }
    if(window.matchMedia("(max-width: 425px)").matches && destination[i].closest(".container").classList.contains('d-none')){
        count--
    }
  }

  counter.innerHTML = `All destinations: ${count}`;
}

countVisibleCards();


window.addEventListener('resize', countVisibleCards);
    
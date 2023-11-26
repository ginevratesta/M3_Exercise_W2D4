const weeklyOffers = [
  {
    title: "Mount Washington",
    description:
      "Mount Washington in British Columbia, USA. The mountain has ski resorts, while it also attracts hikers and climbers who want to get closer to nature and take in the stunning views.",
    image: "./assets/mt-w.jpeg",
    cost: "Cost: 700$",
    bewareOf: "Beware of: hypothermia",
  },
  {
    title: "Cliffs of Moher",
    description:
      "Cliffs of Moher, Ireland’s natural beauty, rich history, and warm welcome help make the country a popular tourist destination. The sights are spectacular, with views of the coastline.",
    image: "./assets/moher.jpeg",
    cost: "Cost: 750$",
    bewareOf: "Beware of: falling off",
  },
  {
    title: "New Smyrna Beach",
    description:
      "New Smyrna Beach, Florida. Florida’s New Smyrna Beach is a surfer’s paradise. The perfect waves attract surfers from all over the world, helped by Florida’s warm climate.",
    image: "./assets/new-smyrna.jpeg",
    cost: "Cost: 650$",
    bewareOf: "Beware of: shark attack",
  },
  {
    title: "Hawaii National Park",
    description:
      "Hawaii National Park, Hawaii is also known for its active volcano activity. The small group of islands sits directly over a fault line, making it one of the most active volcanic regions.",
    image: "./assets/hawaii.jpeg",
    cost: "Cost: 800$",
    bewareOf: "Beware of: poisonous gases",
  },
];
const summer = [
  {
    title: "Bikini Atoll",
    description:
      "Bikini Atoll, one of the most stunningly beautiful locations on the planet. Pristine beaches and clear blue waters appear irresistible and would otherwise attract visitors in their droves to get a taste of paradise.",
    image: "./assets/bikini-island.webp",
    cost: "Cost: 700$",
    bewareOf: "Beware of: high radiation levels",
  },
  {
    title: "Snake Island",
    description:
      "Snake Island, Brazil. If you were to step foot on snake island, just off the coast of Brazil, you would be in one of the world’s most dangerous locations. The island is home to thousands of golden lancehead vipers.",
    image: "./assets/snake-island.webp",
    cost: "Cost: 750$",
    bewareOf: "Beware of: venomous creatures",
  },
  {
    title: "Fraser Island",
    description:
      "Fraser Island, Australia. Wild Dingo canines that are hostile and poisonous spiders live on the island. Not only that, but the seas close to the island are home to deadly marine species, such as sharks and poisonous jellyfish.",
    image: "./assets/fraser-island.jpeg",
    cost: "Cost: 650$",
    bewareOf: "Beware of: venomous creatures",
  },
  {
    title: "Death Valley",
    description:
      "Death Valley, California. Death Valley is the hottest place on the planet; temperatures at Furnace Creek. The extreme temperatures have taken the lives of many people who’ve been careless enough to stray away from the roads.",
    image: "./assets/death-valley.jpeg",
    cost: "Cost: 800$",
    bewareOf: "Beware of: car accidents",
  },
  {
    title: "Acapulco",
    description:
      "Acapulco, Mexico. Acapulco, Mexico, is a city that attracts sun-seekers in their droves, mostly from elsewhere. Visitors to this famous beach resort get to make the most of stunning beaches with clear blue waters.",
    image: "./assets/acapulco-1.jpeg",
    cost: "Cost: 760$",
    bewareOf: "Beware of: criminal activity",
  },
  {
    title: "Kingston",
    description:
      "Kingston, a tropical paradise and home to the legendary Bob Marley. The country is also steeped in history, having been under Spanish and British colonial rule, and is the birthplace of the Rastafarian religion.",
    image: "./assets/kingston.webp",
    cost: "Cost: 780$",
    bewareOf: "Beware of: criminal activity",
  },
];
const lastMinute = [
  {
    title: "Mount Sinabung, Indonesia",
    image: "./assets/sinanbung.jpeg",
  },
  {
    title: "Lake Natron, Tanzania",
    image: "./assets/lake-natron.jpeg",
  },
  {
    title: "Guatemala, Central America",
    image: "./assets/guatemala.jpeg",
  },
  {
    title: "Mailu Suu, Kyrgyzstan",
    image: "./assets/mailu-suu.jpeg",
  },
];
const carousel = [
  {
    name: "Mark Williams",
    visited: "Fraser Island, Australia",
    review:
      "Took off in two but came back in one. Was planning on getting divorced, best experience of my life. Thank you Treepo!",
    image: "./assets/user.jpg",
  },
  {
    name: "Susie Peterson",
    visited: "Hawaii National Park, Hawaii",
    review:
      "Now missing a leg but it was worth it. I've been able to see extremely beautiful creatures from a very close distance. Would do it again!",
    image: "./assets/user-2.jpeg",
  },
  {
    name: "Jack O'donnell",
    visited: "Death Valley, California",
    review:
      "I weighed 250lb before taking off. Was planning on getting on a diet since forever and then got lost while travelling. 10/10 would recommend!",
    image: "./assets/user-3.webp",
  },
  {
    name: "Caroline Campbell",
    visited: "Cliffs of Moher, Ireland",
    review:
      "Best trip of my life. My mother in law insisted on coming with us and then fell off a cliff. Thank you Treepo!",
    image: "./assets/user-4.jpeg",
  },
];

const weekly = document.querySelector("#first-row");

for (let i = 0; i < weeklyOffers.length; i++) {
  weekly.innerHTML += `<div class="col-6 col-sm-6 col-md-4 col-lg-3">
  <div class="card h-100 card-counter">
    <img
      src="${weeklyOffers[i].image}"
      class="card-img-top"
      alt="Destination pic"
    />
    <div class="card-body">
      <p class="card-text">
        <strong>${weeklyOffers[i].title}</strong> ${weeklyOffers[i].description}
      </p>
      <p class="card-text">${weeklyOffers[i].cost}</p>
      <p class="card-text"><strong>${weeklyOffers[i].bewareOf}</strong></p>
    </div>
  </div>
</div>`;
}

const summerOffers = document.querySelector("#summerOffers");

for (let i = 0; i < summer.length; i++) {
  summerOffers.innerHTML += `
<div class="col-6 col-sm-6 col-md-4 col-lg-2 shadow-lg p-3 bg-body-tertiary">
<div class="card h-100 card-counter">
  <img
    src="${summer[i].image}"
    class="card-img-top"
    alt="Destination pic"
  />
  <div class="card-body">
    <p class="card-text">
      <strong>${summer[i].title}</strong> ${summer[i].description}
    </p>
    <p class="card-text">${summer[i].cost}</p>
    <p class="card-text">
      <strong>${summer[i].bewareOf}</strong>
    </p>
  </div>
</div>
</div>`;
}

const lastMin = document.querySelector("#lastMin");

for (let i = 0; i < lastMinute.length; i++) {
  lastMin.innerHTML += `<div class="col-6 col-sm-6 col-md-4 col-lg-3">
  <div class="card h-100 card-counter">
    <div class="card-body">
      <p class="card-text text-center">
        <strong>${lastMinute[i].title}</strong>
      </p>
    </div>
    <img
      src=".${lastMinute[i].image}"
      class="card-img-top"
      alt="Destination pic"
    />
  </div>
</div>`;
}

const carouselContainer = document.querySelector(".carousel-inner");
let carouselItems = "";

for (let i = 0; i < carousel.length; i++) {
  const testimonial = carousel[i];
  const activeClass = i === 0 ? "active" : "";

  carouselItems += `
    <div class="carousel-item ${activeClass}">
      <div class="container">
        <div class="row align-items-center ps-4">
          <div class="col-md-6 ps-5">
            <h2 class="text-warning">${testimonial.name}</h2>
            <p class="fs-5">
              <strong>Visited: ${testimonial.visited}</strong><br />
              ${testimonial.review}
            </p>
          </div>
          <div class="col-md-6 text-center">
            <img
              src="${testimonial.image}"
              class="rounded-circle img-fluid"
              alt="user Pic"
            />
          </div>
        </div>
      </div>
    </div>
  `;
}

carouselContainer.innerHTML = carouselItems;

//Esercizio EXTRA 2
const destination = document.querySelectorAll(".card-counter");
const counter = document.querySelector(".counter");

function countVisibleCards() {
  let count = 0;

  for (let i = 0; i < destination.length; i++) {
    if (destination) {
      count++;
    }
    if (
      window.matchMedia("(max-width: 425px)").matches &&
      destination[i].closest(".container").classList.contains("d-none")
    ) {
      count--;
    }
  }

  counter.innerHTML = `All destinations: ${count}`;
}

countVisibleCards();

window.addEventListener("resize", countVisibleCards);

//Esercizio EXTRA 5
const moreOp = document.querySelector("#better");
const clickMe = document.querySelector("#clickMe");



function betterOp() {
  moreOp.innerHTML = `<div class="container p-5">
  <div class="row">
  <div class="col-12 text-center">
  <div class="d-flex justify-content-center">
  <img class="py-4" src="./assets/sad-cat.png" alt="pic" style="width:30%; height:30%;"/>
  </div>
  <p class="text-white p-2">There's no better options than these</p>
  <p class="text-white fs-3">Go Cry About It</p>
  <button onclick="setGoBack()" id="clickMe" class="btn btn-warning text-white">Go back</button>
  </div>
  </div>
  </div>`;
}
clickMe.addEventListener("click", betterOp);

function setGoBack() {
  window.location.reload(); 
}



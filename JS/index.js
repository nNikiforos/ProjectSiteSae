"use strict";

// BACKGROUND IMAGE
const background = document.getElementById("mainimg");
window.addEventListener("scroll", function () {
  background.style.backgroundSize = 140 - +window.pageYOffset / 50 + "%";
});

//UP COMING EVENTS
let i = 1;
let eventimgs = [
  "/img/events/arkadi/arkadi4.jpg",
  "/img/events/carnival/carnival3.jpg",
  "/img/events/miriokefala/miriokefala2.jpg",
  "/img/events/treasure/treasure4.jpg",
];

function changeImg() {
  document.myevents.src = eventimgs[i];
  if (i < eventimgs.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
setInterval(changeImg, 5000);

// SWIPER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const grid = document.querySelector(".grid");
const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
  const colStart = Math.floor(Math.random() * 11) + 1;
  const colEnd = Math.floor(Math.random() * 11) + 1;
  const rowStart = Math.floor(Math.random() * 11) + 1;
  const rowEnd = Math.floor(Math.random() * 11) + 1;

  item.style.gridColumnStart = colStart;
  item.style.gridColumnEnd = `span ${colEnd - colStart + 1}`;
  item.style.gridRowStart = rowStart;
  item.style.gridRowEnd = `span ${rowEnd - rowStart + 1}`;
});

// json top location content 'use strict';

// Make a new XMLHttpRequest object
const req = new XMLHttpRequest();

// Set the request parameters
req.open("GET", "../DataJson/index.json");
req.responseType = "json";

// Add the event listener for state changes
req.addEventListener("readystatechange", () => {
  // When the request is done...
  if (req.readyState === XMLHttpRequest.DONE) {
    // XMLHttpRequest.DONE === 4
    // Check the response status and act accordingly
    switch (req.status) {
      case 200:
        const swiperSlides = document.querySelectorAll(".swiper-slide");
        // Remove existing slides, if any

        // Show the slide data (from json) in a list
        for (let i = 0; i < swiperSlides.length; i++) {
          const content = req.response[i];
          const h2 = document.createElement("h2");
          const p = document.createElement("p");
          p.textContent = `${content.text}`;
          p.classList.add("info");
          h2.textContent = `${content.title}`;
          h2.classList.add("location");

          swiperSlides[i].appendChild(h2);
          swiperSlides[i].appendChild(p);
        }
        break;
      case 404:
        console.error("Not found");
        break;
    }
  }
});

req.send();

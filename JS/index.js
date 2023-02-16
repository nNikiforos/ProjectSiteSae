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
  console.log(i);
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

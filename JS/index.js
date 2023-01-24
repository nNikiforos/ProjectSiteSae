"use strict";

// BACKGROUND IMAGE
const background = document.getElementById("mainimg");
window.addEventListener("scroll", function () {
  background.style.backgroundSize = 140 - +window.pageYOffset / 50 + "%";
});

//UP COMING EVENTS
let i = 1;
let eventimgs = [
  "/img/events/nature/land.jpg",
  "/img/events/nature/sea.jpg",
  "/img/events/nature/mountain.jpg",
  "/img/events/nature/tree.jpg",
  "/img/events/nature/waterfall.jpg",
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

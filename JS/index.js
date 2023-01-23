// BACKGROUND IMAGE
const background = document.getElementById("mainimg");
window.addEventListener("scroll", function () {
  background.style.backgroundSize = 140 - +window.pageYOffset / 50 + "%";
});
//UP COMING EVENTS
let i = 0;
let eventimgs = [
  "/img/events/land.jpg",
  "/img/events/sea.jpg",
  "/img/events/mountain.jpg",
  "/img/events/tesla.jpg",
];
let time = 2000;

function changeImg() {
  document.myevents.src = eventimgs[i];

  if (i < eventimgs.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

addEventListener = setInterval(changeImg, time);

// 3BOXES LINK

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

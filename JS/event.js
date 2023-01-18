var gallery = document.querySelector(".eventgallery1 img");
var images = [
  "../img/events/land.jpg",
  "../img/events/sea.jpg",
  "../img/events/mountain.jpg",
  "../img/events/tesla.jpg",
];
var num = 0;

function next() {
  num++;
  if (num >= images.length) {
    num = 0;
    gallery.src = images[num];
  } else {
    gallery.src = images[num];
  }
}
function prev() {
  num--;
  if (num < 0) {
    num = images.length - 1;
    gallery.src = images[num];
  } else {
    gallery.src = images[num];
  }
}
//   PLAY STOP BUTTON

function playStopGallery() {
    
}

"use strict";
// EVENT NUMBER 1 <-------
var gallery1 = document.getElementById("event1");
var event1img = [
  "../img/events/nature/land.jpg",
  "../img/events/nature/sea.jpg",
  "../img/events/nature/mountain.jpg",
  "../img/events/nature/tree.jpg",
  "../img/events/nature/waterfall.jpg",
];
var num = 0;
function currentImage(index) {
  gallery1.src = event1img[index];
  num = index;
  updateDot();
}

function updateDot() {
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < dots.length; i++) {
    if (i == num) dots[i].classList.add("active");
    else dots[i].classList.remove("active");
  }
}
function next1() {
  num++;
  if (num >= event1img.length) {
    num = 0;
    gallery1.src = event1img[num];
    updateDot();
  } else {
    gallery1.src = event1img[num];
    updateDot();
  }
}

function prev1() {
  num--;
  if (num < 0) {
    num = event1img.length - 1;
    gallery1.src = event1img[num];
    updateDot();
  } else {
    gallery1.src = event1img[num];
    updateDot();
  }
}

//   PLAY STOP BUTTON EVENT 1
var playStopButton = document.querySelector("#playStop1");
var playStopButtonText = playStopButton.innerHTML;
var playStopInterval;

function playStop1() {
  if (playStopButtonText === "&#x25B7;") {
    playStopButtonText = "&#9723;";
    playStopButton.innerHTML = playStopButtonText;
    playStopInterval = setInterval(nextImage, 3000);
  } else {
    playStopButtonText = "&#x25B7;";
    playStopButton.innerHTML = playStopButtonText;
    clearInterval(playStopInterval);
    gallery1.src = event1img[0];
  }
}

function nextImage() {
  num++;
  if (num >= event1img.length) {
    num = 0;
  }
  gallery1.src = event1img[num];
  updateDot();
}

// EVENT NUMBER 2 <-------
var gallery2 = document.getElementById("event2");
var event2img = [
  "../img/events/tesla/tesla.jpg",
  "../img/events/tesla/model1.jpg",
  "../img/events/tesla/model2.jpg",
  "../img/events/tesla/model3.jpg",
  "../img/events/tesla/model4.jpg",
];
function currentImage(index) {
  gallery2.src = event2img[index];
  num = index;
  updateDot();
}

function updateDot2() {
  var dots = document.getElementsByClassName("dot2");
  for (var i = 0; i < dots.length; i++) {
    if (i == num) dots[i].classList.add("active");
    else dots[i].classList.remove("active");
  }
}

function next2() {
  num++;
  if (num >= event2img.length) {
    num = 0;
    gallery2.src = event2img[num];
    updateDot2();
  } else {
    gallery2.src = event2img[num];
    updateDot2();
  }
}
function prev2() {
  num--;
  if (num < 0) {
    num = event2img.length - 1;
    gallery2.src = event2img[num];
    updateDot2();
  } else {
    gallery2.src = event2img[num];
    updateDot2();
  }
}

//   PLAY STOP BUTTON EVENT 2
var playStopButton2 = document.querySelector("#playStop2");
var playStopButton2Text = playStopButton2.innerHTML;
function playStop2() {
  if (playStopButton2Text === "&#9655;") {
    playStopButton2Text = "&#9723;";
    playStopButton2.innerHTML = playStopButton2Text;
    playStopInterval = setInterval(nextImage2, 3000);
  } else {
    playStopButton2Text = "&#9655;";
    playStopButton2.innerHTML = playStopButton2Text;
    clearInterval(playStopInterval);
    gallery2.src = event2img[0];
  }
}

function nextImage2() {
  num++;
  if (num >= event2img.length) {
    num = 0;
  }
  gallery2.src = event2img[num];
  updateDot2();
}

// EVENT NUMBER 3 <-------
var gallery3 = document.getElementById("event3");
var event3img = [
  "../img/events/sea/sea1.jpg",
  "../img/events/sea/sea2.jpg",
  "../img/events/sea/sea3.jpg",
  "../img/events/sea/sea4.jpg",
  "../img/events/sea/sea5.jpg",
];

function currentImage(index) {
  gallery3.src = event3img[index];
  num = index;
  updateDot3();
}

function updateDot3() {
  var dots = document.getElementsByClassName("dot3");
  for (var i = 0; i < dots.length; i++) {
    if (i == num) dots[i].classList.add("active");
    else dots[i].classList.remove("active");
  }
}

function next3() {
  num++;
  if (num >= event3img.length) {
    num = 0;
    gallery3.src = event3img[num];
    updateDot3();
  } else {
    gallery3.src = event3img[num];
    updateDot3();
  }
}
function prev3() {
  num--;
  if (num < 0) {
    num = event3img.length - 1;
    gallery3.src = event3img[num];
    updateDot3();
  } else {
    gallery3.src = event3img[num];
    updateDot3();
  }
}

//   PLAY STOP BUTTON EVENT 3
var playStopButton3 = document.querySelector("#playStop3");
var playStopButton3Text = playStopButton3.innerHTML;
function playStop3() {
  if (playStopButton3Text === "&#9655;") {
    playStopButton3Text = "&#9723;";
    playStopButton3.innerHTML = playStopButton3Text;
    playStopInterval = setInterval(nextImage3, 3000);
  } else {
    playStopButton3Text = "&#9655;";
    playStopButton3.innerHTML = playStopButton3Text;
    clearInterval(playStopInterval);
    gallery3.src = event3img[0];
  }
}

function nextImage3() {
  num++;
  if (num >= event3img.length) {
    num = 0;
  }
  gallery3.src = event3img[num];
  updateDot3();
}

// EVENT NUMBER 4 <-------
var gallery4 = document.getElementById("event4");
var event4img = [
  "../img/events/reth/reth1.jpg",
  "../img/events/reth/reth2.jpg",
  "../img/events/reth/reth3.jpg",
  "../img/events/reth/reth4.jpg",
  "../img/events/reth/reth5.jpg",
];
function currentImage(index) {
  gallery3.src = event3img[index];
  num = index;
  updateDot4();
}

function updateDot4() {
  var dots = document.getElementsByClassName("dot4");
  for (var i = 0; i < dots.length; i++) {
    if (i == num) dots[i].classList.add("active");
    else dots[i].classList.remove("active");
  }
}

function next4() {
  num++;
  if (num >= event4img.length) {
    num = 0;
    gallery4.src = event4img[num];
    updateDot4();
  } else {
    gallery4.src = event4img[num];
    updateDot4();
  }
}
function prev4() {
  num--;
  if (num < 0) {
    num = event4img.length - 1;
    gallery4.src = event4img[num];
    updateDot4();
  } else {
    gallery4.src = event4img[num];
    updateDot4();
  }
}

//   PLAY STOP BUTTON EVENT 4
var playStopButton4 = document.querySelector("#playStop4");
var playStopButton4Text = playStopButton4.innerHTML;
function playStop4() {
  if (playStopButton4Text === "&#9655;") {
    playStopButton4Text = "&#9723;";
    playStopButton4.innerHTML = playStopButton4Text;
    playStopInterval = setInterval(nextImage4, 3000);
  } else {
    playStopButton4Text = "&#9655;";
    playStopButton4.innerHTML = playStopButton4Text;
    clearInterval(playStopInterval);
    gallery4.src = event4img[0];
  }
}

function nextImage4() {
  num++;
  if (num >= event4img.length) {
    num = 0;
  }
  gallery4.src = event4img[num];
  updateDot4();
}

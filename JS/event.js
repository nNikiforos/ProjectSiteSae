"use strict";

const galleryImages = {
  event1: [
    "../img/events/nature/land.jpg",
    "../img/events/nature/sea.jpg",
    "../img/events/nature/mountain.jpg",
    "../img/events/nature/tree.jpg",
    "../img/events/nature/waterfall.jpg",
  ],
  event2: [
    "../img/events/tesla/tesla.jpg",
    "../img/events/tesla/model1.jpg",
    "../img/events/tesla/model2.jpg",
    "../img/events/tesla/model3.jpg",
    "../img/events/tesla/model4.jpg",
  ],
  event3: [
    "../img/events/sea/sea1.jpg",
    "../img/events/sea/sea2.jpg",
    "../img/events/sea/sea3.jpg",
    "../img/events/sea/sea4.jpg",
    "../img/events/sea/sea5.jpg",
  ],
  event4: [
    "../img/events/reth/reth1.jpg",
    "../img/events/reth/reth2.jpg",
    "../img/events/reth/reth3.jpg",
    "../img/events/reth/reth4.jpg",
    "../img/events/reth/reth5.jpg",
  ],
};

const galleryDots = {
  event1: "dot1",
  event2: "dot2",
  event3: "dot3",
  event4: "dot4",
};

let num = 0;

function currentImage(index, eventName) {
  const gallery = document.getElementById(eventName);

  gallery.src = galleryImages[eventName][index];

  num = index;
  updateDot(galleryDots[eventName]);
}

// THUMBNAIL IMAGES DOTS
function updateDot(dotName) {
  var dots = document.getElementsByClassName(dotName);

  for (var i = 0; i < dots.length; i++) {
    if (i == num) dots[i].classList.add("active");
    else dots[i].classList.remove("active");
  }
}

// PREVIUS IMAGE BUTTON
function prev(eventName) {
  const gallery = document.getElementById(eventName);
  const galleryImageEvent = galleryImages[eventName];
  num--;
  if (num < 0) {
    num = galleryImageEvent.length - 1;
    gallery.src = galleryImageEvent[num];
  } else {
    gallery.src = galleryImageEvent[num];
  }
  updateDot(galleryDots[eventName]);
}

// NEXT IMAGE BUTTON
function next(eventName) {
  const gallery = document.getElementById(eventName);
  const galleryImageEvent = galleryImages[eventName];
  num++;

  if (num >= galleryImageEvent.length) {
    num = 0;
    gallery.src = galleryImageEvent[num];
  } else {
    gallery.src = galleryImageEvent[num];
  }
  updateDot(galleryDots[eventName]);
}

// PLAY STOP BUTTON
let playStopInterval;
function playStop(eventName) {
  const playStopButton = document.getElementById(eventName + "_playStop");

  if (playStopButton.innerText === "Play") {
    playStopButton.innerText = "Stop";
    playStopInterval = setInterval(() => nextImage(eventName), 2000);
  } else {
    playStopButton.innerText = "Play";
    clearInterval(playStopInterval);
  }
}

function nextImage(eventName) {
  const gallery = document.getElementById(eventName);
  const imageList = galleryImages[eventName];
  num++;

  if (num >= imageList.length) {
    num = 0;
  }
  gallery.src = imageList[num];

  updateDot(galleryDots[eventName]);
}

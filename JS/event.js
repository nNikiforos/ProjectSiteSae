"use strict";

const galleryImages = {
  event1: [
    "../img/events/miriokefala/miriokefala.jpg",
    "../img/events/miriokefala/miriokefala2.jpg",
    "../img/events/miriokefala/miriokefala3.jpeg",
    "../img/events/miriokefala/miriokefala4.jpeg",
    "../img/events/miriokefala/miriokefala5.jpg",
  ],
  event2: [
    "../img/events/carnival/carnival1.jpg",
    "../img/events/carnival/carnival2.jpg",
    "../img/events/carnival/carnival3.jpg",
    "../img/events/carnival/carnival4.jpg",
    "../img/events/carnival/carnival5.jpg",
  ],
  event3: [
    "../img/events/arkadi/arkadi1.jpg",
    "../img/events/arkadi/arkadi2.jpg",
    "../img/events/arkadi/arkadi3.jpg",
    "../img/events/arkadi/arkadi4.jpg",
    "../img/events/arkadi/arkadi5.jpg",
  ],
  event4: [
    "../img/events/treasure/treasure1.jpg",
    "../img/events/treasure/treasure2.jpg",
    "../img/events/treasure/treasure3.jpg",
    "../img/events/treasure/treasure4.jpg",
    "../img/events/treasure/treasure5.jpg",
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
let mainTimeSeconds = 1000;

function playStop(eventName) {
  const playStopButton = document.getElementById(eventName + "_playStop");

  if (playStopButton.innerText === "Play") {
    playStopButton.innerText = "Stop";
    playStopInterval = setInterval(() => nextImage(eventName), mainTimeSeconds);
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

// X2 X4 AND SCREEN
const timers = document.querySelectorAll(".timer");

timers.forEach((container) => {
  const multi2 = container.querySelector("#multi2");
  const multi4 = container.querySelector("#multi4");

  multi2.addEventListener("click", function () {
    multi2.classList.toggle("clicked");
    if (multi2.classList.contains("clicked")) {
      mainTimeSeconds = 2000;
      multi4.classList.remove("clicked");
    } else {
      mainTimeSeconds = 1000;
    }
  });

  multi4.addEventListener("click", function () {
    multi4.classList.toggle("clicked");
    if (multi4.classList.contains("clicked")) {
      mainTimeSeconds = 4000;
      multi2.classList.remove("clicked");
    } else {
      mainTimeSeconds = 1000;
    }
  });
});

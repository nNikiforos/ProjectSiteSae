//  event 1
var gallery1 = document.getElementById("event1");
var event1img = [
  "../img/events/land.jpg",
  "../img/events/sea.jpg",
  "../img/events/mountain.jpg",
  "../img/events/tesla.jpg",
];
var num = 0;
var dots = document.getElementsByClassName("dot");
function next1() {
  num++;
  if (num >= event1img.length) {
    num = 0;
    gallery1.src = event1img[num];
  } else {
    gallery1.src = event1img[num];
  }
}

function prev1() {
  num--;
  if (num < 0) {
    num = event1img.length - 1;
    gallery1.src = event1img[num];
  } else {
    gallery1.src = event1img[num];
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
    playStopInterval = setInterval(nextSlide, 3000);
  } else {
    playStopButtonText = "&#x25B7;";
    playStopButton.innerHTML = playStopButtonText;
    clearInterval(playStopInterval);
    gallery1.src = event1img[0];
  }
}

function nextSlide() {
  num++;
  if (num >= event1img.length) {
    num = 0;
  }
  gallery1.src = event1img[num];
}

// event2
var gallery2 = document.getElementById("event2");
var event2img = [
  "../img/events/model1.jpg",
  "../img/events/model2.jpg",
  "../img/events/model3.jpg",
  "../img/events/model4.jpg",
];

function next2() {
  num++;
  if (num >= event2img.length) {
    num = 0;
    gallery2.src = event2img[num];
  } else {
    gallery2.src = event2img[num];
  }
}
function prev2() {
  num--;
  if (num < 0) {
    num = event2img.length - 1;
    gallery2.src = event2img[num];
  } else {
    gallery2.src = event2img[num];
  }
}

//   PLAY STOP BUTTON EVENT 2
var playStopButton2 = document.querySelector("#playStop2");
var playStopButton2Text = playStopButton2.innerHTML;
function playStop2() {
  if (playStopButton2Text === "&#9655;") {
    playStopButton2Text = "&#9723;";
    playStopButton2.innerHTML = playStopButton2Text;
    playStopInterval = setInterval(nextSlide2, 3000);
  } else {
    playStopButton2Text = "&#9655;";
    playStopButton2.innerHTML = playStopButton2Text;
    clearInterval(playStopInterval);
    gallery2.src = event2img[0];
  }
}

function nextSlide2() {
  num++;
  if (num >= event2img.length) {
    num = 0;
  }
  gallery2.src = event2img[num];
}

// event 3
var gallery3 = document.getElementById("event3");
var event3img = [
  "../img/events/sea1.jpg",
  "../img/events/sea2.jpg",
  "../img/events/sea3.jpg",
  "../img/events/sea4.jpg",
];

function next3() {
  num++;
  if (num >= event2img.length) {
    num = 0;
    gallery3.src = event3img[num];
  } else {
    gallery3.src = event3img[num];
  }
}
function prev3() {
  num--;
  if (num < 0) {
    num = event3img.length - 1;
    gallery3.src = event3img[num];
  } else {
    gallery3.src = event3img[num];
  }
}

//   PLAY STOP BUTTON EVENT 3
var playStopButton3 = document.querySelector("#playStop3");
var playStopButton3Text = playStopButton3.innerHTML;
function playStop3() {
  if (playStopButton3Text === "&#9655;") {
    playStopButton3Text = "&#9723;";
    playStopButton3.innerHTML = playStopButton3Text;
    playStopInterval = setInterval(nextSlide3, 3000);
  } else {
    playStopButton3Text = "&#9655;";
    playStopButton3.innerHTML = playStopButton3Text;
    clearInterval(playStopInterval);
    gallery3.src = event3img[0];
  }
}

function nextSlide3() {
  num++;
  if (num >= event3img.length) {
    num = 0;
  }
  gallery3.src = event3img[num];
}

// event 4
var gallery4 = document.getElementById("event4");
var event4img = [
  "../img/events/reth1.jpg",
  "../img/events/reth2.jpg",
  "../img/events/reth3.jpg",
  "../img/events/reth4.jpg",
];

function next4() {
  num++;
  if (num >= event2img.length) {
    num = 0;
    gallery4.src = event4img[num];
  } else {
    gallery4.src = event4img[num];
  }
}
function prev4() {
  num--;
  if (num < 0) {
    num = event4img.length - 1;
    gallery4.src = event4img[num];
  } else {
    gallery4.src = event4img[num];
  }
}

//   PLAY STOP BUTTON EVENT 4
var playStopButton4 = document.querySelector("#playStop4");
var playStopButton4Text = playStopButton4.innerHTML;
function playStop4() {
  if (playStopButton4Text === "&#9655;") {
    playStopButton4Text = "&#9723;";
    playStopButton4.innerHTML = playStopButton4Text;
    playStopInterval = setInterval(nextSlide4, 3000);
  } else {
    playStopButton4Text = "&#9655;";
    playStopButton4.innerHTML = playStopButton4Text;
    clearInterval(playStopInterval);
    gallery4.src = event4img[0];
  }
}

function nextSlide4() {
  num++;
  if (num >= event4img.length) {
    num = 0;
  }
  gallery4.src = event4img[num];
}

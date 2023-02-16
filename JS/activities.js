function changeTab(tabId) {
  const activeTabClassName = "activeTab";
  const activeImgClassName = "activeImg";

  const clickedTab = document.getElementById(tabId);
  const activeTab = document.getElementsByClassName(activeTabClassName);

  // tabId is checked for a href go to the specific tab
  const btn = document.getElementById(tabId + "-btn");
  btn.checked = true;
  console.log(btn);

  for (const tab of activeTab) {
    tab.classList.remove(activeTabClassName);
  }
  clickedTab.classList.add(activeTabClassName);

  // Remove the activeImg class from all images
  const images = document.querySelectorAll("img");
  for (const image of images) {
    image.classList.remove(activeImgClassName);
  }

  // Add the activeImg class to the image of the clicked tab
  const imageId = tabId.replace("tab-", "");
  const activeImage = document.getElementById(imageId);
  activeImage.classList.add(activeImgClassName);
}

// location for tabId's for the a href
if (location.hash) {
  let hashId = location.hash.replace("#", "");
  console.log(hashId);

  changeTab(hashId);
}

// MODAL BUTTONS
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const bodyS = document.getElementById("containerId");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
  bodyS.classList.add("dontScroll");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  bodyS.classList.remove("dontScroll");
}

// // CAROUSEL
// const buttons = document.querySelectorAll("[data-gallery-button]");
// const dots = document.querySelectorAll("[data-dots] .dot");
// const slides = document.querySelectorAll("[data-slides] .slide");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.galleryButton === "next" ? 1 : -1;
//     const activeSlide = document.querySelector("[data-slides] [data-active]");
//     let newIndex = [...slides].indexOf(activeSlide) + offset;
//     if (newIndex < 0) newIndex = slides.length - 1;
//     if (newIndex >= slides.length) newIndex = 0;
//     activeSlide.removeAttribute("data-active");
//     slides[newIndex].setAttribute("data-active", "");
//     updateDots();
//   });
// });

// // carousel dots
// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     const activeSlide = document.querySelector("[data-slides] [data-active]");
//     activeSlide.removeAttribute("data-active");
//     slides[index].setAttribute("data-active", "");
//     updateDots();
//   });
// });

// function updateDots() {
//   const activeSlide = document.querySelector("[data-slides] [data-active]");
//   const activeIndex = [...slides].indexOf(activeSlide);
//   dots.forEach((dot, index) => {
//     if (index === activeIndex) {
//       dot.setAttribute("data-active", "");
//     } else {
//       dot.removeAttribute("data-active");
//     }
//   });
// }
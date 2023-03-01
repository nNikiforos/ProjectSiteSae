function changeTab(tabId) {
  const activeTabClassName = "activeTab";
  const activeImgClassName = "activeImg";

  const clickedTab = document.getElementById(tabId);
  const activeTab = document.getElementsByClassName(activeTabClassName);

  // tabId is checked so a href can go to the specific tab
  const btn = document.getElementById(tabId + "-btn");
  btn.checked = true;

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

function changeTab(tabId) {
  const activeTabClassName = "activeTab";

  const clickedTab = document.getElementById(tabId);
  const activeTab = document.getElementsByClassName(activeTabClassName);

  const btn = document.getElementById(tabId + "-btn");
  btn.checked = true;
  console.log(btn);

  for (const tab of activeTab) {
    tab.classList.remove(activeTabClassName);
  }

  clickedTab.classList.add(activeTabClassName);
}
if (location.hash) {
  let hashId = location.hash.replace("#", "");
  console.log(hashId);

  changeTab(hashId);
}

// MODAL BUTTONS
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

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
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

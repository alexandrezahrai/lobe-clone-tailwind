// Elements
const trigger = document.getElementById("modal-trigger");
const closeIcon = document.getElementById("close-icon");
const modal = document.getElementById("modal-wrapper");

// Flag to track modal states
let isOpen = false;

// Event Listeners
trigger.addEventListener("click", openModal);
closeIcon.addEventListener("click", closeModal);
document.addEventListener("keydown", handleKeyPress);

function openModal() {
  if (!isOpen) {
    console.log("open sesame!");
    modal.style.zIndex = "1000";
    modal.style.opacity = "1";
    isOpen = true;
  }
}

function closeModal() {
  if (isOpen) {
    console.log("closed!");
    modal.style.zIndex = "-1000";
    modal.style.opacity = "0";
    isOpen = false;
  }
}

function handleKeyPress(event) {
  // Escape key key code = 27
  if (event.key === "Escape" || event.key === "Esc") {
    if (isOpen) {
      console.log("Escape key was pressed!");
      closeModal();
      isOpen = false;
    }
  }
}

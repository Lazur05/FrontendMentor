const shareBtn = document.querySelector(".profile-share-btn");
const shareIcon = document.querySelector(".profile-share-icon");
const shareMenu = document.querySelector(".share-menu");

shareBtn.addEventListener("click", () => {
  shareMenu.classList.toggle("menu-reveal-open");
  shareBtn.classList.toggle("btn-active");
  shareBtn.classList.toggle("btn-inactive");
  shareIcon.classList.toggle("icon-active");
  shareIcon.classList.toggle("icon-inactive");
});

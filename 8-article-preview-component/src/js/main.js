const shareBtn = document.querySelector(".profile-share-btn");
const shareIcon = document.querySelector(".profile-share-icon");
const shareMenu = document.querySelector(".share-menu");

shareBtn.addEventListener("click", () => {
  shareMenu.classList.toggle("invisible");
  shareMenu.classList.toggle("menu-reveal-open");
  if (shareBtn.classList.contains("bg-light-grayish-blue")) {
    shareBtn.classList.remove("bg-light-grayish-blue");
    shareBtn.classList.add("bg-grayish-blue");
    shareIcon.classList.remove("fill-dark-blue");
    shareIcon.classList.add("fill-light-grayish-blue");
  } else {
    shareBtn.classList.remove("bg-grayish-blue");
    shareBtn.classList.add("bg-light-grayish-blue");
    shareIcon.classList.remove("fill-light-grayish-blue");
    shareIcon.classList.add("fill-dark-blue");
  }
});

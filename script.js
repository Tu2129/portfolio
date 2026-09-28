const hamburger = document.getElementById("hamburger");
const overlay = document.querySelector(".overlay");
const item = document.querySelector(".item");
hamburger.addEventListener("click", () => {
  item.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  item.classList.remove("active");
  overlay.classList.remove("active");
});

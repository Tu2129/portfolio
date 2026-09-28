const hamburger = document.getElementById("hamburger");
const overlay = document.querySelector(".overlay");
const aside = document.querySelector("aside");
hamburger.addEventListener("click", () => {
  aside.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  aside.classList.remove("active");
  overlay.classList.remove("active");
});

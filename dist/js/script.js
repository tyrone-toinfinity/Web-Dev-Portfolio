// Test
console.log("Hello World!");

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navbar = document.querySelector("#navbar");
const main = document.querySelector("main");
const navList = document.querySelector("#navbar-list");

hamburger.addEventListener("click", () => {
  return main.classList.add("blur");
  main.classList.removed("blur-remove");
});
close.addEventListener("click", () => {
  return main.classList.remove("blur");
  main.classList.add("blur-remove");
});

navList.addEventListener("click", () => {
  return main.classList.remove("blur");
  main.classList.add("blur-remove");
});

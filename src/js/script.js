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

hamburger.addEventListener("click", () => {
  main.classList.add("blur");
  main.classList.remove("blur-remove");
});
close.addEventListener("click", () => {
  main.classList.remove("blur");
  main.classList.add("blur-remove");
});

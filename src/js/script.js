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

// Hamburger menu to blur main content
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navbar = document.querySelector("#navbar");
const main = document.querySelector("main");
const navList = document.querySelector("#navbar-list");

hamburger.addEventListener("click", () => {
  main.classList.add("blur");
  main.classList.remove("blur-remove");
});

close.addEventListener("click", () => {
  main.classList.remove("blur");
  main.classList.add("blur-remove");
});

navList.addEventListener("click", () => {
  main.classList.remove("blur");
  main.classList.add("blur-remove");
});

// Dynamic year and email in footer
const getYear = new Date().getFullYear();
const name = "Bobby Woody";
const email = "bobbywoody7@gmail.com";
document.querySelector(".yearCopyRight").innerHTML = `
  &copy;${getYear} <a href="mailto:${email}">${name}</a>
`;

// Toggle buttons to show/hide project details
const buttons = document.querySelectorAll(".toggle-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const container = button.parentNode.querySelector(".project-container");
    container.classList.toggle("hidden");
  });
});

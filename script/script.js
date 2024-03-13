const burgerIcon = document.querySelector(".header-navigation-hamburger");
const menu = document.querySelector(".header-navigation");
const date = document.querySelector(".footer-text-date");

burgerIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});
date.textContent = new Date().getFullYear();

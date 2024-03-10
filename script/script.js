const burgerIcon = document.querySelector(".header-navigation-hamburger");
const menu = document.querySelector(".header-navigation");

burgerIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});

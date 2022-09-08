const toggle = document.querySelector(".navbar__toggle");
const nav = document.querySelector(".navbar");
const body = document.querySelector("body");
const navLink = document.querySelectorAll(".navbar__link");

toggle.addEventListener("click", navToggle);

function navToggle() {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
  body.classList.toggle("lock");
}

navLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    body.classList.remove("lock");
  }
});

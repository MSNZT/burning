const toggle = document.querySelector(".navbar__toggle");
const nav = document.querySelector(".navbar");
const body = document.querySelector("body");

toggle.addEventListener("click", navToggle);

function navToggle() {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
  body.classList.toggle("lock");
}

nav.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    body.classList.remove("lock");
  });
});

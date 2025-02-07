window.addEventListener("scroll", function () {
  shrink();
});

let header = document.querySelector("header");

function shrink() {
  if (scrollY > 100) {
    header.classList.add("navbar-shrink");
  } else {
    header.classList.remove("navbar-shrink");
  }
}

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "./images/light.svg";
  } else {
    this.firstElementChild.src = "./images/moon.svg";
  }
  document.body.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
// loading

const loading = document.getElementById("loading");

const loadingDuration = 2000; // 1.8s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

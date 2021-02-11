const hamburgerBtn = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const body = document.querySelector("body");

// console.log(menu.style.display === "");

// const menuToggle = () => {
//   if (menu.style.display) {
//     console.log("hello");
//   } else {
//     console.log("goodbye");
//   }
// };
// menuToggle();

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.firstElementChild.classList.toggle("active");
  body.style.overflow = body.style.overflow === "hidden" ? "" : "hidden";
  menu.style.display = menu.style.display === "" || "none" ? "flex" : "none";
  body.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (e.target === hamburgerBtn || e.target.parentNode === hamburgerBtn) return;
  if (e.target !== menu) {
    hamburgerBtn.firstElementChild.classList.remove("active");
    body.classList.remove("active");
    body.style.overflow = "";
  }
});

window.onresize = () => {
  if (window.innerWidth >= 580) {
    hamburgerBtn.firstElementChild.classList.remove("active");
    body.classList.remove("active");
    body.style.overflow = "";
  }
};

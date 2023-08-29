const menuIcon = document.querySelector(".open-navbar");
const navbarContainer = document.querySelector(".mobile-navbar");

const darkmodeBtn = document.querySelectorAll(".icon-sun");

// ****************************************
// Mobile nagation
// ****************************************
// state
let isOpen = false;

const toggleFunction = () => {
  isOpen = navbarContainer.classList.toggle("openNavbar");
  document.body.style.overflowY = isOpen ? "hidden" : "auto";
};

menuIcon.addEventListener("click", toggleFunction);

// ****************************************
// darkmode nagation
// ****************************************
darkmodeBtn.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
  });
});

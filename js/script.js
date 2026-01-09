// ===================== NAVBAR =====================
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// ===================== SEARCH =====================
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

// hamburger menu click
hamburger.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
  e.preventDefault();
});

// search button click
searchButton.addEventListener("click", function (e) {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
});

// klik di luar elemen
document.addEventListener("click", function (e) {
  // tutup navbar
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // tutup search
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

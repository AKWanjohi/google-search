let search = document.getElementById("search");
let searchIcon = document.getElementById("searchIcon");

searchIcon.onclick = () => {
  search.classList.toggle("active");
};

let page = document.getElementById("page");
let themeIcon = document.getElementById("themeIcon");
let themeName = document.getElementById("themeName");
let toggle = document.getElementById("toggle");

let localData = localStorage.getItem("myTheme");

if (localData == null) {
  localStorage.setItem("myTheme", "light");
}

if (localData == "light") {
  page.classList.remove("dark-theme");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
  themeName.innerText = "Light";
} else if (localData == "dark") {
  page.classList.add("dark-theme");
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
  themeName.innerText = "Dark";
}

toggle.onclick = () => {
  if (themeIcon.classList.contains("fa-sun")) {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    themeName.innerText = "Dark";
    page.classList.toggle("dark-theme");
    localStorage.setItem("myTheme", "dark");
  } else if (themeIcon.classList.contains("fa-moon")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    themeName.innerText = "Light";
    page.classList.toggle("dark-theme");
    localStorage.setItem("myTheme", "light");
  }
};

let theme = document.getElementsByTagName("html")[0];
let button = document.getElementById("themeBTN");
button.addEventListener("click", function () {
  if (theme.classList.contains("dark")) {
    theme.classList.toggle("light");
  } else {
    theme.classList.toggle("dark");
  }
});

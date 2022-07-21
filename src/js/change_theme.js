let theme = document.getElementsByTagName("html")[0];
let button = document.getElementById("themeBTN");

document.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.getItem("calculatorTheme") === "" ||
    localStorage.getItem("calculatorTheme") === null
  ) {
    localStorage.setItem("calculatorTheme", "light");
    theme.classList.toggle("light");
  } else {
    switch (localStorage.getItem("calculatorTheme")) {
      case "light": {
        theme.classList.toggle("light");
        break;
      }
      case "dark": {
        theme.classList.toggle("dark");
        break;
      }
    }
  }
});

button.addEventListener("click", () => {
  if (theme.classList.contains("dark")) {
    localStorage.clear();
    localStorage.setItem("calculatorTheme", "light");
    theme.classList.remove("dark");
    theme.classList.toggle("light");
  } else {
    localStorage.clear();
    localStorage.setItem("calculatorTheme", "dark");
    theme.classList.remove("light");
    theme.classList.toggle("dark");
  }
});

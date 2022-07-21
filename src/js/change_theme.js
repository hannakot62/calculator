let theme = document.getElementsByTagName("html")[0];
let button = document.getElementById("themeBTN");

document.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.getItem("calculatorTheme") === "" ||
    localStorage.getItem("calculatorTheme") === null
  ) {
    localStorage.setItem("calculatorTheme", "light");
    theme.classList.toggle("light");
    console.log("дефолтная тема");
  } else {
    switch (localStorage.getItem("calculatorTheme")) {
      case "light": {
        console.log("кто-то оставил светлое");
        theme.classList.toggle("light");
        break;
      }
      case "dark": {
        console.log("кто-то оставил темное");
        theme.classList.toggle("dark");
        break;
      }
    }
  }
});

button.addEventListener("click", () => {
  if (theme.classList.contains("dark")) {
    console.log("do smeny na light");
    localStorage.clear();
    localStorage.setItem("calculatorTheme", "light");
    theme.classList.remove("dark");
    theme.classList.toggle("light");

    console.log("хочу светлое нефільтрованное");
  } else {
    console.log("do smeny na dark");
    localStorage.clear();

    localStorage.setItem("calculatorTheme", "dark");
    theme.classList.remove("light");
    theme.classList.toggle("dark");

    console.log("хочу темное нефильтрованное");
  }
});

import icon from "./assets/logo.png";
// import { log } from "./js/hello";
import "./js/change_theme.js";
import "./sass/main.scss";
// import "./js/get_input.js";
import "./js/clear_buttons.js";
import "./js/equals.js";
import { Button } from "./js/buttons.js";

import { NumberValidator } from "./js/validator.js";
import { EqualsValidator } from "./js/validator.js";
import { BracketValidator } from "./js/validator.js";
import { OneSignValidator } from "./js/validator.js";
import { DotValidator } from "./js/validator.js";
import { ChangeSignValidator } from "./js/validator.js";

import { showNotification } from "./js/buttons.js";
import Lottie from "lottie-web";

const calculatorIcon = document.getElementById("calculatorIcon");
calculatorIcon.href = icon;

// const hello = require("./js/hello");

// log();
document.addEventListener("DOMContentLoaded", createButtons);

function createButtons() {
  console.log("где кнопки а");
  let buttons = [
    new Button([0, 0], "memory", "MC", "memoryClear", "MC", NumberValidator),
    new Button(
      [0, 1],
      "table-btn hard",
      "x<span>2</span>",
      "square",
      "^2",
      NumberValidator
    ),
    new Button(
      [0, 2],
      "table-btn hard",
      "√x",
      "radical",
      "^(1/2)",
      NumberValidator
    ),
    new Button([0, 3], "table-btn", "×", "multiply", "*", OneSignValidator),
    new Button([0, 4], "calc-number", "1", "one", "1", NumberValidator),
    new Button([0, 5], "calc-number", "2", "two", "2", NumberValidator),
    new Button([0, 6], "calc-number", "3", "three", "3", NumberValidator),
    new Button([0, 7], "calc-simple", "+", "plus", "+", OneSignValidator),

    new Button([1, 0], "memory", "M+", "memoryAdd", "M+", NumberValidator),
    new Button(
      [1, 1],
      "table-btn hard",
      "x<span>3</span>",
      "cube",
      "^3",
      NumberValidator
    ),
    new Button(
      [1, 2],
      "table-btn hard",
      "<span>3</span>√x",
      "cubeRoot",
      "^(1/3)",
      NumberValidator
    ),
    new Button([1, 3], "table-btn", "/", "divide", "/", OneSignValidator),
    new Button([1, 4], "calc-number", "4", "four", "4", NumberValidator),
    new Button([1, 5], "calc-number", "5", "five", "5", NumberValidator),
    new Button([1, 6], "calc-number", "6", "six", "6", NumberValidator),
    new Button([1, 7], "calc-simple", "-", "minus", "-", OneSignValidator),

    new Button(
      [2, 0],
      "memory",
      "M-",
      "memorySubstract",
      "M-",
      NumberValidator
    ),
    new Button(
      [2, 1],
      "table-btn hard",
      "x<span>y</span>",
      "power",
      "^(",
      NumberValidator
    ),
    new Button(
      [2, 2],
      "table-btn hard",
      "<span>y</span>√x",
      "anyRoot",
      "^(1/",
      NumberValidator
    ),
    new Button([2, 3], "table-btn", "%", "procent", "%", OneSignValidator),
    new Button([2, 4], "calc-number", "7", "seven", "7", NumberValidator),
    new Button([2, 5], "calc-number", "8", "eight", "8", NumberValidator),
    new Button([2, 6], "calc-number", "9", "nine", "9", NumberValidator),
    new Button(
      [2, 7],
      "calc-simple",
      "+/-",
      "changeSign",
      "",
      ChangeSignValidator
    ),

    new Button([3, 0], "memory", "MR", "memoryRead", "MR", NumberValidator),
    new Button(
      [3, 1],
      "table-btn hard",
      "10<span>x</span>",
      "tenPower",
      "10^(",
      NumberValidator
    ),
    new Button(
      [3, 2],
      "table-btn hard",
      "x!",
      "factorial",
      "!",
      OneSignValidator
    ),
    new Button(
      [3, 3],
      "table-btn hard",
      "1/x",
      "selfDivide",
      "1/",
      NumberValidator
    ),
    new Button(
      [3, 4],
      "calc-simple",
      "(",
      "leftBracket",
      "(",
      BracketValidator
    ),
    new Button(
      [3, 5],
      "calc-simple",
      ")",
      "rightBracket",
      ")",
      BracketValidator
    ),
    new Button([3, 6], "calc-number", "0", "zero", "0", NumberValidator),
    new Button([3, 7], "calc-simple", ".", "dot", ".", DotValidator),
  ];
}

let calcBtn = document.getElementById("calculateBtn");
calcBtn.addEventListener("click", () => {
  let validator = new EqualsValidator("", "", "");
  try {
    document.getElementById("taskResult").innerHTML = validator.validate();
    rocket();
  } catch (e) {
    showNotification(e);
  }
});
//хер поймі что я не могу уже ёпрст
function rocket() {
  let mainContainer = document.getElementById("main");
  let animationContainer = document.createElement("div");
  animationContainer.className = "animation";
  animationContainer.id = "animation";
  // mainContainer.after(animationContainer);
  document.body.append(animationContainer);
  let animation = Lottie.loadAnimation({
    container: animationContainer,
    path: "https://assets4.lottiefiles.com/packages/lf20_fisiii5b.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
  });

  setTimeout(() => {
    animationContainer.classList.add("move");
  }, 0);
  setTimeout(() => {
    animationContainer.remove();
  }, 3000);
}

import icon from "./assets/logo.png";
// import { log } from "./js/hello";
import "./js/change_theme.js";
import "./sass/main.scss";
import "./js/get_input.js";
import "./js/clear_buttons.js";
import "./js/equals.js";
import { Button } from "./js/buttons.js";
const calculatorIcon = document.getElementById("calculatorIcon");
calculatorIcon.href = icon;

// const hello = require("./js/hello");

// log();
document.addEventListener("DOMContentLoaded", createButtons);

function createButtons() {
  console.log("где кнопки а");
  let buttons = [
    new Button([0, 0], "memory", "MC", "memoryClear", "MC"),
    new Button([0, 1], "table-btn hard", "x<span>2</span>", "square", "^2"),
    new Button([0, 2], "table-btn hard", "√x", "radical", "^(1/2)"),
    new Button([0, 3], "table-btn", "×", "multiply", "*"),
    new Button([0, 4], "calc-number", "1", "one", "1"),
    new Button([0, 5], "calc-number", "2", "two", "2"),
    new Button([0, 6], "calc-number", "3", "three", "3"),
    new Button([0, 7], "calc-simple", "+", "plus", "+"),

    new Button([1, 0], "memory", "M+", "memoryAdd", "M+"),
    new Button([1, 1], "table-btn hard", "x<span>3</span>", "cube", "^3"),
    new Button(
      [1, 2],
      "table-btn hard",
      "<span>3</span>√x",
      "cubeRoot",
      "^(1/3)"
    ),
    new Button([1, 3], "table-btn", "/", "divide", "/"),
    new Button([1, 4], "calc-number", "4", "four", "4"),
    new Button([1, 5], "calc-number", "5", "five", "5"),
    new Button([1, 6], "calc-number", "6", "six", "6"),
    new Button([1, 7], "calc-simple", "-", "minus", "-"),

    new Button([2, 0], "memory", "M-", "memorySubstract", "M-"),
    new Button([2, 1], "table-btn hard", "x<span>y</span>", "power", "^("),
    new Button([2, 2], "table-btn hard", "<span>y</span>√x", "anyRoot", "^(1/"),
    new Button([2, 3], "table-btn", "%", "procent", "%"),
    new Button([2, 4], "calc-number", "7", "seven", "7"),
    new Button([2, 5], "calc-number", "8", "eight", "8"),
    new Button([2, 6], "calc-number", "9", "nine", "9"),
    new Button([2, 7], "calc-simple", "+/-", "changeSign", ""), //!как оно работает аааааа

    new Button([3, 0], "memory", "MR", "memoryRead", "MR"),
    new Button(
      [3, 1],
      "table-btn hard",
      "10<span>x</span>",
      "tenPower",
      "10^("
    ),
    new Button([3, 2], "table-btn hard", "x!", "factorial", "!"),
    new Button([3, 3], "table-btn hard", "1/x", "selfDivide", "1/"),
    new Button([3, 4], "calc-simple", "(", "leftBracket", "("),
    new Button([3, 5], "calc-simple", ")", "rightBracket", ")"),
    new Button([3, 6], "calc-number", "0", "zero", "0"),
    new Button([3, 7], "", "=", "equals", ""),
  ];
}

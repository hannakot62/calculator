import {
  NumberValidator,
  EqualsValidator,
  BracketValidator,
  OneSignValidator,
  DotValidator,
  ChangeSignValidator,
  ComplexOperatorValidator,
  MemoryValidator,
} from "./validator.js";

import Lottie from "lottie-web";
export { memory };

let memory = 0;

class Button {
  constructor(place, cssClass, innerHTML, id, value, validator) {
    let calculatorTable = document.getElementById("tableButtons");
    this.btn = document.createElement("button");
    this.btn.innerHTML = innerHTML;
    this.btn.className = cssClass;
    this.btn.id = id;
    //-----------------------------------
    this.value = value;
    this.originalvalue = value;
    //-----------------------------------
    this.validator = validator;
    calculatorTable.rows[place[0]].childNodes[place[1]].appendChild(this.btn);
    this.btn.addEventListener("click", () => {
      this.listenerFunction();
    });
  }
  listenerFunction() {
    try {
      this.value = this.validator.validate();
      this.addToTask();
    } catch (e) {
      showNotification(e);
    }
  }
  addToTask() {
    taskResult.innerHTML += this.value;
    this.value = this.originalvalue;
  }
}

export function showNotification(exceptionText) {
  let notification = document.createElement("span");
  notification.innerHTML = exceptionText;
  let where = document.getElementsByClassName("notification")[0];
  where.prepend(notification);
  where.style.visibility = "visible";

  setTimeout(() => notification.remove(), 1200);
}

export function createButtons() {
  let buttons = [
    new Button(
      [0, 0],
      "memory",
      "MC",
      "memoryClear",
      "MC",
      new MemoryValidator("MC", "memory", "memoryClear")
    ),
    new Button(
      [0, 1],
      "table-btn hard",
      "x<span>2</span>",
      "square",
      "^2",
      new ComplexOperatorValidator("^2", "table-btn hard", "square")
    ),
    new Button(
      [0, 2],
      "table-btn hard",
      "√x",
      "radical",
      "^(1/2)",
      new ComplexOperatorValidator("^(1/2", "table-btn hard", "radical")
    ),
    new Button(
      [0, 3],
      "table-btn",
      "×",
      "multiply",
      "*",
      new OneSignValidator("*", "table-btn", "multiply")
    ),
    new Button(
      [0, 4],
      "calc-number",
      "1",
      "one",
      "1",
      new NumberValidator("1", "calc-number", "one")
    ),
    new Button(
      [0, 5],
      "calc-number",
      "2",
      "two",
      "2",
      new NumberValidator("2", "calc-number", "two")
    ),
    new Button(
      [0, 6],
      "calc-number",
      "3",
      "three",
      "3",
      new NumberValidator("3", "calc-number", "three")
    ),
    new Button(
      [0, 7],
      "calc-simple",
      "+",
      "plus",
      "+",
      new OneSignValidator("+", "calc-simple", "plus")
    ),

    new Button(
      [1, 0],
      "memory",
      "M+",
      "memoryAdd",
      "M+",
      new MemoryValidator("M+", "memory", "memoryAdd")
    ),
    new Button(
      [1, 1],
      "table-btn hard",
      "x<span>3</span>",
      "cube",
      "^3",
      new ComplexOperatorValidator("^3", "table-btn hard", "cube")
    ),
    new Button(
      [1, 2],
      "table-btn hard",
      "<span>3</span>√x",
      "cubeRoot",
      "^(1/3)",
      new ComplexOperatorValidator("^(1/3", "table-btn hard", "cubeRoot")
    ),
    new Button(
      [1, 3],
      "table-btn",
      "/",
      "divide",
      "/",
      new OneSignValidator("/", "table-btn", "divide")
    ),
    new Button(
      [1, 4],
      "calc-number",
      "4",
      "four",
      "4",
      new NumberValidator("4", "calc-number", "four")
    ),
    new Button(
      [1, 5],
      "calc-number",
      "5",
      "five",
      "5",
      new NumberValidator("5", "calc-number", "five")
    ),
    new Button(
      [1, 6],
      "calc-number",
      "6",
      "six",
      "6",
      new NumberValidator("6", "calc-number", "six")
    ),
    new Button(
      [1, 7],
      "calc-simple",
      "-",
      "minus",
      "-",
      new OneSignValidator("-", "calc-simple", "minus")
    ),

    new Button(
      [2, 0],
      "memory",
      "M-",
      "memorySubstract",
      "M-",
      new MemoryValidator("M-", "memory", "memorySubstract")
    ),
    new Button(
      [2, 1],
      "table-btn hard",
      "x<span>y</span>",
      "power",
      "^(",
      new ComplexOperatorValidator("^(", "table-btn hard", "power")
    ),
    new Button(
      [2, 2],
      "table-btn hard",
      "<span>y</span>√x",
      "anyRoot",
      "^(1/",
      new ComplexOperatorValidator("^(1/", "table-btn hard", "anyRoot")
    ),
    new Button(
      [2, 3],
      "table-btn",
      "%",
      "procent",
      "%",
      new OneSignValidator("%", "table-btn", "procent")
    ),
    new Button(
      [2, 4],
      "calc-number",
      "7",
      "seven",
      "7",
      new NumberValidator("7", "calc-number", "seven")
    ),
    new Button(
      [2, 5],
      "calc-number",
      "8",
      "eight",
      "8",
      new NumberValidator("8", "calc-number", "eight")
    ),
    new Button(
      [2, 6],
      "calc-number",
      "9",
      "nine",
      "9",
      new NumberValidator("9", "calc-number", "nine")
    ),
    new Button(
      [2, 7],
      "calc-simple",
      "+/-",
      "changeSign",
      "",
      new ChangeSignValidator("", "calc-simple", "changeSign")
    ),

    new Button(
      [3, 0],
      "memory",
      "MR",
      "memoryRead",
      "MR",
      new MemoryValidator("MR", "memory", "memoryRead")
    ),
    new Button(
      [3, 1],
      "table-btn hard",
      "10<span>x</span>",
      "tenPower",
      "10^(",
      new ComplexOperatorValidator("10^", "table-btn hard", "tenPower")
    ),
    new Button(
      [3, 2],
      "table-btn hard",
      "x!",
      "factorial",
      "!",
      new OneSignValidator("!", "table-btn hard", "factorial")
    ),
    new Button(
      [3, 3],
      "table-btn hard",
      "1/x",
      "selfDivide",
      "1/",
      new ComplexOperatorValidator("1/", "table-btn hard", "selfDivide")
    ),
    new Button(
      [3, 4],
      "calc-simple",
      "(",
      "leftBracket",
      "(",
      new BracketValidator("(", "calc-simple", "leftBracket")
    ),
    new Button(
      [3, 5],
      "calc-simple",
      ")",
      "rightBracket",
      ")",
      new BracketValidator(")", "calc-simple", "rightBracket")
    ),
    new Button(
      [3, 6],
      "calc-number",
      "0",
      "zero",
      "0",
      new NumberValidator("0", "calc-number", "zero")
    ),
    new Button(
      [3, 7],
      "calc-simple",
      ".",
      "dot",
      ".",
      new DotValidator(".", "calc-simple", "dot")
    ),
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

function rocket() {
  let animationContainer = document.createElement("div");
  animationContainer.className = "animation";
  animationContainer.id = "animation";
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

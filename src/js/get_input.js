let tableButtons = document.getElementsByClassName("table-btn");
for (let i = 0; i < tableButtons.length; i++) {
  let item = tableButtons[i];
  item.addEventListener("click", () => {
    taskResult.innerHTML += " " + buttons[event.target.id] + " ";
  });
}

let numbers = document.getElementsByClassName("calc-number");
for (let i = 0; i < numbers.length; i++) {
  let item = numbers[i];
  item.addEventListener("click", () => {
    taskResult.innerHTML += buttons[event.target.id];
  });
}

let simpleButtons = document.getElementsByClassName("calc-simple");
for (let i = 0; i < simpleButtons.length; i++) {
  let item = simpleButtons[i];
  item.addEventListener("click", () => {
    taskResult.innerHTML += " " + buttons[event.target.id] + " ";
  });
}
let buttons = {
  one: "1",
  two: "2",
  three: "3",

  plus: "+",
  minus: "-",
  leftBracket: "(",
  rightBracket: ")",
};

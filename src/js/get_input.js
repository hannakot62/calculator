// import { ButtonValidator } from "./validation.js";

// let tableButtons = document.getElementsByClassName("table-btn");
// for (let i = 0; i < tableButtons.length; i++) {
//   let item = tableButtons[i];
//   item.addEventListener("click", () => {
//     taskResult.innerHTML += buttons[event.target.id];
//   });
// }
// //на цифры вроде не надо проверок
// let numbers = document.getElementsByClassName("calc-number");
// for (let i = 0; i < numbers.length; i++) {
//   let item = numbers[i];
//   item.addEventListener("click", () => {
//     taskResult.innerHTML += buttons[event.target.id];
//   });
// }

// let simpleButtons = document.getElementsByClassName("calc-simple");
// for (let i = 0; i < simpleButtons.length; i++) {
//   let item = simpleButtons[i];
//   item.addEventListener("click", () => {
//     try {
//       let task = taskResult.innerHTML;
//       // task = task.split(" ");
//       // task = task.join("");
//       console.log(task);
//       let statement = new ButtonValidator(task, buttons[event.target.id]);
//       console.log("ok");
//       //? c ' '
//       taskResult.innerHTML = statement.task;
//     } catch (e) {
//       //чето тут еще
//       console.log(e);
//       console.log("бу");
//     }
//   });
// }
// let buttons = {
//   one: "1",
//   two: "2",
//   three: "3",
//   four: "4",
//   five: "5",
//   six: "6",
//   seven: "7",
//   eight: "8",
//   nine: "9",
//   zero: "0",
//   radical: "^(1/2)",
//   multiply: "*",
//   cube: "^(3)",
//   cubeRoot: "^(1/3)",
//   divide: "/",
//   power: "^(",
//   anyRoot: "^(1/",
//   procent: "%",
//   changeSign: "", //--------------------------------------
//   tenPower: "10^(",
//   factorial: "!",
//   selfDivide: "1/",
//   plus: "+",
//   minus: "-",
//   leftBracket: "(",
//   rightBracket: ")",
// };

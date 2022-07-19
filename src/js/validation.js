// export { Validator };
// export { ButtonValidator };

function countSymbol(str, smbl) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === smbl) {
      counter++;
    }
  }
  return counter;
}
// class Validator {
//   constructor(task) {
//     //проверка на закрытые скобки
//     if (countSymbol(task, "(") != countSymbol(task, ")")) {
//       throw "Закройте все скобки!";
//     }
//     //проверка на е
//     if (countSymbol(task, "e") > 0) {
//       throw "Слишком большое число :(";
//     }
//     //проверка конца выражения на знак
//     if (
//       !(
//         Number.isInteger(+task[task.length - 1]) ||
//         task[task.length - 1] === ")"
//       )
//     ) {
//       task.length = length - 1;
//     }
//     this.task = task;
//     //?????????????
//   }
// }
class ButtonValidator {
  constructor(task, newSymbols) {
    task = task.split("");
    // //проверка цифра(
    // if (newSymbols[0] === "(" && Number.isInteger(+task[task.length - 1])) {
    //   task = task.join("");
    //   task += "*(";
    //   task = task.split("");
    // }
    //проверка на пустые скобки
    // else if (newSymbols === ")" && task[task.length - 1] === "(") {
    //   throw "Не оставляйте пустые скобки!";
    // }
    //проверка на отрицательную степень без скобок
    else if (newSymbols === "-" && task[task.length - 1] === "^") {
      task = task.join("");
      task += "(-";
      task = task.split("");
    }
    //проверка аргумента факториала - выражение заканчивается на ) или цифру
    else if (newSymbols[0] === "!") {
      if (
        !(
          Number.isInteger(+task[task.length - 1]) ||
          task[task.length - 1] === ")"
        )
      ) {
        throw "Некорректный аргумент факториала!";
      }
    }
    //проверка на два знака подряд, кроме факториала со скобками
    //если новый символ не число и последний символ выражения не число   //что-то работает
    else if (
      Number.isNaN(+newSymbols[0]) &&
      Number.isNaN(+task[task.length - 1])
    ) {
      //если !( => !*(

      if (newSymbols[0] === "(" && task[task.length - 1] === "!") {
        task = task.join("");
        task += "*(";
        task = task.split("");
      }
      if (
        !(
          task[task.length - 1] === "!" ||
          (newSymbols[0] === "!" && task[task.length - 1] === ")")
        )
      ) {
        throw "Не вводите два символа операции подряд!";
      }
    }
    // //добавление умножения, если после ! цифра или (
    // else if (
    //   Number.isInteger(+newSymbols[0]) &&
    //   task[task.length - 1] === "!"
    // ) {
    //   task = task.join("");
    //   task += "*" + newSymbols;
    //   task = task.split("");
    // } else {
    //   task = task.join("");
    //   task += newSymbols;
    //   task = task.split("");
    // }

    task = task.join("");

    this.task = task;
  }
}

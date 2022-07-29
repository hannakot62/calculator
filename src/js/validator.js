export {
  Validator,
  NumberValidator,
  EqualsValidator,
  BracketValidator,
  OneSignValidator,
  DotValidator,
  ChangeSignValidator,
  ComplexOperatorValidator,
  MemoryValidator,
};

import { memory } from "./buttons.js";
import calculate from "./calculate_function.js";
import { showNotification } from "./buttons.js";

function countSymbol(str, smbl) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === smbl) {
      counter++;
    }
  }
  return counter;
}

//абстрактный класс
class Validator {
  constructor(buttonValue, ButtonCssClass, ButtonId) {
    //optional
    if (this.constructor.name === "Validator") {
      throw new Error(
        `${this.constructor.name}: can not create instance of abstract class`
      );
    }
    this.buttonValue = buttonValue;
    this.ButtonCssClass = ButtonCssClass;
    this.ButtonId = ButtonId;
    this.task = document.getElementById("taskResult");
    this.taskText = this.task.innerHTML;
  }

  validate() {
    //возвращает value, если нет -> валидация не пройдена
    //переписан под каждый дочерний класс
  }
}

class NumberValidator extends Validator {
  constructor(buttonValue, ButtonCssClass, ButtonId) {
    super(buttonValue, ButtonCssClass, ButtonId);
  }
  validate() {
    this.task = document.getElementById("taskResult");
    this.taskText = this.task.innerHTML;
    // )число или !число-> )*число !*число работает
    if (
      this.taskText[this.taskText.length - 1] === ")" ||
      this.taskText[this.taskText.length - 1] === "!"
    ) {
      this.buttonValue = "*" + this.buttonValue;
    }
    return this.buttonValue;
  }
}
class EqualsValidator extends Validator {
  constructor(buttonValue, ButtonCssClass, ButtonId) {
    super(buttonValue, ButtonCssClass, ButtonId);
  }
  validate() {
    this.task = document.getElementById("taskResult");
    this.taskText = this.task.innerHTML;
    if (this.taskText === "") {
      throw new Error("Пусто :(");
    }
    //проверка на закрытые скобки работает
    if (countSymbol(this.taskText, "(") != countSymbol(this.taskText, ")")) {
      throw new Error("Закройте все скобки!");
    }
    //проверка на е
    if (countSymbol(this.taskText, "e") > 0) {
      throw new Error("Слишком большое число :(");
    }
    //проверка оператора без правого операнда в конце выражения
    if (
      !(
        Number.isInteger(+this.taskText[this.taskText.length - 1]) ||
        this.taskText[this.taskText.length - 1] === ")" ||
        this.taskText[this.taskText.length - 1] === "!"
      )
    ) {
      this.taskText = this.taskText.split("");
      this.taskText.pop();
      this.taskText = this.taskText.join("");
      this.task.innerHTML = this.taskText;
    }
    this.taskText = this.taskText.split(" ");
    this.taskText = this.taskText.join("");
    this.buttonValue = calculate(this.taskText);

    this.task.innerHTML = "";
    document.getElementById("history").innerHTML = this.taskText;
    return this.buttonValue;
  }
}

class BracketValidator extends Validator {
  constructor(buttonValue, ButtonCssClass, ButtonId) {
    super(buttonValue, ButtonCssClass, ButtonId);
  }
  validate() {
    this.task = document.getElementById("taskResult");
    this.taskText = this.task.innerHTML;
    //проверка на начало выражения
    if (this.buttonValue === ")" && this.taskText === "") {
      throw new Error(")))");
    }
    //проверка на лишние скобки
    if (
      this.buttonValue === ")" &&
      countSymbol(this.taskText, "(") <= countSymbol(this.taskText, ")")
    ) {
      throw new Error("Вы не открыли столько скобок!");
    }
    //проверка цифра(, )(, !(
    else if (
      this.buttonValue === "(" &&
      (this.taskText[this.taskText.length - 1] === "!" ||
        this.taskText[this.taskText.length - 1] === ")" ||
        Number.isInteger(+this.taskText[this.taskText.length - 1]))
    ) {
      this.buttonValue = "*(";
    }
    //проверка на точку
    else if (this.taskText[this.taskText.length - 1] === ".") {
      throw new Error("Допишите число");
    }
    //проверка на пустые скобки
    else if (
      this.buttonValue === ")" &&
      this.taskText[this.taskText.length - 1] === "("
    ) {
      throw new Error("Не оставляйте пустые скобки!");
    }
    //проверка на не открытые скобки
    else if (this.buttonValue === ")" && !this.taskText.includes("(")) {
      throw new Error("Сначала скобки надо открыть, Артём!");
    }
    //проверка знак) кроме ! и )
    //просто не берем этот знак
    else if (
      !(
        Number.isInteger(+this.taskText[this.taskText.length - 1]) ||
        this.taskText[this.taskText.length - 1] === "!" ||
        this.taskText[this.taskText.length - 1] === ")"
      ) &&
      this.buttonValue === ")"
    ) {
      this.taskText = this.taskText.split("");
      this.taskText.pop();
      this.taskText = this.taskText.join("");
      this.task.innerHTML = this.taskText;
    }
    return this.buttonValue;
  }
}
class OneSignValidator extends Validator {
  constructor(buttonValue, ButtonCssClass, ButtonId) {
    super(buttonValue, ButtonCssClass, ButtonId);
  }
  validate() {
    this.task = document.getElementById("taskResult");
    this.taskText = this.task.innerHTML;
    //проверка на два знака подряд и начало выражения, кроме ), числа и !
    if (
      !(
        this.taskText[this.taskText.length - 1] === ")" ||
        this.taskText[this.taskText.length - 1] === "!" ||
        Number.isInteger(+this.taskText[this.taskText.length - 1])
      )
    ) {
      if (
        this.taskText[this.taskText.length - 1] === "^" ||
        this.taskText[this.taskText.length - 1] === "("
      ) {
        throw new Error("Чего-то не хватает");
      } else {
        this.taskText = this.taskText.split("");
        this.taskText.pop();
        this.taskText = this.taskText.join("");
        this.task.innerHTML = this.taskText;
      }
    }
    return " " + this.buttonValue;
  }
}
class DotValidator extends Validator {
  constructor(buttonValue, ButtonCssClass, ButtonId) {
    super(buttonValue, ButtonCssClass, ButtonId);
  }
  validate() {
    this.task = document.getElementById("taskResult");
    this.taskText = this.task.innerHTML;
    //проверка на начало выражения и не число
    if (
      this.taskText === "" ||
      !Number.isInteger(+this.taskText[this.taskText.length - 1])
    ) {
      throw new Error("Так не работает...");
    }
    //проверка на две точки в одном числе
    if (this.taskText.lastIndexOf(".") != -1) {
      let needsToBeChecked = this.taskText.slice(
        this.taskText.lastIndexOf(".") + 1
      );
      let counter = 0;
      for (let i = 0; i < needsToBeChecked.length; i++) {
        if (Number.isInteger(+needsToBeChecked[i])) {
          counter++;
        }
      }
      if (counter === needsToBeChecked.length) {
        throw new Error("Многовато точек...");
      }
    }
    return this.buttonValue;
  }
}

class ChangeSignValidator extends Validator {
  constructor(buttonValue, ButtonCssClass, ButtonId) {
    super(buttonValue, ButtonCssClass, ButtonId);
  }
  validate() {
    this.task = document.getElementById("taskResult");
    this.taskText = this.task.innerHTML;
    //проверка на начaло выражения
    if (this.taskText === "") {
      this.buttonValue = "(-";
    }

    //проверка знак +/- -> знак(-
    else if (!Number.isInteger(+this.taskText[this.taskText.length - 1])) {
      //проверка на точку
      if (this.taskText[this.taskText.length - 1] === ".") {
        throw new Error("Допишите число");
      }
      //проверка на ) и !
      if (
        this.taskText[this.taskText.length - 1] === "!" ||
        this.taskText[this.taskText.length - 1] === ")"
      ) {
        this.buttonValue = "*(-";
      } else {
        this.buttonValue = "(-";
      }
    }
    //смена знака у записанного числа
    else if (
      Number.isInteger(+this.taskText[this.taskText.length - 1]) ||
      this.taskText[this.taskText.length - 1] === "."
    ) {
      let i = 1;
      for (
        ;
        Number.isInteger(+this.taskText[this.taskText.length - i]) ||
        this.taskText[this.taskText.length - i] === ".";
        i++
      ) {}
      if (
        this.taskText[this.taskText.length - i] === "-" &&
        this.taskText[this.taskText.length - i - 1] === "("
      ) {
        //отрицательное
        this.buttonValue = this.taskText.slice(this.taskText.length - i + 1);
        this.taskText = this.taskText.split("");
        this.taskText.splice(this.taskText.length - i - 1);
      } else {
        //положительное + 0
        this.buttonValue =
          "(-" + this.taskText.slice(this.taskText.length - i + 1);
        this.taskText = this.taskText.split("");
        this.taskText.splice(this.taskText.length - i + 1);
      }
      this.taskText = this.taskText.join("");
      this.task.innerHTML = this.taskText;
    }
    return this.buttonValue;
  }
}
class ComplexOperatorValidator extends Validator {
  constructor(buttonValue, ButtonCssClass, ButtonId) {
    super(buttonValue, ButtonCssClass, ButtonId);
  }
  validate() {
    this.task = document.getElementById("taskResult");
    this.taskText = this.task.innerHTML;
    if (
      this.taskText != "" &&
      this.taskText[this.taskText.length - 1] === "."
    ) {
      throw new Error("Допишите число");
    }
    //для любого возведения в степень
    if (this.buttonValue[0] === "^") {
      if (
        !(
          Number.isInteger(+this.taskText[this.taskText.length - 1]) ||
          this.taskText[this.taskText.length - 1] === ")"
        )
      ) {
        throw new Error("Отсутствует левый операнд!");
      }
    }
    //для 1/x и 10^x
    if (this.buttonValue[0] === "1") {
      if (
        (this.taskText != "" &&
          this.taskText[this.taskText.length - 1] === ")") ||
        Number.isInteger(+this.taskText[this.taskText.length - 1])
      ) {
        this.buttonValue = "*" + this.buttonValue;
      }
    }
    return this.buttonValue;
  }
}
class MemoryValidator extends Validator {
  constructor(buttonValue, ButtonCssClass, ButtonId) {
    super(buttonValue, ButtonCssClass, ButtonId);
  }
  validate() {
    this.task = document.getElementById("taskResult");
    this.taskText = this.task.innerHTML;
    switch (this.buttonValue[1]) {
      case "C": {
        memory = 0;
        showNotification("Память очищена!");
        this.buttonValue = "";
        break;
      }
      case "R": {
        if (
          this.taskText != "" &&
          this.taskText[this.taskText.length - 1] === "."
        ) {
          throw new Error("Допишите число");
        }
        if (
          this.taskText != "" &&
          (Number.isInteger(+this.taskText[this.taskText.length - 1]) ||
            this.taskText[this.taskText.length - 1] === "!" ||
            this.taskText[this.taskText.length - 1] === ")")
        ) {
          this.buttonValue = "*(" + memory + ")";
        } else {
          this.buttonValue = "(" + memory + ")";
        }
        break;
      }
      case "-": {
        if (this.taskText === "") {
          throw new Error("Пусто :(");
        }
        this.taskText = this.taskText.split(" ");
        this.taskText = this.taskText.join("");
        let computed = parseFloat(calculate(this.taskText));
        memory -= computed;
        this.buttonValue = "";
        break;
      }
      case "+": {
        if (this.taskText === "") {
          throw new Error("Пусто :(");
        }
        this.taskText = this.taskText.split(" ");
        this.taskText = this.taskText.join("");
        let computed = parseFloat(calculate(this.taskText));
        memory += computed;
        this.buttonValue = "";
        break;
      }
    }
    return this.buttonValue;
  }
}

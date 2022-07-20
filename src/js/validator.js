export { Validator };
export { NumberValidator };
export { EqualsValidator };
export { BracketValidator };
export { OneSignValidator };

import { calculate } from "./calculate_function.js";

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
    console.log(this.task);
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
      this.taskText.length = length - 1;
    }
    this.buttonValue = calculate(this.taskText.split(" ").join(""));
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
    //проверка цифра(, )(, !(
    if (
      this.buttonValue === "(" &&
      (this.taskText[this.taskText.length - 1] === "!" ||
        this.taskText[this.taskText.length - 1] === ")" ||
        Number.isInteger(+this.taskText[this.taskText.length - 1]))
    ) {
      this.buttonValue = "*(";
    }
    //проверка на пустые скобки
    else if (
      this.buttonValue === ")" &&
      this.taskText[this.taskText.length - 1] === "("
    ) {
      throw new Error("Не оставляйте пустые скобки!");
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
      this.taskText.length = length - 1;
    }
    return this.buttonValue;
  }
}
class OneSignValidator extends Validator {
  constructor(buttonValue, ButtonCssClass, ButtonId) {
    super(buttonValue, ButtonCssClass, ButtonId);
  }
  validate() {
    //проверка на два знака подряд и начало выражения, кроме ), числа и !
    if (
      !(
        this.taskText[this.taskText.length - 1] === ")" ||
        this.taskText[this.taskText.length - 1] === "!" ||
        Number.isInteger(+this.taskText[this.taskText.length - 1])
      )
    ) {
      throw new Error("Чего-то не хватает");
    }
    return " " + this.buttonValue;
  }
}

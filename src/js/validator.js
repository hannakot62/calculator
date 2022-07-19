export { Validator };
export { NumberValidator };
export { EqualsValidator };
export { BracketValidator };

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
    //это надо вообще????
    //или я просто не создаю эти объекты?
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
    console.log("work work work");
    //добавіть )чісло
    return this.buttonValue;
  }
}
class EqualsValidator extends Validator {
  constructor(buttonValue, ButtonCssClass, ButtonId) {
    super(buttonValue, ButtonCssClass, ButtonId);
  }
  validate() {
    console.log(this.task);
    //проверка на закрытые скобки
    if (countSymbol(this.taskText, "(") != countSymbol(this.taskText, ")")) {
      throw "Закройте все скобки!";
    }
    //проверка на е
    if (countSymbol(this.taskText, "e") > 0) {
      throw "Слишком большое число :(";
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
    //проверка цифра(
    if (
      this.buttonValue === "(" &&
      Number.isInteger(+this.taskText[this.taskText.length - 1])
    ) {
      this.buttonValue += "*(";
    }
    //проверка на пустые скобки
    else if (
      this.buttonValue === ")" &&
      this.taskText[this.taskText.length - 1] === "("
    ) {
      throw "Не оставляйте пустые скобки!";
    }
    //проверка знак) кроме !

    return this.buttonValue;
  }
}

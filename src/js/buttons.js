export { Button };
import { NumberValidator } from "./validator.js";
import { EqualsValidator } from "./validator.js";
import { BracketValidator } from "./validator.js";

class Button {
  constructor(place, cssClass, innerHTML, id, value) {
    let calculatorTable = document.getElementById("tableButtons");
    this.btn = document.createElement("button");
    this.btn.innerHTML = innerHTML;
    this.btn.className = cssClass;
    this.btn.id = id;
    //-----------------------------------
    this.value = value;
    this.originalvalue = value;
    //-----------------------------------
    calculatorTable.rows[place[0]].childNodes[place[1]].appendChild(this.btn);
    this.btn.addEventListener("click", () => {
      this.listenerFunction();
    });
  }
  validator() {
    //передать класс, числа для примера
    let valid = new EqualsValidator(this.value, this.cssClass, this.id);
    this.value = valid.validate();
    //у каждой кнопки свой
    //надо обработать таск и то, что задает кнопка
    //если надо добавить где-то умножение, скобку или отсечь последний знак -> меняю value
  }
  listenerFunction() {
    try {
      this.validator();
      console.log("hello from listener function");
      this.addToTask();
    } catch (e) {
      console.log(e);
      //добавить уведомление
    }
  }
  addToTask() {
    console.log("hello from add to task function");
    taskResult.innerHTML += this.value;
    this.value = this.originalvalue;
  }
}

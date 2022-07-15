import { calculate } from "./calculate_function.js";

let equals = document.getElementById("equals");
equals.addEventListener("click", () => {
  let task = document.getElementById("taskResult").innerHTML;
  if (task.length > 0) {
    let result = calculate(task);
    document.getElementById("taskResult").innerHTML = result;
    document.getElementById("history").innerHTML = task;
  }
});

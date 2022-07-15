let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
  document.getElementById("taskResult").innerHTML = "";
  document.getElementById("history").innerHTML = "";
});

let clearSymbol = document.getElementById("clearSymbol");
clearSymbol.addEventListener("click", () => {
  let task = document.getElementById("taskResult").innerHTML;
  task = task.split("");
  task.pop();
  task = task.join("");
  document.getElementById("taskResult").innerHTML = task;
});

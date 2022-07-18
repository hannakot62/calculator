export { calculate };

function countOperations(action) {
  let count = 0;
  for (let i = 0; i < action.length; i++) {
    if (!(Number.isInteger(+action[i]) || action[i] === ".")) {
      count++;
    }
  }
  return count;
}

function FindFirstHighPriorityIndex(action) {
  let procent = action.indexOf("%");
  let devide = action.indexOf("/");
  let multiply = action.indexOf("*");
  let min = action.length;
  if (procent > -1 && procent < action.length) {
    min = procent;
  }
  if (devide < min && devide > -1) {
    min = devide;
  }
  if (multiply < min && multiply > -1) {
    min = multiply;
  }
  return min; // индекс первого знака
}

function factorial(num) {
  if (String(num).includes(".")) {
    throw "Некорректный аргумент факториала!";
  }
  if (num < 0) {
    //надо как-то нормально обработать
    throw "Нельзя взять факториал у отрицательного числа!";
  }
  if (num > 21) {
    throw "Слишком большой аргумент факториала!";
  }
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
function power(base, exponent) {
  let result = base ** exponent;
  if (result != NaN) {
    return result;
  } else {
    throw "Некорректное возведение в степень";
  }
}
function FindFirstSuperHighPriorityIndex(action) {
  let fact = action.indexOf("!");
  let pow = action.indexOf("^");
  if (fact === -1) {
    return pow;
  }
  if (pow === -1) {
    return fact;
  }
  return fact < pow ? fact : pow;
}

// function SuperHighPriorityOperation(action, index) {
//   // выражения вида 76! 3^(+/-4)
//   let result;
//   switch (action[index]) {
//     case "!": {
//       let num = Number(action.slice(0, index));
//       result = factorial(num);
//     }
//     case "^": {
//       let base = action.slice(0, index);
//       base = Number(base);
//       let exp = action.slice(index + 2, action.length - 2);
//       exp = Number(exp);
//       result = power(base, exp);
//     }
//   }
//   return result;
// }

function simpleOperation(simple) {
  // + - / * %
  let result;
  let signIndex = -1;
  for (let i = 1; i < simple.length; i++) {
    if (!(Number.isInteger(+simple[i]) || simple[i] === ".")) {
      if (signIndex == 0) {
        continue;
      }
      signIndex = i;
      break;
    }
  }
  let first = simple.split("").slice(0, signIndex);
  first = first.join("");
  let second = simple.split("").slice(signIndex + 1);
  second = second.join("");
  first = parseFloat(first);
  second = parseFloat(second);
  switch (simple[signIndex]) {
    case "+": {
      result = first + second;
      break;
    }
    case "-": {
      result = first - second;
      break;
    }
    case "/": {
      if (second === 0) {
        throw "Нельзя делить на ноль!";
      }
      result = first / second;
      break;
    }
    case "*": {
      result = first * second;
      break;
    }
    case "%": {
      result = (second / 100) * first;
      break;
    }
  }

  return result;
}

function SuperHighCalculationPart(task) {
  //проверяем супер важные операции ! ^
  while (task.includes("!") || task.includes("^")) {
    let SuperHighResult;
    let symbolsToDelete = 0;
    let superHighIndex = FindFirstSuperHighPriorityIndex(task);
    let base = "";
    //если основание отрицательное
    if (task[superHighIndex - 1] === ")") {
      let baseLeftBracket = task.lastIndexOf("(", superHighIndex);
      task = task.split("");
      base = base.split("");
      base = task.slice(baseLeftBracket + 1, superHighIndex - 1);
      base = base.join("");
      task = task.join("");
      symbolsToDelete += 2;
    } else {
      let i = superHighIndex - 1;
      for (; Number.isInteger(+task[i]) || task[i] === "."; i--) {
        base += task[i];
      }
      base = base.split("");
      base.reverse();
      base = base.join("");
    }

    let baseLength = base.length;
    base = Number(base);
    let ppower = "";

    switch (task[superHighIndex]) {
      case "!": {
        if (task[superHighIndex - 1] === ")") {
          throw "Нельзя найти факториал отрицательного числа!";
        }
        SuperHighResult = factorial(base);
        symbolsToDelete = baseLength + 1;
        task = task.split("");
        task.splice(
          superHighIndex - baseLength,
          symbolsToDelete,
          SuperHighResult
        );
        task = task.join("");
        break;
      }
      case "^": {
        if (task[superHighIndex + 1] === "(") {
          //если показатель отрицательный
          let powerRightBracket = task.indexOf(")", superHighIndex);
          task = task.split("");
          ppower = ppower.split("");
          ppower = task.slice(superHighIndex + 2, powerRightBracket);
          ppower = ppower.join("");
          task = task.join("");
          symbolsToDelete += 2;
        } else {
          let i = superHighIndex + 1;
          ppower = ppower.split("");
          for (; Number.isInteger(+task[i]) || task[i] === "."; i++) {
            ppower.push(task[i]);
          }
          ppower = ppower.join("");
        }
        let powerLength = ppower.length;
        ppower = Number(ppower);

        SuperHighResult = power(base, ppower);
        symbolsToDelete += baseLength + powerLength + 1;
        task = task.split("");
        task.splice(
          superHighIndex - baseLength,
          symbolsToDelete,
          SuperHighResult
        );
        task = task.join("");
        break;
      }
    }
  }
  return task;
}
function HighCalculationPart(task) {
  //проверяем на просто важные операции
  while (task.includes("/") || task.includes("*") || task.includes("%")) {
    let highIndex = FindFirstHighPriorityIndex(task);
    if (task[highIndex + 1] === "(") {
      let RightBracketIndexToDelete = task.indexOf(")", highIndex);
      task = task.split("");
      task.splice(highIndex + 1, 1);
      task.splice(RightBracketIndexToDelete - 1, 1);
      task = task.join("");
    }

    let j = highIndex - 1;
    for (; Number.isInteger(+task[j]) || task[j] === "."; j--) {} //ищем начало
    let leftIndex = j + 1;

    let i;
    i = task[highIndex + 1] === "-" ? highIndex + 2 : highIndex + 1;

    for (; Number.isInteger(+task[i]) || task[i] === "."; i++) {} //нашли индекс конца выражения
    let rightIndex = i - 1;
    let simpleHighTask = task.slice(leftIndex, rightIndex + 1);
    let simpleHighResult = simpleOperation(simpleHighTask);
    task = task.split("");
    task.splice(leftIndex, simpleHighTask.length, simpleHighResult);
    task = task.join("");
  }
  return task;
}
function SimpleCalculationPart(task) {
  //считаем что-то людское
  //посмотреть количество операций
  //простые операции
  let operationsLeft = countOperations(task);
  if (task[0] === "-") {
    operationsLeft--;
  }
  while (operationsLeft) {
    let simpleTask = task[0];
    let operationFound = 0;
    for (let i = 1; operationFound < 2; i++) {
      if (!(Number.isInteger(+task[i]) || task[i] === ".")) {
        operationFound++;
        if (operationFound != 2) {
          simpleTask += task[i];
        }
      } else {
        simpleTask += task[i];
      }
    }
    let simpleResult = simpleOperation(simpleTask);
    task = task.split("");
    task.splice(0, simpleTask.length, simpleResult);
    task = task.join("");
    operationsLeft--;
  }
  return task;
}

function BracketCalculationPart(task) {
  while (task.includes("(")) {
    let RightBracketIndex = task.indexOf(")");
    let LeftBracketIndex = task.lastIndexOf("(", RightBracketIndex);
    let action = task.slice(LeftBracketIndex + 1, RightBracketIndex); // действие без скобок

    if (
      !(
        Number(action) < 0 && //если в скобках НЕ отрицательный правый операнд приоритетной операции
        (task[LeftBracketIndex - 1] === "*" ||
          task[LeftBracketIndex - 1] === "/" ||
          task[LeftBracketIndex - 1] === "%" ||
          task[LeftBracketIndex - 1] === "!" ||
          task[LeftBracketIndex - 1] === "^" ||
          task[RightBracketIndex - 1] === "^")
      )
    ) {
      let symbolsToDelete = action.length + 2;
      action = calculate(action);

      task = task.split("");
      //проверка на + - прі прісоедіненіі
      task.splice(LeftBracketIndex, symbolsToDelete, action);
      task = task.join("");
      action = String(action);
      if (action[0] === "-" && task[LeftBracketIndex - 1] != "(") {
        task = task.split("");
        if (
          action[0] === "-" &&
          (task[LeftBracketIndex - 1] === "^" || //проверка на отрицательный второй операнд для */^%
            task[LeftBracketIndex - 1] === "/" ||
            task[LeftBracketIndex - 1] === "*" ||
            task[LeftBracketIndex - 1] === "%")
        ) {
          task.splice(LeftBracketIndex, 0, "(");
          task.splice(LeftBracketIndex + action.length + 1, 0, ")");
        } else if (task[LeftBracketIndex - 1] === "-") {
          task.splice(LeftBracketIndex - 1, 2, "+"); // проверка на два минуса
        } else {
          task.splice(LeftBracketIndex - 1, 1); //проверка на +-
        }
        task = task.join("");
      }
    } else {
      //найти внешние для этого выражения скобки и передать их в calculete, если они есть, если нет -> if'ы
      if (task.slice(0, LeftBracketIndex).includes("(")) {
        let outerRightBracketIndex = task.indexOf(")", RightBracketIndex + 1);
        let outerLeftBracketIndex = task.lastIndexOf("(", LeftBracketIndex - 1);
        let outerAction = task.slice(
          outerLeftBracketIndex + 1,
          outerRightBracketIndex
        ); // действие без скобок

        let outerSymbolsToDelete = outerAction.length + 2;
        outerAction = calculate(outerAction);

        task = task.split("");
        //проверка на + - прі прісоедіненіі
        task.splice(outerLeftBracketIndex, outerSymbolsToDelete, outerAction);
        task = task.join("");
        outerAction = String(outerAction);
        if (outerAction[0] === "-" && task[outerLeftBracketIndex - 1] != "(") {
          task = task.split("");
          if (
            outerAction[0] === "-" &&
            (task[outerLeftBracketIndex - 1] === "^" || //проверка на отрицательный второй операнд для */^%
              task[outerLeftBracketIndex - 1] === "/" ||
              task[outerLeftBracketIndex - 1] === "*" ||
              task[outerLeftBracketIndex - 1] === "%")
          ) {
            task.splice(outerLeftBracketIndex, 0, "(");
            task.splice(outerLeftBracketIndex + outerAction.length + 1, 0, ")");
          } else if (task[outerLeftBracketIndex - 1] === "-") {
            task.splice(outerLeftBracketIndex - 1, 2, "+"); // проверка на два минуса
          } else {
            task.splice(outerLeftBracketIndex - 1, 1); //проверка на +-
          }
          task = task.join("");
        }
      }
      //---------------------------------------------------------------------------
      if (task.includes("!") || task.includes("^")) {
        task = SuperHighCalculationPart(task);
      }
      if (task.includes("*") || task.includes("/") || task.includes("%")) {
        task = HighCalculationPart(task);
      }
    }
  }
  return task;
}

function calculate(task) {
  //сразу проверяем скобки
  task = BracketCalculationPart(task);
  //проверяем на другие приоритетные операции: / * % ! ^
  //и всё считаем нормально
  task = SuperHighCalculationPart(task);
  task = HighCalculationPart(task);
  task = SimpleCalculationPart(task);
  if (task === NaN) {
    throw "Упс, что-то пошло не так :(";
  }
  return task;
}

let task = "10+(3+2+(-3!-4.5)+15-5-(9+(2+1+1)+1))"; // 0.5  //20 не цифр и, //37 символов
let a = calculate(task); //працуе 0.5
console.log(a);
console.log(calculate("21*7*(3-2!)-((2%10-5)/2)+13")); //162,4
console.log(simpleOperation("12*-4")); //ok
console.log(calculate("120/(-6)-12+(8+9)")); // ok -15

console.log(calculate("5^(-3)")); //ok 0.008
console.log(calculate("12-2!+((2^(-5)+2)-1)+13")); //працуе 24.03125

console.log(calculate("123-34.5*76-5!*(2^8.8)")); // -55985.62....
console.log(calculate("9-(-2)^5+32%6")); //42,92

console.log(calculate("66-9^(18/(-9))")); //65,9876.....
console.log(calculate("18-3!!+49/7")); //-695
console.log(calculate("12-5*((8-3^1.1)+45)-9!")); //-363116.258...
console.log(calculate("2^((((5))))"));
console.log(calculate("21211221212121+667565656556"));

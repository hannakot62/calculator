# Folder description

js folder is used as main source code storage.

- ## calculate_function.js

The file contains the main logical function of the calculator.

The function takes a task string as an input parametr and prioritizes the operations inside. The return value is the result calculated in string form.

The calculation process is devided into four parts: bracket, super-high (is responsible for exponentiation, finding the root and factorial), high (is responsible for multiplication, division, finding a percentage) and simple (is pesponsible for addition and substraction). Each step is supported with the exception check needed.

:star: In bracket calculation part the main idea is that the algorithm finds the first right bracket and then using the index of the bracket the left bracket is found. If there's a numeric operand in the brackets the algorithm passes through it and finds outer brackets or neighbour brackets to the right. The action in brackets is recursionally passed to calculate function.

:star: Next calculation step is super high part, where the algorithm finds the first index of super high calculation operator (as written above its about exponentiation, finding the root and factorial). Checking the symbols from both sides for being a digit or a dot the calculator finds the operands for the action and then calculates it.

:star: Then it comes to high calculation part (calculating multiply, divide, find a percentage operations) using the same logic as super high calculation part.

:star: And the last step is to calculate any simple operation such as addition or substraction.

Each part is responsible for its result being implemented into the initial task editing the preceding sign if needed.

- ## calculate.test.js

The file contains tests for calculate function.

- ## buttons.js

The file contains the source code for calculator buttons creation. Each calculator button is an example of Button class. Its constructor creates a button element taking its place in the calculator table, CSS class, inner HTML, id, value and the class of the validator needed as input parameters.

Each button has an event listener. Its task is to call a validation method and if everything is correct to call a method for adding the button's value to the main task (the calculation task is meant).

Validation method is responsible for creation the validator needed (its classname is passed to the Button constructor) and calling its validate method.

- ## validator.js

The file is used for abstract Validator class and its descendants.

Each descend validator class is responsible for checking the main calculation task and the button's (that called the validator) value for compatibility. If needed something is added to the button value or to the main task or took out of there.

- ## clear_buttons.js

The file contains clear buttons event listeners. The one button is used for clearing the last symbol and the other is used for the clearing the whole main calculation task.

- ## change_theme.js

The file is responsible for changing the calculator's theme. The theme data is stored in browser's local storage. Default theme is light.

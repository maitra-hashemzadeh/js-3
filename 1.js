// ? Question-1:follow these steps:
//todo-1:Write a function called "calculate" that takes 4 parameters.
//todo-2:The first and seconde parameters should be numbers.
//todo-3:The third parameter should be a string indicating either "add => addition" or "multiply => multiplication".
//todo-4:The fourth parameter should be a function that log the result of the calculation.

function calculate(num1,num2,str,func) {
    if (operation === "add") {
        result = num1 + num2;
      } else if (operation === "multiply") {
        result = num1 * num2;
      } else {
        result = "Invalid operation";
      }
    
      callback(result);
    }
    function handleCalculationResult(result) {
      console.log("Result:", result);
    }


calculate(5, 3, "add", handleCalculationResult);
calculate(4, 6, "multiply", handleCalculationResult);
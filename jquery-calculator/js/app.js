$(document).ready(function() {
  let currentInput = "";
  let result = "";

  $(".button").click(function() {
    const value = $(this).text();

    if (value === "C") {
      clearDisplay();
    } else if (value === "=") {
      evaluateExpression();
    } else if (isOperator(value)) {
      handleOperator(value);
    } else {
      updateInput(value);
    }
  });

  function clearDisplay() {
    currentInput = "";
    result = "";
    $(".display").text("0");
  }

  function evaluateExpression() {
    try {
      result = eval(currentInput);
      $(".display").text(result);
      currentInput = result.toString(); // Converts result to a string to handle further operations
    } catch (error) {
    $(".display").text("Error");
    }
  }

  function updateInput(value) {
    currentInput += value;
    $(".display").text(currentInput);
  }

  function isOperator(value) {
    return ["+", "-", "*", "/"].includes(value);
  }

  function handleOperator(value) {
    const lastInput = currentInput.slice(-1);
    if (isOperator(lastInput)) {
      currentInput = currentInput.slice(0, -1) + value;
    } else {
      currentInput += value;
    }
    $(".display").text(currentInput);
  }
});
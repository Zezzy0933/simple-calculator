const buttons = document.querySelectorAll("button");
const wynik = document.getElementById("wynik");
let dzialanie = "0";
let firstNumber = "";
let secondNumber = "";
let operator = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    if (buttonValue === "C") {
      console.log("kliknieto C");
      wynik.textContent = "0";
      dzialanie = "0";
      firstNumber = "";
      secondNumber = "";
      operator = "";
      return;
    }

    if (buttonValue === "=") {
      const a = parseFloat(firstNumber);
      const b = parseFloat(secondNumber);
      let result;
      if (operator === "+") {
        result = a + b;
      } else if (operator === "-") {
        result = a - b;
      } else if (operator === "*") {
        result = a * b;
      } else if (operator === "/") {
        result = a / b;
      }
      result = parseFloat(result.toFixed(10));  // toFixed(10) : zaokrągla do 10 liczb       // po przecinku i zmienia ją na string a parsefloat zmienia je w liczbe np 0.30000000000004 = 0.3000000000 = 0.3
      wynik.textContent = result;

      firstNumber = result;
      secondNumber = "";
      operator = "";
      return;
    }

    if (buttonValue === ".") {
      if (operator === "") {
        if (!firstNumber.includes(".")) {   // sprawdza czy firstNumber nie zawiera już kropki, jeśli nie zawiera to dodaje kropkę i aktualizuje wynik
          firstNumber += ".";
          wynik.textContent = firstNumber;
        }
      } else {
        if (!secondNumber.includes(".")) {
          secondNumber += ".";
          wynik.textContent += ".";
        }
      }
      return;
    }
    if (isNaN(buttonValue) && buttonValue !== "." && operator === "") {
      operator = buttonValue;
      wynik.textContent += operator;
      return;
    }
    if (operator === "" && firstNumber.length <= 100) {
      firstNumber += buttonValue;
      wynik.textContent = firstNumber;
      return;
    } if (operator !== "" && secondNumber.length <= 100) {
      secondNumber += buttonValue;
      wynik.textContent += buttonValue;
      return;
    }
  });
});
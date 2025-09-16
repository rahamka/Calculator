let displayDiv = document.querySelector("#display-div");

let digit10Access = document.querySelector("#digit10");
let digit9Access = document.querySelector("#digit9");
let digit8Access = document.querySelector("#digit8");
let digit7Access = document.querySelector("#digit7");
let digit6Access = document.querySelector("#digit6");
let digit5Access = document.querySelector("#digit5");
let digit4Access = document.querySelector("#digit4");
let digit3Access = document.querySelector("#digit3");
let digit2Access = document.querySelector("#digit2");
let digit1Access = document.querySelector("#digit1");
let digit0Access = document.querySelector("#digit0");
let dotAccess = document.querySelector("#dot");

let num1 = "";
let operator = "";
let num2 = "";
let resultDisplayed = false;

function appendDigit(digit) {
  if (resultDisplayed) {
    num1 = "";
    num2 = "";
    operator = "";
    resultDisplayed = false;
  }
  if (operator === "") {
    num1 += digit;
    displayDiv.innerText = num1;
  } else {
    num2 += digit;
    displayDiv.innerText = num1 + " " + operator + " " + num2;
  }
}

digit10Access.addEventListener("click", () => appendDigit("10"));
digit9Access.addEventListener("click", () => appendDigit("9"));
digit8Access.addEventListener("click", () => appendDigit("8"));
digit7Access.addEventListener("click", () => appendDigit("7"));
digit6Access.addEventListener("click", () => appendDigit("6"));
digit5Access.addEventListener("click", () => appendDigit("5"));
digit4Access.addEventListener("click", () => appendDigit("4"));
digit3Access.addEventListener("click", () => appendDigit("3"));
digit2Access.addEventListener("click", () => appendDigit("2"));
digit1Access.addEventListener("click", () => appendDigit("1"));
digit0Access.addEventListener("click", () => appendDigit("0"));

dotAccess.addEventListener("click", () => {
  if (resultDisplayed) {
    num1 = "";
    num2 = "";
    operator = "";
    resultDisplayed = false;
  }
  let current = operator === "" ? num1 : num2;
  if (!current.includes(".")) {
    if (current === "") {
      current = "0";
    }
    if (operator === "") {
      num1 += ".";
      displayDiv.innerText = num1;
    } else {
      num2 += ".";
      displayDiv.innerText = num1 + " " + operator + " " + num2;
    }
  }
});

function calculate() {
  let n1 = parseFloat(num1) || 0;
  let n2 = parseFloat(num2) || 0;
  let result;
  switch (operator) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n2 === 0 ? "Error" : n1 / n2;
      break;
    case "%":
      result = n1 % n2;
      break;
    default:
      return;
  }
  displayDiv.innerText = result;
  num1 = result.toString();
  num2 = "";
  operator = "";
  resultDisplayed = true;
}

function setOperator(op) {
  if (num1 === "") {
    num1 = "0";
  }
  if (operator !== "" && num2 !== "") {
    calculate();
  }
  operator = op;
  displayDiv.innerText = num1 + " " + operator + " ";
  resultDisplayed = false;
}

document.querySelector("#operator1").addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  displayDiv.innerText = "";
  resultDisplayed = false;
});

document
  .querySelector("#operator2")
  .addEventListener("click", () => setOperator("+"));
document
  .querySelector("#operator3")
  .addEventListener("click", () => setOperator("-"));
document
  .querySelector("#operator4")
  .addEventListener("click", () => setOperator("%"));
document
  .querySelector("#operator5")
  .addEventListener("click", () => setOperator("/"));
document
  .querySelector("#operator6")
  .addEventListener("click", () => setOperator("*"));
document.querySelector("#operator7").addEventListener("click", () => {
  if (operator === "") {
    if (num1 !== "") {
      num1 = (-parseFloat(num1)).toString();
      displayDiv.innerText = num1;
    }
  } else if (num2 !== "") {
    num2 = (-parseFloat(num2)).toString();
    displayDiv.innerText = num1 + " " + operator + " " + num2;
  }
});

document.querySelector("#operator8").addEventListener("click", calculate);

window.addEventListener("load", initEvent);
var expression = "";
function initEvent() {
  var numbers = document.querySelectorAll(".number");
  var operand = document.querySelectorAll(".operand");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", appendNumbers);
  }
  for (let i = 0; i < operand.length; i++) {
    operand[i].addEventListener("click", appendOperator);
  }
  document.querySelector(".equal").addEventListener("click", calc);
  document.querySelector(".clear").addEventListener("click", clear);
  document.querySelector(".back").addEventListener("click", back);
}
function appendNumbers() {
  var num = event.srcElement.innerHTML;
  expression += num;
  document.querySelector("#insert").value = expression;
}
function appendOperator() {
  var num = event.srcElement.innerHTML;
  expression += num;
  if (expression.charAt(expression.length - 1) == '+'||expression.charAt(expression.length - 1) == '-'||expression.charAt(expression.length - 1) == '*'||expression.charAt(expression.length - 1) == '/') {
    document.querySelector("#insert").value = expression;
    expression = expression.substring(0, expression.length - 1);
  } else {
      
  }
}
function calc() {
  var result = eval(expression);
  document.querySelector("#result").value = result;
}
function clear() {
  document.querySelector("#insert").value = "";
  document.querySelector("#result").value = "";
  expression = "";
}
function back() {
  if (expression.length > 0) {
    expression = expression.substring(0, expression.length - 1);
    document.querySelector("#insert").value = expression;
    console.log(expression);
  }
}

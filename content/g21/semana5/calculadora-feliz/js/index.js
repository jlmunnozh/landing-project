'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const calculatorForm = document.forms['formularioDeCalculo'];
  // const calculatorForm = document.getElementById('calculatorForm');

  calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const number1 = +calculatorForm['number1'].value;
    const operator = calculatorForm['operator'].value;
    const number2 = +calculatorForm['number2'].value;
    const errorContainer = document.getElementById('errorContainer');
    const resultContainer = document.getElementById('resultContainer');

    const operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b
    };

    if (isNaN(number1) || isNaN(number2) || operator === '') {
      errorContainer.textContent = 'Debe completar el formulario';
    } else {
      errorContainer.textContent = '';
      resultContainer.textContent = operations[operator](number1, number2);
    }
  });
});
const generateDiv = document.querySelector('.generate-div'),
    copyDiv = document.querySelector('.copy-div'),
    range = document.querySelector('.range'),
    number = document.querySelector('.number');
range.addEventListener('input', () => {
    number.textContent = range.value;
});
const uppercaseChekbox = document.querySelector('uppercase-chekbox'),
    lowercaseChekbox = document.querySelector('lowercase-checbox'),
    numberChekbox = document.querySelector('number-checbox'),
    symbolChekbox = document.querySelector('symbol-checbox');

const generateDiv = document.querySelector('.generate-div'),
    copyDiv = document.querySelector('.copy-div'),
    range = document.querySelector('.range'),
    number = document.querySelector('.number');
range.addEventListener('input', () => {
    number.textContent = range.value;
});
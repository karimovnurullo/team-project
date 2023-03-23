const generateDiv = document.querySelector('.generate-div'),
    copyDiv = document.querySelector('.copy-div'),
    range = document.querySelector('.range'),
    number = document.querySelector('.number'),
    uppercaseEl = document.querySelector('.uppercase'),
    lowercaseEl = document.querySelector('.lowercase'),
    digitEl = document.querySelector('.include-number'),
    symbolEl = document.querySelector('.symbols'),
    generateEl = document.querySelector('.generate-btn');




range.addEventListener('input', () => {
    number.textContent = range.value;
});
function getRandomChar(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword(length, includeUppercase, includeLowercase, includeDigit, includeSymbol) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const digitChars = '0123456789'.split('');
    const symbolChars = '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?'.split('');
}


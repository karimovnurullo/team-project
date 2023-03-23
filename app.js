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

function getRandomChar(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword(length, includeUppercase, includeLowercase, includeDigit, includeSymbol) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const digitChars = '0123456789'.split('');
    const symbolChars = '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?'.split('');
    const charSets = [];

    if (includeUppercase) {
        charSets.push(uppercaseChars);
    }
    if (includeLowercase) {
        charSets.push(lowercaseChars);
    }
    if (includeDigit) {
        charSets.push(digitChars);
    }
    if (includeSymbol) {
        charSets.push(symbolChars);
    }

}


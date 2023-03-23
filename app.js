const generateDiv = document.querySelector('.generate-div'),
    copyDiv = document.querySelector('.copy-div'),
    range = document.querySelector('.range'),
    number = document.querySelector('.number'),
    generatebtn = document.querySelector('.generate-btn');

const uppercaseChekbox = document.querySelector('.uppercase-chekbox'),
    lowercaseChekbox = document.querySelector('.lowercase-checbox'),
    numberChekbox = document.querySelector('.number-checbox'),
    symbolChekbox = document.querySelector('.symbol-checbox');
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


generatebtn.addEventListener('click', () => {
    const includeLowercase = lowercaseChekbox.checked;
      const includeUppercase = uppercaseChekbox.checked;
    const includenumber = numberChekbox.checked;
     const includeSymbol = symbolChekbox.checked;
     

     const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includenumber, includeSymbol);
     passwordOutput.textContent = password;
})
const generateDiv = document.querySelector('.generate-div'),
    copyDiv = document.querySelector('.copy-div'),
    range = document.querySelector('.range'),
    number = document.querySelector('.number'),
    generatebtn = document.querySelector('.generate-btn');

range.addEventListener('input', () => {
    number.textContent = range.value;
});

function getRandomChar(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

generatebtn.addEventListener('click', () => {
    const uppercaseChekbox = document.querySelector('.uppercase-chekbox');
    const lowercaseChekbox = document.querySelector('.lowercase-chekbox');
    const numberChekbox = document.querySelector('.number-chekbox');
    const symbolChekbox = document.querySelector('.symbol-chekbox');

    const includeLowercase = lowercaseChekbox.checked;
    const includeUppercase = uppercaseChekbox.checked;
    const includenumber = numberChekbox.checked;
    const includeSymbol = symbolChekbox.checked;
    const passwordLength = number.textContent;

    const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includenumber, includeSymbol);
    if(includeLowercase || includeUppercase || includeSymbol || includenumber){
        generateDiv.textContent = password;
    }
})

function generatePassword(length, includeUppercase, includeLowercase, includenumber, includeSymbol) {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = "!@#$%^&*()[]{}<>?/";
    let chars = '';

    if (includeUppercase) {
        chars += upperChars;
    }
    if (includeLowercase) {
        chars += lowerChars;
    }
    if (includenumber) {
        chars += numberChars;
    }
    if (includeSymbol) {
        chars += symbolChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}
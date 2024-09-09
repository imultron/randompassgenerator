const len = document.getElementById('range');
const num = document.getElementById('first');
const symbol    = document.getElementById('second');
const upper = document.getElementById('third');
const lower = document.getElementById('fourth');
const generatebutton = document.getElementById('generate');
const Password = document.getElementById('generated-password');
const copyButton = document.getElementById('copy-button');


len.addEventListener('input', () => {
    lend.textContent = len.value;
});


const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';






generatebutton.addEventListener('click',() => {
    const length = len.value;
    const usenum = num.checked;
    const usesymbol = symbol.checked;
    const useupper = upper.checked;
    const uselower = lower.checked;

    let characterPool = '';
    if (uselower) characterPool += lowercase;
    if (useupper) characterPool += uppercase;
    if (usenum) characterPool += numbers;
    if (usesymbol) characterPool += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    Password.value = password;
});
    copyButton.addEventListener('click', () => {
        Password.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    });





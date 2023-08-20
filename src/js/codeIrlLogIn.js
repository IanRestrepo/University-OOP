const userName = document.getElementById('userNameInpLogin');
const password = document.getElementById('passwordInpLogin');

const codeIrlName = document.getElementById('UserNameCode');
const codeIrlPassword = document.getElementById('PasswordCode');

userName.addEventListener('input', (e) => {
    
    if ( userName.value === '' ) {
        codeIrlName.classList.remove('Brown');
        codeIrlName.textContent = 'UserName';
    } else {
        codeIrlName.classList.add('Brown');
        codeIrlName.textContent = `"${userName.value}"`
    }

});

password.addEventListener('input', () => {

    if ( password.value === '' ) {
        codeIrlPassword.classList.remove('Brown');
        codeIrlPassword.textContent = 'Password';
    } else {
        const passwordValue = password.value;
        const maskedPassword = '*'.repeat(passwordValue.length);

        codeIrlPassword.classList.add('Brown');
        codeIrlPassword.textContent = ` "${maskedPassword}"`;
    }

})
 
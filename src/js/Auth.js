// === Authentication Section ===//


const userNameForm = document.getElementById('userNameInp');
const userNameFormLogin = document.getElementById('userNameInpLogin');
const passwordForm = document.getElementById('passwordInp');
const passwordFormLogin = document.getElementById('passwordInpLogin');
const signUpForm = document.getElementById('submitInfo');
const signUpFormLogin = document.getElementById('submitInfoLogin');
const userNameToShow = document.getElementById('userNameToShow');
const secretThingChange = document.getElementById('Title');
const userNameCode = document.getElementById('UserNameCode');
const passwordCode = document.getElementById('PasswordCode');
let secretKey = '-'


document.addEventListener('DOMContentLoaded', () => {
    const userNameToShowElement = document.getElementById('userNameToShow');
    const storedUserName = localStorage.getItem('UserName');

    if (storedUserName) {
        userNameToShowElement.innerHTML = `${storedUserName}`;
    }
});


userNameForm.addEventListener('input', () => {

    const usernameValue = userNameForm.value;

    if (usernameValue.length > 20) {
        userNameForm.value = usernameValue.slice(0, 20);
    }

    const sanitizedUsername = usernameValue.replace(/[^\w]/g, '');
    userNameForm.value = sanitizedUsername;

    if (userNameForm.value == '') {
        userNameCode.classList.remove('Brown');
        userNameCode.textContent = 'UserName'
    }
    else {
        userNameCode.classList.add('Brown');
        userNameCode.textContent = ` "${userNameForm.value}"`
    }

    console.log('Username changed:', userNameForm.value);

});

userNameFormLogin.addEventListener('input', () => {
    const userNameLoginValue = userNameFormLogin.value; // You get HERE
})

passwordForm.addEventListener('input', () => {

    if (passwordForm.value == '') {
        passwordCode.classList.remove('Brown');
        passwordCode.textContent = 'Password'
    }
    else {
        const passwordValue = passwordForm.value;
        const maskedPassword = '*'.repeat(passwordValue.length);
    
        passwordCode.classList.add('Brown');
        passwordCode.textContent = ` "${maskedPassword}"`
        console.log('Password Detected: ', passwordForm.value)
    }

  
})

signUpForm.addEventListener('click', (event) => {
    const storedUserName = localStorage.getItem('UserName');
    const storedPassword = localStorage.getItem('Password')

    if (!storedUserName && !storedPassword) { // Cambio aquí: && en lugar de &
        console.warn('Data Saved Successfully!')
        localStorage.setItem('UserName', userNameForm.value)
        localStorage.setItem('Password', passwordForm.value)

        event.preventDefault(); 
        window.location.href = 'home.html';
    } else {
        event.preventDefault();

        Toastify({
            text: "You Already have an account!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#161717",
            },
            onClick: function () { }
        }).showToast();
    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === secretKey) {
        const secretThingChange = document.getElementById('Title');
        secretThingChange.textContent = 'Shhh this is secret!';
    }
});

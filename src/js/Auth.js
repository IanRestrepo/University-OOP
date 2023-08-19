// === Authentication Section ===//

const userNameForm = document.getElementById('userNameInp');
const passwordForm = document.getElementById('passwordInp');
const loginForm = document.getElementById('submitInfo');
const userNameToShow = document.getElementById('userNameToShow');
const secretThingChange = document.getElementById('Title');
const userNameCode = document.getElementById('UserNameCode');
const passwordCode = document.getElementById('PasswordCode')
let secretKey = 9


document.addEventListener('DOMContentLoaded', () => {
    const userNameToShowElement = document.getElementById('userNameToShow');
    const storedUserName = localStorage.getItem('UserName');
  
    if (storedUserName) {
      userNameToShowElement.innerHTML = `${storedUserName}`;
    } 
  });
  

userNameForm.addEventListener('input', () => {

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

passwordForm.addEventListener('input', ()=> {

    if (userNameForm.value == '') {
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

loginForm.addEventListener('click', () => {
    console.warn('Data Saved Successfully!')
    localStorage.setItem('UserName', userNameForm.value)
    localStorage.setItem('Password', passwordForm.value)
    
    event.preventDefault();
    window.location.href = 'home.html';
})

document.addEventListener('keydown', (event) => {
    if (event.key === '9') {
      const secretThingChange = document.getElementById('Title');
      secretThingChange.textContent = 'You Did it';
    }
  });

class User {
    constructor(UserName, passwordForm, isAdmin) {
        this.UserName = UserName,
        this.passwordForm = passwordForm,
        this.isAdmin = isAdmin
    }

    pressSecretKey(Key) {
        secretThingChange.addEventListener('keydown', (e) => {
            if (e.key === '***' ) {
                secretThingChange.innerHTML = `***`;
            }
        })
    }
}
// === Authentication Section ===//

const userNameForm = document.getElementById('userNameInp');
const passwordForm = document.getElementById('passwordInp');
const signUpForm = document.getElementById('submitInfo');
const userNameToShow = document.getElementById('userNameToShow');
const secretThingChange = document.getElementById('Title');
const userNameCode = document.getElementById('UserNameCode');
const passwordCode = document.getElementById('PasswordCode')
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

signUpForm.addEventListener('click', () => {
    const storedUserName = localStorage.getItem('UserName');
    const storePassword = localStorage.getItem('Password')

    if ( !storedUserName & !storePassword ) {
        console.warn('Data Saved Successfully!')
        localStorage.setItem('UserName', userNameForm.value)
        localStorage.setItem('Password', passwordForm.value)
        
        event.preventDefault();
        window.location.href = 'home.html';
    } else {
        event.preventDefault();
        console.error('You already have an account!')
    }

})

document.addEventListener('keydown', (event) => {
    if (event.key === secretKey) {
      const secretThingChange = document.getElementById('Title');
      secretThingChange.textContent = 'Shhh this is secret!';
    }
  });

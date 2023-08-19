// === Authentication Section ===//

const userNameForm = document.getElementById('userNameInp');
const passwordForm = document.getElementById('passwordInp');
const loginForm = document.getElementById('submitInfo');
const userNameToShow = document.getElementById('userNameToShow');
const secretThingChange = document.getElementById('Title');
let secretKey = 9


document.addEventListener('DOMContentLoaded', () => {
    const userNameToShowElement = document.getElementById('userNameToShow');
    const storedUserName = localStorage.getItem('UserName');
  
    //if (storedUserName) {
      //userNameToShowElement.innerHTML = `${storedUserName}`;
    //} 
  });
  

userNameForm.addEventListener('input', () => {
    console.log('Username changed:', userNameForm.value);

});

passwordForm.addEventListener('input', ()=> {
    console.log('Password Detected: ', passwordForm.value)
  
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
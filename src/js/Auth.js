// === Authentication Section ===//

const userNameForm = document.getElementById('userNameInp');
const passwordForm = document.getElementById('passwordInp');
const loginForm = document.getElementById('submitInfo');
const userNameToShow = document.getElementById('userNameToShow');


document.addEventListener('DOMContentLoaded', () => {
    const userNameToShowElement = document.getElementById('userNameToShow');
    const storedUserName = localStorage.getItem('UserName');
  
    if (storedUserName) {
      userNameToShowElement.innerHTML = `${storedUserName}`;
    } 
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
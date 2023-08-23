class User {
    constructor(Name, Password) {
        this.Name = Name,
        this.Password = Password;
    }
}


// navigation.js
function goto(page) {
    switch (page) {
        case "ix":
            window.location.href = "index.html";
            break;
        case "hm":
            window.location.href = "home.html";
            break;
        case 'lg':
            window.location.href = 'login.html'
        case "pl":
            window.location.href = 'plantilla.html'
        case 'na':
            window.location.href = 'noAuth.html'
        default:
            console.log("Página no reconocida");
    }
}

// Habilitar el acceso a la función desde la consola de desarrolladores
window.goto = goto;


function registerUser() {
    const newUserName = document.getElementById('userNameInp');
    const newPassword = document.getElementById('passwordInp');

    // Validations

    const sanitizedUsername = newUserName.value.replace(/[^\w]/g, '');
    newUserName.value = sanitizedUsername;

    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = savedUsers.find((user) => user.Name === newUserName.value);

    if (newUserName.value === '' || newPassword.value === '') {
        Toastify({
            text: "Your username OR your password cannot be empty!",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#161717",
            },
        }).showToast();
    } else if (newUserName.value.length > 20  || newPassword.value.length < 5 || newUserName.value.length < 3) {
        Toastify({
            text: "Your username and password must be between 5 and 20 characters!",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#161717",
            },
        }).showToast();
    } else if (existingUser) {
        Toastify({
            text: "This username is already in use, please choose another one!",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#161717",
            },
        }).showToast();
    } else {
        const newUser = new User(newUserName.value, newPassword.value);
        
        savedUsers.push(newUser);

        localStorage.setItem('loggedInUser', newUserName.value);

        localStorage.setItem('users', JSON.stringify(savedUsers));

        Toastify({
            text: "Your account was created successfully",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#161717",
            },
        }).showToast();

        setTimeout(()=> {
            window.location = '/src/html/home.html'
        }, 2000);
    }
}

// Login

function loginUser() {

    const userName = document.getElementById('userNameInpLogin');
    const password = document.getElementById('passwordInpLogin');
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const loggedInUser = savedUsers.find((user) => user.Name === userName.value && user.Password === password.value);

    if ( loggedInUser ) {

        localStorage.setItem('loggedInUser', loggedInUser.Name);

        Toastify({
            text: "Loggin in...",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#161717",
            },
        }).showToast();

        setTimeout(()=> {
            window.location = '/src/html/home.html'
        }, 2000);

    } else {
        
        Toastify({
            text: "This account Does not exist or This information is incorrect.",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#161717",
            },
        }).showToast();

    }

}

function setRol() {
    const roles = {
        "SuperAdmin": 0,
        "Admin": 1,
        "Moderator": 2,
        "Basic-User":3
    }
}
class User {
    constructor(Name, Password) {
        this.Name = Name,
        this.Password = Password;
    }
}

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
    } else if ((newUserName.value.length > 12 || newPassword.value.length > 12) || (newPassword.value.length < 5 || newUserName.value.length < 3)) {
        Toastify({
            text: "Your username and password must be between 5 and 12 characters!",
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

        localStorage.setItem('users', JSON.stringify(savedUsers));

       // window.location = '/src/html/home.html'

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
    }
}

// Login

function loginUser() {
    
}
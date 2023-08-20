document.addEventListener('DOMContentLoaded', () => {

    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (!savedUsers) {
        window.location.href = 'index.html';
    } else {
        

    }

});
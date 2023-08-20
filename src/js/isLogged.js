function isUserAuthenticated() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    return loggedInUser !== null;
}

document.addEventListener('DOMContentLoaded', () => {
    if (!isUserAuthenticated()) {
        window.location.href = '/src/html/noAuth.html';
    } else {
        return;
    }
});

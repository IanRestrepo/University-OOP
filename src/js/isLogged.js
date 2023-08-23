function isUserAuthenticated() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    return loggedInUser !== null;
}

document.addEventListener('DOMContentLoaded', () => { // If user is'nt Authenticated then the system kick the user to the noAuth page
    if (!isUserAuthenticated()) {
        window.location.href = '/src/html/noAuth.html';
    } else {
        return;
    }
});

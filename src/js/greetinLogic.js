document.addEventListener('DOMContentLoaded', () => {
    const userNameToShowElement = document.getElementById('Header_Title-Username');
    const loggedInUserName = localStorage.getItem('loggedInUser');

    if (loggedInUserName) {
        const greetingElement = document.getElementById('Header_Title');
        const greeting = getGreeting(loggedInUserName);

        greetingElement.innerHTML = `${greeting}, <span class="Blue">${loggedInUserName}</span>.`;

        userNameToShowElement.innerHTML = `<span class="Blue">${loggedInUserName}</span>.`;
    }
});

function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    let greeting = "";

    if (hour >= 6 && hour < 12) {
        greeting = `Good morning`;
    } else if (hour >= 12 && hour < 18) {
        greeting = `Good afternoon`;
    } else {
        greeting = `Good night`;
    }

    return `${greeting}`;
}

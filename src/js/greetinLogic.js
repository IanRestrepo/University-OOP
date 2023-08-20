document.addEventListener('DOMContentLoaded', () => {
    const userNameToShowElement = document.getElementById('userNameToShow');
    const loggedInUserName = localStorage.getItem('loggedInUser');

    if (loggedInUserName) {
        const greetingElement = document.getElementById('GoodW');
        const greeting = getGreeting();
        greetingElement.textContent = `${greeting}, ${loggedInUserName}!`;
        userNameToShowElement.textContent = `${loggedInUserName}!`;
    }
});

function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    let greeting = "";

    if (hour >= 6 && hour < 12) {
        greeting = "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good night!";
    }

    return greeting;
}


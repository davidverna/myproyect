const userName = prompt('Hi!! What\'s your name?');

let greeting = `Hi!`;

if (userName) {
    // If the user puts the name completely in lower or upper case letters
    const capitalizedUserName = userName.split(' ')
    .map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    .join(' ');
    greeting = `Hi, ${capitalizedUserName}!`
}

// Inserting the greeting in index.html
const insertingGreetingFather = document.querySelector('.greeting');
const insertingGreetingChild = document.createElement('h2');
insertingGreetingChild.classList.add('centered-text');
insertingGreetingChild.textContent = greeting;
insertingGreetingFather.appendChild(insertingGreetingChild);
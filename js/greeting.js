const userName = prompt('Hi!! What\'s your name?');

// If the user puts the name completely in lower or upper case letters
const capitalizedUserName = userName.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' ');

let greeting = `Hi, ${capitalizedUserName}!`;

if (userName === null || userName === '') {
    greeting = 'Hi!';
}

// Inserting the greeting in index.html
const insertingGreetingFather = document.querySelector('.greeting');
const InsertingGreetingChild = document.createElement('H2');
InsertingGreetingChild.classList.add('centered-text');
InsertingGreetingChild.textContent = greeting;
insertingGreetingFather.appendChild(InsertingGreetingChild);
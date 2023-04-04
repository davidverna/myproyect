// Ask the user's name
const UserName = prompt('Hi!! What\'s your name?');

// The greeting
let greeting = `Hi, ${UserName}!`;

// If the user doesn't enter the name
if (UserName === null || UserName === '') {
    greeting = 'Hi!'
}

// Inserting the greeting in index.html
const insertingGreetingFather = document.querySelector('.greeting');
const InsertingGreetingChild = document.createElement('H2');
InsertingGreetingChild.classList.add('centered-text');
InsertingGreetingChild.textContent = greeting;
insertingGreetingFather.appendChild(InsertingGreetingChild);
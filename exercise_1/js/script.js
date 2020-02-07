let currentDate = document.querySelector("[data-date='currentDate']");
currentDate.innerHTML = new Date();

// 1::::
/*
There is a notification banner on the site

1. add a friendly message to the notification "notification-content"
2. add a class to make the banner green, use this class: has-background-primary from: https://bulma.io/documentation/modifiers/color-helpers/
3. you will need to create an event listener and a function to do the above work

*/


const notification = document.querySelector('.notification-content');

notification.innerHTML = "You've made a wrong turn at road 90. You're now part of Order 66.";

notification.classList.add('has-background-primary');

notification.classList.add('is-invisible');

const navBar = document.querySelectorAll('.navbar-item bar a');

const loginButton = navBar.forEach(e => e.innerHTML === 'Log in')
console.log(loginButton);
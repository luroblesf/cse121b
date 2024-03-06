/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Lucia Robles';
let currentYear = '2024';
let picture = 'images/me.jpg';
const favFoods = ['Tacos',' Pizza',' Steak',' Noodles'];

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name')
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');
const foodElement = document.querySelector('#food');

document.getElementById('food1').innerHTML = favFoods;
favFoods.push(' Fried Chicken');

document.getElementById('food2').innerHTML = favFoods;
favFoods.shift();

document.getElementById('food3').innerHTML = favFoods;
favFoods.pop();

document.getElementById('food4').innerHTML = favFoods;

/* Step 4 - Adding Content */

nameElement.innerHTML = fullName;
foodElement.innerHTML += favFoods;
yearElement.textContent = currentYear;
imageElement.setAttribute('src',profilePicture);
profilePicture.setAttribute('Profile image of [picture]')


/* Step 5 - Array */











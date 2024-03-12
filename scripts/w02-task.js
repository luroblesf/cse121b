/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Lucia Robles';
let currentYear = '2024';
let picture = 'images/me.jpg';
const favFoods = ['Tacos',' Pizza',' Steak',' Noodles'];

let another = ' Fried Chicken';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name')
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#img');
const foodElement = document.querySelector('#food');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
foodElement.innerHTML += `${favFoods}`;
favFoods.push(another);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', picture);


/* Step 5 - Array */










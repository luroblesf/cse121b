/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {

    name: 'Lucia Robles',
    photo: 'images/me.jpg',
    favoriteFoods: [
        'Tacos', 
        'Pizza',
        'Steak',
        'Noodles',
        'Fried Chicken'
    ],

    hobbies: [
        'Listening music',
        'Playing videogames',
        'Traveling',
        'Swimming'
    ],

/* Populate Profile Object with placesLive objects */
    placesLived: [
        {
            place:'Quetzaltenango, GT', 
            lenght:'30 years'
        },
        {
            place: 'Guatemala City, GT', 
            length: '18 months'
        },
        {
            place: 'San Diego, CA', 
            length: '2 months'
        },
    ]
}

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
foodList = myProfile.favoriteFoods;
for (let i = 0; i < foodList.length; i++) {
    let list = document.createElement('li');
    list.innerText = foodList[i];
    document.querySelector('#favorite-foods').appendChild(list);
}

/* Hobbies List */
hobbiesList = myProfile.hobbies;

for (let i = 0; i < hobbiesList.length; i++) {
    let list = document.createElement('li');
    list.innerText = hobbiesList[i];
    document.querySelector('#hobbies').appendChild(list);
}


/* Places Lived DataList */
let placesOut = "";
place = myProfile.placesLived
place.forEach(countPlaces)

document.getElementById("places-lived").innerHTML = placesOut;

function countPlaces(place) {
    placesOut += "<dt>" + place.place + "</dt>" + "<dd>" + place.length + " years" + "</dt>";
}
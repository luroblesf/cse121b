/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("temples");

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(
    temple => {
        let article = document.createElement('article');

        let templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;

        let location = document.createElement('h4');
        location.textContent = temple.location;

        let dedicated = document.createElement('h4');
        dedicated.textContent = temple.dedicated;

        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.templeName);

        article.appendChild(templeName);
        article.appendChild(location);
        article.appendChild(dedicated);
        article.appendChild(img);

        document.querySelector("#temples").appendChild(article);
        }
    );
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
   const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    document.querySelector("#temples").innerHTML = "";
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    const filter = document.querySelector("#filtered").value;
    switch (filter) {
    
        case "utah":
            displayTemples(
                temples.filter(temple => temple.location.includes("Utah")));
            break;

        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;

        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case "all":
            default:
                displayTemples(temples);
            break;
    }
}

getTemples();
/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList)});


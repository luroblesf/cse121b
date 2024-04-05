/* W06: Final Project */

/* Declare and initialize global variables */
const songsElement = document.querySelector("#songs");

let playList = [];


/* async displaySongs Function */
const displaySongs = (songs) => {
    songs.forEach(
    song => {
        let article = document.createElement('article');

        let songsName = document.createElement('h3');
        songsName.textContent = song.songName;

        let group = document.createElement('h4');
        group.textContent = song.artist;

        let cover = document.createElement('h4');
        cover.textContent = song.album;
          
        let img = document.createElement('img');
        img.setAttribute('src', song.imageUrl);
        img.setAttribute('alt', song.songsName);

 
        article.appendChild(img);
        article.appendChild(songsName);
        article.appendChild(group);
        article.appendChild(cover);
        document.querySelector('#songs').appendChild(article);
        }
    );
}

/* async getSongs Function using fetch()*/
const getSongs = async () => {
   const response = await fetch('https://luroblesf.github.io/cse121b/songs.json');
    playList = await response.json();
    displaySongs(playList);
};

getSongs();


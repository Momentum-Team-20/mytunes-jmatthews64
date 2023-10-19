//Grabbing all the items needed from HTML for input and output
let searchInput = document.querySelector("#searchInput");
let searchButton = document.querySelector("#searchButton");
const musicContainer = document.querySelector("#mainFrame");
const audioPlayer = document.querySelector('#audioPlayer');

searchButton.addEventListener('click', () => {
    if (searchInput == ""){
        alert("Please enter search criteria!")
    } else {
        fetch("https://itunes.apple.com/search?term=alan+jackson")
        .then((Response) => {
            return Response.json();
        }).then((data) => {
            buildDisplay(data.results);
        })
    }
    
})

function buildDisplay(results){
    for (let album of results){
        //Create a box to put each result in
        let box = document.createElement('div');
        box.classList.add("albumBox");
        musicContainer.appendChild(box);

        //add album artwork
        let albumArt = document.createElement('img');
        albumArt.src = album.artworkUrl100;
        albumArt.alt = "Album Cover";
        box.appendChild(albumArt);

        //create track name div and add to box
        let songName = document.createElement('div');
        songName.innerText = `Song: ${album.trackName}`
        songName.classList.add("nameBox")
        box.appendChild(songName);

        //create artist name div and add to box
        let artistName = document.createElement('div');
        artistName.innerText = `Artist: ${album.artistName}`;
        artistName.classList.add("nameBox")
        box.appendChild(artistName);

        //create album name div and add to box
        let albumName = document.createElement('div');
        albumName.innerText = `Album: ${album.collectionName}`;
        albumName.classList.add("nameBox")
        box.appendChild(albumName);

        //creates a play button
        let playButton = document.createElement('button');
        playButton.classList.add('playButton');
        playButton.innerText = 'Play';
        box.appendChild(playButton);

    }
}

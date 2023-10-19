//Grabbing all the items needed from HTML for input and output
let searchForm = document.querySelector("#searchBar");
let searchInput = document.querySelector("[name=searchData");
const musicContainer = document.querySelector("#mainFrame");
const audioPlayer = document.querySelector('#audioPlayer');


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (searchInput.value == ""){
        alert("Please enter search criteria!")
    } else {
        fetch("https://itunes.apple.com/search?term=" + searchInput.value)
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
        playButton.innerText = 'Play Preview';
        box.appendChild(playButton);

        //On click of playButton append audio file onto audio player
        playButton.addEventListener('click', () => {
            let figureBox = document.createElement('figure');
            let audioBox = document.createElement('audio')
            figureBox.classList.add('playerFrame');
            audioBox.setAttribute('controls', "");
            audioBox.src = album.previewUrl;
            audioPlayer.appendChild(figureBox);
            figureBox.appendChild(audioBox);
            console.log(audioPlayer);
        })
    }
}

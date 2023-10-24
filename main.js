//Grabbing all the items needed from HTML for input and output
let searchForm = document.querySelector("#searchBar");
let searchInput = document.querySelector("[name=searchData");
const musicContainer = document.querySelector("#mainFrame");
const audioPlayer = document.querySelector('#audioPlayer');
const resetButton = document.querySelector("#resetButton");
const figureBox = document.querySelector(".playerFrame");
const selectedOption = document.querySelectorAll("#searchOptions");
let searchURL;

console.log(selectedOption);
console.log(selectedOption.value);

resetButton.addEventListener('click', () => {
    location.reload();
})


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (searchInput.value == ""){
        alert("Please enter search criteria!")
    } else {
        urlBuilder(selectedOption);
        fetch(searchURL)
        .then((Response) => {
            return Response.json();
        }).then((data) => {
            if (data.resultCount === 0) {
                alert("No Results");
            } else {
                buildDisplay(data.results);
            }
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
            audioPlayer.src = album.previewUrl;
            
        })
    }
}

function urlBuilder(option) {
    console.log(option);
    switch (option) {
        case "all": searchURL = `https://itunes.apple.com/search?term=${searchInput.value}`;
            break;
        case "artist": console.log("search artist");
            break;
        case "song": console.log("search song");
            break;
        case "album": console.log("search albums");
            break;
        default: searchURL = `https://itunes.apple.com/search?term=${searchInput.value}`;
    }
}


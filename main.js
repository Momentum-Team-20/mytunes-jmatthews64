//Grabbing all the items needed from HTML for input and output
let searchForm = document.querySelector("#searchBar");
let searchInput = document.querySelector("[name=searchData");
const musicContainer = document.querySelector("#mainFrame");
const audioPlayer = document.querySelector('#audioPlayer');
const resetButton = document.querySelector("#resetButton");
const figureBox = document.querySelector(".playerFrame");
const selectedOption = document.getElementById("searchOptions");
let searchURL;

resetButton.addEventListener('click', () => {
    location.reload();
})


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (searchInput.value == ""){
        alert("Please enter search criteria!")
    } else {
        urlBuilder(selectedOption.value);
        fetch(searchURL)
        .then((Response) => {
            return Response.json();
        }).then((data) => {
            if (data.resultCount === 0) {
                alert("No Results");
            } else if(selectedOption.value === "artist") {
                buildDisplayArtist(data.results);
            } else if(selectedOption.value === "song") {
                buildDisplayAll(data.results);
            } else if (selectedOption.value === "genre") {
                buildDisplayGenre(data.results);
            } else {
                buildDisplayAll(data.results);
            } 
        })
    }
    
})

function buildDisplayAll(results){
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
    switch (option) {
        case "all": searchURL = `https://itunes.apple.com/search?term=${searchInput.value}`;
            break;
        case "artist": searchURL = `https://itunes.apple.com/search?term=${searchInput.value}&entity=allArtist&attribute=allArtistTerm`;
            break;
        case "song": searchURL = `https://itunes.apple.com/search?term=${searchInput.value}&entity=song`;
            break;
        case "genre": searchURL = `https://itunes.apple.com/search?term=${searchInput.value}&entity=allArtist&attribute=genreIndex`;
            break;
        default: searchURL = `https://itunes.apple.com/search?term=${searchInput.value}`;
    }
}

function buildDisplayArtist(results){
    for (let artist of results){
        //Create a box to put each result in
        let box = document.createElement('div');
        box.classList.add("albumBox");
        musicContainer.appendChild(box);

        //create artist name div and add to box
        let artistName = document.createElement('div');
        artistName.innerText = `Artist: ${artist.artistName}`;
        artistName.classList.add("nameBox")
        box.appendChild(artistName);

        //create genre div and add to box
        let genre = document.createElement('div');
        genre.innerText = `Genre: ${artist.primaryGenreName}`;
        genre.classList.add("nameBox")
        box.appendChild(genre);

        //creates a play button
        let playButton = document.createElement('button');
        playButton.classList.add('playButton');
        playButton.innerText = 'Artist\'s Music';
        box.appendChild(playButton);

        //On click of playButton append audio file onto audio player
        playButton.addEventListener('click', () => {
            artistURL = artist.artistLinkUrl;
            window.location.replace(artistURL);
            
        })
    }
}

function buildDisplayGenre(results){
    for (let artist of results){
        //Create a box to put each result in
        let box = document.createElement('div');
        box.classList.add("albumBox");
        musicContainer.appendChild(box);

        //create artist name div and add to box
        let artistName = document.createElement('div');
        artistName.innerText = `Artist: ${artist.artistName}`;
        artistName.classList.add("nameBox")
        box.appendChild(artistName);

        //create genre div and add to box
        let genre = document.createElement('div');
        genre.innerText = `Genre: ${artist.primaryGenreName}`;
        genre.classList.add("nameBox")
        box.appendChild(genre);

        //creates a play button
        let playButton = document.createElement('button');
        playButton.classList.add('playButton');
        playButton.innerText = 'Artist\'s Music';
        box.appendChild(playButton);

        //On click of playButton append audio file onto audio player
        playButton.addEventListener('click', () => {
            artistURL = artist.artistLinkUrl;
            window.location.replace(artistURL);
            
        })
    }
}

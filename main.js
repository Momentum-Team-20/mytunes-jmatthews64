//Grabbing all the items needed from HTML for input and output
let searchInput = document.querySelector("#searchInput");
let searchButton = document.querySelector("#searchButton");
const musicContainer = document.querySelector("#mainFrame");

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

        let albumDiv = document.createElement('div');
        albumDiv.innerText = `Song: ${album.trackName}`
        box.appendChild(albumDiv);
    }
}

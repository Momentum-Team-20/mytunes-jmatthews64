//Grabbing all the items needed from HTML for input and output
let searchInput = document.querySelector("#searchInput");
let searchButton = document.querySelector("#searchButton");
const musicContainer = document.querySelector("#mainFrame");

searchButton.addEventListener('click', () => {
    // if (searchInput == ""){
    //     alert("Please enter search criteria!")
    // } else {
        fetch("https://itunes.apple.com/search?alan+jackson")
        .then((Response) => {
            return Response.json();
        }).then((data) => {
            console.log(data);
            let album = data.results[0];
            let albumDiv = document.createElement('div');
            albumDiv.innerText = `Song: ${album.trackName}`
            musicContainer.appendChild(albumDiv);
        })
    //}
    
})


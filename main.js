//Grabbing all the items needed from HTML for input and output
let searchInput = document.querySelector("#searchInput");
let searchButton = document.querySelector("#searchButton");
const musicContainer = document.querySelector("#mainFrame");

searchButton.addEventListener('click', () => {
    if (searchInput == ""){
        alert("Please enter search criteria!")
    }
    
})


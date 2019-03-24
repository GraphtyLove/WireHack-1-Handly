// Array that store sign letters's images
const letterArray = document.querySelectorAll(".letter-images")

// store the search bar in a variable
const searchBar = document.getElementById("search-bar")

// add an event listener when the user change the value of the input
searchBar.addEventListener("input", searchFunction);
// Function associated with
function searchFunction() {
    // Check all the occurence (all letters)
    for(let i = 0; i < letterArray.length; i++){
        // if the value is equal to a letter put it on opicity one
        if(searchBar.value.toUpperCase() === letterArray[i].id){
            letterArray[i].style.display = "inline"
        }
        // if the input is empty let the opacity of all images to 1
        else if (searchBar.value === ""){
            letterArray[i].style.display = "inline"
        }
        // if the input is not equal to an id's image -> opcity on all
        else{
            letterArray[i].style.display = "none"
        }
    }
}


// add movie modal 
const modal = document.querySelector(".modal");
const addModalButton = document.querySelector("header button"); 

function modalVisibility (event) {
    event.classList.toggle("visible"); 
}



//change background when toggle add modal 
const backdrop = document.querySelector("#backdrop"); 
addModalButton.addEventListener("click", () => {modalVisibility(modal), modalVisibility(backdrop)}); 

//cancel button to remove toggle
const cancelButton = document.querySelector(".modal__actions").firstElementChild; 

cancelButton.addEventListener('click', () => {modalVisibility(modal), modalVisibility(backdrop), clearInput()});




//add button, fetching user data, store new movie 
const movie = []; 
const addButton = cancelButton.nextElementSibling; 
//arraylike object for user input
const userInput = modal.querySelectorAll("input");
const clearInput = () => {
    console.log("a");
    for (const input of userInput){
        input.value = ''; 
    }
};

const addMovieCheck = () => {
    const titleMovie = userInput[0].value;
    const imgUrl = userInput[1].value; 
    const rating = userInput[2].value; 

    if (!titleMovie.trim() || !imgUrl.trim() || !rating.trim() || rating < 1 || rating > 5){
        alert ("please enter valid input");
        modalVisibility(modal);
        modalVisibility(backdrop); 
        clearInput(); 
        return; 
    }
    
    const newMovie = {
        title: titleMovie,
        image: imgUrl, 
        rating: rating

    }; 
    movie.push(newMovie); 
    modalVisibility(modal);
    modalVisibility(backdrop); 
    clearInput(); 
    updateMovieUI();
    renderMovie(newMovie.title, newMovie.image, newMovie.rating) 

};

addButton.addEventListener('click', addMovieCheck);


//rendering movie on the screen 
const entryText = document.querySelector("#entry-text"); 
const updateMovieUI = () => {
    if (movie.length !== 0){
        entryText.style.display = 'none'; 
    }
    else{
        entryText.style.display = 'block'; 
    }
    
}

const renderMovie = (title, url, rating) => {
    const newMovie = document.createElement('li');
    console.log(url);
    newMovie.className = 'movie-element'; 
    newMovie.innerHTML = `
    <div class="movie-element__image"> 
        <img src="${url}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2> ${title} </h2>
        <p> ${rating}/5 </p> 
    </div>
    `;
    const root = document.getElementById('movie-list'); 
    root.append(newMovie); 
}


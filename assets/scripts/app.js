
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

let id = 0; 
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
        id: id++,
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
    newMovie.addEventListener('click', deleteMovie.bind(null, id));
    const root = document.getElementById('movie-list'); 
    root.append(newMovie); 
}

//delete movie
const verifiedDelete = (movieId) => {
    movie.splice(movieId-1, 1);
    const root = document.getElementById('movie-list'); 
    console.log(root.children[0]);
    root.children[movieId-1].remove(); 
    updateMovieUI(); 
    
}

const cancelDeletion = () => {
    modalVisibility(backdrop);
    deleteModal.classList.remove('visible'); 
}

const deleteModal = document.getElementById("delete-modal"); 

const deleteMovie = (movieId) => {
   
    deleteModal.classList.add('visible');
    modalVisibility(backdrop);
    backdrop.addEventListener('click', cancelDeletion); 

    //cancel deletion button
    const cancelDeletionButton = deleteModal.querySelector(".modal__actions .btn--passive");
    // cancelDeletionButton.removeEventListener('click', cancelDeletion);

    cancelDeletionButton.addEventListener('click', cancelDeletion);
    //confirm deletion button
    let confirmDeletionButton = deleteModal.querySelector(".modal__actions .btn--danger");
    // confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    // confirmDeletionButton = deleteModal.querySelector(".modal__actions .btn--danger");
    
    confirmDeletionButton.addEventListener('click', () => {cancelDeletion(), verifiedDelete(movieId)}, true);
    // verifiedDelete(); 




    // newId = movieId

}; 
// -------------------
// var newId;
// let confirmDeletionButton = deleteModal.querySelector(".modal__actions .btn--danger");
//     // confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
//     // confirmDeletionButton = deleteModal.querySelector(".modal__actions .btn--danger");
    
// confirmDeletionButton.addEventListener('click', () => {cancelDeletion(), verifiedDelete(newId)});



// both were execute, result print both a and b
// many eventhandler create equal to amount the listener would execute
// const abc = document.getElementById("abc")
// abc.addEventListener('click', () => console.log("A"));
// abc.addEventListener('click', () => console.log("b"));

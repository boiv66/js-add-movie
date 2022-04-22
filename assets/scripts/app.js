
const modal = document.querySelector(".modal");
const button = document.querySelector("header button"); 

function modalVisibility () {
    modal.classList.toggle("visible"); 
}

button.addEventListener("click", modalVisibility);  
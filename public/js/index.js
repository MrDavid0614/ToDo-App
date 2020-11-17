const logo = document.querySelector(".logo");
const cardButton = document.querySelectorAll(".card-button");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#title");
const sendButton = document.querySelector("#send-btn");
const closeButton = document.querySelector("#close-btn");

logo.addEventListener("click", () => {

    window.location.href = "/public/index.html"

});

cardButton.forEach(button => {

    button.addEventListener("click", e => {
        e.preventDefault();
        
        modal.style.display = "flex";

    })
})

window.onclick = closeModal;

closeButton.addEventListener("click", event => {

    event.preventDefault();

    setTimeout(() => {

        modal.style.display = "none"

    }, 100)

});

sendButton.addEventListener("click", () => {



})

function closeModal(event) {

    event.preventDefault();

    if (event.target == modal) {
        modal.style.display = "none";
    }
  
      modalTitle.value = "";

}
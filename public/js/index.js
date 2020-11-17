const logo = document.querySelector(".logo");
const cardButton = document.querySelectorAll(".card-button");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#title");

logo.addEventListener("click", () => {

    window.location.href = "/public/index.html"

});

cardButton.forEach(button => {

    button.addEventListener("click", e => {
        e.preventDefault();
        
        modal.style.display = "flex";

    })
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }

    modalTitle.value = "";

  }
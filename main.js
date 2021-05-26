const buttonElement = document.querySelector("#button");
const modalElement = new bootstrap.Modal(document.querySelector("#exampleModal"));

buttonElement.addEventListener("click" , event => {
    modalElement.show();
})
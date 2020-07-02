const ShareButton = document.querySelector(".container .textBox .att button")
const modal = document.querySelector("#modal")
ShareButton.addEventListener("click", () => {
    modal.classList.toggle("hide")
})
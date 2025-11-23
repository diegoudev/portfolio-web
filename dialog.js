const button = document.getElementById("enviar")
const modal = document.querySelector("dialog")
const buttonClose = document.getElementById("closedialog")

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}


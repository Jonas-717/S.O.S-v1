let link = document.getElementById("link")
let doencaPreExistente = document.getElementById("checkbox")

function mudarTelas() {
    if (doencaPreExistente.checked) {
        link.setAttribute("href", "preexistente.html")
    }
    else {
        link.setAttribute("href", "login.html")
    }
}
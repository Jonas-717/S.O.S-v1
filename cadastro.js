let link = document.getElementById("link")  //Variavel do button
let doencaPreExistente = document.getElementById("checkbox") //Variavel do checkbox

function mudarTelas(event) {
  event.preventDefault();

  if (doencaPreExistente.checked) {
    window.location.href = "registro(pre).html";
  } else {
    window.location.href = "login.html";
  }
}

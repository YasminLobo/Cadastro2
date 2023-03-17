var usuario = "astolfo"
var senha = "2023"

function login() {
    var tentativausuario = document.getElementById("usuario").value;
    var tentativasenha = document.getElementById("senha").value;

    if (tentativausuario == usuario && tentativasenha == senha) {
        alert("login correto, entrada no sistema...");
        window.location.href = "https://www.sp.senai.br/";

    } else {
        alert("senha incorreta, tenta novamente");
        window.location.href = "index.html"

    }
}
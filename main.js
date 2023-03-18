var usuario = "astolfo"
var senha = "2023"

function login() {
    var tentativausuario = document.getElementById("usuario").value;
    var tentativasenha = document.getElementById("senha").value;

    if (tentativausuario == usuario && tentativasenha == senha) {
        alert("login correto, entrada no sistema...");
        window.location.href = "https://www.jogos360.com.br/super_barbie_real_makeover.html";

    } else {
        alert("senha incorreta, tente novamente");
        window.location.href = "file:///C:/Users/lobo_/Documents/GitHub/Cadastro2/Home.html"

    }
}
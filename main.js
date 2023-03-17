function Enviar(){
    //Criacao de variável
    var nome_cliente =document.getElementById("name");

    // Validação de campos
    // != Diferente
    if(nome_cliente.value != ""){
    alert("Obrigado sr(a) " + nome_cliente.value + ", os seus dados foram salvos com sucesso!")
    }
}

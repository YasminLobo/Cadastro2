function enviar() {
    let idade = document.getElementById("idade").value;
  
    if (idade < 18) {
      alert("Você não pode comprar este ingresso");
    } else {
      alert("Aqui está o seu ingresso");
    }
  }
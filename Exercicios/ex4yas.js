
		function calcularEstacao() {
			var mesEstacao = document.getElementById("mesEstacao").value.toLowerCase();
			switch (mesEstacao) {
			    case "janeiro":
			    case "fevereiro":
			    case "março":
			        alert("Neste mês, estará na estação de Verão!");
			        break;
			    case "abril":
			    case "maio":
			    case "junho":
			        alert("Neste mês, estará na estação de Outono!");
			        break;
			    case "julho":
			    case "agosto":
			    case "setembro":
			        alert("Neste mês, estará na estação de Inverno!");
			        break;
			    case "outubro":
			    case "novembro":
			    case "dezembro":
			        alert("Neste mês, estará na estação de Primavera!");
			        break;
			    default:
			        alert("Erro de escolha");
			        break;
			}
		}
	
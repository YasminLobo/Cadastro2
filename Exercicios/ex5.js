
		function exibirDataHora() {
			var agora = new Date();
			var dia = agora.getDate();
			var mes = agora.getMonth() + 1;
			var semana = agora.getDay();
			var hora = agora.getHours();
			var minutos = agora.getMinutes();
			var segundos = agora.getSeconds();
			alert("Data: " + dia + "/" + mes + "/" + agora.getFullYear() + "\n" +
			      "Hora: " + hora + ":" + minutos + ":" + segundos + "\n" +
			      "Dia da semana: " + semana + "\n" +
			      "Mês: " + mes + "\n" +
			      "Minutos: " + minutos + "\n" +
			      "Segundos: " + segundos);
		}

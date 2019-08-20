function updateCities(event){

	var result2 = " ";
	var citiesSP = ["Sao Paulo", "Santos", "Bauru"];
	var citiesRS = ["Erechim", "Passo Fundo", "Porto Alegre"];
	var citiesSC = ["Chapeco", "Concordia", "Ita"];

	var estado = document.getElementById("states").value;
  	var cities = document.getElementById("cities");

	if (estado === "RS"){
	for (var i = 0; i < citiesRS.length; i++) {
		result2 += ("<option>"+ citiesRS[i] + "</option>"+ "<br/>")
		}
	}else if (estado === "SP"){
		for (var i = 0; i < citiesSP.length; i++) {
		result2 += ("<option>"+ citiesSP[i] + "</option>"+ "<br/>")
		}
	}else if (estado === "SC"){
		for (var i = 0; i < citiesSC.length; i++) {
		result2 += ("<option>"+ citiesSC[i] + "</option>"+ "<br/>")
		}
	}

	cities.innerHTML = result2;
}


function send(event) {
	var error = [];
	event.preventDefault();
	var name = document.getElementById("name").value;
	var estado = document.getElementById("states").value;
  	var email = document.getElementById("email").value;
  	var endereco = document.getElementById("endereco").value;
  	var cidade = document.getElementById("cities").value;
  	var bairro = document.getElementById("bairro").value;
  	var telefone = document.getElementById("telefone").value;
  	var result = document.getElementById("result");

  	if (name === "" || estado === "" || email === "" || endereco === "" || cidade === "" || bairro === "" || telefone === ""){
		alert("Preencha todos os dados")
	}else{
		alert("PARABÉNS!!!!!!!!!!!! SUCESSO NO SEU CADASTRO")
	result.innerHTML = ("Nome: " + name + "<br/>" + "Estado: " + estado + "<br/>" + "Email: " + email + "<br/>" + "Endereço: " + endereco + "<br/>" + "Cidade: " + cidade + "<br/>" + "Bairro: " + bairro + "<br/>" + "Telefone: " + telefone)
	}
}

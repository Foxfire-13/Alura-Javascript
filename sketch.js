var numeroSecreto = parseInt(Math.random() * 11);

var tentativas = 4;

function Chutar() {
	var chute = parseInt(document.getElementById('valor').value);
	var resultado = document.getElementById('resultado');

	//Usar dois == para comparar valores, apenas um = para atribuir valores

	if (chute == numeroSecreto) {
		resultado.innerHTML = 'Você acertou!';
	} else if (chute > 10 || chute < 0) {
		resultado.innerHTML = 'Você deve escrever um número entre 0 e 10';
	} else {
		resultado.innerHTML = 'Você errou! O número era ' + numeroSecreto;
	}
}

/*
-Colocar tentativas;
-Mostrar se é maior ou menor
-Colocar modo fácil, médio, díficil, hardcore
*/

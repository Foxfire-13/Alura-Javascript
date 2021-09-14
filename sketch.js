var valorEmDolar = document.getElementById('valor');

function Converter() {
	/*"document" é usado em praticamente todos os comandos relacionados com html
	"getElementById" retorna o objeto do html
	Para ter o valor da entrada usar ".value" depois da variavel*/

	valorEmDolar = parseFloat(valor.value);
	var valorEmReal = valorEmDolar * 5;

	var valorConvertido = document.getElementById('valorConvertido');

	valorConvertido.innerHTML = 'é R$ ' + valorEmReal;

	console.log(valorEmReal);
}

//converter de dolar para euro

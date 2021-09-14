var valor = document.getElementById('valor');

var moeda1 = document.getElementById('moeda1');
var moeda2 = document.getElementById('moeda2');

//Valores de conversão
var dolarParaReal = 5.23;
var dolarParaEuro = 0.85;
var euroParaReal = 6.19;

function Converter() {
	/*"document" é usado em praticamente todos os comandos relacionados com html
	"getElementById" retorna o objeto do html
	Para ter o valor da entrada usar ".value" depois da variavel*/

	var valorMoeda1 = parseFloat(valor.value);
	var valorMoeda2;

	if (moeda1.value == 'dolar') {
		if (moeda2.value == 'real') {
			valorMoeda2 = valorMoeda1 * dolarParaReal;
		} else if (moeda2.value == 'euro') {
			valorMoeda2 = valorMoeda1 * dolarParaEuro;
		}
	} else if (moeda1.value == 'euro') {
		if (moeda2.value == 'real') {
			valorMoeda2 = valorMoeda1 * euroParaReal;
		} else if (moeda2.value == 'dolar') {
			valorMoeda2 = valorMoeda1 * (1 / dolarParaEuro);
		}
	} else if (moeda1.value == 'real') {
		if (moeda2.value == 'dolar') {
			valorMoeda2 = valorMoeda1 * (1 / dolarParaReal);
		} else if (moeda2.value == 'euro') {
			valorMoeda2 = valorMoeda1 * (1 / euroParaReal);
		}
	}

	var valorConvertido = document.getElementById('valorConvertido');

	valorConvertido.innerHTML = 'é ' + valorMoeda2.toFixed(2);
}

//converter de dolar para euro

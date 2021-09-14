function Converter() {
	/*"getElementById" retorna o objeto do html
	Para ter o valor da entrada usar ".value" depois da variavel*/

	var valor = document.getElementById('valor');
	var valorSimplificado = parseFloat(valor.value);

	console.log(valorSimplificado);
}

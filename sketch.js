var listaFilmes = ['Yesterday', 'A chegada', 'Escola de Rock'];

listaFilmes.push('Harry Potter');

listaFilmes.push('Harry Potter 2');

for (var i = 0; i < listaFilmes.length; i++) {
	//Write coloca elementos de html na tela colocando a tag entre aspas
	document.write('<p>' + listaFilmes[i] + '</p>');
}

// document.write('<p>' + listaFilmes[1] + '</p>');
// document.write('<p>' + listaFilmes[2] + '</p>');

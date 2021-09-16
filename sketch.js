var listaFilmes = [
	'https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg',
	'https://i.ytimg.com/vi/WwW1nqV3pI0/movieposter_en.jpg',
	'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg',
];

for (var i = 0; i < listaFilmes.length; i++) {
	document.write('<img src=' + listaFilmes[i] + '>');
}

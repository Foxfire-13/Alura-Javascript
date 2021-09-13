//Variáveis
var notaPrimeiroBimestre = 9.421;
var notaSegundoBimestre = 7.9812;
var notaTerceiroBimestre = 4.8928301;
var notaQuartoBimestre = 2.98132;

//Média das notas
var notaFinal =
	(notaPrimeiroBimestre +
		notaSegundoBimestre +
		notaTerceiroBimestre +
		notaQuartoBimestre) /
	4;

//Escreve a nota arredondada
console.log(notaFinal.toFixed(1));

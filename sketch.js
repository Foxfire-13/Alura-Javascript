//Variáveis
var notaPrimeiroBimestre = 9.421;
var notaSegundoBimestre = 7.9812;
var notaTerceiroBimestre = 4.8928301;
var notaQuartoBimestre = 2.98132;

var notaFinal = (
	(notaPrimeiroBimestre +
		notaSegundoBimestre +
		notaTerceiroBimestre +
		notaQuartoBimestre) /
	4
).toFixed(1);

////////////////////////////////////
//Verificação de aprovação de nota//

var notaMinima = 5;

if (notaFinal >= notaMinima) {
	console.log('Você foi aprovado, sua nota foi ' + notaFinal);
} else {
	console.log('Você não foi aprovado, sua nota foi' + notaFinal);
}

/*function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	
	const soma = arr.reduce((prev, curr) => prev + curr);
	
	return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));*/
function somaNumeros(arr) {

	
	return arr.reduce(function( prev , curr){
		console.log({prev});
		console.log({curr});
		return prev + curr;

	},0);
}
	const arr = [1, 2, 4];
	console.log(somaNumeros(arr));

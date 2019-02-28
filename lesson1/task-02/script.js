window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let num = 33721,
		multiplyTotal = 1;

	while (num > 0) {
		multiplyTotal = multiplyTotal * (num % 10);
		num = Math.floor(num / 10);
	}

	console.log("Произведение чисел = " + multiplyTotal);

	console.log(multiplyTotal ** 3);
	console.log((multiplyTotal ** 3).toString().slice(0, 2));

});
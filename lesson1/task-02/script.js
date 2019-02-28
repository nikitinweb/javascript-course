window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let num = 33721,
		str;

	str = num.toString().split('').join('*');

	num = eval(str);

	console.log("Произведение чисел = " + num);

	num = num ** 3;
	str = num.toString().substr(0, 2);

	console.log(str);
});
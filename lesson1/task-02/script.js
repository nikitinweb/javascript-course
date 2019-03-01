window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let num = 33721,
		str,
		result = 1;

  str = num.toString().split('');

	for (let i = 0; i < str.length; i++) {
		result *= str[i];
	}

  console.log("Произведение чисел = " + result);

  result = result ** 3;
  str = result.toString().substr(0, 2);

  console.log(str);
});
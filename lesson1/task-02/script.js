'use strict';
let num = 33721,
	total = 1;

num = num.toString().split('');

num.forEach(item => {
	total = total * item;
});

console.log(total);

total = total ** 3;
console.log(total.toString().slice(0, 2));
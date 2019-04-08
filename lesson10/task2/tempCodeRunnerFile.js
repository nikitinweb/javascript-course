let arr = ['Петя', 'ДаШа', 'CвеТлана'];
let shortArr = arr.filter(name => { return name.length > 5 }); // Фильтрует массив

console.log(shortArr);

arr = arr.map(item => { return item.toLowerCase()}); // Возвращает измененный массив


arr.push(4);

console.log(arr.every(item => typeof (item) === 'number')); // Каждый элемент number
console.log(arr.some(item => typeof (item) === 'number')); // Если в массиве number, хоть один

let newArr = [4, 5, 4, 2, 6];
let res = newArr.reduce((sum, current) => sum + current); // sum содержит предыдущие значения, curent текущее значение
console.log(res);
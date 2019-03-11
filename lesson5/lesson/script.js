let box = document.getElementById('box'), // Получение элемента по ID
  btn = document.getElementsByTagName('button'), // Получение элементов в псевдомассив
  circle = document.getElementsByClassName('circle'), // Получение элементов по классу. Класс пишется без точки.
  heart = document.querySelectorAll('.wrapper .heart'), // Получение элементов по селектору. Указывается полность, у класса точка, у ID решетка. Работает через ForEach
  oneHeart = document.querySelector('.wrapper .heart'), // Получает первый элемент по селектору.
  wrapper = document.querySelector('.wrapper');

// Изменение CSS свойств элементов
box.style.backgroundColor = 'blue';
btn[1].style.backgroundColor = 'red';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// Простой цикл по псевдомассиву
// for (let i = 0; i < heart.length; i++) {
//   heart[i].style.backgroundColor = 'blue';
// }

// Верный цикл по псевдомассиву

// heart.forEach(function (item, i, hearts) { // (элемент, индекс, новый массив), достаточно только тех, что необходимы
//   item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'), // Создание элемента
  text = document.createTextNode('Тут был я'); // Создание текстового узла

div.classList.add('circle'); // Добавить класс

// document.body.appendChild(div); // Добавление в конец body
// wrapper.appendChild(div); // Добавление в элемент

// div.innerHTML = '<h1>Hello World!</h1>'; // Добавление содержимого элемента
div.textContent = 'Hello World!'; // Добавление текстого содержимого элемента

document.body.insertBefore(div, circle[0]); // Добавление перед элементом circle[0]
document.body.removeChild(circle[1]); // Удаление элементов из родительского элемента body
wrapper.removeChild(heart[1]); // Удаление элементов из родительского элемента wrapper

document.body.replaceChild(btn[1], circle[1]);

console.log(div);
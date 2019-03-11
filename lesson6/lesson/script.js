let btn = document.querySelectorAll('button'),
  wrap = document.querySelector('.wrapper'),
  link = document.querySelector('a');

// btn[0].onclick = function () {
//   alert('Первая кнопка');
// };

// btn[0].onclick = function () {
//   alert('Первая кнопка 2');
// };

btn[0].addEventListener('click', function (event) {
  // event.target - элемент
  // event.type - событие

  let target = event.target;
  target.style.display = 'none';

  console.log('Произошло событие: ' + event.type + ' на элементе ' + target);
});

wrap.addEventListener('click', function (event) {
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

link.addEventListener('click', function (event) {
  event.preventDefault(); // Отмена перехода по ссылке

  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

// btn[0].addEventListener('mouseenter', function() {
//   alert('Вы навели на кнопку');
// });

btn.forEach(function (item) {
  item.addEventListener('mouseleave', function () {
    console.log('Вышли');
  });
});
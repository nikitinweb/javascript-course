// let timerId = setTimeout(seyHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(seyHello, 3000);
// clearTimeout(timerId);

// function seyHello() {
// 	console.log('Hello world!');
// }

// let timerId = setTimeout(function log() {
// 	console.log("Hello");
// 	setTimeout(log, 2000); // Рекурсивный вызов setTimeout
// })

let btn = document.querySelector('.btn'),
  elem = document.querySelector('.box');

function myAnimation() {
  let pos = 0;

  let id = setInterval(frame, 10);

  function frame() {
  console.log('click');
    if (pos == 250) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);


let btnBlock = document.querySelector('.items'),
  btns = document.getElementsByClassName('button');

// btnBlock.addEventListener('click', function (event) {
//   if (event.target && event.target.tagName == 'BUTTON') {
//     console.log('Hello');
//   }
// });

// btnBlock.addEventListener('click', function (event) {
//   if (event.target && event.target.classList.contains('first')) {
//     console.log('Hello');
//   }
// });

btnBlock.addEventListener('click', function (event) {
  if (event.target && event.target.matches('button.first')) {
    console.log('Hello');
  }
});
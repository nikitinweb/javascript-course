let menu = document.querySelector('.menu'),
  menuItems = document.querySelectorAll('.menu-item'),
  title = document.querySelector('#title'),
  adv = document.querySelector('.adv'),
  itemReplace,
  ask = prompt('Как ты относишься к технике Apple?', 'Советую'),
  responseBlock = document.querySelector('#prompt'),
  lastItem = document.createElement('li');


itemReplace = menu.replaceChild(menuItems[2], menuItems[1]);
lastItem.classList.add('menu-item');
lastItem.textContent = 'Пятый элемент';

menu.insertBefore(itemReplace, menuItems[3]);
menu.appendChild(lastItem);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

responseBlock.textContent = ask;
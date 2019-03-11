let menu = document.querySelector('.menu'),
  menuItems = document.querySelectorAll('.menu-item'),
  title = document.querySelector('#title'),
  adv = document.querySelector('.adv'),
  itemReplace,
  ask = prompt('Как ты относишься к технике Apple?', 'Советую'),
  responseBlock = document.querySelector('#prompt');


itemReplace = menu.replaceChild(menuItems[2], menuItems[1]);
menu.insertBefore(itemReplace, menuItems[3]);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

responseBlock.textContent = ask;
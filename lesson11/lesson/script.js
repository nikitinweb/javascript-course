// let options = {
// 	width: 1366,
// 	height: 768,
// 	background: 'red',
// 	font: {
// 		size: '16px',
// 		color: '#fff'
// 	}
// };

// Преобразование объекта в JSON - JSON.stringify
// Преобразование JSON в объект - JSON.parse

// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById('rub'),
  inputUSD = document.getElementById('usd');

inputRub.addEventListener('input', () => {
  let request = new XMLHttpRequest(); // Объект Ajax запроса

  // request.open(method, url, async, login, pass);
  request.open('GET', 'current.json'); // Метод, и путь запроса
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // Кодировка
  // request.send(body); // Отправляем из клиентской на сервер
  request.send();

  // Методы:
  // status
  // statusText
  // responseText / response
  // readyState - состояние запроса, всего 5 значений

  // События:
  request.addEventListener('readystatechange', () => { // изменение состояние запроса
    if (request.readyState === 4 && request.status == 200) { // статус done, ответ 200
      let data = JSON.parse(request.response); // Конвертируем ответ в объект

      inputUSD.value = inputRub.value / data.usd; // Замена значения во втором поле
    } else {
      inputUSD.value = "Что-то пошло не так!";
    }
	});
});
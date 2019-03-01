window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let money = +prompt("Ваш бюджет на месяц?", 10000),
    time = prompt("Введите дату в формате YYYY-MM-DD", "1990-01-01"),
    numberDay = 30,
    appData = {
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses: {},
      income: 0,
      savings: false
    };

  for (let i = 0; i < 2; i++) {
    let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "Налоги"),
      expensesTotal = +prompt("Во сколько обойдется", 3000);

    if ((typeof (expensesName)) === 'string' && (typeof (expensesName)) != null && (typeof (expensesTotal)) === 'number' && (typeof (expensesTotal)) != null && expensesName != '' && expensesTotal != '') {
      appData.expenses[expensesName] = expensesTotal;
    } else {
      i--;
      alert('Поля заполнены не правильно. Попробуйте еще раз');
      continue;
    }
  }

  // Цикл while
  // let expensesNum = 0;

  // while (expensesNum < 2) {
  //   let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "Налоги"),
  //     expensesTotal = +prompt("Во сколько обойдется", 3000);

  //   if ((typeof (expensesName)) === 'string' && (typeof (expensesName)) != null && (typeof (expensesTotal)) === 'number' && (typeof (expensesTotal)) != null && expensesName != '' && expensesTotal != '') {
  //     appData.expenses[expensesName] = expensesTotal;
  //     expensesNum++;
  //   } else {
  //     alert('Поля заполнены не правильно. Попробуйте еще раз');
  //     continue;
  //   }
  // }


  // Цикл do while
  // let expensesNum = 0;

  // do {
  //   let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "Налоги"),
  //     expensesTotal = +prompt("Во сколько обойдется", 3000);

  //   if ((typeof (expensesName)) === 'string' && (typeof (expensesName)) != null && (typeof (expensesTotal)) === 'number' && (typeof (expensesTotal)) != null && expensesName != '' && expensesTotal != '') {
  //     appData.expenses[expensesName] = expensesTotal;
  //     expensesNum++;
  //   } else {
  //     alert('Поля заполнены не правильно. Попробуйте еще раз');
  //     continue;
  //   }
  // } while (expensesNum < 2);

  appData.moneyPerDay = Math.floor(appData.budget / numberDay);

  alert("Бюджет на день: " + appData.moneyPerDay + " руб");

  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Произошла ошибка');
  }
});
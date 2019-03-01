window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let money = +prompt("Ваш бюджет на месяц?", 10000),
    time = prompt("Введите дату в формате YYYY-MM-DD", "1990-01-01"),
    numberDay = 30,
    appData = {
      budjet: money,
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

    }
  }

  appData.moneyPerDay = Math.floor(appData.budjet / numberDay);

  alert("Бюджет на день: " + appData.moneyPerDay + " руб");
});
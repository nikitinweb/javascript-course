window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let money = +prompt("Ваш бюджет на месяц?", 10000),
    time = prompt("Введите дату в формате YYYY-MM-DD", "1990-01-01"),
    numberDay = 30,
    appData = {
      moneyData: money,
      timeData: time,
      expenses: {},
      optionalExpenses: {},
      income: 0,
      savings: false
    };

  for (let i = 0; i < 2; i++) {
    let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "Налоги"),
      expensesTotal = +prompt("Во сколько обойдется", 3000);

		appData.expenses[expensesName] = expensesTotal;
  }

	console.log(appData.expenses);
  alert("Бюджет на день: " + Math.floor(money / numberDay) + " руб");
});
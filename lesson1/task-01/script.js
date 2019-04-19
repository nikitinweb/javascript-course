'use strict';
let money = +prompt('Ваш бюджет на месяц?', 10000),
  time = prompt('Введите дату в формате YYYY-MM-DD', '2019-06-12'),
  dayCount = 30;

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце', 'Квартплата'),
    b = prompt('Во сколько обойдется?', 13000);

  appData.expenses[a] = b;
}

alert('Бюджет на 1 день: ' + Math.floor(appData.budget / dayCount) + " руб");

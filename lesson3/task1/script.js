window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let money, time;

  function start() {
    money = +prompt("Ваш бюджет на месяц?", 10000);
    time = prompt("Введите дату в формате YYYY-MM-DD", "1990-01-01");

    while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", 10000);
    }
  }
  start();

  let numberDay = 30,
    appData = {
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses: {},
      income: 0,
      savings: true
    };

  function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
      let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "Налоги"),
        expensesTotal = +prompt("Во сколько обойдется", 3000);

      if ((typeof (expensesName)) === "string" && (typeof (expensesName)) != null && (typeof (expensesTotal)) === "number" && (typeof (expensesTotal)) != null && expensesName != "" && expensesTotal != "") {
        appData.expenses[expensesName] = expensesTotal;
      } else {
        i--;
        alert("Поля заполнены не правильно. Попробуйте еще раз");
        continue;
      }
    }
  }
  chooseExpenses();

  function chooseOptExpenses(count) {
    for (let i = 0; i < count; i++) {
      let expensesName = prompt("Введите дополнительную статью расходов в этом месяце", "Книги"),
        expensesTotal = +prompt("Во сколько обойдется", 1000);

      if ((typeof (expensesName)) === "string" && (typeof (expensesName)) != null && (typeof (expensesTotal)) === "number" && (typeof (expensesTotal)) != null && expensesName != "" && expensesTotal != "") {
        appData.optionalExpenses[expensesName] = expensesTotal;
      } else {
        i--;
        alert("Поля заполнены не правильно. Попробуйте еще раз");
        continue;
      }
    }
  }
  chooseOptExpenses(3);

  function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / numberDay).toFixed();
    alert("Бюджет на день: " + appData.moneyPerDay + " руб");
  }
  detectDayBudget();

  function detectLevel() {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  }
  detectLevel();

  function checkSavings() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?", 10000),
        persent = +prompt("Под какой процент?", 6);

      appData.monthIncome = save / 100 / 12 * persent;
      alert("Доход в месяц с вашего депозита " + appData.monthIncome);
    }
  }
  checkSavings();
});
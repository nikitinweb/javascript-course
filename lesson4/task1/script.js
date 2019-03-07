window.addEventListener('DOMContentLoaded', () => {
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
      savings: true,
      chooseExpenses: function () {
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
      },
      detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / numberDay).toFixed();
        alert("Бюджет на день: " + appData.moneyPerDay + " руб");
      },
      detectLevel: function () {
        if (appData.moneyPerDay < 100) {
          console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
          console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
          console.log("Высокий уровень достатка");
        } else {
          console.log("Произошла ошибка");
        }
      },
      checkSavings: function () {
        if (appData.savings == true) {
          let save = +prompt("Какова сумма накоплений?", 10000),
            persent = +prompt("Под какой процент?", 6);

          appData.monthIncome = save / 100 / 12 * persent;
          alert("Доход в месяц с вашего депозита " + appData.monthIncome);
        }
      },
      chooseOptExpenses: function (count) {
        for (let i = 1; i <= count; i++) {
          let expensesName = prompt("Введите дополнительную статью расходов в этом месяце", "Книги");

          if ((typeof (expensesName)) === "string" && (typeof (expensesName)) != null && expensesName != "") {
            appData.optionalExpenses[i] = expensesName;
          } else {
            i--;
            alert("Поля заполнены не правильно. Попробуйте еще раз");
            continue;
          }
        }
      },
      chooseIncome: function () {
        let items;

        while ((typeof (items)) !== "string" || (typeof (items)) == null || items == "") {
          items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "Ставки, казино");
        }

        appData.income = items.split(', ');

        items = prompt("Может что-то еще?", "");
        if ((typeof (items)) === "string" && (typeof (items)) != null && items != "") {
          appData.income.push(items.split(', '));
        }

        appData.income.sort();

        if (appData.income.length > 0) {
          let str = "Способы доп. заработка:";

          appData.income.forEach(function (item, i) {
            str += "<p>" + (i + 1) + ". " + item + "<p>";
          });
          document.write(str);
        } else {
          alert("Способов доп. заработка нет.");
        }
      },
      viewData: function () {
        console.log("Наша программа включает в себя данные:");
        for (let key in appData) {
          console.log(key + " : " + appData[key]);
        }
      }
    };
  appData.chooseIncome();
  appData.viewData();

});
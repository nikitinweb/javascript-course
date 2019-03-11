let startBtn = document.querySelector('#start'),
  budgetValue = document.querySelector('.budget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthSavingsValue = document.querySelector('.monthsavings-value'),
  yearSavingsValue = document.querySelector('.yearsavings-value'),
  expensesItem = document.querySelectorAll('.expenses-item'),
  button = document.getElementsByTagName('button'),
  expensesItemBtn = button[0],
  optionalExpensesBtn = button[1],
  countBudgetBtn = button[2],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  chooseIncome = document.querySelector('#income'),
  chooseSavings = document.querySelector('#savings'),
  chooseSum = document.querySelector('#sum'),
  choosePercent = document.querySelector('#percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function () {
  time = prompt("Введите дату в формате YYYY-MM-DD", "1990-01-01");
  money = +prompt("Ваш бюджет на месяц?", 10000);

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", 10000);
  }

  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();

  time = new Date(Date.parse(time)); // Преобразование даты
  yearValue.value = time.getFullYear();
  monthValue.value = time.getMonth() + 1;
  dayValue.value = time.getDate();
});

expensesItemBtn.addEventListener('click', function () {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value;
    let b = +expensesItem[++i].value;



    if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) === "number" && (typeof (b)) != null && a != "" && b != "") {
      appData.expenses[a] = b;
      sum += b;
    } else {
      alert("Поля заполнены не правильно. Попробуйте еще раз");
      break;
    }
  }
  expensesValue.textContent = sum;
});

let numberDay = 30,
  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: 0,
    savings: true,
    chooseExpenses: function () {

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
        let a = prompt("Введите дополнительную статью расходов в этом месяце", "Книги");

        if ((typeof (a)) === "string" && (typeof (a)) != null && a != "") {
          appData.optionalExpenses[i] = a;
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

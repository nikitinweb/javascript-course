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
  dayValue = document.querySelector('.day-value'),
  dayBudgetValue = document.querySelector('.daybudget-value');

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

optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let a = optionalExpensesItem[i].value;

    if ((typeof (a)) === "string" && (typeof (a)) != null && a != "") {
      appData.optionalExpenses[i] = a;
      optionalExpensesValue.textContent += a + ' ';
    } else {
      alert("Поля заполнены не правильно. Попробуйте еще раз");
      break;
    }
  }
});

countBudgetBtn.addEventListener('click', function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / numberDay).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  }
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
    detectDayBudget: function () {},
    detectLevel: function () {

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
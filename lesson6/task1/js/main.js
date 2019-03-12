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
  } else {
    dayBudgetValue.textContent = "Произошла ошибка";
  }
});

chooseIncome.addEventListener('input', function () {
  let items = chooseIncome.value;

  appData.income = items.split(', ');

  appData.income.sort();

  incomeValue.textContent = appData.income;
});

chooseSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }

  console.log(sum, percent);
});

choosePercent.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let numberDay = 30,
  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: 0,
    savings: false
  };